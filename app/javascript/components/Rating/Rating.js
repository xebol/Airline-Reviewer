
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Rating = (props) => {
  const score = (props.score)
  const totalStars = 5;

  const renderStars = () => {
    const starPercentage = (score / totalStars) * 100;
    const starIcons = [];
    for (let i = 0; i < totalStars; i++) {
      starIcons.push(
        <FontAwesomeIcon
          key={i}
          icon={faStar}
          style={{ color: i < starPercentage / 20 ? "#ffc315" : "gray" }}
        />
      );
    }
    return starIcons;
  };

  return <span className="star-wrapper">{renderStars()}</span>;
};

export default Rating;
