import React, { useState } from "react";
import styles from "./styles.module.scss";
import { MdOutlineDelete } from "react-icons/md";
import { IoIosAdd, IoIosSearch } from "react-icons/io";
import Modal from "react-bootstrap/Modal";
import NormalButton from "../Common/Button";

const TableSection = ({
  contact,
  setContact,
  details,
  setDetails,
  selectedDetails,
  setSelectedDetails,
  state,
  setState,
}) => {
  {
    console.log("state", state);
  }
  const [search, setSearch] = useState("");
  // const data = [
  //   {
  //     name: "pavi",
  //     surName: "A",
  //     company: "doodleblue",
  //   },
  // ];
  // const [contact, setContact] = useState([]);
  // const [details, setDetails] = useState({
  //   name: "",
  //   surName: "",
  //   company: "",
  // });
  // const handleChange = (e) => {
  //   e.preventDefault();

  //   const FormName = e.target.getAttribute("name");
  //   const newFormData = { ...details };
  //   newFormData[FormName] = e.target.value;
  //   setDetails(newFormData);
  // };

  // const handleSubmit = (evnt) => {
  //   console.log("evnt", evnt);
  //   evnt.preventDefault();
  //   const checkEmptyInput = !Object.values(details).every((res) => res === "");
  //   if (checkEmptyInput) {
  //     const newData = (data) => [...data, details];
  //     contact(newData);
  //     const emptyInput = { name: "", company: "" };
  //     setDetails(emptyInput);
  //   }
  // };

  const handleAdd = (e) => {
    console.log(e);
    e.preventDefault();
    const addData = {
      // id: Math.floor(Math.random() * (999 - 100 + 1) + 100),
      id: new Date(),
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
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleSearch = (val) => {
    {
      console.log(contact, "jhkj");
    }

    const filterRows = contact.filter((data) => {
      {
        console.log("data", data.name);
      }
      return data.name.toLowerCase().includes(val.toLowerCase());
    });
    setSearch(val);
    setContact(filterRows);
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
  const getSelectedRows = () => {
    setState({
      SelectedList: state.List.filter((e) => e.selected),
    });
  };
  const handleDelete = (index, e) => {
    setContact(contact.filter((v, i) => i !== index));
  };
  const handleEdit = (e) => {
    // const temp = contact.map((data) => {
    //   if (data.id === e.id) {
    //     setContact({
    //       name: data.name,
    //       email: data.email,
    //       phone: data.phone,
    //       company: data.company,
    //       address: data.address,
    //     });
    //   }
    // });
    // setContact(temp);
    setDetails(e);
    handleShow();
  };
  return (
    <div className="mt-5 ms-4">
      <div className="position-relative">
        <div className="d-flex">
          <input
            type="search"
            placeholder="Search Contacts"
            className={`p-2 mb-5 ${styles.inputBox}`}
            value={search}
            onChange={(e) => {
              // e.preventDefault();
              setSearch(e.target.value);
              setSearch(handleSearch);
              // handleSearch(search);

              // // setSearch(e);
              // handleSearch(e);
            }}
          />
          <IoIosSearch
            color="grey"
            className={styles.searchIcon}
            onClick={() => {
              handleSearch(search);
            }}
          />
          <NormalButton
            className={`p-2 ms-2 ${styles.contactButton}`}
            onClick={handleShow}
            label="ADD CONTACT"
          >
            <IoIosAdd color="white" />
          </NormalButton>
        </div>
        <table cellpadding="15" className="">
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
                  console.log("dat", dat);
                }
                return (
                  <tr key={dat.id} className={dat.selected ? "selected" : ""}>
                    {console.log("oooo", dat.id)}
                    <th scope="row">
                      <input
                        type="checkbox"
                        checked={dat.selected}
                        className="form-check-input"
                        id="rowcheck{dat.id}"
                        onChange={(e) => onItemCheck(e, dat)}
                      />
                    </th>
                    <td>{index + 1}</td>
                    <td
                      onClick={() => {
                        setSelectedDetails(dat);
                        // alert("kkk");
                      }}
                    >
                      {/* {console.log("first", setSelectedDetails(dat))} */}
                      {dat.name}
                    </td>
                    <td>{dat.company}</td>
                    <td
                      onClick={() => {
                        handleEdit(dat);
                      }}
                    >
                      edit
                    </td>
                    <td onClick={(e) => handleDelete(index, e)}>
                      <MdOutlineDelete />
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
        {/* <button className="btn btn-primary" onClick={() => getSelectedRows()}>
          {console.log("first", state.SelectedList.length)}
          {state.SelectedList.length}
        </button> */}
      </div>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Enter Details</Modal.Title>
        </Modal.Header>
        <Modal.Body className="text-center">
          <form onSubmit={handleAdd}>
            <div>Name:</div>
            <input
              type="text"
              // onChange={handleChange}
              name="name"
              value={details.name}
              onChange={(e) => {
                setDetails({ ...details, name: e.target.value });
              }}
            />
            <div>email:</div>
            <input
              type="text"
              name="email"
              // onChange={handleChange}
              value={details.email}
              onChange={(e) => {
                setDetails({ ...details, email: e.target.value });
              }}
            />
            <div>Phone:</div>
            <input
              type="number"
              name="phone"
              // onChange={handleChange}
              value={details.phone}
              onChange={(e) => {
                setDetails({ ...details, phone: e.target.value });
              }}
            />
            <div>Company:</div>
            <input
              type="text"
              name="company"
              // onChange={handleChange}
              value={details.company}
              onChange={(e) => {
                setDetails({ ...details, company: e.target.value });
              }}
            />
            <div>Address:</div>
            <input
              type="text"
              name="address"
              // onChange={handleChange}
              value={details.address}
              onChange={(e) => {
                setDetails({ ...details, address: e.target.value });
              }}
            />
            <div className="mt-3">
              <button variant="secondary" onClick={handleClose}>
                Close
              </button>
              <button variant="primary" type="submit" className="ms-3">
                Save
              </button>
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </div>
  );
};

export default TableSection;
