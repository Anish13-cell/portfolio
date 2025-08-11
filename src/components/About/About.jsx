import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About me</h2>
      
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
  <li className={styles.aboutItem}>
    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
    <div className={styles.aboutItemText}>
    <h3>Problem-Solving Developer</h3>
      <p>
        I build practical, scalable web solutions — combining clean, responsive
        frontends with efficient backend systems — always with the end-user and
        business goal in mind.
      </p>
    </div>
  </li>
  <li className={styles.aboutItem}>
    <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
    <div className={styles.aboutItemText}>
      <h3>Data-Driven Thinker</h3>
      <p>
        I analyze data to uncover insights that guide decisions, using tools like
        Pandas, NumPy, and Matplotlib, and connecting the dots between technical
        output and business impact.
      </p>
    </div>
  </li>
  <li className={styles.aboutItem}>
    <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
    <div className={styles.aboutItemText}>
      <h3>AI & Machine Learning Enthusiast</h3>
      <p>
        I apply machine learning and automation to solve real problems like churn
        prediction and RAG-based systems — using Hugging Face, scikit-learn, and
        Python-based workflows.
      </p>
    </div>
  </li>
</ul>

      </div>
    </section>
  );
};
