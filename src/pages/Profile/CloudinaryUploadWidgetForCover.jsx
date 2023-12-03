import { createContext, useEffect, useState } from "react";

const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidgetForCover({ uwConfigCover, setCoverPublicId }) {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        if (!loaded) {
            const uwScript = document.getElementById("uw-for-cover");
            if (!uwScript) {
                const script = document.createElement("script");
                script.setAttribute("async", "");
                script.setAttribute("id", "uw-for-cover");
                script.src = "https://upload-widget.cloudinary.com/global/all.js";
                script.addEventListener("load", () => setLoaded(true));
                document.body.appendChild(script);
            } else {
                setLoaded(true);
            }
        }
    }, [loaded]);

    const initializeCloudinaryWidget = () => {
        if (loaded) {
            var myWidget = window.cloudinary.createUploadWidget(
                uwConfigCover,
                (error, result) => {
                    if (!error && result && result.event === "success") {
                        const imagesCoverString = localStorage.getItem("imagesCover") || "";
                        const newCoverUrl = result.info.secure_url;
                        const updatedCoverString = imagesCoverString ? `${imagesCoverString},${newCoverUrl}` : newCoverUrl;
                        localStorage.setItem("imagesCover", updatedCoverString);
                        setCoverPublicId(result.info.public_id);
                        console.log("Done! Here is the image info for cover: ", result.info);
                    }
                }
            );

            document.getElementById("upload_widget_for_cover").addEventListener(
                "click",
                function () {
                    myWidget.open();
                },
                false
            );
        }
    };

    return (
        <CloudinaryScriptContext.Provider value={{ loaded }}>
            <a
                id="upload_widget_for_cover"
                className="cloudinary-button btn btn-secondary"
                onClick={initializeCloudinaryWidget}
            >
                upload
            </a>
        </CloudinaryScriptContext.Provider>
    );
}

export default CloudinaryUploadWidgetForCover;
export { CloudinaryScriptContext };