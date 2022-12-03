import React from "react";
import styles from "./UserInfo.module.css";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <form className={styles.user_input}> </form>;
  }
}

export default UserInfo;
