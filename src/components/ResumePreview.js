import React from "react";
import styles from "./ResumePreview.module.css";

class ResumePreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <div className={styles.resume_preview}></div>;
  }
}

export default ResumePreview;
