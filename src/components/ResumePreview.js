import React from "react";
import styles from "./ResumePreview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import GeneralInfoPreview from "./GenearlInfoPreview";
import EducationInfoPreview from "./EducationInfoPreview";
import ExperienceInfoPreview from "./ExperienceInfoPreview";

class ResumePreview extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={styles.resume_preview}>
        <GeneralInfoPreview contactValues={this.props.contactValues} />
        <EducationInfoPreview educationArr={this.props.educationArr} />
        <ExperienceInfoPreview experienceArr={this.props.experienceArr} />
      </div>
    );
  }
}

export default ResumePreview;
