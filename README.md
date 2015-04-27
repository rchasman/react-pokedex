# React Pokedex

Proof of concept for reactive autocomplete data visualizations.

Also a chance to putz around with React and emerging tech I'm interested in
learning.

## Prerequisites

You need [Leiningen][1] 1.7.0 or above installed.

[1]: https://github.com/technomancy/leiningen

You need Python 2.6 or Python 3.0 installed.

## Easy Running

    make start

## Fine-Grained Running

First populate the sqlite database with data needed to run:

    python populate.py

To start a web server for the application, run:

    lein ring server

## License

The MIT License (MIT)

Copyright (c) 2014 Roey D. Chasman

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

