# image_pkg

## package required (inside workspace):
- rosbot_ros package at https://github.com/husarion/rosbot_ros/tree/noetic

## package to install (sudo apt-get install):
- teleop-twist-keyboard
- find-object-2d
- usb-cam
- camera-calibration
- camera-info-manager

## description:
A - save an image retreived from the camera mounted on the rosbot in simulation mode\
B - teaching objects recognition with find_object_2d package\
C - objects recognition with find_object_2d package\
D - objects following

## usage:
**A** 
### Terminal 1
```
roslaunch image_pkg image_saver.launch use_gazebo:=true
```
**B**
### Terminal 1
```
roslaunch image_pkg camera_recognition.launch use_gazebo:=true teach:=true
```

**C**
### Terminal 1
```
roslaunch image_pkg camera_recognition.launch use_gazebo:=true 
```
### Terminal 2
```
rostopic echo /objects
```

**D**
### Terminal 1
```
roslaunch image_pkg camera_recognition.launch use_gazebo:=true rviz:=true
```
### Terminal 2
```
rosrun image_pkg follow_image
```