import React from "react";
import styles from "./FormSection.module.css";

class FromSection extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <section className={styles.form_section}>
        <h2 className={styles.contact_info}>Contact Info</h2>
        <input placeholder="First Name"></input>
        <input placeholder="Last Name"></input>
        <input placeholder="Phone Number"></input>
      </section>
    );
  }
}

export default FromSection;
