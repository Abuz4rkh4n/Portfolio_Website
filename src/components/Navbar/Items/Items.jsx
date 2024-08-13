import React, { useState } from "react";
import { Link } from "react-router-dom";

const Items = ({ itemName, itemImg, itemHoverImg, hrefLink }) => {
  const [isHovered, setIsHovered] = useState(false);
  let hover;

  return (
    <div>
      <Link
        to={hrefLink}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className="flex items-center"
      >
        <div className="hidden">
          {!isHovered ? (hover = itemImg) : (hover = itemHoverImg)}
        </div>
        <img className="w-5 h-5 mr-3" src={hover} alt={itemImg} />
        {itemName}
      </Link>
    </div>
  );
};

export default Items;
