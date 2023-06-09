import React, { useState, useEffect } from 'react';
import ScreenHeading from '../../utils/ScreenHeading/ScreenHeading';
import ScrollService from '../../utils/ScrollService';
import Animations from '../../utils/Animation';
import './Resume.css';
const Resume = (props) => {
  /* STATES */
  const [selectedBulletIndex, setSelectedBulletIndex] = useState(0);
  const [carousalOffsetStyle, setCarousalOffsetStyle] = useState({});

  let fadeInScreenHandler = (screen) => {
    if (screen.fadeInScreen !== props.id) return;

    Animations.animations.fadeInScreen(props.id);
  };
  const fadeInSubscription =
    ScrollService.currentScreenFadeIn.subscribe(fadeInScreenHandler);

  /* REUSABLE MINOR COMPONENTS */
  const ResumeHeading = (props) => {
    return (
      <div className="resume-heading">
        <div className="resume-main-heading">
          <div className="heading-bullet"></div>
          <span>{props.heading ? props.heading : ''}</span>
          {props.fromDate && props.toDate ? (
            <div className="heading-date">
              {props.fromDate + '-' + props.toDate}
            </div>
          ) : (
            <div></div>
          )}
        </div>
        <div className="resume-sub-heading">
          <span>{props.subHeading ? props.subHeading : ''}</span>
        </div>
        <div className="resume-heading-description">
          <span>{props.description ? props.description : ''}</span>
        </div>
      </div>
    );
  };

  /* STATIC RESUME DATA FOR THE LABELS*/
  const resumeBullets = [
    { label: 'Education', logoSrc: 'education.svg' },
    { label: 'Work History', logoSrc: 'work-history.svg' },
    { label: 'Programming Skills', logoSrc: 'programming-skills.svg' },
    { label: 'Projects', logoSrc: 'projects.svg' },
    { label: 'Interests', logoSrc: 'interests.svg' },
  ];

  //here we have
  const programmingSkillsDetails = [
    { skill: 'JavaScript', ratingPercentage: 85 },
    { skill: 'Typescript', ratingPercentage: 85 },
    { skill: 'React JS', ratingPercentage: 85 },
    { skill: 'Express JS', ratingPercentage: 89 },
    { skill: 'Node JS', ratingPercentage: 89 },
    { skill: 'Mongo Db', ratingPercentage: 70 },
    { skill: 'Nestjs', ratingPercentage: 70 },
    { skill: 'Nextjs', ratingPercentage: 70 },
    { skill: 'Laravel', ratingPercentage: 80 },
    { skill: 'PHP', ratingPercentage: 80 },
    { skill: 'C/C++', ratingPercentage: 85 },
  ];

  const projectsDetails = [
    {
      title: 'Personal Portfolio Website',
      duration: { fromDate: '2022', toDate: '2022' },
      description:
        'A Personal Portfolio website to showcase all my details and projects at one place.',
      subHeading: 'Technologies Used: React JS, Bootsrap',
    },
    {
      title: 'React notebook ',
      duration: { fromDate: '2023', toDate: '2023' },
      description: `An interactive browser-based coding environment. It's like a Jupyter Notebook, but for Javascript, with many additional features added in`,
      subHeading: 'Technologies Used:  React, Redux, and Typescript.',
    },
    {
      title: 'Ecommerce Website ',
      duration: { fromDate: '2020', toDate: '2021' },
      description:
        'Online ecommerce website for showcasing and selling products onlne with payment system integration, both Paypal and Stripe',
      subHeading:
        'Technologies Used: Mongo DB, Nestjs, React Js ,Nextjs, Node JS, Redux, Tailwind ,TypeORM.',
    },
  ];

  const resumeDetails = [
    <div className="resume-screen-container" key="education">
      <ResumeHeading
        heading={'National University of Computer & Emerging Sciences, Karachi'}
        subHeading={'BACHELOR IN COMPUTER SCIENCE'}
        fromDate={'2021'}
        toDate={'2025'}
      />
      <ResumeHeading
        heading={'High School '}
        subHeading={'Adamjee Govt. Science College'}
        fromDate={'2019'}
        toDate={'2021'}
      />
    </div>,

    /* WORK EXPERIENCE */
    <div className="resume-screen-container" key="work-experience">
      <div className="experience-container">
        <ResumeHeading
          heading={'Citrok'}
          subHeading={'FULL STACK DEVELOPER'}
          fromDate={'2021'}
          toDate={''}
        />
        <div className="experience-description">
          <span className="resume-description-text">
            Currently working as MERN stack developer.
          </span>
        </div>
        <div className="experience-description">
          <span className="resume-description-text">
            - Developed an ecommerce website for client with the dashboard for
            managing the products, managing reviews, users, payment etc. .
          </span>
          <br />
          <span className="resume-description-text">
            - Integrated the web app with backend services to create new user
            onboarding application with dynamic form content.{' '}
          </span>
          <br />
          <span className="resume-description-text">
            - I stretch my mental capacity to develope UI as per the given
            designs.
          </span>
          <br />
        </div>
      </div>
    </div>,

    /* PROGRAMMING SKILLS */
    <div
      className="resume-screen-container programming-skills-container"
      key="programming-skills"
    >
      {programmingSkillsDetails.map((skill, index) => (
        <div className="skill-parent" key={index}>
          <div className="heading-bullet"></div>
          <span>{skill.skill}</span>
          <div className="skill-percentage">
            <div
              style={{ width: skill.ratingPercentage + '%' }}
              className="active-percentage-bar"
            ></div>
          </div>
        </div>
      ))}
    </div>,

    /* PROJECTS */
    <div className="resume-screen-container" key="projects">
      {projectsDetails.map((projectsDetails, index) => (
        <ResumeHeading
          key={index}
          heading={projectsDetails.title}
          subHeading={projectsDetails.subHeading}
          description={projectsDetails.description}
          fromDate={projectsDetails.duration.fromDate}
          toDate={projectsDetails.duration.toDate}
        />
      ))}
    </div>,

    /* Interests */
    <div className="resume-screen-container" key="interests">
      <ResumeHeading
        heading="Teaching"
        description="Apart from being a tech enthusiast and a code writer, i also love to teach people what i know simply because i believe in sharing."
      />
      <ResumeHeading
        heading="Table Tennis"
        description="I enjoy playing table tennis as a way to stay active and improve my hand-eye coordination. Playing table tennis has also taught me the importance of strategy and adaptability, as I often have to adjust my playing style based on my opponent's strengths and weaknesses"
      />
      <ResumeHeading
        heading="Competitive Programming"
        description="I enjoy solving algorithmic problems under time constraints and competing against other programmers in online coding competitions. This hobby has allowed me to improve my problem-solving skills, learn new algorithms and data structures, and develop my critical and creative thinking abilities."
      />
    </div>,
  ];

  const handleCarousal = (index) => {
    let offsetHeight = 360;

    let newCarousalOffset = {
      style: { transform: 'translateY(' + index * offsetHeight * -1 + 'px)' },
    };

    setCarousalOffsetStyle(newCarousalOffset);
    setSelectedBulletIndex(index);
  };

  const getBullets = () => {
    return resumeBullets.map((bullet, index) => (
      <div
        onClick={() => handleCarousal(index)}
        className={
          index === selectedBulletIndex ? 'bullet selected-bullet' : 'bullet'
        }
        key={index}
      >
        <img
          className="bullet-logo"
          src={require(`../../assets/Resume/${bullet.logoSrc}`)}
          alt="B"
        />
        <span className="bullet-label">{bullet.label}</span>
      </div>
    ));
  };

  const getResumeScreens = () => {
    return (
      <div
        style={carousalOffsetStyle.style}
        className="resume-details-carousal"
      >
        {resumeDetails.map((ResumeDetail) => ResumeDetail)}
      </div>
    );
  };

  useEffect(() => {
    return () => {
      /* UNSUBSCRIBE THE SUBSCRIPTIONS */
      fadeInSubscription.unsubscribe();
    };
  }, [fadeInSubscription]);

  return (
    <div className="resume-container screen-container " id={props.id || ''}>
      <div className="resume-content">
        <ScreenHeading title={'Resume'} subHeading={'My formal Bio Details'} />
        <div className="resume-card">
          <div className="resume-bullets">
            <div className="bullet-container">
              <div className="bullet-icons"></div>
              <div className="bullets">{getBullets()}</div>
            </div>
          </div>

          <div className="resume-bullet-details">{getResumeScreens()}</div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
