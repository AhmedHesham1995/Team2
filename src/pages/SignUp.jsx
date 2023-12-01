// import { useState } from 'react';
// import { NavLink } from 'react-router-dom';
// import { useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';
// import { register } from '../services/auth';
// const MySwal = withReactContent(Swal);


// const SignUp = () => {

//     const navigate = useNavigate();
//     const [user, setUser] = useState({
//         name: '',
//         email: '',
//         password: '',
//         confirmPassword: ''

//     })

//     const [errors, setErrors] = useState({
//         nameError: '',
//         emailError: '',
//         passwordError: '',
//         confirmPasswordError: ''
//     })

//     const [showPassword, setShowPassword] = useState(false);
//     const togglePasswordVisibility = () => {
//         setShowPassword(!showPassword);
//     }

//     const handleChange = (evt) => {
//         const { name, value } = evt.target;
//         setUser({ ...user, [name]: value })

//         switch (name) {
//             case 'name':
//                 setErrors({
//                     ...errors,
//                     nameError: (value.length === 0) ?
//                         "Name is required" :
//                         (value.length < 3) ?
//                             "Name must be at least 3 characters" :
//                             ""
//                 })
//                 break;
//             case "email":
//                 const emailRegix = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//                 setErrors({
//                     ...errors,
//                     emailError:
//                         (value.length === 0) ?
//                             "email is required" :
//                             emailRegix.test(value) ? '' :
//                                 "Invalid Email"
//                 })
//                 break;
//             case 'password':
//                 const passwordRegex = /^.{8,}$/;
//                 setErrors({
//                     ...user,
//                     passwordError:
//                         (value.length === 0) ?
//                             "password is required" :
//                             passwordRegex.test(value) ? '' :
//                                 "more than 8 characters"
//                 })
//                 break;
//             case 'confirmPassword':
//                 setErrors({
//                     ...errors,
//                     confirmPasswordError:
//                         (value.length === 0) ? "" :
//                             (value !== user.password) ?
//                                 "Passwords do not match" : ""
//                 })
//                 break;
//             default:
//                 break;
//         }
//     }

//     const handleSubmit= async(ev)=>{
//         ev.preventDefault();
//         if(errors.nameError||errors.emailError||errors.passwordError){
//             // toast.error("Validation Error")
//             console.log('error');
//             MySwal.fire({
//                 icon: 'error',
//                 title: 'Validation Error',
//                 text: 'Please correct the form errors.',
//               });
//         }
//         else{
//             try{
//                 const res = await register(user)
//                 console.log(res);
//                 navigate('/signIn')
//             }
//             catch(err){
//                 MySwal.fire({
//                     icon: 'error',
//                     title: 'something went wrong',
//                     text: 'Please correct the form errors.',
//                   });
//             }

//             // const res = await register(account)
//             //     console.log(res);
            
//         }
//     }


//     return (
//         <>
//             <form onSubmit={handleSubmit} className="bg-dark text-center align-items-center justify-content-center d-flex" >
//                 <div className="container col-lg-5 col-md-8 col-sm-10">
//                     <div className="BBG bg-black rounded-5">
//                         <div className="d-flex flex-row bd-highlight ">
//                             <div className="col d-flex align-items-center justify-content-center">
//                                 <div className="d-grid gap-4 text-white">
//                                     <br />

//                                     <h2 className=''>create your account</h2>

//                                     <div>
//                                         <input
//                                             type="text"
//                                             className={` form-control ${(errors.nameError) ? 'is-invalid' : 'text-dark'}`}
//                                             name='name'
//                                             placeholder="enter your name"
//                                             value={user.name}
//                                             onChange={handleChange}
//                                         />
//                                         <div className="invalid-feedback">{errors.nameError}</div>
//                                     </div>

//                                     <div>
//                                         <input
//                                             type="text"
//                                             className={`form-control ${(errors.emailError) ? 'is-invalid' : 'text-dark'}`}
//                                             name='email'
//                                             placeholder="enter your email"
//                                             value={user.email}
//                                             onChange={handleChange}
//                                         />
//                                         <div className='invalid-feedback'>{errors.emailError}</div>
//                                     </div>


//                                     <div className=''>
//                                         <input
//                                             className={`form-control ${(errors.passwordError) ? 'is-invalid' : 'text-dark'}`}
//                                             type={showPassword ? "text" : "password"}
//                                             name='password'
//                                             placeholder="enter your password"
//                                             onChange={handleChange}
//                                         />
//                                         {/* <button
//                                             type='button'
//                                             className='btn btn-success'
//                                             onClick={togglePasswordVisibility}
//                                         >
//                                             {showPassword ? "hide" : 'show'}
//                                         </button> */}
//                                         <div className='wid invalid-feedback'>{errors.passwordError}</div>
//                                     </div>

//                                     <div>
//                                         <input
//                                             className={`form-control ${(errors.confirmPasswordError) ? 'is-invalid' : 'text-dark'}`}
//                                             type="password"
//                                             placeholder="Re-enter your password"
//                                             name='confirmPassword'
//                                             value={user.confirmPassword}
//                                             onChange={handleChange}
//                                         />
//                                         <div className='invalid-feedback'>{errors.confirmPasswordError}</div>
//                                     </div>


//                                     <button
//                                         type="submit"
//                                         className="btn border rounded-pill btn-light fw-bold"
//                                     >
//                                         Sign Up
//                                     </button>
//                                     <h5><NavLink to='/join' className='text-danger'>back</NavLink> </h5>
//                                 </div>
//                             </div>
//                         </div>
//                         <br />
//                     </div>
//                 </div>
//             </form>
//         </>
//     )
// }

// export default SignUp;









// import { useState } from 'react';
// import { NavLink, useNavigate } from 'react-router-dom';
// // import Swal from 'sweetalert2';
// // import withReactContent from 'sweetalert2-react-content';
// import { register } from '../services/auth';
// // const MySwal = withReactContent(Swal);

// const SignUp = () => {
//   const navigate = useNavigate();

//   const [user, setUser] = useState({
//     name: '',
//     email: '',
//     password: '',
//     confirmPassword: '',
//     username: '', // Add this line
//   });

//   const [errors, setErrors] = useState({
//     nameError: '',
//     emailError: '',
//     passwordError: '',
//     confirmPasswordError: '',
//     usernameError: '', // Add this line
//   });

//   const [showPassword, setShowPassword] = useState(false);

//   const togglePasswordVisibility = () => {
//     setShowPassword(!showPassword);
//   };

//   const handleChange = (evt) => {
//     const { name, value } = evt.target;
//     setUser({ ...user, [name]: value });

//     switch (name) {
//       case 'name':
//         setErrors({
//           ...errors,
//           nameError: value.length === 0 ? 'Name is required' : value.length < 3 ? 'Name must be at least 3 characters' : '',
//         });
//         break;
//       case 'email':
//         const emailRegix = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
//         setErrors({
//           ...errors,
//           emailError: value.length === 0 ? 'Email is required' : emailRegix.test(value) ? '' : 'Invalid Email',
//         });
//         break;
//       case 'password':
//         const passwordRegex = /^.{8,}$/;
//         setErrors({
//           ...user,
//           passwordError: value.length === 0 ? 'Password is required' : passwordRegex.test(value) ? '' : 'More than 8 characters',
//         });
//         break;
//       case 'confirmPassword':
//         setErrors({
//           ...errors,
//           confirmPasswordError: value.length === 0 ? '' : value !== user.password ? 'Passwords do not match' : '',
//         });
//         break;
//       case 'username': // Add this case
//         setErrors({
//           ...errors,
//           usernameError: value.length === 0 ? 'Username is required' : value.length < 3 ? 'Username must be at least 3 characters' : '',
//         });
//         break;
//       default:
//         break;
//     }
//   };

//   const handleSubmit = async (ev) => {
//     ev.preventDefault();
//     if (errors.nameError || errors.emailError || errors.passwordError || errors.usernameError) {
//       // MySwal.fire({
//       //   icon: 'error',
//       //   title: 'Validation Error',
//       //   text: 'Please correct the form errors.',
//       // });
//     } else {
//       try {
//         const res = await register(user);
//         console.log(res);
//         navigate('/signIn');
//       } catch (err) {
//         // MySwal.fire({
//         //   icon: 'error',
//         //   title: 'Something went wrong',
//         //   text: 'Please correct the form errors.',
//         // });
//       }
//     }
//   };

//   return (
//     <>
//       <form onSubmit={handleSubmit} className="bg-dark text-center align-items-center justify-content-center d-flex">
//         <div className="container col-lg-5 col-md-8 col-sm-10">
//           <div className="BBG bg-black rounded-5">
//             <div className="d-flex flex-row bd-highlight ">
//               <div className="col d-flex align-items-center justify-content-center">
//                 <div className="d-grid gap-4 text-white">
//                   <br />
//                   <h2 className=''>Create your account</h2>

//                   <div>
//                     <input
//                       type="text"
//                       className={` form-control ${(errors.nameError) ? 'is-invalid' : 'text-dark'}`}
//                       name='name'
//                       placeholder="Enter your name"
//                       value={user.name}
//                       onChange={handleChange}
//                     />
//                     <div className="invalid-feedback">{errors.nameError}</div>
//                   </div>

//                   <div>
//                     <input
//                       type="text"
//                       className={`form-control ${(errors.emailError) ? 'is-invalid' : 'text-dark'}`}
//                       name='email'
//                       placeholder="Enter your email"
//                       value={user.email}
//                       onChange={handleChange}
//                     />
//                     <div className='invalid-feedback'>{errors.emailError}</div>
//                   </div>

//                   <div>
//                     <input
//                       className={`form-control ${(errors.passwordError) ? 'is-invalid' : 'text-dark'}`}
//                       type={showPassword ? 'text' : 'password'}
//                       name='password'
//                       placeholder="Enter your password"
//                       onChange={handleChange}
//                     />
//                     <div className='wid invalid-feedback'>{errors.passwordError}</div>
//                   </div>

//                   <div>
//                     <input
//                       className={`form-control ${(errors.confirmPasswordError) ? 'is-invalid' : 'text-dark'}`}
//                       type="password"
//                       placeholder="Re-enter your password"
//                       name='confirmPassword'
//                       value={user.confirmPassword}
//                       onChange={handleChange}
//                     />
//                     <div className='invalid-feedback'>{errors.confirmPasswordError}</div>
//                   </div>

//                   <div>
//                     <input
//                       type="text"
//                       className={` form-control ${(errors.usernameError) ? 'is-invalid' : 'text-dark'}`}
//                       name='username'
//                       placeholder="Enter your username"
//                       value={user.username}
//                       onChange={handleChange}
//                     />
//                     <div className="invalid-feedback">{errors.usernameError}</div>
//                   </div>

//                   <button
//                     type="submit"
//                     className="btn border rounded-pill btn-light fw-bold"
//                   >
//                     Sign Up
//                   </button>
//                   <h5><NavLink to='/join' className='text-danger'>Back</NavLink> </h5>
//                 </div>
//               </div>
//             </div>
//             <br />
//           </div>
//         </div>
//       </form>
//     </>
//   );
// }

// export default SignUp;















import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { register } from '../services/auth';

const SignUp = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    username: '',
    gender: '',
  });

  const [errors, setErrors] = useState({
    nameError: '',
    emailError: '',
    passwordError: '',
    confirmPasswordError: '',
    usernameError: '',
    genderError: '',
  });
  const [msg,setMsg] =useState("") ;
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setUser({ ...user, [name]: value });

    switch (name) {
      case 'name':
        setErrors({
          ...errors,
          nameError: value.length === 0 ? 'Name is required' : value.length < 3 ? 'Name must be at least 3 characters' : '',
        });
        break;
      case 'email':
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        setErrors({
          ...errors,
          emailError: value.length === 0 ? 'Email is required' : emailRegex.test(value) ? '' : 'Invalid Email',
        });
        break;
      case 'password':
        const passwordRegex = /^.{8,}$/;
        setErrors({
          ...errors,
          passwordError: value.length === 0 ? 'Password is required' : passwordRegex.test(value) ? '' : 'More than 8 characters',
        });
        break;
      case 'confirmPassword':
        setErrors({
          ...errors,
          confirmPasswordError: value.length === 0 ? '' : value !== user.password ? 'Passwords do not match' : '',
        });
        break;
      case 'username':
        setErrors({
          ...errors,
          usernameError: value.length === 0 ? 'Username is required' : value.length < 3 ? 'Username must be at least 3 characters' : '',
        });
        break;
      case 'gender':
        setErrors({
          ...errors,
          genderError: value.length === 0 ? 'Gender is required' : '',
        });
        break;
      default:
        break;
    }
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();

    if (errors.nameError || errors.emailError || errors.passwordError || errors.usernameError || errors.genderError) {
      // Handle errors (e.g., display an alert)
      alert('Please correct the form errors.');
    } else {
      try {
        const res = await register(user);
        console.log(res);
        setMsg (res.data.message);
      } catch (err) {
        // Handle registration failure (e.g., display an alert)
        alert('Something went wrong. Please try again.');
      }
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="bg-dark text-center align-items-center justify-content-center d-flex">
        <div className="container col-lg-5 col-md-8 col-sm-10">
          <div className="BBG bg-black rounded-5">
            <div className="d-flex flex-row bd-highlight ">
              <div className="col d-flex align-items-center justify-content-center">
                <div className="d-grid gap-4 text-white">
                  <br />
                  <h2>Create your account</h2>

                  <div>
                    <input
                      type="text"
                      className={` form-control ${(errors.nameError) ? 'is-invalid' : 'text-dark'}`}
                      name='name'
                      placeholder="Enter your name"
                      value={user.name}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.nameError}</div>
                  </div>

                  <div>
                    <input
                      type="text"
                      className={`form-control ${(errors.emailError) ? 'is-invalid' : 'text-dark'}`}
                      name='email'
                      placeholder="Enter your email"
                      value={user.email}
                      onChange={handleChange}
                    />
                    <div className='invalid-feedback'>{errors.emailError}</div>
                  </div>

                  <div>
                    <input
                      className={`form-control ${(errors.passwordError) ? 'is-invalid' : 'text-dark'}`}
                      type={showPassword ? 'text' : 'password'}
                      name='password'
                      placeholder="Enter your password"
                      onChange={handleChange}
                    />
                    <div className='wid invalid-feedback'>{errors.passwordError}</div>
                  </div>

                  <div>
                    <input
                      className={`form-control ${(errors.confirmPasswordError) ? 'is-invalid' : 'text-dark'}`}
                      type="password"
                      placeholder="Re-enter your password"
                      name='confirmPassword'
                      value={user.confirmPassword}
                      onChange={handleChange}
                    />
                    <div className='invalid-feedback'>{errors.confirmPasswordError}</div>
                  </div>

                  <div>
                    <input
                      type="text"
                      className={` form-control ${(errors.usernameError) ? 'is-invalid' : 'text-dark'}`}
                      name='username'
                      placeholder="Enter your username"
                      value={user.username}
                      onChange={handleChange}
                    />
                    <div className="invalid-feedback">{errors.usernameError}</div>
                  </div>

                  <div>
                    {/* <label htmlFor="gender">Gender:</label> */}
                    <select
                      id="gender"
                      name="gender"
                      value={user.gender}
                      onChange={handleChange}
                      className={`form-control ${(errors.genderError) ? 'is-invalid' : 'text-dark'}`}
                      // placeholder='Gender'
                    >
                      <option value="">Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                    </select>
                    <div className='invalid-feedback'>{errors.genderError}</div>
                  </div>
                  {msg &&<div className= 'success-msg'>{msg}</div>}

                  <button
                    type="submit"
                    className="btn border rounded-pill btn-light fw-bold"
                  >
                    Sign Up
                  </button>
                  <h5><NavLink to='/join' className='text-danger'>Back</NavLink> </h5>
                </div>
              </div>
            </div>
            <br />
          </div>
        </div>
      </form>
    </>
  );
}

export default SignUp;
