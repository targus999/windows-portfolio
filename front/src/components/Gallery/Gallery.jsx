import React, { useEffect, useRef } from "react";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import { IMAGE_COUNT } from "../../constants/constants";

const Gallery = ({ fileName ,setter}) => {
    const getImagesArray = (fileName) => {
        const imagesArray = [];

        for (let i = 1; i <= IMAGE_COUNT[fileName]; i++) {
            imagesArray.push({
                src: `/images/gallery/${fileName}/${i}.webp`
            });
        }
        
        return imagesArray;
    }

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
            dynamicEl={getImagesArray(fileName)}
            onInit={(detail) => {
                lgInstance.current = detail.instance; // Store the LightGallery instance
            }}
            onBeforeClose={onGalleryClose}
        />

    );
};

export default Gallery;
