import React from 'react';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import chefImage from '../Cert.jpeg'; 

const Certifications = () => {
  const paperStyle = {
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: '400px',
    margin: 'auto',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
  };

  const imageStyle = {
    width: '100px',
    height: '100px',
    marginRight: '16px',
  };

  return (
    <Paper style={paperStyle}>
      <div>
        <img src={chefImage} alt="Chef" style={imageStyle} />
      </div>
      <div>
        <Typography variant="h6">5 Years Experience as a Chef</Typography>
        <Typography variant="body1" color="textSecondary">
          This certification acknowledges 5 years of experience as a chef in the culinary industry.
        </Typography>
      </div>
    </Paper>
  );
};

export default Certifications;
