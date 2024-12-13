import React from "react";

const Black = () => {
  return (
    <svg
      style={{ zIndex: 1 }}
      className="BLACK absolute top-0 left-0 w-full h-full "
      version="1.1"
      viewBox="0 0 700 700"
      preserveAspectRatio="none"
    >
      <defs>
        <radialGradient id="gggrain-gradient" r="0.5">
          <stop offset="0%" stopColor="#080807"></stop>
          <stop offset="50%" stopColor="#080807"></stop>
          <stop offset="100%" stopColor="#080807ff"></stop>
        </radialGradient>
        <filter
          id="gggrain-filter"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          colorInterpolationFilters="sRGB"
        >
          <feTurbulence
            type="fractalNoise"
            baseFrequency="1.25"
            numOctaves="2"
            seed="2"
            stitchTiles="stitch"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            result="turbulence"
          ></feTurbulence>
          <feColorMatrix
            type="saturate"
            values="0"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="turbulence"
            result="colormatrix"
          ></feColorMatrix>
          <feComponentTransfer
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="colormatrix"
            result="componentTransfer"
          >
            <feFuncR type="linear" slope="3"></feFuncR>
            <feFuncG type="linear" slope="3"></feFuncG>
            <feFuncB type="linear" slope="3"></feFuncB>
          </feComponentTransfer>
          <feColorMatrix
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="componentTransfer"
            result="colormatrix2"
            type="matrix"
            values="1 0 0 0 0
      0 1 0 0 0
      0 0 1 0 0
      0 0 0 15 -7"
          ></feColorMatrix>
        </filter>
        <filter
          id="gggrain-saturate"
          x="-20%"
          y="-20%"
          width="140%"
          height="140%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feColorMatrix
            type="saturate"
            values="3"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            result="colormatrix"
          ></feColorMatrix>
        </filter>
      </defs>
      <g filter="url(#gggrain-saturate)">
        <rect width="100%" height="100%" fill="url(#gggrain-gradient)"></rect>
        <rect
          width="100%"
          height="100%"
          fill="transparent"
          filter="url(#gggrain-filter)"
          opacity="1"
          style={{ mixBlendMode: "overlay" }}
        ></rect>
      </g>
    </svg>
  );
};

export default Black;
