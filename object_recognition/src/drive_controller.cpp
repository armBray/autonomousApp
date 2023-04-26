#include <geometry_msgs/PoseStamped.h>
#include <ros/ros.h>
#include <tf/transform_broadcaster.h>

tf::Transform transform;
tf::Quaternion q;

void pose_callback(const geometry_msgs::PoseStampedPtr &pose) {
  static tf::TransformBroadcaster br;
  q.setX(pose->pose.orientation.x);
  q.setY(pose->pose.orientation.y);
  q.setZ(pose->pose.orientation.z);
  q.setW(pose->pose.orientation.w);
  ROS_INFO("trasforming...");
  transform.setOrigin(
      tf::Vector3(pose->pose.position.x, pose->pose.position.y, 0.0));
  transform.setRotation(q);
  ROS_INFO("...trasformed");
  ROS_INFO("sending...");

  br.sendTransform(
      tf::StampedTransform(transform, ros::Time::now(), "odom", "base_link"));
  ROS_INFO("...sent");
}

int main(int argc, char **argv) {
  ros::init(argc, argv, "drive_controller");
  ros::NodeHandle n("~");
  ros::Subscriber pose_sub = n.subscribe("/pose", 1, pose_callback);
  ros::Rate loop_rate(100);
  while (ros::ok()) {
    ros::spinOnce();
    loop_rate.sleep();
  }
}