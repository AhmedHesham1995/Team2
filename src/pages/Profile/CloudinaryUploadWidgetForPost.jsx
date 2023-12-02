import { createContext, useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faImage, faSquare, faSmile, faCalendar, faLocationDot, faBookmark, faHeart, faChartBar, faArrowUp, faComment, faRetweet } from '@fortawesome/free-solid-svg-icons';

const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidgetForPost({ uwConfigPost, setPostPublicId }) {
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
                uwConfigPost,
                (error, result) => {
                    if (!error && result && result.event === "success") {
                        const imagesPostString = localStorage.getItem("imagesPost") || "";
                        const newPostUrl = result.info.secure_url;
                        const updatedPostString = imagesPostString ? `${imagesPostString},${newPostUrl}` : newPostUrl;
                        localStorage.setItem("imagesPost", updatedPostString);
                        setPostPublicId(result.info.public_id);
                        console.log("Done! Here is the image info for post: ", result.info);
                    }
                }
            );

            document.getElementById("upload_widget_for_post").addEventListener(
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
            {/* <a
                id="upload_widget_for_post"
                className="cloudinary-button btn btn-secondary"
                onClick={initializeCloudinaryWidget}
            > */}

            <FontAwesomeIcon icon={faImage}
                id="upload_widget_for_post"
                className="cloudinary happenIcon"
                onClick={initializeCloudinaryWidget}
            />

            {/* </a> */}
        </CloudinaryScriptContext.Provider>
    );
}

export default CloudinaryUploadWidgetForPost;
export { CloudinaryScriptContext };