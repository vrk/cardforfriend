import * as React from "react";

function EnvelopeFrontSvg(props) {
  return (
    <svg
      // viewBox="0 -12.088 1464.484 1013.454"
      viewBox="0 -575.093 1459.559 1576.459"
      fillRule="evenodd"
      clipRule="evenodd"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path
        stroke="#000"
        strokeWidth={5}
        d="M21.221 991.809L7.827 11.105l1433.11-2.977 10.42 970.29L21.22 991.809z"
        fill="#ffe987"
        strokeLinecap="butt"
      />
      <path
        d="M1156.156 94.487l-.94 206.235 182.69-.942 4.71-207.176-186.46 1.883z"
        fill="#fff"
      />
      <path
        d="M1250.636 267.136s-117.68-61.925-59.55-121.443c25.04-25.635 56.84 17.944 56.84 17.944s25.44-39.408 49.74-27.557c78.84 38.452-47.03 131.056-47.03 131.056z"
        fill="#ff8790"
      />
    </svg>
  );
}

export default EnvelopeFrontSvg;
