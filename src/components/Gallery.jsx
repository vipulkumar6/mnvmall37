"use client"

import { Button } from "@mui/material";
import { useState } from "react"
import { FaTimes } from "react-icons/fa"
import DialogBox from "./DialogBox";
import { TfiDownload } from "react-icons/tfi";

const images = [
    { src: "./images/MVN-Mall-Gurgaon-image-1.webp", alt: "Gallery image 1" },
    { src: "./images/MVN-Mall-Gurgaon-image-2.jpg", alt: "Gallery image 2" },
    { src: "./images/MVN-Mall-Gurgaon-image-3.jpg", alt: "Gallery image 3" },
    { src: "./images/MVN-Mall-Gurgaon-image-4.jpg", alt: "Gallery image 4" },
    { src: "./images/MVN-Mall-Gurgaon-image-1.webp", alt: "Gallery image 5" },
    { src: "./images/MVN-Mall-Gurgaon-image-5.webp", alt: "Gallery image 6" },
]

export default function Gallery() {

    const [isDialogOpen, setIsDialogOpen] = useState(false);

    // Function to handle dialog open/close
    const handleDialogToggle = () => {
        setIsDialogOpen((prev) => !prev);
    };
    const [lightboxOpen, setLightboxOpen] = useState(false)
    const [currentImage, setCurrentImage] = useState(0)

    const openLightbox = (index) => {
        setCurrentImage(index)
        setLightboxOpen(true)
    }

    const closeLightbox = () => {
        setLightboxOpen(false)
    }

    return (
        <div className="container mx-auto px-4 py-8">
            <div className="my-2 luxury-heading">
                <div className="luxury-line"></div>
                <h1>Image Gallery</h1>
                <div className="luxury-line"></div>
            </div>

            <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
                {images.map((image, index) => (
                    <div
                        key={index}
                        className="aspect-w-1 aspect-h-1 overflow-hidden rounded-lg shadow-lg transition-transform hover:scale-105"
                    >
                        <img
                            src={image.src || "/placeholder.svg"}
                            alt={image.alt}
                            className="w-full h-full object-cover cursor-pointer"
                            onClick={() => openLightbox(index)}
                        />
                    </div>
                ))}
            </div>

            <div className="my-2">
                <Button
                    onClick={handleDialogToggle}
                    sx={{ padding: '10px ' }} fullWidth variant="outlined" endIcon={<TfiDownload />}>Download All Photos</Button>
            </div>
            {lightboxOpen && (
                <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50">
                    <div className="relative max-w-4xl w-full max-h-[90vh]">
                        <button
                            onClick={closeLightbox}
                            className="absolute top-4 right-4 text-white hover:text-gray-300 transition-colors"
                            aria-label="Close lightbox"
                        >
                            <FaTimes size={24} />
                        </button>
                        <img
                            src={images[currentImage].src || "/placeholder.svg"}
                            alt={images[currentImage].alt}
                            className="max-w-full max-h-[90vh] mx-auto object-contain"
                        />
                    </div>
                </div>
            )}
            <DialogBox open={isDialogOpen} OnClose={handleDialogToggle} />
        </div>
    )
}

