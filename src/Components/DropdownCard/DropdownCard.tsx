import { FC } from "react";
import { IoMdClose } from "react-icons/io";

import "./DropdownCard.css";

interface DropdownCardProps {
  Name: any;
  RemoveClick: () => void;
}

const DropdownCard: FC<DropdownCardProps> = ({ Name, RemoveClick }) => {
  return (
    <div className="DropdownCardContainer">
      <p className="DropdownCardText">{Name}</p>
      <IoMdClose className="DropdownCardClose" onClick={RemoveClick} />
    </div>
  );
};

export default DropdownCard;
