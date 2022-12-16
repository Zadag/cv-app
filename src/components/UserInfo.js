import React from "react";
import styles from "./UserInfo.module.css";
import ContactInfo from "./ContactInfo";
import ExperienceInfo from "./ExperienceInfo";
import EducationInfo from "./EducationInfo";

class UserInfo extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <form className={styles.user_input}>
        <ContactInfo
          handleContactInput={this.props.handleContactInput}
          contactValues={this.props.contactValues}
        />
        <EducationInfo educationArr={this.props.educationArr} />
        <ExperienceInfo experienceArr={this.props.experienceArr} />
      </form>
    );
  }
}

export default UserInfo;
