import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
const Gallery = () => {
  const [filter, setFilter] = useState('all');

  // Define your image data here
  const imageData = [
    { id: 1, src: 'https://cbuildfiles.blob.core.windows.net/mangatram-de-blueoak/propertyimages/2023-01-05/354029c9-3a04-4ab3-b285-41961e426f99FAMILY%20LIVING.jpg', category: 'category1' },
    { id: 2, src: 'https://cbuildfiles.blob.core.windows.net/mangatram-de-blueoak/propertyimages/2023-01-05/9f2b10a3-aff6-4178-b866-05d1fb3663d9FAMILY%20LIVING%20(2).jpg', category: 'category2' },
    // Add more image objects here
  ];
  const galleryCategory = [
    { id: 1, value: 'ALL' },
    { id: 2, value: 'Family Living' },
    { id: 3, value: 'Entertainment Room' },
    { id: 4, value: 'Dry Kitchen' },
    { id: 5, value: 'Drawing Room' },
    { id: 6, value: 'Dinning Area' },
    { id: 7, value: 'BedRoom' },
    { id: 8, value: 'Entrance' },
    { id: 9, value: 'Living Room' },
    { id: 10, value: 'Aerial View' },
    { id: 11, value: 'Balcony' },
    { id: 12, value: 'Club House' },
    { id: 13, value: 'Bicycle Track' },
    { id: 14, value: 'Tennis Court' },
    { id: 15, value: 'Golf Simulator' },
    // Add more image objects here
  ];
  const filteredImages = filter === 'all' ? imageData : imageData.filter(image => image.category === filter);

  return (
    <Container className="pt-10">
      <Row>
        <Col xs={12} md={11} lg={0}>
        <Row>
        <Col xs={12} md={4}>
        <Nav  as="ul" className="flex-column">
        {galleryCategory.map(item => (
          <Nav.Item as="li">
          <button onClick={() => setFilter(item.value)} className='gallerynav'>{item.value}</button>
          </Nav.Item>
         ))}
      
    </Nav>
        </Col>
        <Col xs={6} md={8}>
        <div className="image-grid">
        {filteredImages.map(image => (
          <div className='imgbox'>
           <img key={image.id} src={image.src} alt={image.category} />
           </div>
         ))}
         </div>
        </Col>
      </Row>
        </Col>
        </Row>

      </Container>
  );
};


export default Gallery;
