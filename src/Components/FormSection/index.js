import React from "react";
import styles from "./styles.module.scss";
import { CgProfile } from "react-icons/cg";

const FormSection = ({ contact, setSelectedDetails, selectedDetails }) => {
  {
    console.log(selectedDetails, "form");
  }
  return (
    <div className={`p-5 ${styles.formSection}`}>
      <div className="d-flex justify-content-center">
        <div className="text-center">
          <CgProfile size="50" className="mx-auto" />
          <h5>Mike Huston</h5>
          <span>Product Manager @ FlatMRM Management</span>
        </div>
      </div>

      <div className="p-3">
        <div className="row">
          <div className="col-6 p-3">
            <div>Full Name:</div>
            <hr />
            <div>Email:</div>
            <hr />
            <div>Phone:</div>
            <hr />
            <div>Company:</div>
            <hr />
            <div>Address:</div>
          </div>
          <div className="col-6 p-3 position-relative">
            {/* {contact.map((data) => {
              {
                console.log(data);
              }
              return (
                <>
                  <div>{data.name}</div>
                  <hr />
                  <div>{data.email}</div>
                  <hr />
                  <div>{data.phone}</div>
                  <hr />
                  <div>{data.company}</div>
                  <hr />
                  <div>{data.address}</div>
                </>
              );
            })} */}
            {Object.keys(selectedDetails).length ? (
              <div>
                {console.log("selectedDetails", selectedDetails)}
                <input type="checkbox" />
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
            ) : (
              <div
                className={`d-flex align-items-center text-danger fw-bold ${styles.noDataSection}`}
              >
                NO DATA FOUND
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
