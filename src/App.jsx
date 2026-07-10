import { useEffect, useMemo, useState } from 'react'
import './App.css'

const coreProjectsData = [
  {
    id: 'pick-and-place',
    title: 'Vision-Based Pick-and-Place Robotic System (Team Project)',
    summary:
      'Built an integrated mechatronic system combining 3-axis actuation, embedded control, and a web-based operation platform.',
      image: '/ThiwankaReiss/full-project.jpeg',
    links: [
      {
        label: 'Code',
        url: 'https://github.com/ThiwankaReiss/mechatronic-project.git',
      },
    ],
    details: [
      'Developed an end-to-end mechatronic pick-and-place system integrating mechanical design, embedded control, and web-based machine operation. The system consisted of a 3-axis robotic manipulator with NEMA stepper motor-driven X/Y linear axes, a 3D-printed hobby linear actuator for Z-axis movement, a servo-based gripper, and a stepper motor-driven turntable designed using AutoCAD 3D. Arduino Uno was used for actuator coordination and communication with the control system.',
      'My contributions focused on embedded and software integration of the system. I developed the Django-based backend for user management and machine control, implemented database storage using Django ORM, created PIN-based user authentication and registration workflows, integrated Notify.lk for SMS notifications, and developed the web-based control interface using React and Three.js for interactive 3D visualization.',
      'I implemented the communication logic to translate user commands from the interface into ordered control instructions for the robotic system and used Ngrok during testing to enable remote machine access beyond the local network.',
    ],
  },
  {
    id: 'can-logger',
    title:
      'Embedded CAN Bus Data Logger, CAN Gateway Filter, and Compact Logger Development',
    summary:
      'Developed logger and gateway architectures for reliable CAN acquisition, filtering, and compact embedded deployment.',
      image: '/SmallCircuit2.jpeg',
    links: [
      {
        label: 'Code',
        url: 'https://github.com/ThiwankaReiss/Can_logger.git',
      },
    ],
    details: [
      'Developed the first CAN logger using an Arduino, MCP2515 CAN controller module, and status indication LEDs for capturing and monitoring vehicle CAN data.',
      'Enhanced the system into a CAN gateway filter that transferred selected data between separate CAN networks while isolating the networks to prevent excessive traffic and CAN bus flooding.',
      'Designed and implemented a compact CAN logger as an Arduino ISP-based embedded system, reducing hardware size and improving system integration. Responsible for firmware development, CAN communication configuration, hardware integration, testing, and iterative improvement of the system architecture.',
    ],
  },
  {
    id: 'diyakawa',
    title:
      'Underwater Rover Power System Design and Electrical Integration (Team Diyakawa)',
    summary:
      'Contributed to rover power-domain architecture, energy analysis, and reliability-oriented electrical integration for underwater operation.',
      image: '/ThiwankaReiss/Schematic_Diyakawa_electrical-wiring_system_2026-07-09.png',
    links: [
      {
        label: 'Code',
        url: 'https://github.com/ThiwankaReiss/Diyakawa.git',
      },
    ],
    details: [
      'Worked as part of the electrical integration team for an underwater robotic platform, focusing on power management, energy analysis, and subsystem reliability.',
      'Contributed to battery capacity calculations, underwater operation time estimation, ESC and motor power regulation, and integration of separate high-voltage and low-voltage power domains for propulsion and control electronics.',
      'Collaborated on electrical insulation and protection strategies to ensure reliable underwater operation while coordinating with mechanical and software teams responsible for vehicle design, control systems, and waterproofing. The team was selected to participate in the international SAUVC competition in China after completing the online submission stage.',
    ],
  },
  {
    id: 'thermistor',
    title:
      'Battery Thermal Characterization and Derating Analysis Using Thermistor-Based DAQ',
    summary:
      'Designed and executed thermistor-based testing to derive battery derating thresholds from measured thermal behavior.',
    image: '/ThiwankaReiss/Img1.jpeg',
    links: [
      {
        label: 'Code',
        url: 'https://github.com/ThiwankaReiss/Thermistor_Validation.git',
      },
    ],
    details: [
      'Developed an experimental setup to characterize battery thermal behavior and determine temperature-based derating limits using thermistor measurements.',
      'Designed a data acquisition system using an Arduino Uno and two thermistors mounted on a metal test plate, with thermal interface materials applied to replicate battery thermal conditions. Conducted comparative thermal experiments using battery resin and thermal grease.',
      'Collected temperature response data through controlled water bath testing, analyzed steady-state thermal behavior, and calculated maximum temperature offsets to determine appropriate battery derating thresholds for improved thermal management and battery protection.',
    ],
  },
  {
    id: 'ev-display',
    title: 'Real-Time CAN-Based Electric Vehicle Display System',
    summary:
      'Implemented end-to-end CAN data decoding and embedded UI visualization, optimized for Raspberry Pi deployment.',
    image: '/ThiwankaReiss/HeavyReaact.png',
    links: [
      {
        label: 'Code',
        url: 'https://github.com/ThiwankaReiss/DisplayCode.git',
      },
    ],
    details: [
      'Designed and developed a real-time electric vehicle monitoring interface by integrating CAN communication, embedded data acquisition, and Raspberry Pi-based visualization.',
      'Developed the data pipeline where CAN frames were received through a CAN adapter, transferred as serial data to a Raspberry Pi, logged, decoded, and displayed as meaningful vehicle parameters on a user interface.',
      'Initially developed an Electron-React-based display application and later redesigned it using a lightweight PyQt framework after identifying startup delays and performance limitations on Raspberry Pi hardware.',
    ],
  },
  {
    id: 'ar-app',
    title: 'Interactive 3D Product Visualization Web Application (Individual Project)',
    summary:
      'Created a full-stack 3D and AR-ready web platform using React, Three.js, and Spring Boot for interactive product workflows.',
    image: '/ThiwankaReiss/Screenshot 2026-07-10 163447.png',
    links: [
      {
        label: 'Frontend',
        url: 'https://github.com/ThiwankaReiss/AR-frontend.git',
      },
      {
        label: 'Backend',
        url: 'https://github.com/ThiwankaReiss/AR-Project.git',
      },
    ],
    details: [
      'Developed a full-stack web application for interactive furniture visualization and e-commerce using React, Three.js, and Spring Boot.',
      'Implemented a RESTful backend with Spring Boot, Spring Data JPA, MySQL, and role-based user management to support product administration, order processing, and dynamic 3D model management.',
      'Developed an interactive frontend using React Three Fiber and Three.js for real-time 3D product visualization, customization, and browser-based AR viewing on supported mobile devices. Integrated orientation sensing for correct model alignment and implemented responsive browsing, cart, checkout, and order tracking flows.',
    ],
  },
]

const skillFlowData = [
  { name: 'C++', url: 'https://github.com/ThiwankaReiss/Can_logger.git' },
  { name: 'Python', url: 'https://github.com/ThiwankaReiss/python-hand-gesture.git' },
  { name: 'Java', url: 'https://github.com/ThiwankaReiss/AR-Project.git' },
  { name: 'Spring Boot', url: 'https://github.com/ThiwankaReiss/AR-Project.git' },
  { name: 'React', url: 'https://github.com/ThiwankaReiss/AR-frontend.git' },
  { name: 'Three.js', url: 'https://github.com/ThiwankaReiss/AR-frontend.git' },
  { name: 'CAN Bus', url: 'https://github.com/ThiwankaReiss/DisplayCode.git' },
  { name: 'Arduino', url: 'https://github.com/ThiwankaReiss/Can_logger.git' },
  { name: 'Raspberry Pi', url: 'https://github.com/ThiwankaReiss/DisplayCode.git' },
  { name: 'ROS2', url: 'https://github.com/ThiwankaReiss/Ros2-start.git' },
  { name: 'EasyEDA', url: 'https://github.com/ThiwankaReiss/Diyakawa.git' },
  { name: 'SolidW', url: 'https://github.com/ThiwankaReiss/Steering_mini_car_falcone.git' },
]

const skillGroups = [
  {
    title: 'Programming',
    skills: [
      { name: 'C++', url: 'https://github.com/ThiwankaReiss/Can_logger.git' },
      { name: 'Python', url: 'https://github.com/ThiwankaReiss/python-hand-gesture.git' },
      { name: 'Java', url: 'https://github.com/ThiwankaReiss/AR-Project.git' },
      { name: 'JavaScript', url: 'https://github.com/ThiwankaReiss/AR-frontend.git' },
      { name: 'MATLAB', url: 'https://github.com/ThiwankaReiss/matlab-work.git' },
    ],
  },
  {
    title: 'Embedded Systems',
    skills: [
      { name: 'CAN Bus', url: 'https://github.com/ThiwankaReiss/Can_logger.git' },
      { name: 'UART', url: 'https://github.com/ThiwankaReiss/DisplayCode.git' },
      { name: 'SPI', url: 'https://github.com/ThiwankaReiss/Can_logger.git' },
      { name: 'I2C', url: 'https://github.com/ThiwankaReiss/combined-logger.git' },
      { name: 'Arduino', url: 'https://github.com/ThiwankaReiss/Can_logger.git' },
      { name: 'Raspberry Pi', url: 'https://github.com/ThiwankaReiss/DisplayCode.git' },
      { name: 'STM32', url: 'https://github.com/ThiwankaReiss/STM-work.git' },
      {
        name: 'Data Acquisition (DAQ)',
        url: 'https://github.com/ThiwankaReiss/Thermistor_Validation.git',
      },
    ],
  },
  {
    title: 'Robotics',
    skills: [
      { name: 'ROS', url: 'https://github.com/ThiwankaReiss/ros-udemy-course.git' },
      { name: 'ROS2', url: 'https://github.com/ThiwankaReiss/Ros2-start.git' },
      { name: 'Gazebo', url: 'https://github.com/ThiwankaReiss/ros-udemy-course.git' },
      { name: 'Simulink', url: 'https://github.com/ThiwankaReiss/matlab-work.git' },
      { name: 'Control Systems', url: 'https://github.com/ThiwankaReiss/matlab-work.git' },
      {
        name: 'Computer Vision',
        url: 'https://github.com/ThiwankaReiss/python-hand-gesture.git',
      },
      { name: 'Proteus', url: 'https://github.com/ThiwankaReiss/Thermistor_Validation.git' },
      { name: 'EasyEDA', url: 'https://github.com/ThiwankaReiss/Diyakawa.git' },
    ],
  },
  {
    title: 'Software Development',
    skills: [
      { name: 'Spring Boot', url: 'https://github.com/ThiwankaReiss/AR-Project.git' },
      { name: 'React', url: 'https://github.com/ThiwankaReiss/AR-frontend.git' },
      { name: 'Three.js', url: 'https://github.com/ThiwankaReiss/AR-frontend.git' },
      { name: 'Git', url: 'https://github.com/ThiwankaReiss' },
      { name: 'MySQL', url: 'https://github.com/ThiwankaReiss/AR-Project.git' },
    ],
  },
  {
    title: 'CAD and Mechanical Design',
    skills: [
      { name: 'SolidWorks', url: 'https://github.com/ThiwankaReiss/Steering_mini_car_falcone.git' },
      { name: 'AutoCAD', url: 'https://github.com/ThiwankaReiss/mechatronic-project.git' },
    ],
  },
]

function getRouteProjectId() {
  const hash = window.location.hash || '#/'
  if (!hash.startsWith('#/project/')) {
    return null
  }
  return decodeURIComponent(hash.replace('#/project/', ''))
}

function App() {
  const [routeProjectId, setRouteProjectId] = useState(getRouteProjectId())

  useEffect(() => {
    const onHashChange = () => setRouteProjectId(getRouteProjectId())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  const coreProjects = useMemo(() => coreProjectsData, [])
  const skillFlow = useMemo(() => skillFlowData, [])
  const selectedProject = useMemo(
    () => coreProjects.find((project) => project.id === routeProjectId) || null,
    [coreProjects, routeProjectId],
  )

  if (selectedProject) {
    return (
      <div className="page-bg">
        <main className="portfolio detail-page">
          <a href="#/" className="back-link">
            Back to Projects
          </a>
          <h1>{selectedProject.title}</h1>
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="detail-hero-image"
          />
          <p className="detail-summary">{selectedProject.summary}</p>
          <div className="project-actions">
            {selectedProject.links.map((link) => (
              <a
                href={link.url}
                target="_blank"
                rel="noreferrer"
                key={`${selectedProject.id}-${link.label}`}
                className="action-link"
              >
                {link.label}
              </a>
            ))}
          </div>
          <section className="detail-content">
            {selectedProject.details.map((paragraph) => (
              <p key={`${selectedProject.id}-${paragraph.slice(0, 20)}`}>{paragraph}</p>
            ))}
          </section>
        </main>
      </div>
    )
  }

  return (
    <div className="page-bg">
      <main className="portfolio">
        <section className="hero-section">
          <div className="hero-text">
            <p className="kicker">Engineering Portfolio</p>
            <h1>Thiwanka Reiss</h1>
            <p>
              Engineering Undergraduate at the University of Moratuwa focused on
              Mechatronics based embedded systems, robotics, and software design.
            </p>
            <div className="contact-links">
              <a href="mailto:thiwankar2003@gmail.com" className="contact-link">
                thiwankar2003@gmail.com
              </a>
              <a
                href="https://github.com/ThiwankaReiss"
                className="contact-link"
                target="_blank"
                rel="noreferrer"
              >
                github.com/ThiwankaReiss
              </a>
              <a href="tel:+94750944507" className="contact-link">
                +94 75 094 4507
              </a>
            </div>
          </div>
          <div className="hero-photo-wrap">
            <img
              src="/ThiwankaReiss/WhatsApp Image 2026-07-10 at 15.24.30.jpeg"
              alt="Thiwanka Reiss"
              className="hero-photo"
            />
          </div>
        </section>

        <section className="section-block">
          <div className="section-head">
            <h2>Core Engineering Projects</h2>
            <p>
              Each project is shown with direct visual evidence, code links, and
              detailed contributions. Additional projects can be found on my GitHub profile or click skill section.
            </p>
          </div>

          <div className="project-list">
            {coreProjects.map((project) => (
              <article className="project-card" key={project.title}>
                <div className="project-media">
                  <img src={project.image} alt={project.title} />
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="project-actions">
                    {project.links.map((link) => (
                      <a
                        href={link.url}
                        target="_blank"
                        rel="noreferrer"
                        key={`${project.title}-${link.label}`}
                        className="action-link"
                      >
                        {link.label}
                      </a>
                    ))}
                    <a href={`#/project/${project.id}`} className="action-link details-link">
                      Details
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section-block skills-block">
          <div className="section-head">
            <h2>Skills</h2>
            <p>
              Click skill to see related project examples. 
            </p>
          </div>

          {/* <div className="skills-flow" aria-label="Skill to project flow chart">
            {skillFlow.map((skill, index) => (
              <div className="flow-item" key={skill.name}>
                <a href={skill.url} target="_blank" rel="noreferrer" className="skill-node">
                  {skill.name}
                </a>
                {index < skillFlow.length - 1 && <span className="flow-arrow">→</span>}
              </div>
            ))}
          </div> */}

          <div className="skill-groups">
            {skillGroups.map((group) => (
              <section key={group.title} className="skill-group-card">
                <h3>{group.title}</h3>
                <div className="group-skill-list">
                  {group.skills.map((skill) => (
                    <a
                      key={`${group.title}-${skill.name}`}
                      href={skill.url}
                      target="_blank"
                      rel="noreferrer"
                      className="group-skill-link"
                    >
                      {skill.name}
                    </a>
                  ))}
                </div>
              </section>
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default App
