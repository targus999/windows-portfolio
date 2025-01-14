import React, { useEffect, useRef } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";

const Gallery = ({ fileName ,setter}) => {
    console.log(fileName);
    
    const onGalleryClose = () => {
        setter(null); // Reset the opened file
    };

    const lgInstance = useRef(null); // Reference to store the LightGallery instance

    useEffect(() => {
        // Open the LightGallery viewer as soon as it's initialized
        if (lgInstance.current) {
            lgInstance.current.openGallery(0); // Open the gallery at the first image (index 0)
        }

    }, []);

    return (
        fileName &&
        <LightGallery
            speed={500}
            dynamic
            plugins={[]}
            dynamicEl={[
                { src: `/images/${fileName}.png` },
            ]}
            onInit={(detail) => {
                lgInstance.current = detail.instance; // Store the LightGallery instance
            }}
            onBeforeClose={onGalleryClose}
        />

    );
};

export default Gallery;
