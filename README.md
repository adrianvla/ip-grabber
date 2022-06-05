# Ip-grabber

I wrote this little ip grabber. <br>
How it works:

<ul>
<li>Logs the ip address in the console</li>
<li>Responds to the client with a pixel image</li>
</ul>

## Depencies

<ul>
<li>http</li>
<li>canvas</li>
<li>path</li>
</ul>


## Tutorial

Run the file by writing in the console
```sh
node main.js
```




After that, a server will listen on <span style="font-family: Monospace">http://localhost</span>

If you want the server to respond with a normal transparent pixel, make a GET request to <span style="font-family: Monospace">http://localhost/pixel/default</span>

If you want the server to respond with a colored transparent pixel,ex. with a color of #f0ff0f,  make a GET request to <span style="font-family: Monospace">http://localhost/pixel/set/f0ff0f</span>

If you want to make a whatsapp embed that will show you your ip address, make a GET request to <span style="font-family: Monospace">http://localhost</span>


### Use ngrok or another port forwarder (on port 80 http) to grab someone's ip

Use only for educational purposes.


### By using, downloading, adapting in any shape or form this project, you agree to The MIT License (MIT) . This work is licensed under the same license.
Copyright © 2022 Adrian Vlasov

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
