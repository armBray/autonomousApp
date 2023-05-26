#!/bin/bash

# just print this out
echo "Hello ROS world"
# alias works normally but not here -> try with function
# alias varlog="rospack find rosbot_gui_bridge"
# cd $(varlog)/gui/rosbot-gui

function varlog() {
    rospack find rosbot_gui_bridge
}
varlog
# (cd $(varlog)/gui/rosbot-gui;npm start)
# or
(cd $(varlog)/gui/rosbot-gui && npm start)
# npm start

# exit gracefully by returning a status 
exit 0