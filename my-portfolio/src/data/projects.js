// Import your project screenshots from the assets folder
import project1Img from '../assets/project1.png'; // Replace with your actual file names
import project2Img from '../assets/project2.png';
import project3Img from '../assets/project3.png';


export const projectsData = [
    {
        id: 1,
        title: "MERN Full-Stack Web App",
        description: "Built a robust web platform using MongoDB, Express.js, React, and Node.js.",
        tags: ["React", "Node.js", "Express", "MongoDB"],
        images: [project3Img, project2Img, project1Img] // Must be an array of image imports
    },
    {
        id: 2,
        title: "Computer Vision Applications",
        description: "Developed facial recognition models using Python, TensorFlow, and OpenCV.",
        tags: ["Python", "TensorFlow", "OpenCV"],
        images: [project3Img, project2Img, project1Img]
        // Empty array will trigger our safe fallback placeholder screen
    }
    ,
    {
        id: 2,
        title: "Computer Vision Applications",
        description: "Developed facial recognition models using Python, TensorFlow, and OpenCV.",
        tags: ["Python", "TensorFlow", "OpenCV"],
        images: [project3Img, project2Img, project1Img]
        // Empty array will trigger our safe fallback placeholder screen
    }
    ,
    {
        id: 2,
        title: "Computer Vision Applications",
        description: "Developed facial recognition models using Python, TensorFlow, and OpenCV.",
        tags: ["Python", "TensorFlow", "OpenCV"],
        images: [project3Img, project2Img, project1Img]
        // Empty array will trigger our safe fallback placeholder screen
    }
    ,
    {
        id: 2,
        title: "Computer Vision Applications",
        description: "Developed facial recognition models using Python, TensorFlow, and OpenCV.",
        tags: ["Python", "TensorFlow", "OpenCV"],
        images: [project3Img, project2Img, project1Img]
        // Empty array will trigger our safe fallback placeholder screen
    }
];