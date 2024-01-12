import React from 'react';

const Shimmer = () => {
  const styleShimmer = {
    display: 'flex',
    flexWrap: 'wrap',
  };

  const styleShimmerBlock = {
    width: '200px', // Adjust the width of each shimmer block
    height: '200px', // Adjust the height of each shimmer block
    background: 'linear-gradient(to right, #eee 10%, #ddd 20%, #eee 30%)',
    backgroundSize: '200% 100%',
    animation: 'shimmerAnimation 1.5s infinite linear',
    margin: '10px', // Adjust the margin between shimmer blocks;
    borderRadius: '10px',
    padding:"10px",
       margin:"7px",
       textAlign:"center",
  };
  
  return (
    <div style={styleShimmer}>
      {Array(30).fill('').map((_, index) => (
        <div key={index} style={styleShimmerBlock}></div>
      ))}
    </div>
  );
};

export default Shimmer;
