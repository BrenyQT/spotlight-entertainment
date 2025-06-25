import React, { useEffect, useState } from 'react';

const images = [
    'https://wallpaperscraft.com/image/single/concert_crowd_people_134866_1920x1080.jpg',
    'https://cdn.concreteplayground.com/content/uploads/2024/03/Hats-and-Tatts_Supplied-2880x1620.jpg',
    'https://platform.vegas.eater.com/wp-content/uploads/sites/24/chorus/uploads/chorus_asset/file/19193563/mgm_grand_nightlife_hakkasan_nigthclub_lifestyle_steve_aoki_onstage_with_smoke.tif_.image_.1920.1080.high_.jpg?quality=90&strip=all&crop=0,0,100,100'
];


function HomepageCarousel() {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100vw',
                height: '100vh',
                backgroundImage: `url(${images[currentIndex]})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                transition: 'background-image 1s ease-in-out',
                zIndex: -1, // behind everything
            }}
        />
    );
}

export default HomepageCarousel;
