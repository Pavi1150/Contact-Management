import React, { useState } from "react";
import styles from "./styles.module.scss";
import { AiFillEdit, AiFillDelete } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import NormalButton from "../Common/Button";
import InputBox from "../Common/InputBox";

const TableSection = ({
  contact,
  setContact,
  details,
  setDetails,
  selectedDetails,
  setSelectedDetails,
  state,
  setState,
  isShow = false,
}) => {
  const [search, setSearch] = useState("");
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAdd = (e) => {
    e.preventDefault();
    const addData = {
      id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      // id: new Date(),
      name: details.name,
      email: details.email,
      phone: details.phone,
      company: details.company,
      address: details.address,
    };
    const newContacts = [...contact, addData];
    setContact(newContacts);
    handleClose();
    setDetails({
      id: "",
      name: "",
      email: "",
      phone: "",
      company: "",
      address: "",
    });
  };
  const handleSearch = (val) => {
    const filterRows = contact.filter((data) => {
      return data.name.toLowerCase().includes(val.toLowerCase());
    });
    setSearch(val);
    setContact(filterRows);
  };
  const handleEdit = (e) => {
    {
      console.log("e", e);
    }
    setDetails(e);
    handleShow();
  };
  const onMasterCheck = (e) => {
    let tempList = contact;
    tempList.map((user) => (user.selected = e.target.checked));

    setState({
      MasterChecked: e.target.checked,
      List: tempList,
      SelectedList: state.List.filter((e) => e.selected),
    });
    {
      console.log("tempList", tempList);
    }
  };
  const onItemCheck = (e, item) => {
    let tempList = state.List;
    tempList.map((user) => {
      if (user.id === item.id) {
        user.selected = e.target.checked;
      }
      return user;
    });
    const totalItems = state.List.length;
    const totalCheckedItems = tempList.filter((e) => e.selected).length;

    setState({
      MasterChecked: totalItems === totalCheckedItems,
      List: tempList,
      SelectedList: state.List.filter((e) => e.selected),
    });
  };
  const getSelectedRows = (index) => {
    setState({
      SelectedList: state.List.filter((e) => e.selected !== index),
    });
  };
  const handleDelete = (index, e) => {
    setContact(contact.filter((v, i) => i !== index));
  };

  const [edit, setEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(0);
  const submitHandler = () => {
    if (edit) {
      contact[editIndex] = details;
      console.log("e");
      setContact(contact);
      setEditIndex(null);
      setEdit(false);
      setDetails({
        id: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
      });
      handleClose();
    } else {
      contact.push(details);
      setContact(contact);
      handleShow();
      setDetails({
        id: "",
        name: "",
        email: "",
        phone: "",
        company: "",
        address: "",
      });
      handleClose();
    }
  };
  const handleUpdate = (e) => {
    let updatedDta = contact[e];
    setDetails(updatedDta);
    setEdit(true);
    setEditIndex(e);
    handleShow();
  };

  return (
    <div className="mt-5 ms-4">
      <div className="position-relative">
        <div className="d-flex justify-content-between">
          <input
            type="search"
            placeholder="Search Contacts"
            className={`p-2 mb-5 w-75 ${styles.inputBox}`}
            value={search}
            onChange={(e) => {
              setSearch(e.target.value);
              setSearch(handleSearch);
            }}
          />
          <IoIosSearch color="grey" className={styles.searchIcon} />
          <NormalButton
            className={`p-2 ms-2  ${styles.contactButton}`}
            onClick={handleShow}
            label="ADD CONTACT"
            isShow={true}
          />
        </div>
        <table cellpadding="15" className="w-100">
          <thead className={`${styles.tableHead}`}>
            <input
              type="checkbox"
              className="form-check-input mt-4 ms-2"
              checked={state.MasterChecked}
              onChange={(e) => onMasterCheck(e)}
            />
            <th className="ms-3">sno</th>
            <th>Basic Info</th>
            <th>Company</th>
            <th>Action</th>
          </thead>
          <tbody>
            {Object.keys(contact).length > 0 ? (
              contact.map((dat, index) => {
                {
                  console.log("daaaat", dat);
                }
                return (
                  <tr key={dat.id} className={dat.selected ? "selected" : ""}>
                    {console.log("oooo", dat.id)}
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={dat.selected}
                        className="form-check-input"
                        onChange={(e) => onItemCheck(e, dat)}
                      />
                    </th>
                    <td>{index + 1}</td>
                    <td
                      onClick={() => {
                        setSelectedDetails(dat);
                      }}
                    >
                      {dat.name}
                    </td>
                    <td>{dat.company}</td>
                    <td>
                      <button
                        onClick={() => {
                          // handleUpdate(dat.id);
                          handleUpdate(index);
                        }}
                        className="border-0"
                      >
                        <AiFillEdit />
                      </button>
                      <button
                        onClick={(e) => handleDelete(index, e)}
                        className="border-0 ms-2"
                      >
                        <AiFillDelete />
                      </button>
                    </td>
                  </tr>
                );
              })
            ) : (
              <div className={`text-danger fw-bold ${styles.noData}`}>
                NO DATA FOUND
              </div>
            )}
          </tbody>
        </table>
        {/* <button onClick={handleClick}>del</button> */}

        {/* <button className="btn btn-primary" onClick={(i) => getSelectedRows(i)}>
          {console.log("first", state.SelectedList.length)}
          {state.SelectedList.length}
        </button> */}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <InputBox
            type="text"
            name="name"
            value={details.name}
            onChange={(e) => {
              setDetails({ ...details, name: e.target.value });
            }}
            label="Name"
            placeholder="Enter Name"
          />
          <InputBox
            type="text"
            name="email"
            value={details.email}
            onChange={(e) => {
              setDetails({ ...details, email: e.target.value });
            }}
            label="Email"
            placeholder="Enter Email ID"
          />
          <InputBox
            type="number"
            name="phone"
            value={details.phone}
            onChange={(e) => {
              setDetails({ ...details, phone: e.target.value });
            }}
            label="Phone"
            placeholder="Enter Mobile Number"
          />
          <InputBox
            type="text"
            name="company"
            className="p-2"
            value={details.company}
            onChange={(e) => {
              setDetails({ ...details, company: e.target.value });
            }}
            placeholder="Enter Company Name"
            label="Company"
          />
          <div className="mt-2">Address</div>
          <textarea
            rows="3"
            cols="22"
            className="mt-2 "
            type="text"
            name="address"
            value={details.address}
            onChange={(e) => {
              setDetails({ ...details, address: e.target.value });
            }}
            // label="Address"
            placeholder="Enter Address"
          />
          <div className="d-flex justify-content-center mt-2">
            <NormalButton
              className="btn btn-primary"
              onClick={handleClose}
              label="Close"
            />
            <NormalButton
              className="btn btn-primary ms-3"
              onClick={submitHandler}
              label="Save"
            />
          </div>
        </Modal.Body>
        <Modal.Footer className="d-flex justify-content-center">
          {/* <NormalButton
            className="btn btn-primary"
            onClick={handleClose}
            label="Close"
          />
          <NormalButton
            className="btn btn-primary ms-3"
            type="submit"
            onClick={handleAdd}
            label="Save"
          /> */}
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default TableSection;
