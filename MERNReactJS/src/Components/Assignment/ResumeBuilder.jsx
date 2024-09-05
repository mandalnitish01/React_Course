import '../Assignment/Resumebuilder.css';

export default function Assignment({ name, interEducation, batchlorEducation, skills, experience }) {
  return (
    <div className='wrapper'>
      <h1 className='name'>{name}</h1>
      <div className='education'>
        <h2>Education</h2>
        <li>{interEducation}</li>
        <li>{batchlorEducation}</li>
      </div>
      <div className='skills'>
        <h2>Skills</h2>
        <ul>
          {skills ? skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))
        :
        <p>No skills available</p>
        }
        </ul>
      </div>
      <div className='experience'>
        <h2>Experience</h2>
        <li>{experience}</li>
      </div>
    </div>
  );
}
