create connection with rosbridge

# Create a virtual envirovment for Python 3
```
cd ~
virtualenv venv --python=python3
source venv/bin/activate
which python
```

# Run the webserver for static pages in python virtual enviroment
this allow to coenct the static page to rosbridge
```
cd rosbot_gui
python -m http.server 8050 <> dafault port is 8000; not choose 8080 otherwise we need oot permission!
```
different ways to access to the service:
- go to local browser and digit > localhost:8050
- from different device connected to same network digit > privateip:8050
- from different device connected to different network digit > publicip:8050 <> for this option you need to configure the router that is hosting the service for a port forwarding (https://portforward.com/router.htm#T or your router website - 192.168.1.1)

# Find your ip
Private:
```
hostname -I
```
Public:
```
dig +short txt ch whoami.cloudflare @1.0.0.1
```
or visit https://whatismyipaddress.com/

# Run ROSBridge Websocket
```
sudo apt-get install ros-noetic-rosbridge-suite
roslaunch rosbridge_server rosbridge_websocket.launch
```
go to browser and digit > localhost:9098
