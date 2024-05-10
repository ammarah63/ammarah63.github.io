
import Particles, { initParticlesEngine } from "@tsparticles/react";
import React, { useEffect, useMemo, useState } from "react";
// import { loadAll } from "@/tsparticles/all"; // if you are going to use `loadAll`, install the "@tsparticles/all" package too.
// import { loadFull } from "tsparticles"; // if you are going to use `loadFull`, install the "tsparticles" package too.
import { loadSlim } from "@tsparticles/slim"; // if you are going to use `loadSlim`, install the "@tsparticles/slim" package too.
// import { loadBasic } from "@tsparticles/basic"; // if you are going to use `loadBasic`, install the "@tsparticles/basic" package too.


const ParticlesComponent = (props) => {

  const [init, setInit] = useState(false);
  // this should be run only once per application lifetime
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);

  const particlesLoaded = (container) => {
    console.log(container);
  };


  const options = useMemo(
    () => ({
        
      // background: {
      //   color: {
      //     value: "#1E2F97",
      //   },
      // },
      fpsLimit: 120,
      interactivity: {
        events: {
          onClick: {
            enable: true,
            mode: "push",
          },
          onHover: {
            enable: true,
            mode: 'grab',
          },
        },
        modes: {
          push: {
            distance: 200,
            duration: 15,
          },
          grab: {
            distance: 150,
          },
        },
      },
      particles: {
        number:{"value":10,
        density:{
            enable:true,
            value_area:100
        }},
        color:{value:["#ffffff","#F7FA02"]},
        shape:{type:"circle","stroke":{width:0,color:"#000000"},polygon:{nb_sides:5},image:{"src":"img/github.svg",width:"500px",height:100}},opacity:{value:0.5,random:false,anim:{enable:false,speed:0.2,opacity_min:0.1,sync:false}},size:{value:8.017060304327615,random:true,anim:{enable:false,speed:40,size_min:0.1,sync:false}},line_linked:{enable:false,distance:150,color:"#ffffff",opacity:1,width:1},move:{enable:true,speed:6,direction:"none",random:false,straight:false,out_mode:"out",bounce:false,attract:{enable:false,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:true,mode:"grab"},onclick:{enable:true,mode:"push"},resize:true},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:0.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:true
    }),
    [],
  );


  return <Particles id={props.id} init={particlesLoaded} options={options} />; 
};

export default ParticlesComponent;