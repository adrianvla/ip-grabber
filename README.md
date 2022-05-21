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



