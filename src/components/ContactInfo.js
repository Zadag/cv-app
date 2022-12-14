import React from "react";
import styles from "./ContactInfo.module.css";

const ContactInfo = (props) => {
  return (
    <section className={styles.form_section}>
      <h2 className={styles.contact_info}>Contact Info</h2>
      <input
        placeholder="Full Name"
        name="name"
        onChange={(e) => props.handleContactInput(e, "contactInfo")}
      ></input>
      <input
        placeholder="Email Address"
        name="email"
        onChange={(e) => props.handleContactInput(e, "contactInfo")}
      ></input>
      <input
        placeholder="Phone Number"
        name="phoneNumber"
        onChange={(e) => props.handleContactInput(e, "contactInfo")}
      ></input>
      <input
        placeholder="Location"
        name="location"
        onChange={(e) => props.handleContactInput(e, "contactInfo")}
      ></input>
    </section>
  );
};

export default ContactInfo;
