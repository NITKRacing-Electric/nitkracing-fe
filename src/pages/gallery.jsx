import { Section } from "../components/Section";
import * as React from "react";
import { useState, useEffect } from "react"; // Import useEffect hook
import { Masonry } from "masonic";
import Header, { StaticHeader } from "../components/Header";
import { ParallaxScroll } from '../components/ui/parallax-scroll'
import MobileView from "../components/mobileview/MobileView";
import { useStateContext } from "../context";
import { urlFor } from "./sponsors";

const placeholderImages = [
  "https://cdn.sanity.io/images/mmoq24tu/productions/5f580eeea3b611a8838cfdceceb2f922f48f5be6-2560x1706.jpg",
  "https://cdn.sanity.io/images/mmoq24tu/productions/5f580eeea3b611a8838cfdceceb2f922f48f5be6-2560x1706.jpg",
];

function GalleryPage() {
    const { drawerOpen } = useStateContext();
    const { isLoading, galleryData } = useStateContext();
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (!isLoading) {
            const imageUrls = galleryData.map(item => {
                if (item.images && item.images.length > 0) {

                  const testimonials = urlFor(item.image)
                  const baseUrl = testimonials.options.baseUrl
                  const projectId = testimonials.options.projectId
                  const dataset = testimonials.options.dataset
                
                  const imageUrlRef = item.images[0].image.asset._ref; 

                  const imageID = imageUrlRef.split('-')[1]; 
                  const imageDimensions = imageUrlRef.split('-')[2]
                  const imageType = imageUrlRef.split('-')[3]
                  

                  const imageUrl = `${imageID}-${imageDimensions}.${imageType}`;
                  console.log('Image URL:', imageUrl);

                    return `${baseUrl}/images/${projectId}/${dataset}/${imageUrl}`;
                } else {
                    return null;
                }
            });
            
            setImages(imageUrls);
        }
    }, [isLoading, galleryData]); 

    return (
        <Section>
            {drawerOpen ? (<MobileView />) : null}
            <h1 className="mx-auto lg:text-7xl mt-11 text-5xl text-center font-semibold tracking-tighter text-neutral-600">Gallery</h1>
            <ParallaxScroll images={images.length > 0 ? images : placeholderImages} /> 
        </Section>
    );
}

export default GalleryPage;

