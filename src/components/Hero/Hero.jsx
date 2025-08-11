import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Anish</h1>
        <p className={styles.description}>
          I’m a B.Tech IT student with experience in full-stack development, data science, and business strategy.
          Through internships, NGO work, and entrepreneurial initiatives, 
          I’ve worked on solving problems that blend technology with business impact. 
          I enjoy taking ideas from concept to execution and creating solutions that 
          are practical, scalable, and user-friendly.
        </p>
        <a href="mailto:adikanishka06@gail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
