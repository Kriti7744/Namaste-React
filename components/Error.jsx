import React from 'react';
import { useRouteError } from 'react-router-dom';

const Error = () => {
    const err=useRouteError();
  return (
    <div style={styles.container}>
      <img src="https://i.pinimg.com/originals/ef/8b/bd/ef8bbd4554dedcc2fd1fd15ab0ebd7a1.gif" alt="Error gif" style={styles.image} />
        <h2>{err.status + ": "+err.statusText}</h2>
    </div>
  );
};

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh', // Adjust as needed to center vertically
  },
  image: {
    width: '400px', // Adjust the image width
    height: '400px', // Adjust the image height
    marginBottom: '20px', // Adjust the spacing between image and text
  },
  text: {
    fontSize: '24px',
  },
};

export default Error;
