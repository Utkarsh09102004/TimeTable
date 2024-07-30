import React from 'react';


const Contributer = ({ name, linkedinUrl, githubUrl }) => {
  return (
    <div className="contributer">
      <div className="photo">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQpd4mJRIUwqgE8D_Z2znANEbtiz4GhI4M8NQ&s"
          alt={`${name}'s Photo`}
        />
      </div>
      <div className="name">
        {name}
      </div>
      <div className="socials">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="https://s3-alpha-sig.figma.com/img/7b01/1dcf/a8497e171b6d199b38c1d98a128570e6?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KozcHlwy6NJJzYdeal6D-SacxpL9F7Gh0tF0hO8IOa3y5~fsZMka6FVCHTULvdgI77U88CkfJiw2wPD0QWXLrZlBLdjUkR12H1sXQ5tCS2DD7vRAqdKoZxKAthUDjNIwbOyrhIrV6cXgmbO2KF2oMAWXqNh6~HLX9kDI90TIzuPjmqS0J4HUpF-TDEy2X7Y1V739J~Sdli3xJV51Kw5yZP~oMvspFHl3~-US663d4RVt27OTESLX-Sz4M5LOY4UM6bTlBwxi0HHZvrzCFmfQmdUJIrsVFJ02LD-PUvhcK~FayglAoLaezVF6uio4C6EuoUS4s1IgYIkgVnIu6uBJ~Q__"
            alt="LinkedIn"
          />
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <img
            src="https://s3-alpha-sig.figma.com/img/7b01/1dcf/a8497e171b6d199b38c1d98a128570e6?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=KozcHlwy6NJJzYdeal6D-SacxpL9F7Gh0tF0hO8IOa3y5~fsZMka6FVCHTULvdgI77U88CkfJiw2wPD0QWXLrZlBLdjUkR12H1sXQ5tCS2DD7vRAqdKoZxKAthUDjNIwbOyrhIrV6cXgmbO2KF2oMAWXqNh6~HLX9kDI90TIzuPjmqS0J4HUpF-TDEy2X7Y1V739J~Sdli3xJV51Kw5yZP~oMvspFHl3~-US663d4RVt27OTESLX-Sz4M5LOY4UM6bTlBwxi0HHZvrzCFmfQmdUJIrsVFJ02LD-PUvhcK~FayglAoLaezVF6uio4C6EuoUS4s1IgYIkgVnIu6uBJ~Q__"
            alt="GitHub"
          />
        </a>
      </div>
    </div>
  );
};

export default Contributer;
