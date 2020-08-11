import React, { useState } from "react";
import styles from "./EnvelopeBackSvgStyles.module.css";

const LINE_HOVER_WIDTH = 10;
const LINE_NORMAL_WIDTH = 5;

function EnvelopeBackSvg(props) {
  const [strokeWidth, setStrokeWidth] = useState(LINE_NORMAL_WIDTH);
  const [isOpen, setIsOpen] = useState(false);

  const onFlapHover = (event) => {
    setStrokeWidth(LINE_HOVER_WIDTH);
  };
  const onFlapMouseout = (event) => {
    setStrokeWidth(LINE_NORMAL_WIDTH);
  };
  const onFlapClick = () => {
    setStrokeWidth(LINE_NORMAL_WIDTH);
    setIsOpen(true);
    props.children();
  };

  return (
    <svg
      id={styles.backEnv}
      viewBox="0.239 0.397 1488.522 1011.926"
      //viewBox="14.811 -568.853 1473.271 1581.176"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <g stroke="#000" strokeLinecap="butt">
        <path d="M-62.491 1083.669l5.774-11.55" />
        <path
          strokeWidth={5}
          d="M1453.65 995.389l2.18-980.793L22.779 28.002l.675 970.347 1430.198-2.96z"
          fill="#ffe987"
        />
      </g>
      <g stroke="#000" strokeWidth={5} fill="#ffe987" strokeLinecap="butt">
        <path d="M1461.46 24.629l-647.32 411.62 1.32 318.52 645 242.02 1-972.16zM19.562 36.013L711.14 429.249l-49.63 330.61-640.956 239.93-.993-963.776z" />
        <path d="M18.066 1001.129s629.145-600.4 733.395-604.994c102.25-4.507 708.72 600.594 708.72 600.594l-1442.115 4.4z" />
      </g>
      <path
        stroke="#000"
        strokeWidth={strokeWidth}
        d="M1472.14 13.249s-577.77 572.016-716 571c-136-1-744.93-556.464-744.93-556.464l1460.93-14.536z"
        fill="#ffe987"
        strokeLinecap="butt"
        className={isOpen ? styles.open : ""}
        onMouseOver={onFlapHover}
        onMouseOut={onFlapMouseout}
        onClick={onFlapClick}
      />
    </svg>
  );
}

export default EnvelopeBackSvg;
