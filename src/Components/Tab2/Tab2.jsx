import JobDescription from '../../CommonComponent/JobDescription/JobDescription'
import Logo from '../../assets/Logo/matriLogo.png'

const Tab2 = () => {
    const responsibilities = [
        'Facilitated payments as a Payment Assistant.',
        'Supported users in navigating the payment page.',
        'Utilized chat and system calls to address user concerns.',
        'Convinced users of package benefits.',
        'Ensured a smooth transaction experience.'
    ];



    return (
        <JobDescription
            logo={Logo}
            jobTitle="Payment Assistance"
            duration=" Sep 2021 - Mar 2022 · 7 mos"
            company="MATRIMONY.COM LIMITED · Full-time"
            location="Guindy, Chennai · On-site"
            responsibilities={responsibilities}
        />
    );
};

export default Tab2;