import React, { useState } from "react";
import ContactSection from "./Components/ContactSection";
import FormSection from "./Components/FormSection";
import TableSection from "./Components/TableSection";

function App() {
  const [contact, setContact] = useState([]);
  const [details, setDetails] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
    company: "",
    address: "",
    selected: false,
  });
  const [state, setState] = useState({
    List: contact,
    MasterChecked: false,
    SelectedList: [],
  });
  console.log(state.List, "kkk");
  const [selectedDetails, setSelectedDetails] = useState({});
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6 ">
          <ContactSection />
          <TableSection
            contact={contact}
            setContact={setContact}
            details={details}
            setDetails={setDetails}
            selectedDetails={selectedDetails}
            setSelectedDetails={setSelectedDetails}
            state={state}
            setState={setState}
          />
        </div>
        <div className="col-5 offset-1">
          <FormSection contact={contact} selectedDetails={selectedDetails} />
        </div>
      </div>
    </div>
  );
}

export default App;
