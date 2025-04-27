import Image from 'next/image';
import Link from 'next/link';

const About = () => {
  return (
    <section
      id="about"
      data-nav-tooltip="About"
      className="pp-section pp-scrollable section counter"
    >
      <div className="container">
        <div className="row align-items-center justify-content-center">
          <div className="col-lg-6 m-15px-tb">
            <div className="about-me">
              <div className="img">
                <div className="img-in">
                  <Image src="/static/img/about-me.png" alt="About me" width={400} height={400} />
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 m-15px-tb">
            <div className="about-info">
              <div className="title">
                <h3>About me.</h3>
              </div>
              <div className="about-text">
                <h3>
                  I&apos;m Priyesh Jaiswal, a Full Stack Developer with 8+ years of experience.
                </h3>
                <p>
                  Based in New Delhi, India, I specialize in building scalable, secure, and high-performance web applications using technologies like Node.js, React, Next.js, and AWS. I have successfully delivered 100+ projects for clients worldwide, ranging from startups to established enterprises. My expertise covers both frontend and backend development, API design, cloud infrastructure, and DevOps. I am passionate about solving complex problems and helping businesses grow through technology.
                </p>
                <div className="row">
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">100+</span>
                      <div className="media-body">
                        Projects <br />
                        Completed.
                      </div>
                    </div>
                  </div>
                  <div className="col-auto">
                    <div className="media align-items-center">
                      <span className="count">90+</span>
                      <div className="media-body">
                        Satisfied <br />
                        Clients.
                      </div>
                    </div>
                  </div>
                </div>
                <div className="btn-bar">
                  <Link className="px-btn px-btn-theme" href="/#contactus">
                    Contact Me
                  </Link>
                  <Link className="px-btn px-btn-theme" href="/#work">
                    Portfolio
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="separated" />
        <div className="title">
          <h3>My Skills</h3>
        </div>
        <div className="row">

          <div className="col-lg-12 ml-auto">
            <div className="skills-box">
              <h3>My skills</h3>
              <p>
                My core skills include JavaScript, TypeScript, Node.js, React, Next.js, PHP (Laravel), AWS, WordPress, Shopify, and cloud infrastructure. I am also experienced in IoT and AI/ML integration, and I am always eager to learn and work with new technologies.
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <div className="skill-lt">
                    <h6>HTML5</h6>
                    <div className="skill-bar">
                      <div className="skill-bar-in" style={{ width: "95%" }}>
                        <span data-toggle="tooltip" title="95%" />
                      </div>
                    </div>
                  </div>
                  <div className="skill-lt">
                    <h6>CSS</h6>
                    <div className="skill-bar">
                      <div className="skill-bar-in" style={{ width: "90%" }}>
                        <span data-toggle="tooltip" title="90%" />
                      </div>
                    </div>
                  </div>
                  <div className="skill-lt">
                    <h6>WordPress</h6>
                    <div className="skill-bar">
                      <div className="skill-bar-in" style={{ width: "85%" }}>
                        <span data-toggle="tooltip" title="85%" />
                      </div>
                    </div>
                  </div>
                  <div className="skill-lt">
                    <h6>Shopify</h6>
                    <div className="skill-bar">
                      <div className="skill-bar-in" style={{ width: "80%" }}>
                        <span data-toggle="tooltip" title="80%" />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6">
                  <div className="skill-lt">
                    <h6>PHP (Laravel)</h6>
                    <div className="skill-bar">
                      <div className="skill-bar-in" style={{ width: "88%" }}>
                        <span data-toggle="tooltip" title="88%" />
                      </div>
                    </div>
                  </div>
                  <div className="skill-lt">
                    <h6>Node.js</h6>
                    <div className="skill-bar">
                      <div className="skill-bar-in" style={{ width: "85%" }}>
                        <span data-toggle="tooltip" title="85%" />
                      </div>
                    </div>
                  </div>
                  <div className="skill-lt">
                    <h6>Next.js</h6>
                    <div className="skill-bar">
                      <div className="skill-bar-in" style={{ width: "82%" }}>
                        <span data-toggle="tooltip" title="82%" />
                      </div>
                    </div>
                  </div>
                  <div className="skill-lt">
                    <h6>AWS</h6>
                    <div className="skill-bar">
                      <div className="skill-bar-in" style={{ width: "78%" }}>
                        <span data-toggle="tooltip" title="78%" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <p className="mt-4"> Apart from these, I have worked with many other technologies and frameworks.Currently I am working with Iot and AI/ML . </p>
            </div>
          </div>

        </div>
        <div className="separated" />
        <div className="title">
          <h3>Experience.</h3>
        </div>
        <div className="resume-box">
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image src="/static/img/a0.png" alt="Experience 1" width={60} height={60} />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Head of Technology</h6>
                  <label>Volunteer Yatra Pvt. Ltd. | Hybrid | Aug. 2024 - Present</label>
                  <div className="rb-time">Full Time</div>
                  <p className="justify-content-center">
                    In my current role, I spearheaded the development and launch of a sophisticated website utilizing Next.js, Node.js, and MySQL, later successfully migrating to Supabase (PostgreSQL) for enhanced scalability. I architected and implemented comprehensive RESTful APIs, seamlessly integrating payment gateways and ensuring robust frontend-backend communication. My commitment to code quality and documentation was demonstrated through the implementation of Swagger, JSDoc, and Postman for thorough API testing and documentation, significantly improving development efficiency. I managed AWS infrastructure, implementing Docker deployments and GitHub workflows to create a secure and scalable system. As a tech team leader, I effectively coordinated task assignments and streamlined workflows using Notion and GitHub, optimizing team productivity. Additionally, I pioneered the integration of AI tools like ChatGPT and Cursor AI to enhance code quality, boost performance, and accelerate development cycles, resulting in more efficient and innovative solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image src="/static/img/a1.png" alt="Experience 2" width={60} height={60} />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Software Engineer</h6>
                  <label>ARCTANO SOLUTION PRIVATE LIMITED. | Hybrid | Sept. 2023- April 2024</label>
                  <div className="rb-time">Full Time</div>
                  <p className="justify-content-center">
                    I have significantly contributed to the development of robust backend infrastructure by creating high-performance Node.js APIs that power multiple Flutter applications. I implemented MQTT protocol for real-time communication, which dramatically improved application responsiveness and data synchronization efficiency. My expertise in AWS server management has been crucial in optimizing deployment processes, enhancing security measures, and ensuring efficient resource allocation. I also spearheaded the design and maintenance of RESTful APIs, creating a seamless integration layer between frontend and backend systems that has notably improved overall application performance and user experience.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image src="/static/img/a2.png" alt="Experience 3" width={60} height={60} />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>Full Stack Developer</h6>
                  <label>RENUTECH SOLUTIONS INC. | On Site | Oct. 2021 -Aug 2023</label>
                  <div className="rb-time">Full Time</div>
                  <p className="justify-content-center">
                    As a Full Stack Developer at RENUTECH SOLUTIONS, I led multiple IT projects while managing cross-functional development teams to deliver complex solutions. I architected and developed a complete multi-vendor e-commerce platform for Sihtuk, a Dubai-based brand, where I implemented payment gateways, inventory management, and vendor portals. I also created a comprehensive CRM system for hotels that streamlined booking management, guest services, and operational workflows. Additionally, I designed and built scalable backend services and RESTful APIs that powered multiple Flutter mobile applications. Throughout these projects, I successfully collaborated with over 30 stakeholders including clients, vendors and team members to gather requirements and implement technical solutions that effectively met business needs.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="resume-row">
            <div className="row">
              <div className="col-sm-3 col-md-3 col-xl-2">
                <div className="rb-left">
                  <Image src="/static/img/a3.png" alt="Experience 4" width={60} height={60} />
                </div>
              </div>
              <div className="col-sm-9 col-md-9 col-xl-10">
                <div className="rb-right">
                  <h6>PHP Developer</h6>
                  <label>Graposs Edutech Pvt. Ltd. | On Site | Nov. 2017–Sep 2021</label>
                  <div className="rb-time">Full Time</div>
                  <p className="justify-content-center">
                    During my tenure, I played a key role in developing NaukriConnect.com, leveraging AngularJS to enhance job search functionality. I managed and customized WordPress themes to improve user experience and branding while implementing white-label access control for role-based team permissions. A significant achievement was designing the backend architecture and developing the SarkariPariksha mobile app using Ionic framework. I also demonstrated leadership by successfully managing a team responsible for maintaining and updating over 2,000 WordPress-based websites, ensuring all client modifications were completed efficiently and on schedule.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default About;
