import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './EditProfile.css';
import axios from 'axios';
import CloudinaryUploadWidget from ".././CloudinaryUploadWidget";
import CloudinaryUploadWidgetForCover from ".././CloudinaryUploadWidgetForCover";
import { AdvancedImage, responsive, placeholder } from "@cloudinary/react";
import { Cloudinary } from "@cloudinary/url-gen";


const EditProfile = () => {
    const [publicId, setPublicId] = useState("");
    const [coverPublicId, setCoverPublicId] = useState("");

    const [user, setUser] = useState({});
    const [cloudName] = useState("dvkh03fhr");
    const [uploadPreset] = useState("ml_default");

    const [uwConfig] = useState({
        cloudName,
        uploadPreset,
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        // multiple: true,  //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
    });
    const [uwConfigCover] = useState({
        cloudName,
        uploadPreset,
        // cropping: true, //add a cropping step
        // showAdvancedOptions: true,  //add advanced options (public_id and tag)
        // sources: [ "local", "url"], // restrict the upload sources to URL and local files
        // multiple: true,  //restrict upload to a single file
        // folder: "user_images", //upload files to the specified folder
        // tags: ["users", "profile"], //add the given tags to the uploaded files
        // context: {alt: "user_uploaded"}, //add the given context data to the uploaded files
        // clientAllowedFormats: ["images"], //restrict uploading to image files only
        // maxImageFileSize: 2000000,  //restrict file size to less than 2MB
        // maxImageWidth: 2000, //Scales the image down to a width of 2000 pixels before uploading
        // theme: "purple", //change to a purple theme
    });
    const cld = new Cloudinary({
        cloud: {
            cloudName
        }
    });
    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:4005/users/${localStorage.getItem('ID')}`);
                const data = response.data.data;
                setUser(data);
                setUserData({
                    name: data.name,
                    profilePicture: data.profilePicture,
                    profileCover: data.profileCover,
                    location: data.location,
                    bio: data.bio,
                    birthDate: data.birthDate,
                });
                setPublicId(data.profilePicture.public_id);

                console.log(response);
            } catch (error) {
                console.error('Error fetching user data:', error.message);
            }
        };
        fetchUser();
    }, []);


    const initState = {
        name: '',
        profileCover: '',
        profilePicture: '',
        location: '',
        bio: '',
        birthDate: '',
    };
    const [userData, setUserData] = useState(initState);
    const { name, profileCover, profilePicture, location, bio, birthDate } = userData;




    const navigate = useNavigate()
    const dispatch = useDispatch();
    const userId = localStorage.getItem('ID');

    const handleInput = (e) => {
        const { name, value } = e.target;
        setUserData({ ...userData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        navigate('/profile')

        try {
            // const imagesArray = JSON.parse(localStorage.getItem('images'));
            const latestProfilePicture = localStorage.getItem('images') || '';
            const latestProfileCover = localStorage.getItem('imagesCover') || '';
            localStorage.removeItem('images');
            localStorage.removeItem('imagesCover');

            const updatedUserData = await axios.patch(`http://localhost:4005/users/editprofile/${userId}`, {
                name,
                ...(latestProfilePicture && { profilePicture: latestProfilePicture }),
                // profilePicture: latestProfilePicture,
                // profileCover,
                ...(latestProfileCover && { profileCover: latestProfileCover }),
                // profileCover: latestProfileCover,
                location,
                bio,
                birthDate,
            });

            dispatch(setUserData(updatedUserData.data.data));

            console.log('Profile updated:', updatedUserData.data);
        } catch (error) {
            console.error('Error updating profile:', error);
        }
    };

    // useEffect(() => {
    //     const fetchUserData = async () => {
    //         try {
    //             const user = await axios.get(`http://localhost:4005/users/${userId}`);

    //             setUserData({
    //                 name: user.data.name,
    //                 profilePicture: user.data.profilePicture,
    //                 profileCover: user.data.profileCover,
    //                 location: user.data.location,
    //                 bio: user.data.bio,
    //                 birthDate: user.data.birthDate,
    //             });
    //         } catch (error) {
    //             console.error('Error fetching user data:', error);
    //         }
    //     };

    //     fetchUserData();
    // }, [userId]);

    return (
        <div key={userId} className='edit-prof bg-dark'>
            <br />
            <br />

            <div className='base-form container col-lg-5 col-md-8 col-sm-10 bg-black justify-content-center'>
                <div className='headerOfEdit '>
                    <div className='left-side'>
                        <NavLink to='/profile' className='form-header ' style={{ fontSize: '1.2em', textDecoration: 'none' }}>
                            X
                        </NavLink>
                        <h5 className='form-header'>Edit profile</h5>
                    </div>
                    <form className='' onSubmit={handleSubmit}>
                        <button className='btn border rounded-pill btn-light fw-bold' type="submit">
                            Save
                        </button>
                    </form>
                </div>
<br/>
                <form className='' onSubmit={handleSubmit}>

                    <div className='handle-images'>

                        <div className='form-info '>
                            <p>change cover</p>
                            <CloudinaryUploadWidgetForCover uwConfigCover={uwConfigCover} setCoverPublicId={setCoverPublicId} />
                        </div>

                        <div className='form-info '>
                            <p>change picture</p>
                            <CloudinaryUploadWidget uwConfig={uwConfig} setPublicId={setPublicId} />
                        </div>
                    </div>

                    <div key={userData.userId} className='form_group'>
                        <label className='form-info' htmlFor='form-name'>
                            Name
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                className='form-control bg-black text-white'
                                type='text'
                                id='form-name'
                                name='name'
                                value={name}
                                onChange={handleInput}
                                maxLength={50}
                                style={{ border: '1px solid #555' }}
                            />
                            <small className="text-secondary position-absolute" style={{ top: '50%', right: '5px', transform: 'translateY(-50%)' }}>
                                {name?.length}/50
                            </small>
                        </div>
                        <br />

                        <label className='form-info' htmlFor='form-bio'>
                            Bio
                        </label>
                        <div style={{ position: 'relative' }}>
                            <textarea
                                className='form-control bg-black text-white'
                                type='text'
                                id='form-bio'
                                name='bio'
                                value={bio}
                                onChange={handleInput}
                                maxLength={140}
                                style={{ border: '1px solid #555' }}
                            />
                            <small className="text-secondary position-absolute" style={{ top: '50%', right: '5px', transform: 'translateY(-50%)' }}>
                                {userData.bio?.length}/140
                            </small>
                        </div>
                        <br />

                        <label className='form-info' htmlFor='form-location'>
                            Location
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                className='form-control bg-black text-white'
                                type='text'
                                id='form-location'
                                name='location'
                                value={location}
                                onChange={handleInput}
                                maxLength={20}
                                style={{ border: '1px solid #555' }}
                            />
                            <small className="text-secondary position-absolute" style={{ top: '50%', right: '5px', transform: 'translateY(-50%)' }}>
                                {location?.length}/20
                            </small>
                        </div>
                        <br />

                        <label className='form-info' htmlFor='form-birth'>
                            Birth Date
                        </label>
                        <div style={{ position: 'relative' }}>
                            <input
                                className='form-control bg-black text-white'
                                type='date'
                                id='form-birth'
                                name='birthDate'
                                value={birthDate}
                                onChange={handleInput}
                                style={{ border: '1px solid #555' }}
                            />
                        </div>
                    </div>
                    <br />
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
