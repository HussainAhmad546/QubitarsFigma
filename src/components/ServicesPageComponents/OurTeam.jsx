import React from 'react';
import teamMembers from '../../data/teamMembers';
import '../../styles/Services.css';

const OurTeam = () => {
  return (
    <div className="container text-center my-5">
      <h1 className="mb-4">Our Team</h1>
      <p>
      You offer a good product, make advertising, analyze the market but <br/>still have no improvement
      </p>
      <div className="row">
        {teamMembers.map((member) => (
          <div key={member.id} className="col-md-3">
            <div className="card mb-4 our-team-card" style={{borderBottom:'5px solid orange'}}>
              <img
                src={member.image}
                className="card-img-top"
                alt={member.name}
              />
              <div className="card-body d-flex">
                <h5 className="card-title">{member.name}</h5>
                  <span className="orange-text">({member.role})</span>
              </div>
                <p className="card-text text-center">{member.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurTeam;
