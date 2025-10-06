import React from "react";

function Infinite({ className }: { className?: string }) {
  return (
    <div>
      <svg
        className={className}
        width="33"
        height="33"
        viewBox="0 0 33 33"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
      >
        <rect width="33" height="33" fill="url(#pattern0_9_225)" />
        <defs>
          <pattern
            id="pattern0_9_225"
            patternContentUnits="objectBoundingBox"
            width="1"
            height="1"
            fill="currentColor"
          >
            <use xlinkHref="#image0_9_225" transform="scale(0.0078125)" />
          </pattern>
          <image
            id="image0_9_225"
            width="128"
            height="128"
            preserveAspectRatio="none"
            fill="currentColor"
            xlinkHref="data:image/png;base64,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"
          />
        </defs>
      </svg>
    </div>
  );
}

export default Infinite;
