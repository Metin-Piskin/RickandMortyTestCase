import { FC } from "react";

import "./Card.css";

interface CardProps {
  onClick: () => void;
  CardImg: any;
  CardName: string;
  CardEpisode: number;
  checked: boolean;
  inputValue: any;
}

const Card: FC<CardProps> = ({
  onClick,
  CardImg,
  CardName,
  CardEpisode,
  checked,
  inputValue,
}) => {
  const boldifyName = () => {
    if (!inputValue || !CardName) {
      return CardName;
    }

    const filterRegex = new RegExp(`(${inputValue.split("").join("|")})`, "gi");
    const boldName = CardName.replace(
      filterRegex,
      (match) => `<b>${match}</b>`
    );

    return <span dangerouslySetInnerHTML={{ __html: boldName }} />;
  };
  return (
    <div className="CardContainer" onClick={onClick}>
      <input className="CardCheckbox" type="checkbox" checked={checked} />
      <img className="CardImg" src={CardImg} />
      <div className="CardTextContainer">
        <div className="CardName">{boldifyName()}</div>
        <div className="CardEpisode">{CardEpisode} Episode</div>
      </div>
    </div>
  );
};

export default Card;
