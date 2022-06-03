/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function LinkedInLogo(props) {
  return (
    <a
      href="https://www.linkedin.com/in/gralmeidan/"
      target="_blank"
      {...props}
      rel="noreferrer"
    >
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="12" width="22" height="21" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7 7H39V39H7V7ZM15.2 20.3V31H18.6V20.3H15.2ZM15 16.9C15 18 15.8 18.8 16.9 18.8C18 18.8 18.8 18 18.8 16.9C18.8 15.8 18 15 16.9 15C15.9 15 15 15.8 15 16.9ZM27.6 31H30.8V24.4C30.8 21.1 28.8 20 26.9 20C25.2 20 24 21.1 23.7 21.8V20.3H20.5V31H23.9V25.3C23.9 23.8 24.9 23 25.9 23C26.9 23 27.6 23.5 27.6 25.2V31Z" fill="#171717" />
        <rect x="1.07967" y="23" width="31" height="31" transform="rotate(-45 1.07967 23)" stroke="white" />
      </svg>
    </a>
  );
}

export default LinkedInLogo;
