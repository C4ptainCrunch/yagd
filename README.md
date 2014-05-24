# YAGD : Yet Another Graphite Dashboad

`yagd` is a graphite dashboad made with Cubism.js.

It's goals are : 

* No database (you won't need Elasticsearch or even SQLite)
* No server-side processing (no Python, Ruby or PHP, only plain static files)
* Light, even with large datasets (i don't want a lag when lokking at my yearly graphs)
* Not only cosmetic, I want some numbers, not only nice curves

## Screenshot
![screenshot](https://raw.githubusercontent.com/C4ptainCrunch/Yagd/master/screenshot.png)

## Installation
Just clone the repo anywhere in your webserver root.

## Configuration
Copy `dashboards/my_dashboard.example.js` to `dashboards/x.js` where `x` is the name of your dashboard. Then edit this file.

## Config values
* `title` is the main title of your dashboard.
* `url` is the root url of your graphite server (without a `/` at the end)
* `dashboards` : TBD 

## Usage 
Go to the url of the repo (eg. `http://yoursever/yagd/index.html`) and add `?dashboard=x` to the url where `x` is the filename of your dashboard minus the `.js` extension. You're done.

Wanna see more data ? add `l&compression=x` where `x` is the factor you want to "squeeze" your data.

## License

The MIT License (MIT)

Copyright (c) 2014 Nikita Marchant <nikita.marchant@gmail.com>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
