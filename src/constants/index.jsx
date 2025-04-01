export const navLinks = [
    {
        id: 1,
        name: 'Home',
        href: '#home',
    },
    {
        id: 2,
        name: 'About',
        href: '#about',
    },
    {
        id: 3,
        name: 'Work',
        href: '#work',
    },
    {
        id: 4,
        name: 'Contact',
        href: '#contact',
    },
];

export const calculateSizes = (isSmall, isMobile, isTablet) => {
    return {
        deskScale: isSmall ? 0.05 : isMobile ? 0.06 : 0.065,
        deskPosition: isMobile ? [0.5, -4.5, 0] : [0.25, -5.5, 0],
        cubePosition: isSmall ? [4, -5, 0] : isMobile ? [5, -5, 0] : isTablet ? [5, -5, 0] : [9, -5.5, 0],
        reactLogoPosition: isSmall ? [3, 4, 0] : isMobile ? [5, 4, 0] : isTablet ? [5, 4, 0] : [12, 3, 0],
        ringPosition: isSmall ? [-5, 7, 0] : isMobile ? [-10, 10, 0] : isTablet ? [-12, 10, 0] : [-24, 10, 0],
        targetPosition: isSmall ? [-5, -10, -10] : isMobile ? [-9, -10, -10] : isTablet ? [-11, -7, -10] : [-13, -13, -10],
    };
};

export const workExperiences = [
    {
        id: 1,
        name: 'Invibratrac',
        pos: 'Software Developer',
        duration: 'February 2025 - Present',
        title: "Expanded supported platforms by 3x using robust CI pipelines and cross-compilation, integrated native eye-tracking demos with WebGazer.js and Python for background cursor control, and prototyped real-time AI features for device customization via the realtime-ai SDK.",
        icon: '/assets/invibratrac.png',
        animation: 'victory',
    },
    {
        id: 2,
        name: 'Genehackers',
        pos: 'Computational Biologist',
        duration: 'November 2024 - Present',
        title: "Leading a 6-member web development team to design the iGEM competition wiki page using React, Three.js, and Tailwind while performing advanced lab procedures to develop a vaccine virus-inspired recombinant vaccine for Schistosomiasis.",
        icon: '/assets/genehackers.png',
        animation: 'clapping',
    },
    {
        id: 3,
        name: 'Pixelators',
        pos: 'Mentor',
        duration: 'September 2022 - June 2024',
        title: "Mentored over 10 members and led fundraising initiatives that secured over $10,000 in sponsorships from organizations like NASA and Northrop Grumman.",
        icon: '/assets/pixelators.png',
        animation: 'salute',
    },
];