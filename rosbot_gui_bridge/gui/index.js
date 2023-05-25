/** This is a plan javascript that allows to communicate with ROS
 *  thanks to the roslibjs and rosbridge_server packages.
 *  You can find more on:
 *  - https://wiki.ros.org/rosbridge_suite/
 *  - https://github.com/RobotWebTools/roslibjs
 */

var ros = new ROSLIB.Ros({
  url: "ws://localhost:9097", /* rosbridge url */
});
// or
// var ros = new ROSLIB.Ros();
// ros.connect('ws://localhost:9098');

ros.on("connection", function () {
  console.log("Connected to websocket server.");
});
ros.on("error", function () {
  console.log("Error connecting to websocket server: ", error);
});
ros.on("close", function () {
  console.log("Connection to websocket server closed.");
});

// Publishing a Topic
// roslaunch rosbot_bringup rosbot_rviz.launch
//-------------------
var cmdVel = new ROSLIB.Topic({
  ros: ros,
  name: "/cmd_vel",
  messageType: "geometry_msgs/Twist",
});

var twist = new ROSLIB.Message({
  linear: {
    x: 0.0,
    y: 0.0,
    z: 0.0,
  },
  angular: {
    x: 0.3,
    y: 0.0,
    z: 0.0,
  },
});

console.log("Publishing cmd_vel");
console.log(twist);
cmdVel.publish(twist);

// Subcribing a Topic
//-------------------
var listener = new ROSLIB.Topic({
  ros: ros,
  name: "/scan",
  messageType: "sensor_msgs/LaserScan",
});

// listener.subscribe(function (message) {
//   console.log(`Received message on ${listener.name}: ${message.ranges}`);
//   listener.unsubscribe();
// });

// Calling a Service
// rosrun rospy_tutorials add_two_ints_server
//-------------------
var addTwoIntsClient = new ROSLIB.Service({
  ros: ros,
  name: "/add_two_ints",
  messageType: "rospy_tutorials/AddTwoInts",
});

var request = new ROSLIB.ServiceRequest({
  a: 1,
  b: 2,
});

// addTwoIntsClient.callService(request, function (result) {
//   console.log(
//     `Result for service call on ${addTwoIntsClient.name}: ${result.sum}`
//   );
// });

// Getting and setting a param value
//-------------------
ros.getParams(function (params) {
  console.log("Parameters:");
  console.log(params);
});

var maxVely = new ROSLIB.Param({
  ros: ros,
  name: "max_vel_y",
});


// maxVely.set(0.8);
// setTimeout(() => { console.log("Timeout finished!"); }, 1000); /**need to set a delay due to lag between set and get */
// maxVely.get(function (value) {
//     console.log('setting max_vel_y to:');
//     console.log(`MAX VAL: ${value}`);
// });
function setMaxVely() {
    return new Promise( (resolve, reject) => {        
        console.log('Setting maxVely...')
        maxVely.set(0.8)
        setTimeout(() => {
            resolve(
                maxVely.get(function (value) {
                    console.log(`settled max_vel_y to: ${value}`);
                })
            )
        }, 1000) // wait delay and then execute body
    })   
}
    
async function setMax(){
    const data = await setMaxVely();
}

setMax()

window.addEventListener("keydown", (event) => {
    if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
    }

    // console.log(`Code of key detected: ${event.key} - code: ${event.code}`);
    
    switch (event.key) {
    case "Down": // IE/Edge specific value
    case "ArrowDown":
        // Do something for "down arrow" key press.
        console.log('Down Arrow Pressed!');
        
        break;
    case "Up": // IE/Edge specific value
    case "ArrowUp":
        // Do something for "up arrow" key press.
        console.log('Up Arrow Pressed!');
        break;
    case "Left": // IE/Edge specific value
    case "ArrowLeft":
        // Do something for "left arrow" key press.
        console.log('Left Arrow Pressed!');
        break;
    case "Right": // IE/Edge specific value
    case "ArrowRight":
        // Do something for "right arrow" key press.
        console.log('Right Arrow Pressed!');
        break;
    case "Enter":
        // Do something for "enter" or "return" key press.
        console.log('Enter Pressed!');
        break;
    case "Esc": // IE/Edge specific value
    case "Escape":
        // Do something for "esc" key press.
        console.log('Esc Pressed!');
        break;
    default:
        return; // Quit when this doesn't handle the key event.
    }

    // Cancel the default action to avoid it being handled twice
    event.preventDefault();
    },
    true
);