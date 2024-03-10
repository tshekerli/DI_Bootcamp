import data from "./BigData.json";

class Example1 extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
        
        <ul>
           { data.SocialMedias.map(socialMedia => (
                <li>
                    <p>{socialMedia}</p>
                </li>
            ))}
        </ul>

        
      </div>
    );
  }
}

class Example2 extends React.Component {
    render() {
        return (
        <div >
            {data.Skills.map(skill => (
                <div key={skill.Area}> 
                    <h2>{skill.Area}</h2>
                    <ul>
                        {skill.SkillSet.map(set => (
                            <li key={set.Name}>{set.Name}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
        );
    }
}





class Example3 extends React.Component {
  render() {
    return (
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', textAlign:'center'}}>
        
        <ul>
           { data.Experiences.map(experience => (
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center'}}>
                    <img src={experience.logo}/>
                    <a href={experience.url}>{experience.companyName}</a>
                    
                    <div>
                        {experience.roles.map(role => (
                            <div>
                                <p style={{fontWeight:'bold'}}>{role.title}</p>
                                
                                <p>{role.startDate}  {role.location}</p>
                                <p>{role.description}</p>
                            </div>
                        ))}
                    </div>

                </div>
            ))}
        </ul>

        
      </div>
    );
  }
}

export { Example1, Example2, Example3 };