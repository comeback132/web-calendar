import React from "react";
import Button from "./style";
import addIcon from "@/assets/Property 1=plus.png";
import deleteIcon from "@/assets/Property 1=delete.png";
import editIcon from "@/assets/Property 1=edit.png";
import closeIcon from "@/assets/Property 1=close.png";
import plusIcon from "@/assets/plus.png";

const iconMap = {
  add: addIcon,
  delete: deleteIcon,
  edit: editIcon,
  close: closeIcon,
  plus: plusIcon,
};

const CustomButton = ({ children, icon, iconOnly, ...props }) => {
  return (
    <Button {...props} iconOnly={iconOnly} $withIcon={!!icon}>
      {icon && <img src={iconMap[icon]} />}
      {!iconOnly && <p>{children}</p>}
    </Button>
  );
};

export default CustomButton;


