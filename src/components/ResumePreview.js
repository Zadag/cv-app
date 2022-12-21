import React from "react";
import styles from "./ResumePreview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import GeneralInfoPreview from "./GenearlInfoPreview";

class ResumePreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.resume_preview}>
        <GeneralInfoPreview contactValues={this.props.contactValues} />
      </div>
    );
  }
}

export default ResumePreview;
