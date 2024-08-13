import React, { useState } from "react";
import { Link } from "react-router-dom";

const Items = ({ itemName, itemImg, itemHoverImg, hrefLink, url }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [selected, setSelected] = useState("/");
  let hover;

  return (
    <div className="w-full">
      <Link
        to={hrefLink}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        className={`flex items-center ${
          url.includes(hrefLink)
            ? " bg-black-background py-3 w-full px-4 rounded-s-lg"
            : ""
        }`}
      >
        <div className="hidden">
          {!isHovered ? (hover = itemImg) : (hover = itemHoverImg)}
          {url.includes(hrefLink) ? (hover = itemImg) : (hover = hover)}
        </div>
        <img className={`w-5 h-5 mr-3`} src={hover} alt={itemImg} />
        {itemName}
      </Link>
    </div>
  );
};

export default Items;
