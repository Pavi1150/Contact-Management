    import { useState, useEffect } from "react";

const useMultiSelect = (datas, setDatas) => {
  const [headerCheckbox, setheaderCheckbox] = useState(false);
  const [isDelete, setisDelete] = useState(false);

  useEffect(() => {
    const temp = datas.map((data) => {
      return { ...data, isSelect: false };
    });
    setDatas(temp);
  }, []);

  const handleHeaderCheckbox = () => {
    const temp = datas.map((data) => {
      if (headerCheckbox) {
        return { ...data, isSelect: false };
      } else {
        return { ...data, isSelect: true };
      }
    });
    headerCheckbox ? setisDelete(false) : setisDelete(true);
    setDatas(temp);
    setheaderCheckbox(!headerCheckbox);
  };

  const handleSelectAll = (temp) => {
    const every = temp.every((tempdata) => {
      return tempdata.isSelect === true;
    });

    const some = temp.some((tempdata) => {
      return tempdata.isSelect === true;
    });
    if (every) {
      setheaderCheckbox(!headerCheckbox);
    }
    some ? setisDelete(true) : setisDelete(false);

    if (some && headerCheckbox) {
      setheaderCheckbox(false);
    }
  };

  const handleCheckbox = (index) => {
    const temp = datas.map((data, i) => {
      if (i === index) {
        return { ...data, isSelect: !data.isSelect };
      } else {
        return data;
      }
    });
    setDatas(temp);
    handleSelectAll(temp);
  };

  return {
    isDelete,
    setisDelete,
    headerCheckbox,
    handleHeaderCheckbox,
    handleCheckbox,
  };
};

export default useMultiSelect;
