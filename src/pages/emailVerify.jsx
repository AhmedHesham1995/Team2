import React from 'react';
import { useState,useEffect } from 'react';
import success from '../assets/success.png' ;
import { useParams, Link } from "react-router-dom";
import axios from "axios";
const EmailVerify = () => {
    const [validUrl, setValidUrl] = useState();
	const param = useParams();

	useEffect(() => {
		const verifyEmailUrl = async () => {
			try {
				const url = `http://localhost:4005/users/${param.id}/verify/${param.token}`;
				const { data } = await axios.get(url);
				// console.log(data);
				setValidUrl(true);
			} catch (error) {
				console.log(error);
				setValidUrl(false);
			}
		};
		verifyEmailUrl();
	}, [param]);
    return (
        <div>
			{validUrl ? (
				<div className='containerverify'>
					<img src={success} alt="success_img" className='success_img' />
					<h1>Email verified successfully</h1>
					<Link to="/signIn">
						<button className='green_btn'>Login</button>
					</Link>
				</div>
			) : (
				<h1>404 Not Found</h1>
			)}
		</div>
    );
}

export default EmailVerify;
