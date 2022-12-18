import React from "react";
import styles from "./ExperienceInfo.module.css";

const ExperienceInfo = ({
  experienceArr,
  handleAddExperience,
  handleExperienceInput,
}) => {
  return (
    <>
      {experienceArr.map((experience) => {
        return (
          <section className={styles.form_section} key={experience.uniqId}>
            <h2 className={styles.experience_info}>Experience</h2>
            <input
              placeholder="Company Name"
              name="company"
              value={experience.company}
              onChange={(e) => handleExperienceInput(e, experience.uniqId)}
            ></input>
            <input
              name="position"
              placeholder="Job Title"
              value={experience.position}
              onChange={(e) => handleExperienceInput(e, experience.uniqId)}
            ></input>
            <input
              name="startDate"
              placeholder="Start Date"
              value={experience.startDate}
              onChange={(e) => handleExperienceInput(e, experience.uniqId)}
            ></input>
            <input
              name="endDate"
              placeholder="End Date"
              value={experience.endDate}
              onChange={(e) => handleExperienceInput(e, experience.uniqId)}
            ></input>
            <textarea
              name="responsibilities"
              placeholder="Responsibilities"
              value={experience.responsibilites}
              onChange={(e) => handleExperienceInput(e, experience.uniqId)}
            ></textarea>
          </section>
        );
      })}
      <button
        className={styles.add_btn}
        type="button"
        onClick={handleAddExperience}
      >
        Add Experience
      </button>
    </>
  );

  // return (
  //   <section className={styles.form_section}>
  //     <h2 className={styles.experience_info}>Experience</h2>
  //     <input placeholder="Company Name"></input>
  //     <input placeholder="Job Title"></input>
  //     <input placeholder="Start Date"></input>
  //     <input placeholder="End Date"></input>
  //     <textarea placeholder="Responsibilities"></textarea>
  //     <button className={styles.add_btn}>Add Experience</button>
  //   </section>
  // );
};

export default ExperienceInfo;
