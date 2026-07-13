import { useEffect, useMemo, useState } from 'react'
import './App.css'

const coreProjectsData = [
  {
    id: 'pick-and-place',
    title: 'Vision-Based Pick-and-Place Robotic System (Team Project)',
    summary:
      'Developed an end-to-end mechatronic pick-andplace system integrating mechanical design,embedded control, and web-based machine operation. The system featured a 3-axis robotic manipulator with NEMA stepper motor-driven linear axes, a 3D-printed Z-axis actuator, a servo gripper, and an Arduino Uno-based control system.',
    image: '/ThiwankaReiss/full-project.jpeg',
    links: [
      {
        label: 'Code',
        url: 'https://github.com/ThiwankaReiss/mechatronic-project.git',
      },
    ],
    details: [
      'My Contributions:',
      '- Developed and deployed the Django backend for machine control, user management, and database integration using Django ORM.',
      '- Built a React and Three.js interface for interactive 3D visualization and remote robot operation.',
      '- Implemented PIN-based authentication, Notify.lk SMS notifications, and communication logic between the web interface and Arduino Uno.',
      '- Configured Ngrok for remote testing and machine access beyond the local network.',
      '',

      'Technologies:',
      'Python | Django | React | Three.js | JavaScript | Arduino Uno | ',
      'Raspberry Pi | AutoCAD 3D | Ngrok',

    ],
  },
  {
    id: 'can-logger',
    title:
      'Embedded CAN Bus Data Logger, CAN Gateway Filter, and Compact Logger Development — Team Falcon E Racing (Volunteer Project)',
    summary:
      'Developed an embedded CAN communication system for vehicle data logging, network management, and diagnostics. The project evolved from an Arduino-based CAN logger into a CAN gateway filter capable of selectively transferring data between separate CAN networks while preventing excessive traffic and CAN bus flooding. The system was further optimized into a compact embedded logger to improve hardware integration and reduce size.',
    image: '/ThiwankaReiss/SmallCircuit2.jpeg',
    links: [
      {
        label: 'Code',
        url: 'https://github.com/ThiwankaReiss/Can_logger.git',
      },
    ],
    details: [
      'My Contributions:',
      '- Developed the initial CAN logger using an Arduino and MCP2515 CAN controller for capturing and monitoring vehicle CAN data.',
      '- Implemented a CAN gateway filter to selectively forward messages while isolating separate CAN networks.',
      '- Designed and developed a compact Arduino ISP-based CAN logger for improved system integration.',
      '- Performed firmware development, CAN communication configuration, hardware integration, testing, and iterative system improvements.',
      '',
      'Technologies:',
      'Arduino | MCP2515 CAN Controller | CAN Bus | C++ | SPI Communication | Embedded Firmware | Arduino ISP | Hardware Integration',

    ],
  },
  {
    id: 'diyakawa',
    title:
      'Underwater Rover Power System Design and Electrical Integration — Team Diyakawa Project',
    summary:
      'Contributed to the electrical integration and power system design of an underwater robotic rover developed for the SAUVC international competition. The project focused on designing a reliable power architecture for underwater propulsion and control systems, including energy management, battery sizing, motor power regulation, and integration of separate high-voltage and low-voltage power domains while addressing underwater operational challenges such as electrical protection and reliability.',
    image: '/ThiwankaReiss/Schematic_Diyakawa_electrical-wiring_system_2026-07-09.png',
    links: [
      {
        label: 'Code',
        url: 'https://github.com/ThiwankaReiss/Diyakawa.git',
      },
    ],
    details: [
      'My Contributions:',
      'Performed battery capacity calculations and underwater mission runtime estimation for power system planning.',
      'Assisted with ESC integration, motor power regulation, and propulsion system power management.',
      'Contributed to high-voltage/low-voltage power distribution, electrical insulation, and protection strategies for reliable underwater operation.',
      'Collaborated with mechanical and software teams on vehicle integration, waterproofing, and overall system reliability.',
      'Supported the team\'s successful qualification for the SAUVC international competition after completing the online submission stage.',
      '',
      'Technologies:',
      'Battery Systems | Power Management | ESC Integration | Motor Control | Electrical Protection | High Voltage/Low Voltage Systems | Underwater Robotics | Energy Analysis',
    ],
  },
  {
    id: 'thermistor',
    title:
      'Battery Thermal Characterization and Derating Analysis Using Thermistor-Based Data Acquisition — Team Falcon E Racing (Volunteer Project)',
    summary:
      'Developed an experimental battery thermal characterization system to analyze temperature behavior and determine temperature-based derating limits for improved battery protection. The project involved designing a thermistor-based data acquisition system, replicating battery thermal conditions using representative thermal interface materials, and evaluating temperature response under controlled testing conditions.',
    image: '/ThiwankaReiss/Img1.jpeg',
    links: [
      {
        label: 'Code',
        url: 'https://github.com/ThiwankaReiss/Thermistor_Validation.git',
      },
    ],
    details: [
      'My Contributions:',
      'Designed an Arduino Uno-based data acquisition system using dual thermistors mounted on a metal test plate for temperature monitoring.',
      'Conducted controlled water bath thermal experiments to compare temperature responses under different thermal interface conditions.',
      'Analyzed steady-state thermal behavior and calculated temperature offsets to determine appropriate battery derating thresholds.',
      'Applied experimental findings to develop a temperature-based derating strategy for improved battery thermal management and protection.',
      '',
      'Technologies:',
      'Arduino Uno | Thermistors | Data Acquisition (DAQ) | Temperature Measurement | Thermal Characterization | Battery Thermal Management | Experimental Analysis',
    ],
  },
  {
    id: 'ev-display',
    title: 'Real-Time CAN-Based Electric Vehicle Display System',
    summary:
      'Designed and developed a real-time electric vehicle monitoring system by integrating CAN communication, embedded data acquisition, and Raspberry Pi-based visualization. The project involved creating a complete data pipeline where vehicle CAN frames were captured, transmitted to a Raspberry Pi, decoded, logged, and displayed as meaningful vehicle parameters through a user interface optimized for embedded deployment.',
    image: '/ThiwankaReiss/HeavyReaact.png',
    links: [
      {
        label: 'Code',
        url: 'https://github.com/ThiwankaReiss/DisplayCode.git',
      },
    ],
    details: [
      'My Contributions:',
      'Developed the CAN data pipeline for receiving, transferring, decoding, and visualizing vehicle data.',
      'Implemented CAN frame decoding and conversion of raw communication data into meaningful vehicle parameters.',
      'Developed an initial Electron + React dashboard for real-time vehicle monitoring.',
      'Redesigned the interface using PyQt to overcome Raspberry Pi performance limitations, improving startup time and resource efficiency.',
      'Responsible for software architecture, interface development, embedded optimization, and system integration.',
      '',
      'Technologies:',
      'CAN Bus | Raspberry Pi | CAN Adapter | PyQt | Electron | React | Python | Serial Communication | Data Logging',
    ],
  },
  {
    id: 'ar-app',
    title: 'Interactive 3D Product Visualization Web Application (Individual Project)',
    summary:
      'Developed a full-stack interactive 3D product visualization and e-commerce platform integrating web development, 3D rendering, and augmented reality (AR) capabilities. The project involved building a complete system for managing products, visualizing customizable 3D models, and enabling browser-based AR experiences through mobile devices.',
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
      'My Contributions:',
      'Developed a Spring Boot RESTful backend with Spring Data JPA and MySQL for product management, order processing, and dynamic 3D model handling.',
      'Implemented role-based user management and backend services to support administrative and customer workflows.',
      'Built an interactive React + Three.js / React Three Fiber frontend for real-time 3D product visualization and customization.',
      'Integrated browser-based AR functionality with device orientation sensing to maintain correct model alignment during mobile interaction.',
      'Developed responsive interfaces for product browsing, shopping cart management, checkout, and order tracking.',
      '',
      'Technologies:',
      'React | React Three Fiber | Three.js | Spring Boot | Spring Data JPA | MySQL | Java | JavaScript | REST API | Augmented Reality (AR) | Responsive Web Design',
    ],
  },
  {
    id: 'reverse-engineering',
    title: 'Reverse Engineering and Manufacturing Analysis of an Angle Grinder (Team Project)',
    summary:
      'Performed a reverse engineering study of an industrial angle grinder to analyze component design, material selection, manufacturing processes, and functional requirements. The project involved disassembling and studying the product architecture, performing dimensional measurements, reconstructing components using CAD modeling, and analyzing manufacturing methods.',
    image: '/ThiwankaReiss/Rev.png',
    links: [
      {
        label: 'Report',
        url: 'https://drive.google.com/file/d/1arP_sE9exZlJfTHWic5AIkzzLw2KXuJA/view?usp=sharing',
      },
    ],
    details: [
      'My Contributions:',
      'Conducted dimensional measurements and CAD reconstruction of the ceramic grinding disk component.',
      'Analyzed the silicon carbide abrasive composite material, including material composition and functional requirements.',
      'Studied the complete manufacturing process, including raw material preparation, molding, pressing, curing, and finishing operations.',
      'Performed manufacturing process analysis and developed a conceptual die design based on the reconstructed geometry.',
      'Evaluated the relationship between component design, material properties, and manufacturing constraints.',
      '',
      'Technologies:',
      'SolidWorks / CAD Reconstruction | Dimensional Measurement | Manufacturing Analysis | Material Analysis | Process Planning | Reverse Engineering',
    ],
  },
  {
    id: 'manufacturing',
    title: 'Design and Fabrication of a Multi-Functional Wine Bottle Holder (Team Manufacturing Project)',
    summary:
      'Designed and fabricated a wood and metal wine storage system integrating woodworking, welding, and sheet metal fabrication techniques. The project focused on transforming a CAD design into a functional physical product through practical workshop manufacturing processes.',
    image: '/ThiwankaReiss/Manu.png',
    links: [
      {
        label: 'Code',
        url: 'Report: https://drive.google.com/file/d/1r0e9p-WVWGki36qNT8AiQWhm_Mol5EL9/view?usp=sharing',
      },
    ],
    details: [
      'My Contributions:',
      'Designed the wooden components using AutoCAD before fabrication.',
      'Performed the majority of the woodworking processes, including material preparation, cutting, shaping, and assembly.',
      'Assisted with integration of wooden and metal components through fabrication and fitting processes.',
      'Applied a design-to-manufacturing workflow, considering material properties, fabrication limitations, and assembly requirements.',
      '',
      'Technologies:',
      'AutoCAD | Woodworking | Welding | Sheet Metal Fabrication | Workshop Manufacturing | Mechanical Assembly',
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

const certificates = [
  {
    name: 'ROS 2 for Beginners Level 2: TF, URDF, RViz & Gazebo - Udemy (Jan 2026)',
    url: 'https://drive.google.com/file/d/161bNMYHMf7OJ-Hs1wjNDS28CjG2k2KSz/view?usp=sharing',
  },
  {
    name: 'ROS 2 Navigation Stack (Nav2): SLAM & Navigation - Udemy (Jan 2026)',
    url: 'https://drive.google.com/file/d/1BjOA-h722-HiVBN5y7iSRF_x93_u46_j/view?usp=sharing',
  },
]

const organisations = [
  'Diyakawa Underwater Rover Team - Electrical Integration Team Member',
  'Team Falcon E Racing - Volunteer, Driverless Subsystem (CAN Logger and EV Display Development)',
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
  const [lightboxImage, setLightboxImage] = useState(null)
  const [isSectionNavOpen, setIsSectionNavOpen] = useState(false)

  useEffect(() => {
    const onHashChange = () => setRouteProjectId(getRouteProjectId())
    window.addEventListener('hashchange', onHashChange)
    return () => window.removeEventListener('hashchange', onHashChange)
  }, [])

  useEffect(() => {
    const onKeyDown = (event) => {
      if (event.key === 'Escape') {
        setLightboxImage(null)
      }
    }

    window.addEventListener('keydown', onKeyDown)
    return () => window.removeEventListener('keydown', onKeyDown)
  }, [])

  const coreProjects = useMemo(() => coreProjectsData, [])
  const skillFlow = useMemo(() => skillFlowData, [])
  const selectedProject = useMemo(
    () => coreProjects.find((project) => project.id === routeProjectId) || null,
    [coreProjects, routeProjectId],
  )

  const openLightbox = (src, alt) => {
    if (!src) {
      return
    }
    setLightboxImage({ src, alt })
  }

  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId)
    if (!section) {
      return
    }
    section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    setIsSectionNavOpen(false)
  }

  const lightbox = lightboxImage ? (
    <div className="image-lightbox" onClick={() => setLightboxImage(null)} role="presentation">
      <button
        type="button"
        className="lightbox-close"
        onClick={() => setLightboxImage(null)}
        aria-label="Close image preview"
      >
        x
      </button>
      <img
        src={lightboxImage.src}
        alt={lightboxImage.alt}
        className="lightbox-image"
        onClick={(event) => event.stopPropagation()}
      />
    </div>
  ) : null

  if (selectedProject) {
    return (
      <>
        <div className="page-bg">
          <main className="portfolio detail-page">
            <a href="#/" className="back-link">
              Back to Projects
            </a>
            <h1>{selectedProject.title}</h1>
            {selectedProject.image ? (
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="detail-hero-image clickable-image"
                onClick={() => openLightbox(selectedProject.image, selectedProject.title)}
              />
            ) : (
              <div className="project-image-placeholder" />
            )}
            <p className="detail-summary">{selectedProject.summary}</p>
            <div className="project-actions">
              {selectedProject.links
                .filter((link) => link.url)
                .map((link) => (
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
              {selectedProject.details.map((paragraph, index) => {
                if (!paragraph) {
                  return <div key={`${selectedProject.id}-spacer-${index}`} style={{ height: '0.75rem' }} />
                }

                if (paragraph === 'My Contributions:' || paragraph === 'Technologies:') {
                  return (
                    <p key={`${selectedProject.id}-${index}`}>
                      <strong>{paragraph}</strong>
                    </p>
                  )
                }

                return <p key={`${selectedProject.id}-${index}`}>{paragraph}</p>
              })}
            </section>
          </main>
        </div>
        {lightbox}
      </>
    )
  }

  return (
    <>
      <div className="page-bg">
        <main className="portfolio">
          <div className="section-nav-shell">
            <button
              type="button"
              className="section-nav-toggle"
              aria-label="Toggle section navigation"
              aria-expanded={isSectionNavOpen}
              onClick={() => setIsSectionNavOpen((value) => !value)}
            >
              <span />
              <span />
              <span />
            </button>
            <nav
              className={`section-nav${isSectionNavOpen ? ' open' : ''}`}
              aria-label="Page sections"
            >
              <button type="button" onClick={() => scrollToSection('projects-section')}>
                Projects
              </button>
              <button type="button" onClick={() => scrollToSection('skills-section')}>
                Skills
              </button>
              <button type="button" onClick={() => scrollToSection('certificates-section')}>
                Certificates
              </button>
              <button type="button" onClick={() => scrollToSection('organisations-section')}>
                Organisations
              </button>
            </nav>
          </div>

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

          <section className="section-block" id="projects-section">
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
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="clickable-image"
                      onClick={() => openLightbox(project.image, project.title)}
                    />
                  ) : (
                    <div className="project-image-placeholder" />
                  )}
                </div>

                <div className="project-content">
                  <h3>{project.title}</h3>
                  <p>{project.summary}</p>
                  <div className="project-actions">
                    {project.links
                      .filter((link) => link.url)
                      .map((link) => (
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

          <section className="section-block skills-block" id="skills-section">
          <div className="section-head">
            <h2>Skills</h2>
            <p>
              Click skill to see related project examples.
            </p>
          roll bar and more feature </div>

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

          <section className="section-block" id="certificates-section">
            <div className="section-head">
              <h2>CERTIFICATES</h2>
            </div>
            <div className="info-list">
              {certificates.map((certificate) => (
                <a
                  key={certificate.name}
                  href={certificate.url}
                  target="_blank"
                  rel="noreferrer"
                  className="info-link"
                >
                  {certificate.name}
                </a>
              ))}
            </div>
          </section>

          <section className="section-block" id="organisations-section">
            <div className="section-head">
              <h2>ORGANISATIONS</h2>
            </div>
            <ul className="info-list org-list">
              {organisations.map((organisation) => (
                <li key={organisation}>{organisation}</li>
              ))}
            </ul>
          </section>
        </main>
      </div>
      {lightbox}
    </>
  )
}

export default App
