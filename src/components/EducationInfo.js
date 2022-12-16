import React from "react";
import styles from "./EducationInfo.module.css";

const EducationInfo = (props) => {
  return (
    <section className={styles.form_section}>
      <h2 className={styles.education_info}>Education</h2>
      <input placeholder="School Name"></input>
      <input placeholder="Major"></input>
      <input placeholder="Start Date"></input>
      <input placeholder="End Date"></input>
      <button className={styles.add_btn}>Add Education</button>
    </section>
  );
};

export default EducationInfo;
