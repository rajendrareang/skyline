import React from 'react';
import { Link } from 'react-router-dom';

function ResponsiveLogo() {
  const logoImage = require('../../Assets/logo.png');
  const logoImage1 = require('../../Assets/Logo-small.png');

  const logoStyles = {
    logoImage: {
      width: '200px', // Set the width for the big logo
      height: 'auto', // Automatically adjust the height based on the width
    },
    logoSmall: {
      width: '100px', // Set the width for the small logo
      height: 'auto', // Automatically adjust the height based on the width
    },
  };

  // CSS media query for mobile screens (adjust the max-width as needed)
  const mediaQuery = '@media (max-width: 768px)';
  const responsiveStyles = {
    logoImage: {
      display: 'block', // Hide the big logo for mobile screens
    },
    logoSmall: {
      display: 'none', // Show the small logo for mobile screens
    },
  };

  return (
    <Link to="/" className="logo-link">
      <img
        src={logoImage}
        alt="Logopogo"
        style={{ ...logoStyles.logoImage, ...responsiveStyles.logoImage }}
      />
      <img
        src={logoImage1}
        alt="Logopogosmall"
        style={{ ...logoStyles.logoSmall, ...responsiveStyles.logoSmall }}
      />
    </Link>
  );
}

export default ResponsiveLogo;
