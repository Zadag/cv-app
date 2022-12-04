import React from "react";
import FormSection from "./FormSection";
import styles from "./UserInfo.module.css";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className={styles.user_input}>
        <FormSection />
        <FormSection />
      </form>
    );
  }
}

export default UserInfo;
