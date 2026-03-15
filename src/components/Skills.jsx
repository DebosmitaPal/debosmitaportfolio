import React from "react";
import mongodb from "../assets/tech_icons/mongodb.jpeg";
import docker from "../assets/tech_icons/docker.webp";
import react from "../assets/tech_icons/react.png";
import javascript from "../assets/tech_icons/javascript.png";
import tailwind from "../assets/tech_icons/tailwind.png";
import node from "../assets/tech_icons/node.png";
import java from "../assets/tech_icons/java.png";
import git from "../assets/tech_icons/git.png";
import postman from "../assets/tech_icons/postman.jpg";
import html from "../assets/tech_icons/html.webp";
import vscode from "../assets/tech_icons/vscode.png";
import express from "../assets/tech_icons/express.webp";
export default function Skills() {

const skills = [
{
name: "MongoDB",
icon: mongodb,
desc: "MongoDB is a NoSQL database used for scalable web applications."
},
{
name: "Tailwind",
icon: tailwind,
desc: "Tailwind CSS helps build modern responsive UI using utility classes."
},
{
name: "Docker",
icon: docker,
desc: "Docker allows applications to run inside containers."
},
{
name: "React",
icon: react,
desc: "React is a JavaScript library used to build dynamic UI."
},
{
name: "JavaScript",
icon: javascript,
desc: "JavaScript powers interactive web development."
},
{
name: "NodeJS",
icon: node,
desc: "NodeJS allows server-side programming with JavaScript."
},
{
name: "Java",
icon: java,
desc: "Java is a programming language used for mobile and enterprise applications."
},
{
name: "Git",
icon: git,
desc: "Git is a version control system for tracking changes in source code."
},
{
name: "Postman",
icon: postman,
desc: "Postman is a tool for testing APIs."
},
{
name: "HTML",
icon: html,
desc: "HTML is the standard markup language for creating web pages."
},
{
name: "VSCode",
icon: vscode,
desc: "VSCode is a popular code editor with many extensions."
},
{
name: "Express",
icon: express,
desc: "Express is a minimal and flexible Node.js web application framework."
}
];

return (
<div className="relative bg-black py-28 overflow-hidden">

{/* STAR BACKGROUND */}
<div className="star-field"></div>

<h1 className="text-5xl font-bold font-serif text-center text-white mb-20 relative z-10">
Technologies and Skills
</h1>

<div className="flex flex-wrap justify-center gap-16 relative z-10">

{skills.map((skill, index) => (

<div key={index} className="flip-card">

<div className="flip-card-inner">

{/* FRONT */}
<div className="flip-card-front">

<img
src={skill.icon}
alt={skill.name}
className="w-14 h-14"
/>

<p className="text-white mt-3 font-semibold">
{skill.name}
</p>

</div>

{/* BACK */}
<div className="flip-card-back">

<p className="text-white text-sm px-4 text-center">
{skill.desc}
</p>

</div>

</div>

</div>

))}

</div>

<style>{`

/* STAR BACKGROUND */

.star-field{
position:absolute;
top:0;
left:0;
width:100%;
height:100%;
background:
radial-gradient(2px 2px #00ffff, transparent),
radial-gradient(3px 3px #ffffff, transparent),
radial-gradient(1px 1px #00ffff, transparent);
background-size:120px 120px, 200px 200px, 80px 80px;
animation: twinkle 6s infinite alternate;
}

@keyframes twinkle{
0%{opacity:0.5;}
50%{opacity:1;}
100%{opacity:0.7;}
}

/* FLIP CARD */

.flip-card {
background: transparent;
width:150px;
height:150px;
perspective:1000px;
}

.flip-card-inner{
position:relative;
width:100%;
height:100%;
text-align:center;
transition: transform 0.6s;
transform-style: preserve-3d;
}

.flip-card:hover .flip-card-inner{
transform: rotateY(180deg);
}

/* FRONT */

.flip-card-front{
position:absolute;
width:100%;
height:100%;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
background:#050505;
border-radius:16px;
border:1px solid #00ffff;
box-shadow:
0 0 8px #00ffff,
0 0 15px #00ffff,
0 0 30px #00ffff;
backface-visibility:hidden;
}

/* BACK */

.flip-card-back{
position:absolute;
width:100%;
height:100%;
display:flex;
align-items:center;
justify-content:center;
background:#050505;
border-radius:16px;
border:1px solid #00ffff;
box-shadow:
0 0 8px #00ffff,
0 0 15px #00ffff,
0 0 30px #00ffff;
transform: rotateY(180deg);
backface-visibility:hidden;
}

`}</style>

</div>
);
}