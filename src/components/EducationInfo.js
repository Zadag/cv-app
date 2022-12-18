import React from "react";
import styles from "./EducationInfo.module.css";

const EducationInfo = ({
  educationArr,
  handleEducationInput,
  handleAddEducation,
}) => {
  return (
    <>
      {educationArr.map((education, index) => {
        return (
          <section className={styles.form_section} key={education.uniqId}>
            <h2 className={styles.education_info}>Education</h2>
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

//   console.log(educationArr);
//   if (educationArr.length === 0) {
//     return (
//       <section className={styles.form_section}>
//         <button className={styles.add_btn}>Add Education</button>
//       </section>
//     );
//   } else {
//     return educationArr.map((education, index) => {
//       return (
//         <section className={styles.form_section} key={education.uniqId}>
//           <h2 className={styles.education_info}>Education</h2>
//           <input
//             placeholder="School Name"
//             value={education.school}
//             name="school"
//             onChange={(e) => handleEducationInput(e, education.uniqId)}
//           ></input>
//           <input
//             placeholder="Major"
//             value={education.major}
//             name="major"
//             onChange={(e) => handleEducationInput(e, education.uniqId)}
//           ></input>
//           <input
//             placeholder="Start Date"
//             value={education.startDate}
//             name="startDate"
//             onChange={(e) => handleEducationInput(e, education.uniqId)}
//           ></input>
//           <input
//             placeholder="End Date"
//             value={education.endDate}
//             name="endDate"
//             onChange={(e) => handleEducationInput(e, education.uniqId)}
//           ></input>
//           <button
//             type="button"
//             className={styles.add_btn}
//             onClick={handleAddEducation}
//           >
//             Add Education
//           </button>
//         </section>
//       );
//     });
//   }
// };

export default EducationInfo;
