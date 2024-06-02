import React, { useState } from "react";
import { GiBurningForest } from "react-icons/gi";
import { FaTruckFast } from "react-icons/fa6";

function LoadingAnim() {
  const [anim, setAnim] = useState(false);
  const [removeAnim, setRemoveAnim] = useState(false);

  setTimeout(() => {
    setAnim(true);
  }, [1000]);

  setTimeout(() => {
    setRemoveAnim(true);
  }, [3000]);
  return (
    <>
      <div className={`loading ${removeAnim ? "remove__animation" : ""}`}>
        <div className="loading__box">
          <div className="animation__icon__box">
            <GiBurningForest />
          </div>
          <h1 className={`animation__title ${anim ? "title__show" : ""}`}>
            посреди леса далеко от шума
          </h1>
        </div>
      </div>
      <div
        className={`loading__mini ${
          removeAnim ? "remove__animation__mini" : ""
        }`}
      >
        <div className="loading__box__mini">
          <div className="animation__icon__box__mini">
            <GiBurningForest />
          </div>
          <h1
            className={`animation__title__mini ${
              anim ? "title__show__mini" : ""
            }`}
          >
            посреди леса далеко от шума
          </h1>
        </div>
      </div>
    </>
  );
}

export default LoadingAnim;
