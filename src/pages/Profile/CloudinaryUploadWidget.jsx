import { createContext, useEffect, useState } from "react";

// Create a context to manage the script loading state
const CloudinaryScriptContext = createContext();

function CloudinaryUploadWidget({ uwConfig, setPublicId }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Check if the script is already loaded
    if (!loaded) {
      const uwScript = document.getElementById("uw");
      if (!uwScript) {
        // If not loaded, create and load the script
        const script = document.createElement("script");
        script.setAttribute("async", "");
        script.setAttribute("id", "uw");
        script.src = "https://upload-widget.cloudinary.com/global/all.js";
        script.addEventListener("load", () => setLoaded(true));
        document.body.appendChild(script);
      } else {
        // If already loaded, update the state
        setLoaded(true);
      }
    }
  }, [loaded]);

  const initializeCloudinaryWidget = () => {
    if (loaded) {
      var myWidget = window.cloudinary.createUploadWidget(
        uwConfig,
        (error, result) => {
          if (!error && result && result.event === "success") {
            // const images = JSON.parse(localStorage.getItem("images")) || '';
            // images.push(result.info.secure_url)
            const imagesString = localStorage.getItem("images") || "";
            const newImageUrl = result.info.secure_url;
            const updatedImagesString = imagesString ? `${imagesString},${newImageUrl}` : newImageUrl;
            localStorage.setItem("images", updatedImagesString);

            // localStorage.setItem("images", JSON.stringify(images))
            console.log("Done! Here is the image info: ", result.info);
            setPublicId(result.info.public_id);
          }
        }
      );

      document.getElementById("upload_widget").addEventListener(
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
        id="upload_widget"
        className="cloudinary-button btn btn-secondary"
        onClick={initializeCloudinaryWidget}
      >
        upload
      </a>
    </CloudinaryScriptContext.Provider>
  );
}

export default CloudinaryUploadWidget;
export { CloudinaryScriptContext };

// import { createContext, useEffect, useState } from "react";

// // Create a context to manage the script loading state and uploaded images
// const CloudinaryScriptContext = createContext();

// function CloudinaryUploadWidget({ uwConfig, setPublicId }) {
//   const [loaded, setLoaded] = useState(false);
//   const [uploadedImages, setUploadedImages] = useState([]);

//   useEffect(() => {
//     // Check if the script is already loaded
//     if (!loaded) {
//       const uwScript = document.getElementById("uw");
//       if (!uwScript) {
//         // If not loaded, create and load the script
//         const script = document.createElement("script");
//         script.setAttribute("async", "");
//         script.setAttribute("id", "uw");
//         script.src = "https://upload-widget.cloudinary.com/global/all.js";
//         script.addEventListener("load", () => setLoaded(true));
//         document.body.appendChild(script);
//       } else {
//         // If already loaded, update the state
//         setLoaded(true);
//       }
//     }
//   }, [loaded]);

//   const initializeCloudinaryWidget = () => {
//     if (loaded) {
//       var myWidget = window.cloudinary.createUploadWidget(
//         uwConfig,
//         (error, result) => {
//           if (!error && result && result.event === "success") {
//             const images = JSON.parse(localStorage.getItem("images")) || [];
//             images.push(result.info.secure_url)
//             localStorage.setItem("images", JSON.stringify(images))
//             setUploadedImages((prevImages) => [...prevImages, result.info.secure_url]);
//             console.log("Done! Here is the image info: ", result.info);
//             setPublicId(result.info.public_id);
//           }
//         }
//       );

//       document.getElementById("upload_widget").addEventListener(
//         "click",
//         function () {
//           myWidget.open();
//         },
//         false
//       );
//     }
//   };

//   return (
//     <CloudinaryScriptContext.Provider value={{ loaded, uploadedImages }}>
//       <a
//         id="upload_widget"
//         className=" btn btn-secondary cloudinary-button"
//         onClick={initializeCloudinaryWidget}
//       >
//         change profile picture
//       </a>
//     </CloudinaryScriptContext.Provider>
//   );
// }

// export default CloudinaryUploadWidget;
// export { CloudinaryScriptContext };