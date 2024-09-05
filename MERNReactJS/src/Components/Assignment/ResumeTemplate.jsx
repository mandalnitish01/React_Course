import React from 'react';
// Functional Component for Resume
const Resume = () => {
  return (
    <div style={styles.container}>
      <Header name="John Doe" title="Full Stack Developer" />
      <ContactInfo
        email="johndoe@example.com"
        phone="+123456789"
        address="123 Main St, Anytown, USA"
        linkedin="linkedin.com/in/johndoe"
        github="github.com/johndoe"
      />
      <Section title="Summary">
        <p>
          Highly motivated Full Stack Developer with 5+ years of experience in building web applications using JavaScript, React, Node.js, and other modern technologies. Passionate about writing clean, efficient, and scalable code.
        </p>
      </Section>
      <Section title="Experience">
        <Experience
          position="Senior Developer"
          company="Tech Solutions Inc."
          period="Jan 2021 - Present"
          description="Lead the development of the company’s flagship product, improving performance by 30% and reducing load times by 50%."
        />
        <Experience
          position="Frontend Developer"
          company="WebWorks"
          period="May 2018 - Dec 2020"
          description="Developed responsive user interfaces for multiple projects, collaborating closely with backend teams to integrate APIs."
        />
      </Section>
      <Section title="Education">
        <Education
          degree="Bachelor of Science in Computer Science"
          institution="University of Technology"
          period="2014 - 2018"
        />
      </Section>
      <Section title="Skills">
        <ul>
          <li>JavaScript, React, Node.js</li>
          <li>HTML, CSS, SASS</li>
          <li>Git, GitHub, CI/CD</li>
          <li>REST APIs, GraphQL</li>
          <li>SQL, NoSQL databases</li>
        </ul>
      </Section>
    </div>
  );
};

// Header Component
const Header = ({ name, title }) => (
  <div style={styles.header}>
    <h1 style={styles.name}>{name}</h1>
    <h2 style={styles.title}>{title}</h2>
  </div>
);

// Contact Info Component
const ContactInfo = ({ email, phone, address, linkedin, github }) => (
  <div style={styles.contactInfo}>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>Address: {address}</p>
    <p>LinkedIn: <a href={`https://${linkedin}`} target="_blank" rel="noopener noreferrer">{linkedin}</a></p>
    <p>GitHub: <a href={`https://${github}`} target="_blank" rel="noopener noreferrer">{github}</a></p>
  </div>
);

// Section Component
const Section = ({ title, children }) => (
  <div style={styles.section}>
    <h3 style={styles.sectionTitle}>{title}</h3>
    {children}
  </div>
);

// Experience Component
const Experience = ({ position, company, period, description }) => (
  <div style={styles.experience}>
    <h4 style={styles.position}>{position} - {company}</h4>
    <p style={styles.period}>{period}</p>
    <p>{description}</p>
  </div>
);

// Education Component
const Education = ({ degree, institution, period }) => (
  <div style={styles.education}>
    <h4 style={styles.degree}>{degree}</h4>
    <p style={styles.institution}>{institution}</p>
    <p style={styles.period}>{period}</p>
  </div>
);

// Inline styles
const styles = {
  container: {
    fontFamily: 'Arial, sans-serif',
    margin: '0 auto',
    maxWidth: '800px',
    padding: '20px',
    color: '#333',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  name: {
    fontSize: '2.5em',
    margin: '0',
  },
  title: {
    fontSize: '1.5em',
    color: '#666',
    margin: '0',
  },
  contactInfo: {
    textAlign: 'center',
    marginBottom: '30px',
  },
  section: {
    marginBottom: '20px',
  },
  sectionTitle: {
    borderBottom: '2px solid #ddd',
    paddingBottom: '5px',
    marginBottom: '10px',
  },
  experience: {
    marginBottom: '15px',
  },
  position: {
    fontSize: '1.2em',
    margin: '0',
  },
  period: {
    color: '#999',
    marginBottom: '10px',
  },
  education: {
    marginBottom: '15px',
  },
  degree: {
    fontSize: '1.2em',
    margin: '0',
  },
  institution: {
    color: '#666',
  }
};

export default Resume;
