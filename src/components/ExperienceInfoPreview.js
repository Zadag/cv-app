import styles from "./ExperienceInfoPreview.module.css";

const ExperienceInfoPreview = ({ experienceArr }) => {
  const { uniqId, ...restProps } = { ...experienceArr[0] };
  const hasExperience = Object.values(restProps).some((x) => x !== "");
  console.log(restProps, hasExperience, uniqId);

  if (!hasExperience) return;
  return (
    <div className={styles.experience_preview_section}>
      <h1 className={styles.section_header}>Experience:</h1>
      {experienceArr.map((experience) => {
        return (
          <>
            <div className={styles.experience_group}>
              <div>
                <p className={styles.company}>{experience.company}</p>
                <p className={styles.position}>{experience.position}</p>
              </div>
              <div className={styles.dates}>
                <p className={styles.date}>{experience.startDate}</p>
                <p className={styles.date}>-</p>
                <p className={styles.date}>{experience.endDate}</p>
              </div>
            </div>
            <p className={styles.responsibilities}>
              {experience.responsibilities}
            </p>
          </>
        );
      })}
    </div>
  );
};

export default ExperienceInfoPreview;
