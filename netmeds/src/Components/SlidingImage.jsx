import React, { useReducer, useEffect } from "react";
import db from "../Database/db.json";

const { sliding_images } = db;

const initialState = {
  pos: 0,
  totalImage: sliding_images.length,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "SLIDE": {
      return { ...state, pos: state.pos - 100 };
    }
    case "RESET": {
      return { ...state, pos: 0 };
    }
    default: {
      return state;
    }
  }
};

const SlidingImage = () => {
  const [updatePos, dispatch] = useReducer(reducer, initialState);
  console.log("updatePos:", updatePos);
  useEffect(() => {
    setInterval(() => {
      dispatch({ type: "SLIDE" });
    }, 5000);
  }, []);

  if (updatePos.pos === updatePos.totalImage * -100 + 100) {
    dispatch({ type: "RESET" });
  }
  //   console.log(updatePos.totalImage * -100 + 100);
  return (
    <div className="sliding_box">
      <div
        style={{ transform: `translateX(${updatePos.pos}%)` }}
        className="image_wraper"
      >
        {sliding_images.map((image) => (
          <img key={image} src={image} />
        ))}
      </div>
    </div>
  );
};

export default SlidingImage;
