import React, { useEffect, useState } from "react";

const slider = [
    {
        id: 1,
        title: "Slider 1",
        img: "https://mir-s3-cdn-cf.behance.net/project_modules/fs/094441140430173.6241cc21ecb53.jpg"
    },
    {
        id: 2,
        title: "Slider 2",
        img: "https://karkitechs.com/wp-content/uploads/2024/08/20compressed-1-scaled.jpg"
    },
    {
        id: 3,
        title: "Slider 3",
        img: "https://images.filmibeat.com/ph-big/2014/09/aranmanai-movie-poster_141026108860.jpg"
    }
];
export default function Home() {
    const [current, setcurrent] = useState(0);

    useEffect(() => {
        const homeslider = setInterval(() => {
            setcurrent((prev) => (prev + 1) % slider.length);
        }, 3000);

        return () => (clearInterval(homeslider));
    }, []);

    const leftbutton = () => {
        if (current === 0) {
            setcurrent(slider.length - 1);
        }
        else {
            setcurrent(current - 1);
        }
    }
    const rightslider = () => {
        setcurrent((current + 1) % slider.length)
    }

    return (
        <div className="slider">
            <img src={slider[current].img} />
            <div className="caption">
                <h1>{slider[current].title}</h1>
            </div>
            <button className="prev" onClick={leftbutton}>&#10094;</button>
            <button className="next" onClick={rightslider}>&#10095;</button>

        </div>
    )
}