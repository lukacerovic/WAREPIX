import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";

import "react-vertical-timeline-component/style.min.css";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";

const textVariant = (delay) => {
    return {
      hidden: {
        y: -50,
        opacity: 0,
      },
      show: {
        y: 0,
        opacity: 1,
        transition: {
          type: "spring",
          duration: 1.25,
          delay: delay,
        },
      },
    };
  };

  const ExperienceCard = ({ experience, isLeft }) => {
    return (
      <VerticalTimelineElement
        contentStyle={{
          background: "linear-gradient(to top, #5d5c5c, #494848)",
          // background: "#1B2E3C",
          color: "#fff",
          boxShadow: "0 10px 20px rgba(0, 0, 0, 0.9)",
        }}
        contentArrowStyle={{ borderRight: "7px solid  #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
      >
        <div>
          <h3 className='text-white text-2xl font-bold'>{experience.title}</h3>
        </div>
  
        <ul className='mt-5 list-disc ml-5 space-y-3'>
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className='text-white-100 text-md pl-1 tracking-wider py-[1vh]' 
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    );
  };
  
  const Experience = ({ experiences }) => {
    return (
      <div>
        <motion.div variants={textVariant()}>
          <h1 className={`${styles.sectionHeadText} text-center`}>
            SERVICES WE PROVIDE
          </h1>
        </motion.div>
  
        <div className='mt-20 flex flex-col'>
          <VerticalTimeline>
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={`experience-${index}`}
                experience={experience}
                isLeft={index % 2 === 0}
              />
            ))}
          </VerticalTimeline>
        </div>
      </div>
    );
  };

export default SectionWrapper(Experience, "work");
