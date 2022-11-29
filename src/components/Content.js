import styles from "./Content.module.css";
import React from "react";

class Content extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <section className={styles.main_content}>
        <p>Content</p>
      </section>
    );
  }
}

export default Content;
