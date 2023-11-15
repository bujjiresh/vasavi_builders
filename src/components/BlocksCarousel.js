import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Carousel from 'react-bootstrap/Carousel';
import tower2 from '../assets/images/BannerImageSample.png';
import FloorInfo from './FloorInfo/FloorInfo';
import { Tooltip } from 'react-tooltip';
import { renderToString } from 'react-dom/server';

import 'react-tooltip/dist/react-tooltip.css';
function BlocksCarousel(props) {
  const navigate = useNavigate();
  const [index, setIndex] = useState(props.id);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    navigate(`/tower/${selectedIndex}`);
  };
  const points1 = [
    {points:"696.2,819.62 651.52,818.69 615.09,817.93 613.32,803.53 694.72,803.53 ",type:"Block1",content:""},
{points:"694.72,803.53 613.32,803.53 611.52,788.81 693.36,788.81 ",type:"Block1",content:""},
{points:"693.36,788.81 611.52,788.81 609.8,774.84 692.07,774.84 ",type:"Block1",content:""},
{points:"692.07,774.84 609.8,774.84 607.71,757.79 690.5,757.79 ",type:"Block1",content:""},
{points:"690.5,757.79 607.71,757.79 605.78,742.01 689.04,742.01 ",type:"Block1",content:""},
{points:"689.04,742.01 605.78,742.01 604.04,727.82 687.73,727.82 ",type:"Block1",content:""},
{points:"687.73,727.82 604.04,727.82 602.31,713.74 686.44,713.74 ",type:"Block1",content:""},
{points:"686.44,713.74 602.31,713.74 600.32,697.54 684.94,697.54 ",type:"Block1",content:""},
{points:"684.94,697.54 600.32,697.54 598.6,683.46 683.64,683.46 ",type:"Block1",content:""},
{points:"683.64,683.46 598.6,683.46 596.49,666.31 682.06,666.31 ",type:"Block1",content:""},
{points:"682.06,666.31 596.49,666.31 594.6,650.85 680.64,650.85 ",type:"Block1",content:""},
{points:"680.64,650.85 594.6,650.85 592.69,635.28 679.2,635.28 ",type:"Block1",content:""},
{points:"679.2,635.28 592.69,635.28 590.57,618.02 677.61,618.02 ",type:"Block1",content:""},
{points:"677.61,618.02 590.57,618.02 588.74,603.09 676.23,603.09 ",type:"Block1",content:""},
{points:"676.23,603.09 588.74,603.09 586.49,584.78 674.54,584.78 ",type:"Block1",content:""},
{points:"674.54,584.78 586.49,584.78 584.7,570.16 673.19,570.16 ",type:"Block1",content:""},
{points:"673.19,570.16 584.7,570.16 582.49,552.16 671.53,552.16 ",type:"Block1",content:""},
{points:"671.53,552.16 582.49,552.16 580.4,535.12 669.96,535.12 ",type:"Block1",content:""},
{points:"669.96,535.12 580.4,535.12 578.14,516.69 668.26,516.69 ",type:"Block1",content:""},
{points:"668.26,516.69 578.14,516.69 575.91,498.48 666.58,498.48 ",type:"Block1",content:""},
{points:"666.58,498.48 575.91,498.48 573.78,481.12 664.98,481.12 ",type:"Block1",content:""},
{points:"664.98,481.12 573.78,481.12 571.57,463.12 663.32,463.12 ",type:"Block1",content:""},
{points:"663.32,463.12 571.57,463.12 569.24,444.16 661.58,444.16 ",type:"Block1",content:""},
{points:"661.58,444.16 569.24,444.16 566.96,425.53 659.86,425.53 ",type:"Block1",content:""},
{points:"659.86,425.53 566.96,425.53 564.69,407 658.15,407 ",type:"Block1",content:""},
{points:"658.15,407 564.69,407 562.41,388.47 656.44,388.47 ",type:"Block1",content:""},
{points:"656.44,388.47 562.41,388.47 559.98,368.67 654.61,368.67 ",type:"Block1",content:""},
{points:"654.61,368.67 559.98,368.67 557.66,349.72 652.87,349.72 ",type:"Block1",content:""},
{points:"652.87,349.72 557.66,349.72 555.31,330.55 651.1,330.55 ",type:"Block1",content:""},
{points:"651.1,330.55 555.31,330.55 552.69,309.16 649.13,309.16 ",type:"Block1",content:""},
{points:"649.13,309.16 552.69,309.16 550.18,288.73 647.24,288.73 ",type:"Block1",content:""},
{points:"647.24,288.73 550.18,288.73 547.73,268.72 645.4,268.72 ",type:"Block1",content:""},
{points:"645.4,268.72 547.73,268.72 545.19,248.07 643.49,248.07 ",type:"Block1",content:""},
{points:"643.49,248.07 545.19,248.07 542.47,225.84 641.44,225.84 ",type:"Block1",content:""},
{points:"641.44,225.84 542.47,225.84 539.75,203.71 639.4,203.71 ",type:"Block1",content:""},
{points:"639.4,203.71 539.75,203.71 537.02,181.47 637.35,181.47 ",type:"Block1",content:""},
{points:"637.35,181.47 537.02,181.47 534.32,159.45 635.32,159.45 ",type:"Block1",content:""},
{points:"635.32,159.45 534.32,159.45 531.63,137.53 633.3,137.53 ",type:"Block1",content:""},
{points:"633.3,137.53 531.63,137.53 528.85,114.87 631.21,114.87 ",type:"Block1",content:""},
{points:"631.21,114.87 528.85,114.87 526.05,92 629.1,92 ",type:"Block1",content:""},
  ]
  const points2 = [
{points:"779.81,793.05 777.09,792.97 775,803.52 711.72,804.22 710.31,787.15 779.48,787.15 ",type:"Block2"},
{points:"779.48,787.15 710.31,787.15 709.21,773.81 778.72,773.81 ",type:"Block2"},
{points:"778.72,773.81 709.21,773.81 708,759.2 777.89,759.2 ",type:"Block2"},
{points:"777.89,759.2 708,759.2 706.76,744.16 777.04,744.16 ",type:"Block2"},
{points:"777.04,744.16 706.76,744.16 705.65,730.75 776.28,730.75 ",type:"Block2"},
{points:"776.28,730.75 705.65,730.75 704.4,715.58 775.43,715.58 ",type:"Block2"},
{points:"775.43,715.58 704.4,715.58 703.15,700.47 774.57,700.47 ",type:"Block2"},
{points:"774.57,700.47 703.15,700.47 701.91,685.44 773.72,685.44 ",type:"Block2"},
{points:"773.72,685.44 701.91,685.44 700.63,669.98 772.85,669.98 ",type:"Block2"},
{points:"772.85,669.98 700.63,669.98 699.36,654.59 771.97,654.59 ",type:"Block2"},
{points:"771.97,654.59 699.36,654.59 698.03,638.49 771.06,638.49 ",type:"Block2"},
{points:"771.06,638.49 698.03,638.49 696.71,622.61 770.16,622.61 ",type:"Block2"},
{points:"770.16,622.61 696.71,622.61 695.48,607.65 769.32,607.65 ",type:"Block2"},
{points:"769.32,607.65 695.48,607.65 694.1,590.92 768.37,590.92 ",type:"Block2"},
{points:"768.37,590.92 694.1,590.92 692.71,574.19 767.42,574.19 ",type:"Block2"},
{points:"767.42,574.19 692.71,574.19 691.35,557.74 766.49,557.74 ",type:"Block2"},
{points:"766.49,557.74 691.35,557.74 689.92,540.38 765.51,540.38 ",type:"Block2"},
{points:"765.51,540.38 689.92,540.38 688.58,524.21 764.6,524.21 ",type:"Block2"},
{points:"764.6,524.21 688.58,524.21 687.12,506.56 763.6,506.56 ",type:"Block2"},
{points:"763.6,506.56 687.12,506.56 685.72,489.5 762.63,489.5 ",type:"Block2"},
{points:"762.63,489.5 685.72,489.5 684.24,471.62 761.62,471.62 ",type:"Block2"},
{points:"761.62,471.62 684.24,471.62 682.79,454.12 760.63,454.12 ",type:"Block2"},
{points:"760.63,454.12 682.79,454.12 681.33,436.4 759.63,436.4 ",type:"Block2"},
{points:"759.63,436.4 681.33,436.4 679.79,417.84 758.58,417.84 ",type:"Block2"},
{points:"758.58,417.84 679.79,417.84 678.29,399.69 757.55,399.69 ",type:"Block2"},
{points:"757.55,399.69 678.29,399.69 676.74,380.85 756.48,380.85 ",type:"Block2"},
{points:"756.48,380.85 676.74,380.85 675.19,362.14 755.42,362.14 ",type:"Block2"},
{points:"755.42,362.14 675.19,362.14 673.5,341.67 754.27,341.67 ",type:"Block2"},
{points:"754.27,341.67 673.5,341.67 671.94,322.82 753.2,322.82 ",type:"Block2"},
{points:"753.2,322.82 671.94,322.82 670.34,303.48 752.1,303.48 ",type:"Block2"},
{points:"752.1,303.48 670.34,303.48 668.71,283.65 750.98,283.65 ",type:"Block2"},
{points:"750.98,283.65 668.71,283.65 667.04,263.53 749.84,263.53 ",type:"Block2"},
{points:"749.84,263.53 667.04,263.53 665.35,242.99 748.68,242.99 ",type:"Block2"},
{points:"748.68,242.99 665.35,242.99 663.64,222.31 747.51,222.31 ",type:"Block2"},
{points:"746.31,201.13 661.89,201.13 660.18,180.52 745.15,180.52 ",type:"Block2"},
{points:"745.15,180.52 660.18,180.52 658.39,158.85 743.92,158.85 ",type:"Block2"},
{points:"743.92,158.85 658.39,158.85 656.54,136.4 742.65,136.4 ",type:"Block2"},
{points:"741.43,114.87 654.76,114.87 652.87,92 731.48,92 740.25,94.01 ",type:"Block2"},
{points:"742.65,136.4 656.54,136.4 654.76,114.87 741.43,114.87 ",type:"Block2"},
{points:"747.51,222.31 663.64,222.31 661.89,201.13 746.31,201.13 ",type:"Block2"},
  ]
  const points3 = [
    {points:"863.71,781.08 857.04,782.46 856.08,792.94 793.61,792.94 792.83,778.01 863.63,778.01 ",type:"Block3"},
{points:"863.63,778.01 792.83,778.01 792.09,763.82 863.27,763.82 ",type:"Block3"},
{points:"863.27,763.82 792.09,763.82 791.36,749.85 862.91,749.85 ",type:"Block3"},
{points:"862.91,749.85 791.36,749.85 790.6,735.24 862.54,735.24 ",type:"Block3"},
{points:"862.54,735.24 790.6,735.24 789.84,720.62 862.16,720.62 ",type:"Block3"},
{points:"862.16,720.62 789.84,720.62 789.09,706.33 861.8,706.33 ",type:"Block3"},
{points:"861.8,706.33 789.09,706.33 788.34,691.82 861.42,691.82 ",type:"Block3"},
{points:"861.42,691.82 788.34,691.82 787.56,676.89 861.04,676.89 ",type:"Block3"},
{points:"861.04,676.89 787.56,676.89 786.77,661.75 860.65,661.75 ",type:"Block3"},
{points:"860.65,661.75 786.77,661.75 785.98,646.54 860.26,646.54 ",type:"Block3"},
{points:"860.26,646.54 785.98,646.54 785.14,630.55 859.86,630.55 ",type:"Block3"},
{points:"859.86,630.55 785.14,630.55 784.34,615.13 859.46,615.13 ",type:"Block3"},
{points:"859.46,615.13 784.34,615.13 783.51,599.28 859.05,599.28 ",type:"Block3"},
{points:"859.05,599.28 783.51,599.28 782.71,583.82 858.66,583.82 ",type:"Block3"},
{points:"858.66,583.82 782.71,583.82 781.84,567.2 858.23,567.2 ",type:"Block3"},
{points:"858.23,567.2 781.84,567.2 780.97,550.47 857.8,550.47 ",type:"Block3"},
{points:"857.8,550.47 780.97,550.47 780.11,534.06 857.38,534.06 ",type:"Block3"},
{points:"857.38,534.06 780.11,534.06 779.22,517.01 856.95,517.01 ",type:"Block3"},
{points:"856.95,517.01 779.22,517.01 778.37,500.6 856.53,500.6 ",type:"Block3"},
{points:"856.53,500.6 778.37,500.6 777.43,482.71 856.07,482.71 ",type:"Block3"},
{points:"856.07,482.71 777.43,482.71 776.57,466.19 855.65,466.19 ",type:"Block3"},
{points:"855.65,466.19 776.57,466.19 775.63,448.08 855.18,448.08 ",type:"Block3"},
{points:"855.18,448.08 775.63,448.08 774.72,430.61 854.74,430.61 ",type:"Block3"},
{points:"854.74,430.61 774.72,430.61 773.75,412.08 854.26,412.08 ",type:"Block3"},
{points:"854.26,412.08 773.75,412.08 772.82,394.19 853.8,394.19 ",type:"Block3"},
{points:"853.8,394.19 772.82,394.19 771.84,375.45 853.32,375.45 ",type:"Block3"},
{points:"853.32,375.45 771.84,375.45 770.91,357.66 852.87,357.66 ",type:"Block3"},
{points:"852.87,357.66 770.91,357.66 769.9,338.28 852.37,338.28 ",type:"Block3"},
{points:"852.37,338.28 769.9,338.28 768.92,319.33 851.89,319.33 ",type:"Block3"},
{points:"851.89,319.33 768.92,319.33 767.88,299.53 851.38,299.53 ",type:"Block3"},
{points:"851.38,299.53 767.88,299.53 766.9,280.68 850.9,280.68 ",type:"Block3"},
{points:"850.9,280.68 766.9,280.68 765.87,260.88 850.39,260.88 ",type:"Block3"},
{points:"850.39,260.88 765.87,260.88 764.8,240.45 849.87,240.45 ",type:"Block3"},
{points:"849.87,240.45 764.8,240.45 763.86,222.31 849.4,222.31 ",type:"Block3"},
{points:"849.4,222.31 763.86,222.31 762.72,200.53 848.84,200.53 ",type:"Block3"},
{points:"848.84,200.53 762.72,200.53 761.64,179.78 848.31,179.78 ",type:"Block3"},
{points:"848.31,179.78 761.64,179.78 760.55,158.85 847.78,158.85 ",type:"Block3"},
{points:"847.78,158.85 760.55,158.85 759.46,138.06 847.24,138.06 ",type:"Block3"},
{points:"847.24,138.06 759.46,138.06 758.26,114.87 846.65,114.87 ",type:"Block3"},
{points:"846.65,114.87 758.26,114.87 757.19,94.44 836.39,93.59 846.24,98.88 ",type:"Block3"},
  ]
  const handlePathClick = (index,type) => {
      navigate(`/floor/${type}/${index}`);
   };
   const ordinalSuffix = (number) => {
    const suffixes = ['th', 'st', 'nd', 'rd'];
    const v = number % 100;
  
    return number + (suffixes[(v - 20) % 10] || suffixes[v] || suffixes[0]);
  };
  const NumberWithSuffix = ({ number }) => {
    const numberWithSuffix = ordinalSuffix(number);
  
    return (
      <div>
        <p>{numberWithSuffix}</p>
      </div>
    );
  };
  const handledataTooltip = (index,item) => {
    return (  <div>
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
      <NumberWithSuffix number={index + 1} />
      Floor
     
    </div>
    <hr className='mt-1 mb-1'/><div  className="pt-1"> 5BHK | 11333 Sq.ft
</div>
    </div>
    );
    };

  return (<div>
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false}  interval={null}>      
    <Carousel.Item key={index + 1}>
      <img alt="" src={tower2} />
      <svg version="1.1" className='bannersvg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1920 979" xmlSpace="preserve">
         {points1.map((item,index) => {
          return <polygon
          key={index+1} 
          className="st1"
          points={item.points}
          data-tooltip-id="my-tooltip"  data-tooltip-html={renderToString(handledataTooltip(index, item))} 
          onClick={() => handlePathClick((index + 1),item.type)}
        />
      })}
{points2.map((item,index) => {
          // Render type 1 items with index
          return <polygon
          key={index}
          className="st1"
          points={item.points}
          data-tooltip-id="my-tooltip"  data-tooltip-html={renderToString(handledataTooltip(index, item))} 
          onClick={() => handlePathClick(index,item.type)}
        />
      })}
      {points3.map((item,index) => {
          // Render type 1 items with index
          return <polygon
          key={index}
          className="st1"
          points={item.points}
          data-tooltip-id="my-tooltip"  data-tooltip-html={renderToString(handledataTooltip(index, item))} 
          onClick={() => handlePathClick(index,item.type)}
        />
      })}
</svg>
      </Carousel.Item>
      <Carousel.Item key={index + 1}>
      <img alt="" src={tower2} />
      <svg version="1.1" className='bannersvg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1920 979" xmlSpace="preserve">
         {points1.map((item,index) => {
          return <polygon
          key={index+1} 
          className="st1"
          points={item.points}
          data-tooltip-id="my-tooltip"  data-tooltip-html={renderToString(handledataTooltip(index, item))} 
          onClick={() => handlePathClick((index + 1),item.type)}
        />
      })}
{points2.map((item,index) => {
          // Render type 1 items with index
          return <polygon
          key={index}
          className="st1"
          points={item.points}
          data-tooltip-id="my-tooltip"  data-tooltip-html={renderToString(handledataTooltip(index, item))} 
          onClick={() => handlePathClick(index,item.type)}
        />
      })}
      {points3.map((item,index) => {
          // Render type 1 items with index
          return <polygon
          key={index}
          className="st1"
          points={item.points}
          data-tooltip-id="my-tooltip"  data-tooltip-html={renderToString(handledataTooltip(index, item))} 
          onClick={() => handlePathClick(index,item.type)}
        />
      })}
</svg>
      </Carousel.Item>
      <Carousel.Item key={index + 1}>
      <img alt="" src={tower2} />
      <svg version="1.1" className='bannersvg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1920 979" xmlSpace="preserve">
         {points1.map((item,index) => {
          return <polygon
          key={index+1} 
          className="st1"
          points={item.points}
          data-tooltip-id="my-tooltip"  data-tooltip-html={renderToString(handledataTooltip(index, item))} 
          onClick={() => handlePathClick((index + 1),item.type)}
        />
      })}
{points2.map((item,index) => {
          // Render type 1 items with index
          return <polygon
          key={index}
          className="st1"
          points={item.points}
          data-tooltip-id="my-tooltip"  data-tooltip-html={renderToString(handledataTooltip(index, item))} 
          onClick={() => handlePathClick(index,item.type)}
        />
      })}
      {points3.map((item,index) => {
          // Render type 1 items with index
          return <polygon
          key={index}
          className="st1"
          points={item.points}
          data-tooltip-id="my-tooltip"  data-tooltip-html={renderToString(handledataTooltip(index, item))} 
          onClick={() => handlePathClick(index,item.type)}
        />
      })}
</svg>
      </Carousel.Item>
      <Carousel.Item key={index + 1}>
      <img alt="" src={tower2} />
      <svg version="1.1" className='bannersvg' id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
	 viewBox="0 0 1920 979" xmlSpace="preserve">
         {points1.map((item,index) => {
          return <polygon
          key={index+1} 
          className="st1"
          points={item.points}
          data-tooltip-id="my-tooltip"  data-tooltip-html={renderToString(handledataTooltip(index, item))} 
          onClick={() => handlePathClick((index + 1),item.type)}
        />
      })}
{points2.map((item,index) => {
          // Render type 1 items with index
          return <polygon
          key={index}
          className="st1"
          points={item.points}
          data-tooltip-id="my-tooltip"  data-tooltip-html={renderToString(handledataTooltip(index, item))} 
          onClick={() => handlePathClick(index,item.type)}
        />
      })}
      {points3.map((item,index) => {
          // Render type 1 items with index
          return <polygon
          key={index}
          className="st1"
          points={item.points}
          data-tooltip-id="my-tooltip"  data-tooltip-html={renderToString(handledataTooltip(index, item))} 
          onClick={() => handlePathClick(index,item.type)}
        />
      })}
</svg>
      </Carousel.Item>
    </Carousel>
    <Tooltip id="my-tooltip" />      
     <FloorInfo type={'Tower'} id={index}/></div>
  );
}

export default BlocksCarousel;