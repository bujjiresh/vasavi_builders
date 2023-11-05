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

  const filteredImages = filter === 'all' ? imageData : imageData.filter(image => image.category === filter);

  return (
    <Container className="pt-10">
<Row>
        <Col xs={12} md={4}>
        <Nav  as="ul" className="flex-column">
      <Nav.Item as="li">
      <button onClick={() => setFilter('all')}>All</button>
      </Nav.Item>
      <Nav.Item as="li">
      <button onClick={() => setFilter('category1')}>Category 1</button>
      </Nav.Item>
      <Nav.Item as="li">
      <button onClick={() => setFilter('category2')}>Category 2</button>
      </Nav.Item>
    </Nav>
        </Col>
        <Col xs={6} md={8}>
        <div className="image-grid">
        {filteredImages.map(image => (
           <img key={image.id} src={image.src} alt={image.category} />
         ))}
         </div>
        </Col>
      </Row>
      </Container>
    // <div className="container pt-10">
    // <div className="row">

    //   <div className="filters">
    //     <button onClick={() => setFilter('all')}>All</button>
    //     <button onClick={() => setFilter('category1')}>Category 1</button>
    //     <button onClick={() => setFilter('category2')}>Category 2</button>
    //     {/* Add more filter buttons for other categories */}
    //   </div>
    //   <div className="image-grid">
    //     {filteredImages.map(image => (
    //       <img key={image.id} src={image.src} alt={image.category} />
    //     ))}
    //   </div>
    // </div>
    // </div>
  );
};


export default Gallery;
