import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function BlocksCarousel(props) {
  const [index, setIndex] = useState(props.id);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} autoPlay={false}>
      <Carousel.Item>
      <img alt="" src="https://cbuildfiles.blob.core.windows.net/mangatram-de-blueoak/propertyimages/2023-01-04/9a560a3a-b1c8-4384-9910-2e9a28b3e766BLOCK-1.svg" />
      </Carousel.Item>
      <Carousel.Item>
      <img alt="" src="https://cbuildfiles.blob.core.windows.net/mangatram-de-blueoak/propertyimages/2023-01-04/6fb7ad10-335b-4305-ad7d-342932d960a7block-2.svg" />
      
      </Carousel.Item>
      <Carousel.Item>
              <img alt="" src="https://cbuildfiles.blob.core.windows.net/mangatram-de-blueoak/propertyimages/2023-01-04/37797314-569a-4000-883b-315e8a8e13bdblock-3.svg" />
       </Carousel.Item>
       <Carousel.Item>
              <img alt="" src="https://cbuildfiles.blob.core.windows.net/mangatram-de-blueoak/propertyimages/2023-01-05/38c36b5a-d459-47a7-b5e5-8bdf881d9aacclubhouse.svg"/>
       </Carousel.Item>
    </Carousel>
  );
}

export default BlocksCarousel;