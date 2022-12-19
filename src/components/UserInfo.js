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
        <EducationInfo
          educationArr={this.props.educationArr}
          handleEducationInput={this.props.handleEducationInput}
          handleAddEducation={this.props.handleAddEducation}
          handleDeleteButton={this.props.handleDeleteButton}
        />
        <ExperienceInfo
          experienceArr={this.props.experienceArr}
          handleExperienceInput={this.props.handleExperienceInput}
          handleAddExperience={this.props.handleAddExperience}
          handleDeleteButton={this.props.handleDeleteButton}
        />
      </form>
    );
  }
}

export default UserInfo;
