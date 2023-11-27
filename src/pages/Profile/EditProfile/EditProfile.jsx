import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';
import './EditProfile.css';
import axios from 'axios';

const EditProfile = () => {
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

            const updatedUserData = await axios.patch(`http://localhost:4005/users/editprofile/${userId}`, {
                name,
                profilePicture,
                profileCover,
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

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const user = await axios.get(`http://localhost:4005/users/${userId}`);

                setUserData({
                    name: user.data.name,
                    profilePicture: user.data.profilePicture,
                    profileCover: user.data.profileCover,
                    location: user.data.location,
                    bio: user.data.bio,
                    birthDate: user.data.birthDate,
                });
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [userId]);

    return (
        <div key={userData.userId} className='edit-prof bg-dark'>
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
                        <button className='btn border rounded-pill btn-light fw-bold' type="submit"  >
                            save
                        </button>
                    </form>
                </div>

                <form className='' onSubmit={handleSubmit}>

                    <div className='text-center'>
                        <label className='coverBtn' htmlFor='coverBtn'>
                            <i className="btn btn-dark fas fa-camera"></i>
                        </label>
                        <input
                            // onChange={handleProfileCoverChange}
                            accept='image/*'
                            type='file'
                            style={{ display: 'none' }}
                            id='coverBtn'
                        />
                    </div>

                    <br />

                    <div className='d-flex'>
                        <br />
                        <div className='edit-profile-photo d-flex '>
                            <label htmlFor='profilePhoto' className='change-photo btn btn-dark'>
                                <i className="fas fa-camera"></i>
                            </label>
                            <input
                                // onChange={handleProfilePhotoChange}
                                id='profilePhoto'
                                type='file'
                                accept='image/*'
                                style={{ display: 'none' }}
                            />
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
                                {/* {name.length}/50 */}
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
                                {/* {userData.bio.length}/140 */}
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
                                {/* {location.length}/20 */}
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