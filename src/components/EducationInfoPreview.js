import styles from "./EducationInfoPreview.module.css";

const EducationInfoPreview = ({ educationArr }) => {
  // check if the education array has an input with text excluding uniqId
  const { uniqId, ...restProps } = { ...educationArr[0] };
  const hasEducation = Object.values(restProps).some((x) => x !== "");
  console.log(restProps, hasEducation, uniqId);

  if (!hasEducation) return;
  return (
    <div className={styles.education_preview_section}>
      <h1 className={styles.section_header}>Education:</h1>
      {educationArr.map((education) => {
        return (
          <div className={styles.education_group}>
            <div>
              <p className={styles.school}>{education.school}</p>
              <p>{education.major}</p>
            </div>
            <div className={styles.dates}>
              <p className={styles.date}>{education.startDate}</p>
              <p className={styles.date}>-</p>
              <p className={styles.date}>{education.endDate}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default EducationInfoPreview;
