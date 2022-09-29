import React, { useReducer, useEffect } from "react";

const reducer = (state, action) => {
  switch (action.type) {
    case "SLIDE": {
      return {
        ...state,
        pos: state.pos - 100,
        currentImageIndex: state.currentImageIndex + 1,
      };
    }
    case "BUTTON_SLIDE": {
      return {
        ...state,
        pos: action.pos,
        currentImageIndex: action.currentImageIndex,
      };
    }
    case "RESET": {
      return { ...state, pos: 0, currentImageIndex: 0 };
    }
    default: {
      return state;
    }
  }
};

const SlidingImage = ({ images }) => {
  // console.log("images:", images.length);
  const [updatePos, dispatch] = useReducer(reducer, {
    pos: 0,
    currentImageIndex: 0,
    totalImage: images.length,
  });
  // console.log("updatePos:", updatePos);
  useEffect(() => {
    setInterval(() => {
      dispatch({ type: "SLIDE" });
    }, 5000);
  }, []);

  if (updatePos.pos === updatePos.totalImage * -100) {
    dispatch({ type: "RESET" });
  }
  //   console.log(updatePos.totalImage * -100 + 100);
  // console.log(updatePos.currentImageIndex);
  return (
    <div className="sliding_box">
      <div
        style={{ transform: `translateX(${updatePos.pos}%)` }}
        className="image_wraper"
      >
        {images.map((image) => (
          <img key={image} src={image} />
        ))}
      </div>
      <div className="image_button_wrapper">
        {images.map((image, indx) => (
          <button
            onClick={() =>
              dispatch({
                type: "BUTTON_SLIDE",
                pos: indx * -100,
                currentImageIndex: indx,
              })
            }
            className={`image_buttons ${
              indx === updatePos.currentImageIndex ? "active_image_button" : ""
            }`}
            key={image}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default SlidingImage;
