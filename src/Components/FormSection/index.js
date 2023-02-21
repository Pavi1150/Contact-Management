import React from "react";
import styles from "./styles.module.scss";
import { CgProfile } from "react-icons/cg";

const FormSection = ({ selectedDetails }) => {
  return (
    <div className="">
      <div className={`p-5 mt-5 ${styles.formSection}`}>
        {Object.keys(selectedDetails).length ? (
          <>
            <div className="d-flex justify-content-center">
              <div className="text-center">
                <CgProfile size="50" className="mx-auto" />
                <h5>{selectedDetails?.name}</h5>
                <span>{selectedDetails?.company}</span>
              </div>
            </div>
            <div className="p-3">
              <div>
                <div className="p-3">
                  <div className="d-flex justify-content-around">
                    <div>Name:</div>
                    <div>{selectedDetails?.name}</div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-around">
                    <div>Email:</div>
                    <div>{selectedDetails?.email}</div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-around">
                    <div>Phone:</div>
                    <div>{selectedDetails?.phone}</div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-around">
                    <div>Company:</div>
                    <div>{selectedDetails?.company}</div>
                  </div>
                  <hr />
                  <div className="d-flex justify-content-around">
                    <div>Address:</div>
                    <div>{selectedDetails?.address}</div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ) : (
          <div
            className={`d-flex align-items-center text-danger fw-bold ${styles.noDataSection}`}
          >
            NO DATA FOUND
          </div>
        )}
      </div>
    </div>
  );
};

export default FormSection;
