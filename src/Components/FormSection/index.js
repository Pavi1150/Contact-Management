import React from "react";
import styles from "./styles.module.scss";
import { CgProfile } from "react-icons/cg";

const FormSection = ({ contact, setSelectedDetails, selectedDetails }) => {
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
                {console.log(
                  "selectedDetails?.company",
                  selectedDetails?.company
                )}
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
                  {/* <div>Email:{selectedDetails?.email}</div> */}
                  <hr />
                  <div className="d-flex justify-content-around">
                    <div>Phone:</div>
                    <div>{selectedDetails?.phone}</div>
                    {console.log("first", selectedDetails?.phone)}
                  </div>
                  {/* <div>Phone:{selectedDetails?.phone}</div> */}
                  <hr />
                  <div className="d-flex justify-content-around">
                    <div>Company:</div>
                    <div>{selectedDetails?.company}</div>
                  </div>
                  {/* <div>Company:{selectedDetails?.company}</div> */}
                  <hr />
                  <div className="d-flex justify-content-around">
                    <div>Address:</div>
                    <div>{selectedDetails?.address}</div>
                  </div>
                  {/* <div>Address:{selectedDetails?.address}</div> */}
                </div>
                {/* <div className="col-6 p-3 ">
                  
                  <div>
                    {console.log("selectedDetails", selectedDetails)}
                    <div>{selectedDetails?.name}</div>
                    <hr />
                    <div>{selectedDetails?.email}</div>
                    <hr />
                    <div>{selectedDetails?.phone}</div>
                    <hr />
                    <div>{selectedDetails?.company}</div>
                    <hr />
                    <div>{selectedDetails?.address}</div>
                  </div>
                </div> */}
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
