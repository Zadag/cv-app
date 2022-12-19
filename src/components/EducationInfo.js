import React from "react";
import styles from "./EducationInfo.module.css";

const EducationInfo = ({
  educationArr,
  handleEducationInput,
  handleAddEducation,
}) => {
  return (
    <>
      {educationArr.map((education) => {
        return (
          <section className={styles.form_section} key={education.uniqId}>
            <div className={styles.top_layer}>
              <h2 className={styles.education_info}>Education</h2>
              <div className={styles.delete_button}>X</div>
            </div>
            <input
              placeholder="School Name"
              value={education.school}
              name="school"
              onChange={(e) => handleEducationInput(e, education.uniqId)}
            ></input>
            <input
              placeholder="Major"
              value={education.major}
              name="major"
              onChange={(e) => handleEducationInput(e, education.uniqId)}
            ></input>
            <input
              placeholder="Start Date"
              value={education.startDate}
              name="startDate"
              onChange={(e) => handleEducationInput(e, education.uniqId)}
            ></input>
            <input
              placeholder="End Date"
              value={education.endDate}
              name="endDate"
              onChange={(e) => handleEducationInput(e, education.uniqId)}
            ></input>
          </section>
        );
      })}
      <button
        type="button"
        className={styles.add_btn}
        onClick={handleAddEducation}
      >
        Add Education
      </button>
    </>
  );
};

export default EducationInfo;
