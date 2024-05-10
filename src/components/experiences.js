import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Divider from '@mui/material/Divider';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import Typography from '@mui/material/Typography';
import { Height, Opacity } from '@mui/icons-material';

// const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const experiences = [
  {
    label: 'OCT 2022 – PRESENT JUNIOR FRONTEND DEVELOPER, LUXIST TECHNOLOGIES',
    desc:
      'Technologies React JS. Frontend development and API integration, Deployments on Netlify and Azure.',
  },
  {
    label: 'AUG 2022 – OCT 2022 INTERNSHIP, AI ENABLING LAB BAHRIA UNIVERSITY',
    desc:
      'Creating an App by adding UI to AI Models and AI related Research. Django, SQL and React JS. API in Django and react JS as frontend.',
  },
  {
    label: '2019 – PRESENT FREELANCING (WORDPRESS WEBSITES)',
    desc:
      'Wordpress website development and designing for clients.',
  },
  {
    label: 'DEC 2021 – MAR 2022 PROJECT BASED JOB, ZAHRUN LLC (REMOTE)',
    desc:
      'Wordpress website development and designing.',
  },

  {
    label: 'INTERNSHIP, CYBER RECONNAISSANCE AND COMBAT (CRC) LAB BAHRIA UNIVERSITY',
    desc:
      'Learned React JS front end development, Malware analysis and information security.',
  },
];

function SwipeableTextMobileStepper() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);


  return (
    <List sx={{ width: '100%', maxWidth: 1300, bgcolor: 'black' }}>
       {experiences.map(experience => ( <><ListItem alignItems="flex-start">
        <ListItemText
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="h6"
                color="#F7FA02"
              >
                {experience.label}
              </Typography><br/>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="white"
              >
                {experience.desc}
              </Typography>
             
            </React.Fragment>
          }
        />
      </ListItem>
      <hr style={{color:"white"}} />
      <Divider variant="inset" component="li" color='white' light sx={{color:"white"}}/></>))}
     
    </List>
  );
}

export default SwipeableTextMobileStepper;
