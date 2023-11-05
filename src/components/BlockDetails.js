import React from 'react';
import { useParams } from 'react-router-dom';
import BlocksCarousel from './BlocksCarousel';
const BlockDetails = () => {
  const { id } = useParams();

  return (
    <div>
       <BlocksCarousel id={Number(id)}/>
    </div>
  );
}

export default BlockDetails;
