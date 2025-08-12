import React, { useEffect, useState } from "react";
import { API_ACCESS_KEY } from "./constants/apiConstants";

const API_URL = `https://api.unsplash.com/photos/random?query=deep&client_id=${API_ACCESS_KEY}`;

function App() {
    const [imageUrl, setImageUrl] = useState(null);

    const fetchImage = async () => {
        try {
            const res = await fetch(API_URL);
            const data = await res.json();
            setImageUrl(data.urls.regular);
        } catch (e) {
            console.error("Error fetching image:", e);
        }
    };

    useEffect(() => {
        fetchImage();
        const interval = setInterval(fetchImage, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div
            style={{
                width: "100%",
                height: "100%",
                backgroundColor: "transparent",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            {imageUrl ? (
                <img
                    src={imageUrl}
                    alt="Deep Idea"
                    style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "cover",
                        borderRadius: 10,
                    }}
                />
            ) : (
                <>
                    <div>Loading...</div>

                    <div>Aloha :)</div>
                </>
            )}
        </div>
    );
}

export default App;
