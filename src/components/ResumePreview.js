import React from "react";
import styles from "./ResumePreview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
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
              <FontAwesomeIcon className={styles.svg_icon} icon={faPhone} />
              <p>{this.props.contactValues.phoneNumber}</p>
            </div>
            <div className={styles.user_detail}>
              <FontAwesomeIcon className={styles.svg_icon} icon={faEnvelope} />
              <p>{this.props.contactValues.email}</p>
            </div>
            <div className={styles.user_detail}>
              <FontAwesomeIcon
                className={styles.svg_icon}
                icon={faLocationDot}
              />
              <p>{this.props.contactValues.location}</p>
            </div>
          </div>
          <div className={styles.line_break}></div>
          <p className={styles.user_objective}>
            {this.props.contactValues.objective}
          </p>
        </div>
      </div>
    );
  }
}

export default ResumePreview;
