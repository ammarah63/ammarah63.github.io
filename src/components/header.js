import React from 'react';
import ParticlesComponent from "./ParticlesComponent";
import Typical from 'react-typical'
import { Fade} from 'react-awesome-reveal'; // Assuming react-awesome-reveal is installed
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';


function Header() {
  const name = "I am Ammarah Khaleeq";
  const coverLetter = "A frontend developer with experience in multiple programming languages, frameworks, and databases. I also have experience with backend and MERN Stack development. I have experience designing, developing, and maintaining both front-end and back-end systems for web applications, creating dynamic and responsive user interfaces while ensuring efficient and secure data storage and management. I am passionate about learning and staying up-to-date with the latest technologies, making me a valuable asset to any organization seeking a talented full stack developer.";

  return (
      <div>
        
      <div className="header">
   
      <Typical
        steps={['Hello', 500,'Hello world!', 500,'Hello world!', 500,'Hello world!', 500]}
        loop={Infinity}
        wrapper="p"
      />
        
        <Fade>
          <h1 style={{marginTop:"-5px", color:"#F7FA02"}}>{name}</h1>
          <Typical
        steps={['Frontend', 500,'Full Stack', 500,'MERN!', 500,'React JS', 500,'Node', 500,'Python', 500,'Wordpress', 500]}
        loop={Infinity}
        wrapper="h3"
      />
          <Card sx={{ maxWidth: 1300 }}>
        <CardContent>
          <h4>
           Objective: To be a Successful IT Professional and constantly learn and grow along with
the organization.
          </h4>
          <hr/>
          <p>
          {coverLetter}
          </p>
        </CardContent>     
    </Card>
        </Fade>
    
      </div>
      </div>

  );
}

export default Header;
