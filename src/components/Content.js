import styles from "./Content.module.css";
import React from "react";
import UserInfo from "./UserInfo";
import ResumePreview from "./ResumePreview";
import uniqid from "uniqid";

class Content extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {
        contactInfo: {
          uniqId: uniqid(),
          name: "",
          email: "",
          phoneNumber: "",
          location: "",
        },
        education: [
          {
            uniqId: uniqid(),
            school: "",
            major: "",
            startDate: "",
            endDate: "",
          },
        ],
        experience: [
          {
            uniqId: uniqid(),
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            responsibilities: "",
          },
        ],
      },
    };
  }

  handleContactInput = (e) => {
    const value = e.target.value;
    const inputName = e.target.name;
    // Make a deep copy of this.state.userInfo and modify that copies nested property
    const userInfo = structuredClone(this.state.userInfo);
    userInfo.contactInfo[inputName] = value;
    // Replace userInfo with this new copy that shares no references
    this.setState({
      userInfo: userInfo,
    });
  };

  handleEducationInput = (e, id) => {
    const value = e.target.value;
    const inputName = e.target.name;

    const userInfo = structuredClone(this.state.userInfo);
    const education = userInfo.education.find((item) => item.uniqId === id);
    education[inputName] = value;

    this.setState({
      userInfo: userInfo,
    });
  };

  handleAddEducation = () => {
    const userInfo = structuredClone(this.state.userInfo);
    userInfo.education.push({
      uniqId: uniqid(),
      school: "",
      major: "",
      startDate: "",
      endDate: "",
    });
    this.setState({
      userInfo: userInfo,
    });
    console.log("yo", this.state);
  };

  render() {
    const { contactInfo, education, experience } = this.state.userInfo;

    return (
      <section className={styles.main_content}>
        <UserInfo
          handleContactInput={this.handleContactInput}
          contactValues={contactInfo}
          educationArr={education}
          experienceArr={experience}
          handleEducationInput={this.handleEducationInput}
          handleAddEducation={this.handleAddEducation}
        />
        <ResumePreview />
      </section>
    );
  }
}

export default Content;
