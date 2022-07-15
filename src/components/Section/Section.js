import React from "react";
import PropTypes from "prop-types";
import sectionStyles from "./Section.module.css";
const Section = ({ title, children }) => {
  return (
    <section className={sectionStyles.section}>
      <h2 className={sectionStyles.title}>{title}</h2>
      {children}
    </section>
  );
};
Section.prpTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
export default Section;
