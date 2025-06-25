import React from 'react';

const About = () => {
    return (
        <div className="flex flex-col items-center justify-center mb-52 min-h-[40vh] text-center px-4 bg-accent rounded-2xl max-w-4xl mx-auto border-wid">
            <h1 className="text-4xl font-bold text-white mb-4 font-roboto">About ArtConnect</h1>
            <p className="text-lg text-white max-w-2xl font-roboto">
                ArtConnect is a platform where artists and venues seamlessly find and hire each other, fostering a vibrant and accessible event ecosystem.
            </p>
        </div>
    );
};

export default About;
