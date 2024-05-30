import JobDescription from '../../CommonComponent/JobDescription/JobDescription'
import Logo from '../../assets/Logo/stringLogo.png'

const Tab4 = () => {
    const responsibilities = [
        'Develop tailored solutions for Mortgage Process Outsourcing (MPO) to meet client-specific needs.',
        'Optimize and streamline mortgage processes to improve operational efficiency.',
        'Enhance overall process efficiency by identifying and implementing best practices.',
        'Reduce costs through efficient resource management and process improvements.',
        'Collaborate with clients to ensure solutions align with their business goals and regulatory requirements.'
    ];

    return (
        <JobDescription
            logo={Logo}
            jobTitle="Process Associate"
            duration=" Apr 2017 - Nov 2017 · 8 mos"
            company="String Information Services · Full-time"
            location="Saidapet, Chennai · On-site"
            responsibilities={responsibilities}
        />
    );
};

export default Tab4;