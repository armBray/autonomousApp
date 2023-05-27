import logo from './images/rosbot_icon.png';
import img_github from './images/github.svg';
import * as ROSLIB from 'roslib'
import './App.css';

function App() {

  var ros = new ROSLIB.Ros({
    url: "ws://localhost:9097", /* rosbridge url */
  });


  ros.on("connection", function () {
    console.log("Connected to websocket server.");
  });
  ros.on("error", function (error) {
    console.log("Error connecting to websocket server: ", error);
  });
  ros.on("close", function () {
    console.log("Connection to websocket server closed.");
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p className="title">
          Welcome to the <b>autonoomusApp</b>!
        </p>
        <p>Click on the Rosbot to Get Started!</p>
        <div className="footer">
            <button className="btn-form" >
              Form
            </button>
            <a
              className="App-link"
              href="https://github.com/armBray/autonomousApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img className="img-github" src={img_github} alt="img-github" />
            </a>
        </div>
        <div className="description" >
          <p> This application is developed and mantained by aBray. </p>
          <p> For more information click the github icon or fill in the form. </p>
        </div>
      </header>
    </div>
  );
}

export default App;
