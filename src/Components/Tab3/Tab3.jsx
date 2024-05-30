import JobDescription from '../../CommonComponent/JobDescription/JobDescription'
import Logo from '../../assets/Logo/tenthPlanetLogo.png'

const Tab3 = () => {
    const responsibilities = [
        'Provide customized enterprise IT solutions centered around open source software.',
        'Design and implement tailored IT solutions to meet specific client needs.',
        'Ensure compliance with industry standards and regulatory requirements.',
        'Troubleshoot and resolve technical issues promptly to minimize downtime.',
        'Collaborate with clients to understand their requirements and deliver optimal solutions.'
    ];

    return (
        <JobDescription
            logo={Logo}
            jobTitle="Data Provisioning Executive"
            duration=" Jan 2019 - Nov 2019 · 11 mos"
            company="Tenth Planet Technologies · Full-time"
            location="Mount Road, Chennai · On-site"
            responsibilities={responsibilities}
        />
    );
};

export default Tab3;