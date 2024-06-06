import React from "react";
import Button from "./style";
import addIcon from "@/assets/Property 1=plus.png";
import deleteIcon from "@/assets/Property 1=delete.png";
import editIcon from "@/assets/Property 1=edit.png";

const iconMap = {
  add: addIcon,
  delete: deleteIcon,
  edit: editIcon,
};

const CustomButton = ({ children, icon, iconOnly, withIcon, ...props }) => {
  return (
    <Button {...props} iconOnly={iconOnly} withicon={!!icon}>
      {icon && <img src={iconMap[icon]} />}
      {!iconOnly && children}
    </Button>
  );
};

export default CustomButton;

//file
