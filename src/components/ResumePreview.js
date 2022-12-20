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
          <h1 className={styles.resume_name}>
            {this.props.contactValues.name}
          </h1>
          <div className={styles.user_details_container}>
            <div className={styles.user_detail}>
              <p>{this.props.contactValues.phoneNumber}</p>
            </div>
            <div className={styles.user_detail}>
              <p>{this.props.contactValues.email}</p>
            </div>
            <div className={styles.user_detail}>
              <p>{this.props.contactValues.location}</p>
            </div>
          </div>
        </div>
        <div className={styles.line_break}></div>
      </div>
    );
  }
}

export default ResumePreview;
