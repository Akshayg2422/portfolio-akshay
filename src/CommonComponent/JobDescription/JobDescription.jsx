import React from 'react';
import { Container, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import './JobDescription.css'

const JobDescription = ({ logo, jobTitle, duration, company, location, responsibilities }) => {
    return (
        <div className="custom-text-container" style={{ background: 'var(--gradient)', borderRadius: '20px', color: 'var(--text-color)' }}>
            <section className="m-3 m-md-5">
                <Container>
                    <Col xs={12} md={12} className="d-flex flex-column">
                        <div className="pb-2">
                            <img
                                src={logo}
                                alt="Company Logo"
                                height={65}
                                width={65}
                            />
                        </div>
                        <div className="h2 font-weight-bolder">
                            {jobTitle}
                        </div>
                        <h4>{company}</h4>
                        <p>{duration}</p>
                        <p>{location}</p>

                        {/* <ul>
                            {responsibilities.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul> */}
                         {responsibilities && responsibilities.length > 0 && (
                            <ul>
                                {responsibilities.map((item, index) => (
                                    <li key={index}>{item}</li>
                                ))}
                            </ul>
                        )}
                    </Col>
                </Container>
            </section>
        </div>
    );
};

JobDescription.propTypes = {
    logo: PropTypes.string.isRequired,
    jobTitle: PropTypes.string.isRequired,
    duration: PropTypes.string.isRequired,
    company: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    responsibilities: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default JobDescription;
