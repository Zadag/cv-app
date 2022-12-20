import React from "react";
import styles from "./ResumePreview.module.css";

class ResumePreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.resume_preview}>
        <div className={styles.personal_info}>
          <h1 className={styles.resume_name}>Samuel Jackson</h1>
          <div className={styles.user_details_container}>
            <div className={styles.user_detail}>
              <p>518-473-8744</p>
            </div>
            <div className={styles.user_detail}>
              <p>kb3youknow@gmail.com</p>
            </div>
            <div className={styles.user_detail}>
              <p>Albany NY</p>
            </div>
          </div>
        </div>
        <div className={styles.line_break}></div>
      </div>
    );
  }
}

export default ResumePreview;
