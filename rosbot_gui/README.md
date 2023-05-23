create connection with rosbridge

# Create a virtual envirovment for Python 3
```
cd ~
virtualenv venv --python=python3
source venv/bin/activate
which python
```

# Run the webserver for static pages in python virtual enviroment
```
cd rosbot_gui
python -m http.server
```
go to browser and digit > localhost:8000

# Find your public ip
```
dig +short myip.opendns.com @resolver1.opendns.com
```

# Run ROSBridge Websocket
```
sudo apt-get install ros-noetic-rosbridge-suite
roslaunch rosbridge_server rosbridge_websocket.launch
```
go to browser and digit > localhost:9090
