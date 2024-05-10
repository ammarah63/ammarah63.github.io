import React from 'react';
import './App.css';
import ParticlesComponent from "./components/ParticlesComponent";
import Typical from 'react-typical'
import { Fade, Slide } from 'react-awesome-reveal'; // Assuming react-awesome-reveal is installed
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Header from './components/header';
import SwipeableTextMobileStepper from "./components/experiences";

function App() {
  const name = "I am Ammarah Khaleeq";
  const coverLetter = "A frontend developer with experience in multiple programming languages, frameworks, and databases. I also have experience with backend and MERN Stack development. I have experience designing, developing, and maintaining both front-end and back-end systems for web applications, creating dynamic and responsive user interfaces while ensuring efficient and secure data storage and management. I am passionate about learning and staying up-to-date with the latest technologies, making me a valuable asset to any organization seeking a talented full stack developer.";
  
  const experiences = [
    {
      id: 1,
      title: 'Frontend Developer',
      company: 'Tech Co.',
      date: 'Jan 2022 - Present',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis dapibus nisl vitae quam eleifend, at suscipit turpis eleifend.'
    },
    {
      id: 2,
      title: 'UI/UX Designer',
      company: 'Design Agency',
      date: 'Jun 2020 - Dec 2021',
      description: 'Pellentesque sit amet libero eu ipsum scelerisque pharetra. Sed nec justo sit amet elit hendrerit tincidunt.'
    }
  ];

  const education = [
    {
      id: 1,
      degree: 'Bachelor of Information Technology',
      school: 'Bahria University',
      date: '2017 - 2021'
    }
  ];

  const enthusiasms = [
    'Frontend Development',
    'UI/UX Design',
    'Creative Problem Solving',
    'Continuous Learning'
  ];

  return (
    <div className="app">
      <div>
      <ParticlesComponent id="particles" />
<Header/>
 
 
      </div>
      <section className="experiences">
        <h1><u>Experiences</u></h1>
        <Slide direction="right" triggerOnce> <SwipeableTextMobileStepper/></Slide>
      
      </section>

      <section className="education">
        <h1><u>Education</u></h1>
        {education.map(edu => (
          <Slide direction="right" triggerOnce>
            <div key={edu.id} className="education-info">
              <h3>{edu.degree}</h3>
              <h4>{edu.school}</h4>
              <p>{edu.date}</p>
            </div>
          </Slide>
        ))}
      </section>

      <section className="enthusiasms">
        <h2><u>Enthusiasms</u></h2>
        <Fade>
          <ul>
            {enthusiasms.map((enthusiasm, index) => (
              <li key={index}>{enthusiasm}</li>
            ))}
          </ul>
        </Fade>
      </section>

      <section className="education">
        <h2><u>Recent Interests</u></h2>
       
          <Slide direction="right" triggerOnce>
              <h3>3D animations Using blender</h3>
              <h4>and incorporating into websites</h4>
              <p>love to create and innovate</p>
              <hr/>
              <h3>Expand my knowledge </h3>
              <h4>on how to improve frontend</h4>
              <p>to latest trendy designs and a product high in quality</p>
              <hr/>
            
          </Slide>
      
      </section>
    </div>
  );
}

export default App;
