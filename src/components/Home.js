import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import ProjectInfo from './projectInfo/ProjectInfo';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';
import { renderToString } from 'react-dom/server';
const Home = () => {
  const ref = useRef(null);
  const navigate = useNavigate();
  const handlePathClick = (index) => {
    navigate(`/tower/${index}`);
  };
  // data representing SVG paths
  const paths = [
    { d: "m 347.06279,73.867458 -4.00629,-0.625995 -0.20895,-0.526203 -19.95759,-3.477497 -0.41572,0.558325 -1.69156,-0.429483 -2.16421,1.832355 -5.3556,-0.967643 -19.28655,15.730053 -0.29774,6.514527 -12.23873,10.476323 -0.24291,8.7748 -3.2753,114.88831 -1.71564,30.30296 -4.73558,6.50504 v 0.42257 l 1.15971,0.51647 v 1.26772 l 12.06139,5.64318 0.65485,0.51629 0.73689,0.58099 0.2521,-0.48415 5.9471,3.02428 23.97858,-49.26716 -1.11877,-0.37556 z", content: "Vasavi Tower1" },
    { d: "m 281.19694,111.72702 -22.35151,-5.82765 -11.01768,8.28154 0.38956,3.57429 h 0.356 l 4.95867,95.66893 0.70324,0.61127 0.19535,1.80778 23.49107,10.77215 z", content: "Tower2" },
    { d: "m 239.37169,93.189413 -12.36274,-3.182539 -46.73868,27.659896 27.87842,106.79209 -0.3114,0.23323 -2.46521,2.79881 1.81647,0.93293 0.23355,1.55489 h 0.62278 l 0.38924,0.41464 0.64875,-0.5183 0.67468,0.77745 10.04585,4.77675 8.50681,-9.86721 2.08453,1.06626 0.55551,-0.68001 -0.0192,-0.12001 1.56821,-1.77621 12.11866,-14.83478 v -2.80193 l -0.28214,-0.48525 3.04507,-3.64389 v -1.06902 l 1.07575,-0.7808 -0.31824,-1.98025 1.32193,-0.6112 -0.048,-0.55033 -2.35837,-0.9955 z", content: "Tower3" },
    { d: "m 266.81475,231.9758 -0.27993,-1.6287 -0.40397,-1.01225 -0.99157,-1.26164 -0.61698,-0.3741 -0.79807,-0.0735 -9.5094,0.6502 -0.16495,0.33694 -14.83763,-7.36176 -0.98147,1.15836 -0.7584,-0.40097 -1.78448,2.40583 -2.46226,-1.18476 -0.72636,0.82268 -1.54903,1.89622 0.40056,2.50682 -1.7629,2.68273 1.23015,10.2348 2.21278,1.30323 -0.34043,1.30322 14.30538,6.52018 0.48463,-0.65582 3.78836,1.92768 0.32472,1.17102 4.64472,2.57631 3.44953,0.33752 3.87436,-1.13359 2.15071,-1.94761 1.60391,-1.76559 0.67438,-2.07502 0.28359,-2.28587 -0.40651,-0.81194 -0.46195,-0.5536 -1.0902,-0.51669 z", content: "Tower4" },

  ];
  const handledataTooltip = (index, item) => {
    return (<div>
      <div className="d-flex align-items-center mt-0 mb-2">
        <div className="me-2">
          <svg width="20" height="20" viewBox="0 0 18 22" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
            <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
              <g transform="translate(-701.000000, -295.000000)" stroke="#FFFFFF">
                <g transform="translate(702.000000, 296.000000)">
                  <path d="M16,8.18181811 C16,14.5454545 8,20 8,20 C8,20 0,14.5454545 0,8.18181811 C0,3.66312472 3.58172205,0 8,0 C12.418278,0 16,3.66312472 16,8.18181811 L16,8.18181811 Z"></path>
                  <circle cx="8" cy="7.5" r="2.5"></circle>
                </g>
              </g>
            </g>
          </svg>
        </div>
        {index === 4 ? 'Vasavi Club House' : 'Vasavi Tower ' + index
        }

      </div>
      {index < 4 && (
        <>
          <hr className="mt-1 mb-1" />
          <div className="pt-1">UpTo 45 FLOORS</div>
        </>
      )}
    </div>
    );
  };
  return (
    <div className='landing-page' ref={ref}>
      <img alt="" src="https://cbuildfiles.blob.core.windows.net/mangatram-de-blueoak/propertyimages/2023-01-04/aaa55ec1-6af8-40b3-b530-8a282329ef7fAerial.svg"></img>
      <svg className='bannersvg' preserveAspectRatio="xMidYMid slice" viewBox="0 0 507.99999 259.02709" enableBackground="new 0 0 507 259">
        <g transform="translate(0,-37.972908)">
          {paths.map((path, index) => (
            <path
              key={index + 1}
              d={path.d}
              id={index}
              data-tooltip-id="my-tooltip" data-tooltip-html={renderToString(handledataTooltip((index + 1), path))}
              onClick={() => handlePathClick(index + 1)}
            />
          ))}
        </g></svg>
      <Tooltip id="my-tooltip" place="left" />
      <ProjectInfo />
    </div>

  );
};

export default Home;
