import styles from "./GeneralInfoPreview.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPhone,
  faLocationDot,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const GeneralInfoPreview = (props) => {
  return (
    <div className={styles.personal_info}>
      <h1 className={styles.resume_name}>{props.contactValues.name}</h1>
      <div className={styles.user_details_container}>
        <div className={styles.user_detail}>
          <FontAwesomeIcon className={styles.svg_icon} icon={faPhone} />
          <p>{props.contactValues.phoneNumber}</p>
        </div>
        <div className={styles.user_detail}>
          <FontAwesomeIcon className={styles.svg_icon} icon={faEnvelope} />
          <p>{props.contactValues.email}</p>
        </div>
        <div className={styles.user_detail}>
          <FontAwesomeIcon className={styles.svg_icon} icon={faLocationDot} />
          <p>{props.contactValues.location}</p>
        </div>
      </div>
      <div className={styles.line_break}></div>
      <p className={styles.user_objective}>{props.contactValues.objective}</p>
    </div>
  );
};

export default GeneralInfoPreview;
