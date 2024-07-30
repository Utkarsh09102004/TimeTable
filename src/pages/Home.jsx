import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import '@/assets/index.css';
import '@/assets/home.css';
import result from '@/assets/result.json';
import InputBox from '../components/InputBox';
import Contributer from '../components/Contributers';
import GithubStats from '../components/GithubStats';
import instagramLogo from '@/assets/logos/instagram.svg';
import linkedInLogo from '@/assets/logos/linkedin.svg';
import githubLogo from '@/assets/logos/github.svg';

import utkarshImage from '@/assets/team/utkarsh.jpg';
import aneeshImage from '@/assets/team/aneesh.jpg';
import namanImage from '@/assets/team/naman.jpg';
import matangiImage from '@/assets/team/matangi.jpg';
import gaurangImage from '@/assets/team/gaurang.jpg';
import vanshImage from '@/assets/team/vansh.jpg';
import armaanImage from '@/assets/team/armaan.jpg';
import parthImage from '@/assets/team/parth.jpg';





function Home() {
  const [keys, setKeys] = useState([]);
  const [selectedOption, setSelectedOption] = useState(null);
  const navigate = useNavigate();

  

  const handleChange = (selected) => {
    setSelectedOption(selected);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedOption) {
      navigate(`/schedule/${selectedOption.value}`);
    } else {
      alert('No option selected');
    }
  };

  return (
    
    <div className="home-container">
      <div className="navbar">
        <div className="cont1">
          <img 
            src="https://s3-alpha-sig.figma.com/img/436f/44bc/f1763620bc3484816ae325031d184550?Expires=1722816000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R4Sdwtz5GA8YGroQNi8pIPvEh2r-KLteZGqhazXqiT8l3l3iR8hJuskKQrAU5G1AXIAdwPFMFLikbbi-UDSnarV6FJhbO77p~iVhWjNpLZe6Xnl4rmvL2~LiwqeakjjDRRubdq1W3zrgZOSq-S0Dz0SsOXS~jkw7theh0nVyYn-TtWE~stYZn~pn~BRBgQh3VlpTKAU7KP~UEdgVjdqFk6a3zrTT0R~3-UmSJsJeQOwk72VAM0q2OxOWxK2jBDA6LJT5eoBgyjn5io1qfDApcl-V46jIBOGPojVzNsMeExx8glcKa7sJ~DQlBvrMjSLmtmJ11K-i2wXWe7LyWp2nvQ__" 
            alt="Logo" 
            className="logo" 
          />
        </div>
        <ul className="cont2">
  {/* <li>
    <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
      <img src={linkedInLogo} className="social" alt="LinkedIn Logo" />
    </a>
  </li> */}
  <li>
    <a href="https://www.instagram.com/acmthapar/" target="_blank" rel="noopener noreferrer">
      <img src={instagramLogo} className="social" alt="Instagram Logo" />
    </a>
  </li>
  <li>
    <a href="https://github.com/ACM-Thapar" target="_blank" rel="noopener noreferrer">
      <img src={githubLogo} className="social" alt="Github Logo" />
    </a>
  </li>
</ul>
      </div>
      {/* <svg className='background-svg' xmlns="http://www.w3.org/2000/svg" width="1512" height="982"       viewBox="0 0 1512 982" fill="none">
<path fill-rule="evenodd" clip-rule="evenodd" d="M101.457 0.572317H-61.4278V163.492H84.582L101.457 146.613V0.572317ZM118.782 163.492L102.125 146.831V0.572317H265.009V163.492H118.782ZM102.125 180.572L118.534 164.16H265.009V327.079H102.125V180.572ZM84.8302 164.16L101.457 180.79V327.079H-61.4278V164.16H84.8302ZM-62 0V163.587V164.064V327.174V327.651V490.761V491.238V654.349V654.825V817.936V818.413V982H101.552H102.029H265.104H265.582H428.657H429.133H592.209H592.686H755.761H756.238H919.314H919.79H1082.87H1083.34H1246.42H1246.9H1409.97H1410.45H1574L1574 818.413V654.825V654.349V490.761V327.651V164.064V163.587V0H1410.45H1409.97H1246.9H1246.42H1083.34H1082.87H919.79H919.314H756.238H755.761H592.686H592.209H429.133H428.657H265.582H265.104H102.029H101.552H-62ZM265.677 0.572317H428.561V163.492H265.677V0.572317ZM592.114 0.572317H429.229V163.492H592.114V0.572317ZM592.781 0.572317H755.666V163.492H592.781V0.572317ZM919.218 0.572317H756.333V163.492H919.218V0.572317ZM919.886 0.572317H1082.77V163.492H919.886V0.572317ZM1246.32 0.572317H1083.44V163.492H1246.32V0.572317ZM1246.99 0.572317H1409.87V163.492H1246.99V0.572317ZM1573.43 0.572317H1410.54V163.492H1573.43V0.572317ZM265.677 164.16H428.561V327.079H265.677V164.16ZM592.114 164.16H429.229V327.079H575.73L592.114 310.692V164.16ZM608.903 327.079L592.781 310.954V164.16H755.666V327.079H608.903ZM592.781 344.651L609.626 327.802L609.57 327.746H755.666V490.666H592.781V344.651ZM575.063 327.746L575.007 327.802L592.114 344.913V490.666H429.229V327.746H575.063ZM919.218 164.16H756.333V327.079H919.218V164.16ZM919.886 164.16H1082.77V327.079H919.886V164.16ZM1246.32 164.16H1083.44V327.079H1246.32V164.16ZM1246.99 164.16H1409.87V281.88L1409.6 282.156L1364.69 327.079H1246.99V164.16ZM1364.02 327.746H1246.99V474.616L1247.54 474.068L1264.13 490.666H1409.88V373.725L1409.6 373.448L1364.4 328.244L1363.96 327.802L1364.02 327.746ZM1409.88 372.841L1364.85 327.802L1364.9 327.746H1392.79L1392.73 327.802L1409.88 344.95V372.841ZM1410.54 373.388V490.666H1573.43V327.746H1456.06L1456.12 327.802L1455.68 328.244L1410.54 373.388ZM1455.18 327.746L1455.23 327.802L1410.54 372.504V344.614L1427.35 327.802L1427.29 327.746H1455.18ZM1455.4 327.079H1573.43V164.16H1410.54V282.217L1455.4 327.079ZM1410.54 283.101L1454.51 327.079H1426.63L1410.54 310.991V283.101ZM1409.87 282.764L1365.57 327.079H1393.45L1409.87 310.655V282.764ZM1246.99 508.148L1247.54 508.695L1264.85 491.382L1264.8 491.334H1409.87V654.253H1246.99V508.148ZM1230.28 491.334L1230.23 491.382L1246.32 507.48V654.253H1083.44V491.334H1230.28ZM1246.32 475.283L1230.94 490.666H1083.44V327.746H1246.32V475.283ZM-61.4278 327.746H101.457V490.666H-61.4278V327.746ZM265.009 327.746H102.125V490.666H265.009V327.746ZM265.677 327.746H428.561V490.666H265.677V327.746ZM919.219 327.746H756.334V490.666H919.219V327.746ZM919.886 327.746H1082.77V490.666H919.886V327.746ZM-61.4278 491.334H101.457V654.253H-61.4278V491.334ZM265.009 491.334H102.125V654.253H220.003L219.792 654.041L220.233 653.599L265.009 608.814V491.334ZM265.009 609.698L220.675 654.041L220.887 654.253H248.772L248.56 654.041L265.009 637.588V609.698ZM265.677 636.921V609.031L265.87 608.837L311.064 654.041L310.852 654.253H282.968L283.179 654.041L265.87 636.728L265.677 636.921ZM265.677 671.161L265.87 671.355L282.3 654.921H310.184L265.87 699.245L265.677 699.052V671.161ZM249.44 654.921L265.009 670.494V698.385L221.555 654.921H249.44ZM220.671 654.921H102.125V817.84H265.009V699.269L220.671 654.921ZM265.677 699.936V817.84H428.561V654.921H311.068L266.312 699.687L265.87 700.129L265.677 699.936ZM311.736 654.253H428.561V491.334H265.677V608.146L265.87 607.953L266.312 608.395L311.506 653.599L311.948 654.041L311.736 654.253ZM592.114 491.334H429.229V654.253H592.114V491.334ZM592.781 491.334H755.666V654.253H592.781V491.334ZM919.218 491.334H756.333V654.253H919.218V491.334ZM919.886 491.334H1082.77V654.253H919.886V491.334ZM1573.43 491.334H1410.54V654.253H1573.43V491.334ZM-61.4278 654.921H101.457V817.84H-61.4278V654.921ZM592.114 654.921H429.229V817.84H592.114V654.921ZM592.781 654.921H755.666V817.84H592.781V654.921ZM919.218 654.921H756.333V817.84H919.218V654.921ZM919.886 654.921H1082.77V817.84H919.886V654.921ZM1246.32 654.921H1083.44V817.84H1246.32V654.921ZM1246.99 654.921H1409.87V817.84H1246.99V654.921ZM1573.43 654.921H1410.54V817.84H1573.43V654.921ZM-61.4278 818.508H101.457V981.428H-61.4278V818.508ZM265.009 818.508H102.125V981.428H265.009V818.508ZM265.677 818.508H428.561V981.428H265.677V818.508ZM592.114 818.508H429.229V981.428H592.114V818.508ZM592.781 818.508H755.666V981.428H592.781V818.508ZM919.218 818.508H756.333V981.428H919.218V818.508ZM919.886 818.508H1082.77V981.428H919.886V818.508ZM1246.32 818.508H1083.44V981.428H1246.32V818.508ZM1246.99 818.508H1409.87V981.428H1246.99V818.508ZM1573.43 818.508H1410.54V981.428H1573.43V818.508Z" fill="url(#paint0_radial_6_133)" fill-opacity="0.6"/>
<defs>
<radialGradient id="paint0_radial_6_133" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(756 -309) rotate(90) scale(1945.5 3241.18)">
<stop/>
<stop offset="1" stop-color="white" stop-opacity="0"/>
</radialGradient>
</defs>
      </svg> */}
      <div className="container">
        <div className="content">{/* custom */}
          <div className="tt-header">
            Time Table Generator
          </div>
          <div className="tt-subtext">
            Thapar University
          </div>
          <form className="form-container" onSubmit={handleSubmit}>
            <div className="text">
              Current Semester: &emsp;<span className='bold'>2024-2025 ODD</span>
            </div>
            <div className="text">
            Subgroup: &emsp;
            <div className="input-box-container">
              <InputBox onChange={handleChange} />
            </div>
            
            </div>
            <button className="submit-button" type="submit">Submit</button>
            
          </form>
          {/* <div className="github-stats">
            <GithubStats/>
          </div> */}
          <span className='contributers-heading'>Contributors</span>
          </div>
     
          
          <div className="contributers">
            {/* <div className="contributer"> */}
              <Contributer
                img_url={utkarshImage}
                name="Utkarsh Agarwal"
                linkedinUrl="https://www.linkedin.com/in/utkarsh-agarwal-054545211/ "
                githubUrl="https://github.com/Utkarsh09102004"
              />
              <Contributer
              img_url={aneeshImage}
                name="Aneesh Grover"
                linkedinUrl="https://www.linkedin.com/in/aneesh-grover/"
                githubUrl="https://github.com/Aneesh-382005"
              />
              <Contributer
              img_url={namanImage}
                name="Naman Kundra"
                linkedinUrl="https://www.linkedin.com/in/naman-kundra-850209281/"
                githubUrl="https://github.com/naman777"
              />
              <Contributer
                img_url={matangiImage}
                name="Matangi Sharma"
                linkedinUrl="https://www.linkedin.com/in/matangi-sharma-4b1706283/"
                githubUrl="https://github.com/matangi05"
              /> 
              <Contributer
                img_url={armaanImage}
                name="Armaan Jagirdaar"
                linkedinUrl="https://www.linkedin.com/in/armaan-jagirdar-183b47285/"
                githubUrl="https://github.com/Armaan457"
              /> 
              <Contributer
                img_url={gaurangImage}
                name="Gaurang Garg"
                linkedinUrl="https://www.linkedin.com/in/gaurang-garg-5441382a8?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                githubUrl="https://github.com/Ultramech"
              /> 
              <Contributer
                img_url={vanshImage}
                name="Vansh Gupta"
                linkedinUrl="https://www.linkedin.com/in/vansh-gupta-4269001b5/"
                githubUrl=" https://github.com/Vansh-7"
              /> 
               <Contributer
                img_url={parthImage}
                name="Parth Kaushal"
                linkedinUrl="https://www.linkedin.com/in/parth-kaushal-39ab25286/"
                githubUrl="https://github.com/parthkaushal18"
              /> 
              

            {/* </div> */}
          </div>
       
          
        
      </div>
      
    </div>
  );
}

export default Home;
