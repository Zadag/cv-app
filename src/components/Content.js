import styles from "./Content.module.css";
import React from "react";
import UserInfo from "./UserInfo";
import ResumePreview from "./ResumePreview";

class Content extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className={styles.main_content}>
        <UserInfo />
        <ResumePreview />
      </section>
    );
  }
}

export default Content;
