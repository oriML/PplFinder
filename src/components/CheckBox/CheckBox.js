import React, {useState} from "react";
import Checkbox from "@material-ui/core/Checkbox";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import * as S from "./style";

const CheckBox = ({ isChecked, onChange, label, value }) => {
  
  const handleChange = () => {
    onChange && onChange(value);
  };
  return (
    <S.CheckBox>
      <FormControlLabel
        control={<Checkbox onChange={handleChange} color="primary" checked={isChecked}/>}
        label={label}
      />
    </S.CheckBox>
  );
};

export default CheckBox;
