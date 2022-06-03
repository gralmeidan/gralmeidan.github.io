/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';

function GitHubLogo(props) {
  return (
    <a
      href="https://github.com/gralmeidan"
      target="_blank"
      {...props}
      rel="noreferrer"
    >
      <svg width="46" height="46" viewBox="0 0 46 46" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="13" y="13" width="21" height="20" fill="white" />
        <path fillRule="evenodd" clipRule="evenodd" d="M7 7H39V39H7V7ZM15 23.1675C15 18.7639 18.5718 15.192 22.9755 15.192C27.3792 15.192 30.951 18.7639 31 23.1675C31 26.6905 28.7492 29.6752 25.5688 30.7516C25.1774 30.8006 25.0306 30.5559 25.0306 30.3602V28.1584C25.0306 27.4244 24.7859 26.9351 24.4924 26.6905C26.2538 26.4948 28.1132 25.8587 28.1132 22.7761C28.1132 21.8954 27.7706 21.1614 27.2814 20.6232C27.2852 20.6078 27.2906 20.5885 27.297 20.5655C27.3719 20.2953 27.5892 19.5111 27.1835 18.5192C27.1835 18.5192 26.4985 18.3235 24.9816 19.351C24.3456 19.2042 23.6605 19.1064 22.9755 19.1064C22.2905 19.1064 21.6055 19.1553 20.9694 19.351C19.4526 18.3235 18.7676 18.5192 18.7676 18.5192C18.3351 19.5763 18.6105 20.3975 18.6669 20.5657L18.6697 20.5743C18.1315 21.1614 17.8379 21.8464 17.8379 22.7272C17.8379 25.8097 19.6973 26.4948 21.4587 26.6905C21.263 26.8862 21.0184 27.2287 20.9694 27.7669C20.5291 27.9626 19.4037 28.3052 18.6697 27.0819C18.6697 27.0819 18.2294 26.299 17.4465 26.2501C17.4465 26.2501 16.6636 26.2501 17.3976 26.7394C17.3976 26.7394 17.9358 26.9841 18.2783 27.9137C18.2783 27.9137 18.7676 29.4795 20.9694 28.9902V30.3602C20.9694 30.5559 20.8226 30.8006 20.4312 30.7516C17.2997 29.6752 15 26.6905 15 23.1675Z" fill="#171717" />
        <rect x="1.07967" y="22.6274" width="31" height="31" transform="rotate(-45 1.07967 22.6274)" stroke="white" />
      </svg>
    </a>
  );
}

export default GitHubLogo;
