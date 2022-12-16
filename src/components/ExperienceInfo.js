import React from "react";
import styles from "./ExperienceInfo.module.css";

const ExperienceInfo = (props) => {
  return (
    <section className={styles.form_section}>
      <h2 className={styles.experience_info}>Experience</h2>
      <input placeholder="Company Name"></input>
      <input placeholder="Job Title"></input>
      <input placeholder="Start Date"></input>
      <input placeholder="End Date"></input>
      <textarea placeholder="Responsibilities"></textarea>
      <button className={styles.add_btn}>Add Experience</button>
    </section>
  );
};

export default ExperienceInfo;
