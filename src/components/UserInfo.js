import React from "react";
import styles from "./UserInfo.module.css";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.user_input}></div>;
  }
}

export default UserInfo;
