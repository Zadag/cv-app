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
            uniqid: uniqid(),
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
    const newUserInfo = { ...this.state.userInfo };
    console.log(value, inputName);
    console.log(newUserInfo);
    newUserInfo.contactInfo[inputName] = e.target.value;
    this.setState({
      newUserInfo,
    });
  };

  render() {
    return (
      <section className={styles.main_content}>
        <UserInfo handleContactInput={this.handleContactInput} />
        <ResumePreview />
      </section>
    );
  }
}

export default Content;
