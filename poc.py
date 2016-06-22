from html.parser import HTMLParser
import re

# TEMP
import os
os.chdir('koken-default-install/storage/themes/repertoire-fa8a5d39-01a5-dfd6-92ff-65a22af5d5ac/')

data = {'featured_albums': [{'album': {'title': 'MON ALBUM 1'}}, {'album': {'title': 'MON ALBUM 2'}}]}
settings = {'settings': {'index_layout': 'one'}, 'site': {'title': 'MON SITE'}}

class LensParser(HTMLParser):
    def __init__(self, data, settings, *args, **kwargs):
        self.output = ""

        self.record_loop = False
        self.saved_loop = ""

        self.stack = [data]
        self.settings = settings

        super(LensParser, self).__init__(*args, **kwargs)

    def handle_starttag(self, tag, attrs):
        if self.record_loop:
            self.saved_loop += self.get_starttag_text()

        elif tag == 'koken:asset':
            self.output += self._koken_asset(dict(attrs))

        elif tag == 'koken:covers':
            # TODO: Load current album from stack
            covers = [{'index': 0, 'content': {'presets': {'medium_large': {'cropped': {'url': "TEST URL"}}}}}]
            self.stack.append(covers)

        elif tag == 'koken:include':
            self.output += self._koken_include(dict(attrs))

        elif tag == 'koken:load':
            data = self.stack[-1].get(dict(attrs)['source'])
            self.stack.append(data)

        elif tag == 'koken:loop':
            self.record_loop = True

        elif tag == 'koken:link':
            self.output += self._koken_link(dict(attrs))

        elif tag == 'koken:shift'
            data = self.stack[-1][0]
            self.stack.append(data)

        elif tag == 'koken:meta':
            self.output += self._koken_meta(dict(attrs))

        elif tag == 'koken:title':
            self.output += self._koken_title(dict(attrs))

        else:
            # TODO: Interpolate
            self.output += self.get_starttag_text()

    def handle_endtag(self, tag):
        if tag == 'koken:loop':
            # TODO: Track loop nesting level to handle nested loops
            print('---- LOOP IN ----')
            for data in self.stack[-1]:
                parser = LensParser(data, self.settings)
                parser.feed(self.saved_loop)
                self.output += parser.output
            print('---- LOOP OUT ----')
            self.record_loop = False
            self.saved_loop = ""

        elif self.record_loop:
            self.saved_loop += "</%(tag)s>" % locals()

        elif tag == 'koken:covers':
            self.stack.pop()

        elif tag == 'koken:load':
            self.stack.pop()

        elif tag == 'koken:shift':
            self.stack.pop()

    def handle_data(self, data):
        if self.record_loop:
            self.saved_loop += data
        else:
            self.output += self.interpolate_string(self.settings, data)

    def _koken_asset(self, args):
        # TODO: Handle js/img/... based on ext.
        path = args['file']
        if args.get('common'):
            # TODO
            path = '../../../app/site/themes/common/css/' + path
        return "<link href=\"%(path)s\" type=\"text/css\" rel=\"stylesheet\" />" % locals()

    def _koken_include(self, args):
        path = self.interpolate_string(self.settings, args['file'])

        with open(path, 'r') as _file:
            data = _file.read()

        parser = LensParser(self.stack[0], self.settings)
        parser.feed(data)
        return parser.output

    def _koken_link(self, args):
        # TODO
        args['title'] = self.interpolate_string(self.stack[-1], args['title'])
        return "<a href=\"http://koken.me\">%(title)s</a>" % args

    def _koken_meta(self, args):
        # TODO: http://help.koken.me/customer/en/portal/articles/828690-lens-tags#kokenmeta
        return "<meta charset=\"utf-8\">"

    def _koken_title(self, args):
        # TODO: http://help.koken.me/customer/en/portal/articles/828690-lens-tags#kokentitle
        return "<title>TITLE TODO</title>"

    @staticmethod
    def value_for_variable(context, path):
        value = context
        for key in path.split("."):
            value = value.get(key, {})
        if value == {}:
            value = path
        return str(value)

    @staticmethod
    def interpolate_string(context, string):
        # Extract variables from string
        # => [' settings.index_layout ']
        variables = re.findall(r"{{(.+)}}", string)

        # Map variables to values and replace in string
        # => 'inc/index-layout-my_value.html'
        for variable in variables:
            value = LensParser.value_for_variable(context, variable.strip())
            regex = r"{{%(variable)s}}" % locals()
            string = re.sub(regex, value, string)

        return string

parser = LensParser(data, settings)

# with open('inc/index-layout-one.html', 'r') as _file:
with open("index.lens", "r") as _file:
    data = _file.read()

parser.feed(data)

with open("index.html", "w") as _file:
    _file.write(parser.output)
