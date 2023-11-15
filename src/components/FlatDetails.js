import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import Modal from 'react-bootstrap/Modal';
import FlatInfo from './FlatInfo/FlatInfo';
const paths = [
  { d: "m 277.14372,482.44929 -2.37243,-16.127 -2.35886,-0.78549 -2.35886,-22.10692 -18.42151,-7.74308 2.48202,20.17844 -35.93972,-15.83508 -93.7561,71.59712 0,2.92768 3.78753,2.23713 0.58063,3.01055 47.0476,21.86359 35.80611,-28.72312 1.1541,0.65949 -0.57254,-7.91585 1.72341,-0.83975 22.52581,11.04108 40.67269,-33.43879 z" },
  { d: "m 495.61517,415.34112 -27.79989,24.96977 13.23506,5.24333 0,-5.12935 21.56413,8.09299 0,6.15524 48.82857,22.46759 -0.0989,-19.52454 27.65582,11.7595 0.92926,20.08754 24.68204,11.60439 0,-21.06404 52.76845,20.73665 -0.18109,7.99655 8.83764,3.55458 10.83032,-10.8362 0,-13.04999 -181.25185,-73.06401 z" },
  { d: "m 821.70396,552.335 0.16741,-2.63439 -88.00426,-33.51096 -16.36834,17.5041 -0.43002,18.10245 78.39263,33.37515 1.87556,-16.70836 1.53441,-2.21629 8.44725,3.39008 14.38499,-17.30178 z" },
  { d: "m 141.13267,466.28606 a 32.388459,32.380338 0 1 0 -64.776911,0 32.388459,32.380338 0 1 0 64.776911,0 z" },
  { d: "m 649.60835,413.0401 a 32.388459,32.380338 0 1 0 -64.77689,0 32.388459,32.380338 0 1 0 64.77689,0 z" },
  { d: "m 828.64378,477.45564 a 32.38847,32.380349 0 1 0 -64.77694,0 32.38847,32.380349 0 0 0 64.77694,0 z" },];


const FlatDetails = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
    navigate(`/floor/flat/${selectedIndex}`);
  };
  const handlePathClick = (index) => {
    setShow(true);
  };
  return (
    <div className='flatdetails pt-5'>
      <Container>
        <Row className="justify-content-md-center">
          <Col xs lg="8">
            <Carousel activeIndex={index} onSelect={handleSelect} indicators={false} interval={null}>
              <Carousel.Item>
                <img alt="" src="https://cbuildfiles.blob.core.windows.net/mangatram-de-blueoak/propertyimages/2023-02-02/fbc30418-2b1d-455c-b1f5-d733d3856b6dT4.png" height="500" />
                <svg className='bannersvg flatsvg' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 970.00001 800.00001" enableBackground="new 0 0 970 800" preserveAspectRatio="xMidYMid slice">
                  <g transform="translate(0,-252.36214)">
                    {paths.map((item, index) => (
                      <path
                        key={index}
                        d={item.d}
                        id={index}
                        onClick={() => handlePathClick(index)}
                      />
                    ))}
                  </g></svg>
              </Carousel.Item>
              <Carousel.Item>
                <img alt="" src="https://cbuildfiles.blob.core.windows.net/mangatram-de-blueoak/propertyimages/2023-02-02/fbc30418-2b1d-455c-b1f5-d733d3856b6dT4.png" height="500" />
                <svg className='bannersvg flatsvg' version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 970.00001 800.00001" enableBackground="new 0 0 970 800" preserveAspectRatio="xMidYMid slice">
                  <g transform="translate(0,-252.36214)">
                    {paths.map((item, index) => (
                      <path
                        key={index}
                        d={item.d}
                        id={index}
                        onClick={() => handlePathClick(index)}
                      />
                    ))}
                  </g></svg>
              </Carousel.Item>
            </Carousel>
          </Col>
          <Col xs lg="4">

          </Col>
        </Row>

      </Container>

      <Modal size="xl"
        show={show}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>
            Flat No: 4402 | East | 5BHK
          </Modal.Title>
        </Modal.Header>
        <Modal.Body className='p-0'>
          <img alt="" src="https://cbuildfiles.blob.core.windows.net/mangatram-de-blueoak/propertyimages/2023-03-21/fb36fa20-82b5-4a02-a5fa-eb716106c86641.jpg" width="100%" />
        </Modal.Body>
      </Modal>
      <FlatInfo type={'Floor'} id={id} />
    </div>


  );
}

export default FlatDetails;
