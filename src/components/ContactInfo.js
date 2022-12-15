import React from "react";
import styles from "./ContactInfo.module.css";

const ContactInfo = ({ handleContactInput, contactValues }) => {
  return (
    <section className={styles.form_section}>
      <h2 className={styles.contact_info}>Contact Info</h2>
      <input
        placeholder="Full Name"
        name="name"
        onChange={(e) => handleContactInput(e)}
        value={contactValues.name}
      ></input>
      <input
        placeholder="Email Address"
        name="email"
        onChange={(e) => handleContactInput(e)}
        value={contactValues.email}
      ></input>
      <input
        placeholder="Phone Number"
        name="phoneNumber"
        onChange={(e) => handleContactInput(e)}
        value={contactValues.phoneNumber}
      ></input>
      <input
        placeholder="Location"
        name="location"
        onChange={(e) => handleContactInput(e)}
        value={contactValues.location}
      ></input>
    </section>
  );
};

export default ContactInfo;
