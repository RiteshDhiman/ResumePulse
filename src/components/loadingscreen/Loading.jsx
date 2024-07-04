import React from "react";
import "../loadingscreen/loading.scss";

const Loading = () => {
  return (
    <div>
      <div className="intro-block">
        <div className="monitor">
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 500 200"
            style={{ enableBackground: "new 0 0 500 200" }}
            xmlSpace="preserve"
          >
            <g>
              <polyline
                className="ekg"
                points="486.6,113.8 328.2,113.8 310.3,110.3 296,70.7 246.8,127.4 241.6,120.2 233.9,166.4 227,27.6 
                  213.2,118.3 211.8,112.3 205.1,126.1 198.2,108.5 194.1,124.4 184.5,92.9 174.1,113 4.3,113"
              />
            </g>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Loading;
