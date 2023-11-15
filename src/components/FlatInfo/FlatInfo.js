import React, { useState } from 'react';
import './FlatInfo.css';
const FlatInfo = (props) => {
  // const { id ,type } = useParams();
  const [boxMinimizeclassName, setBoxMinimizeclassName] = useState('');
  const [minimizeclassName, setMinimizeclassName] = useState('minims-flat');
  const setMinimize = () => {
    if (boxMinimizeclassName !== 'minims-card') {
      setBoxMinimizeclassName('minims-card');
      setMinimizeclassName('minims-selection');
    }
    else {
      setBoxMinimizeclassName('');
      setMinimizeclassName('minims-flat');
    }

  };

  return (
    <div>
      <div className={`FlatInfoData ${boxMinimizeclassName}`}>
        <div className="d-flex justify-content-between ">
          <div className="flat-header ">
            <button className="btn btn-link p-0">
              <cs-icon className="block mr-2 " >
                <svg width="100%" height="100%" viewBox="0 0 10 20" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                  <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                    <g id="3_Block-Details-1" transform="translate(-1014.000000, -438.000000)" fill="#FFFFFF" fillRule="nonzero">
                      <g id="Group-2" transform="translate(994.000000, 418.000000)">
                        <g id="Block" transform="translate(20.000000, 20.000000)">
                          <path d="M9.62962963,19.2592593 L9.62962963,0.740740741 L9.62962963,0 L0,0 L0,0.740740741 L0,19.2592593 L0,20 L9.62962963,20 L9.62962963,19.2592593 Z M4.07407407,19.2592593 L4.07407407,17.037037 L5.55555556,17.037037 L5.55555556,19.2592593 L4.07407407,19.2592593 Z M6.2962963,19.2592593 L6.2962963,16.6666667 C6.2962963,16.4621168 6.13047583,16.2962963 5.92592593,16.2962963 L3.7037037,16.2962963 C3.4991538,16.2962963 3.33333333,16.4621168 3.33333333,16.6666667 L3.33333333,19.2592593 L0.740740741,19.2592593 L0.740740741,0.740740741 L8.88888889,0.740740741 L8.88888889,19.2592593 L6.2962963,19.2592593 Z" id="Shape"></path>
                          <path d="M4.07407407,5.18518519 L1.85185185,5.18518519 C1.64730194,5.18518519 1.48148148,5.35100565 1.48148148,5.55555556 L1.48148148,7.77777778 C1.48148148,7.98232769 1.64730194,8.14814815 1.85185185,8.14814815 L4.07407407,8.14814815 C4.27862398,8.14814815 4.44444444,7.98232769 4.44444444,7.77777778 L4.44444444,5.55555556 C4.44444444,5.35100565 4.27862398,5.18518519 4.07407407,5.18518519 Z M3.7037037,7.40740741 L2.22222222,7.40740741 L2.22222222,5.92592593 L3.7037037,5.92592593 L3.7037037,7.40740741 Z" id="Shape"></path>
                          <path d="M7.77777778,5.18518519 L5.55555556,5.18518519 C5.35100565,5.18518519 5.18518519,5.35100565 5.18518519,5.55555556 L5.18518519,7.77777778 C5.18518519,7.98232769 5.35100565,8.14814815 5.55555556,8.14814815 L7.77777778,8.14814815 C7.98232769,8.14814815 8.14814815,7.98232769 8.14814815,7.77777778 L8.14814815,5.55555556 C8.14814815,5.35100565 7.98232769,5.18518519 7.77777778,5.18518519 Z M7.40740741,7.40740741 L5.92592593,7.40740741 L5.92592593,5.92592593 L7.40740741,5.92592593 L7.40740741,7.40740741 Z" id="Shape"></path>
                          <path d="M4.07407407,8.88814815 L1.85185185,8.88814815 C1.64730194,8.88814815 1.48148148,9.05396861 1.48148148,9.25851852 L1.48148148,11.4807407 C1.48148148,11.6852906 1.64730194,11.8511111 1.85185185,11.8511111 L4.07407407,11.8511111 C4.27862398,11.8511111 4.44444444,11.6852906 4.44444444,11.4807407 L4.44444444,9.25851852 C4.44444444,9.05396861 4.27862398,8.88814815 4.07407407,8.88814815 Z M3.7037037,11.1103704 L2.22222222,11.1103704 L2.22222222,9.62888889 L3.7037037,9.62888889 L3.7037037,11.1103704 Z" id="Shape"></path>
                          <path d="M7.77777778,8.88814815 L5.55555556,8.88814815 C5.35100565,8.88814815 5.18518519,9.05396861 5.18518519,9.25851852 L5.18518519,11.4807407 C5.18518519,11.6852906 5.35100565,11.8511111 5.55555556,11.8511111 L7.77777778,11.8511111 C7.98232769,11.8511111 8.14814815,11.6852906 8.14814815,11.4807407 L8.14814815,9.25851852 C8.14814815,9.05396861 7.98232769,8.88814815 7.77777778,8.88814815 Z M7.40740741,11.1103704 L5.92592593,11.1103704 L5.92592593,9.62888889 L7.40740741,9.62888889 L7.40740741,11.1103704 Z" id="Shape"></path>
                          <path d="M4.07407407,1.48148148 L1.85185185,1.48148148 C1.64730194,1.48148148 1.48148148,1.64730194 1.48148148,1.85185185 L1.48148148,4.07407407 C1.48148148,4.27862398 1.64730194,4.44444444 1.85185185,4.44444444 L4.07407407,4.44444444 C4.27862398,4.44444444 4.44444444,4.27862398 4.44444444,4.07407407 L4.44444444,1.85185185 C4.44444444,1.64730194 4.27862398,1.48148148 4.07407407,1.48148148 Z M3.7037037,3.7037037 L2.22222222,3.7037037 L2.22222222,2.22222222 L3.7037037,2.22222222 L3.7037037,3.7037037 Z" id="Shape"></path>
                          <path d="M7.77777778,1.48148148 L5.55555556,1.48148148 C5.35100565,1.48148148 5.18518519,1.64730194 5.18518519,1.85185185 L5.18518519,4.07407407 C5.18518519,4.27862398 5.35100565,4.44444444 5.55555556,4.44444444 L7.77777778,4.44444444 C7.98232769,4.44444444 8.14814815,4.27862398 8.14814815,4.07407407 L8.14814815,1.85185185 C8.14814815,1.64730194 7.98232769,1.48148148 7.77777778,1.48148148 Z M7.40740741,3.7037037 L5.92592593,3.7037037 L5.92592593,2.22222222 L7.40740741,2.22222222 L7.40740741,3.7037037 Z" id="Shape"></path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></cs-icon> Block : <span className="ml-2 "> Canopus </span>
              <span className="dropdownicon ms-2 " ><svg width="100%" height="100%" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
                <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                  <g transform="translate(-1096.000000, -133.000000)" fill="#FFFFFF">
                    <g transform="translate(994.000000, 104.000000)">
                      <g transform="translate(0.000000, 15.000000)">
                        <polygon transform="translate(106.000000, 16.500000) scale(1, -1) translate(-106.000000, -16.500000) " points="106 14 110 19 102 19"></polygon>
                      </g>
                    </g>
                  </g>
                </g>
              </svg></span></button></div>
          <div className="flat-header ml-4 ">
            <button className="btn btn-link p-0"><cs-icon className="block mr-2 " ><svg width="20" height="20" viewBox="0 0 16 18" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd" strokeLinecap="round" strokeLinejoin="round">
                <g id="5_Floor-Details-1" transform="translate(-1014.000000, -480.000000)" stroke="#FFFFFF">
                  <g id="layers" transform="translate(1014.000000, 481.000000)">
                    <polygon id="Path" points="8 0 0 4 8 8 16 4"></polygon>
                    <polyline id="Path" points="0 12 8 16 16 12"></polyline>
                    <polyline id="Path" points="0 8 8 12 16 8"></polyline>
                  </g>
                </g>
              </g>
            </svg></cs-icon> Floor : <span className="ms-2 "> 44 </span><span className="dropdownicon ms-2"><svg width="100%" height="100%" viewBox="0 0 8 5" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" fit="" preserveAspectRatio="xMidYMid meet" focusable="false">
              <g stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
                <g transform="translate(-1096.000000, -133.000000)" fill="#FFFFFF">
                  <g transform="translate(994.000000, 104.000000)">
                    <g transform="translate(0.000000, 15.000000)">
                      <polygon transform="translate(106.000000, 16.500000) scale(1, -1) translate(-106.000000, -16.500000) " points="106 14 110 19 102 19"></polygon>
                    </g>
                  </g>
                </g>
              </g>
            </svg></span></button></div>
        </div>
        <hr className="mt-3 mb-2 " />
        <div className="flat-view ">
          <div className="head-shape mb-2 d-flex ">
            <div className="">Canopus Block <span className="ml-1 mr-1 ">|</span> Floor 44 <span className="ml-1 mr-1 ">|</span> 4402</div>
          </div>
          <div className="fs-n8 mb-2 ml-2 "> 5BHK <span className="ml-1 mr-1 ">|</span> 11333 Sq.ft <span className="ml-1 mr-1 ">|</span> East Facing </div>

          <hr className="mt-3 mb-2 " />
          <div className="build-details ">
            <div className="head-shape mb-2 "> Specifications </div>
            <div className="ml-3 build-details-list smooth-scroll"><
              div className="d-flex card-row"><p> Entrance Foyer/Drawing Room </p><p> 23'9"x19'5"</p></div>
              <div className="d-flex card-row"><p> Dining </p><p> 24'10"x24'0"</p></div>
              <div className="d-flex card-row"><p> Dry Kitchen </p><p> 15'2"x17'5"</p></div>
              <div className="d-flex card-row"><p> Kitchen </p><p> 15'2"x21'6"</p></div>
              <div className="d-flex card-row"><p> Store </p><p> 8'2"x21'6"</p></div>
              <div className="d-flex card-row"><p> Wide Utility </p><p> 11'0"</p></div>
              <div className="d-flex card-row"><p> Servant Room </p><p> 7'4"x6'0"</p></div>
              <div className="d-flex card-row"><p> Master BedRoom Lounge </p><p> 13'6"x15'9"</p></div>
              <div className="d-flex card-row"><p> Informal Lounge </p><p> 21'4"x22'0"</p></div>
              <div className="d-flex card-row"><p> Puja </p><p> 6'0"x8'0"</p></div>
              <div className="d-flex card-row"><p> Formal Living </p><p> 32'2"x20'8"</p></div>
              <div className="d-flex card-row"><p> Deck </p><p> 22'3"x24'8"</p></div>
              <div className="d-flex card-row"><p> Home Theater/Multimedia Room </p><p> 17'9"x18'4"</p></div>
              <div className="d-flex card-row"><p> Lobby </p><p> 7'10"x38'0"</p></div>
              <div className="d-flex card-row"><p> Exclusive Lift </p><p> 6'6"x8'0"</p></div>
              <div className="d-flex card-row"><p> Service Lift </p><p> 6'6"x8'0"</p></div>
              <div className="d-flex card-row"><p> PWD </p><p> 5'0"x7'5"</p></div>
              <div className="d-flex card-row"><p> Dress-1 </p><p> 6'0"x7'5"</p></div>
              <div className="d-flex card-row"><p> Dress-2 </p><p> 11'4"x8'0"</p></div>
              <div className="d-flex card-row"><p> Dress-3 </p><p> 8'2"x10'4"</p></div>
              <div className="d-flex card-row"><p> Bedroom-1 </p><p> 14'9"x21'6"</p></div>
              <div className="d-flex card-row"><p> Bedroom-2 </p><p> 13'8"x14'7"</p></div>
              <div className="d-flex card-row"><p> Bedroom-3 </p><p> 16'7"x15'5"</p></div>
              <div className="d-flex card-row"><p> M.Bedroom-5 </p><p> 28'9"x15'9"</p></div>
              <div className="d-flex card-row"><p> Bedroom-4 </p><p> 14'5"x15'0"</p></div>
              <div className="d-flex card-row"><p> Toilet-1 </p><p> 7'10"x10'10"</p></div>
              <div className="d-flex card-row"><p> Toilet-2 </p><p> 10'0"x7'10"</p></div>
              <div className="d-flex card-row"><p> Toilet-3 </p><p> 10'0"x7'5"</p></div>
              <div className="d-flex card-row"><p> Toilet-4 </p><p> 7'0"x8'9"</p></div></div>
          </div>
          <hr className="mt-3 mb-2 " />
        </div>
        <div className="actions "><button type="button" className=""> Add to Compare </button><button type="button" className="compare-count "> Compare <span className=""> 0 </span></button><button type="button" className=""> 2D View </button><button type="button" className=""> Request Price </button></div>
      </div>
      <div className={minimizeclassName} onClick={() => setMinimize()}>
        <svg version="1.1" width="100%" height="100%" x="0" y="0" viewBox="0 0 121.805 121.804" className="" fit="" preserveAspectRatio="xMidYMid meet">
          <g>
            <g>
              <path d="M7.308,68.211h107.188c4.037,0,7.309-3.272,7.309-7.31c0-4.037-3.271-7.309-7.309-7.309H7.308    C3.272,53.593,0,56.865,0,60.902C0,64.939,3.272,68.211,7.308,68.211z" fill="#ffffff" data-original="#000000" ></path>
            </g> </g>
        </svg></div>


    </div>
  );
};

export default FlatInfo;