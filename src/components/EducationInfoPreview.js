import styles from "./EducationInfoPreview.module.css";

const EducationInfoPreview = ({ educationArr }) => {
  // check if the education array has an input with text excluding uniqId
  const { uniqId, ...restProps } = { ...educationArr[0] };
  const hasEducation = Object.values(restProps).some((x) => x !== "");
  console.log(restProps, hasEducation, uniqId);

  if (!hasEducation) return;
  return (
    <>
      <h1 className={styles.section_header}>Education</h1>
      {educationArr.map((education) => {
        return (
          <div>
            <p>{education.school}</p>
            <p>{education.major}</p>
            <p>{education.startDate}</p>
            <p>{education.endDate}</p>
          </div>
        );
      })}
    </>
  );
};

export default EducationInfoPreview;
