import React from 'react';
import linkedInLogo from '@/assets/logos/linkedin.svg';
import githubLogo from '@/assets/logos/github.svg';

const Contributer = ({ img_url, name, linkedinUrl, githubUrl }) => {
  return (
    <div className="contributer">
      <div
        className="photo"
        style={{
          backgroundImage: `url(${img_url})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
      </div>
      <div className="name">
        {name}
      </div>
      <div className="socials">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={linkedInLogo}
            alt="LinkedIn"
          />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img
            src={githubLogo}
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
};

export default Contributer;
