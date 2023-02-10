import React, { useState } from "react";
import styles from "./styles.module.scss";
import { RiContactsBookFill } from "react-icons/ri";

const ContactSection = () => {
  return (
    <div className="ms-4">
      <div className="position-relative">
        <div className="d-flex">
          <RiContactsBookFill className={styles.contactIcon} />
          <div className="ms-2">
            <div className="fs-5 fw-bold">Contacts</div>
            <div className={styles.textFont}>Welcome To Contact Page</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactSection;
