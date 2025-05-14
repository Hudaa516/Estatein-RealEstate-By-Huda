// import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import axios from 'axios';
// import React, { useEffect, useRef, useState, } from 'react'

// export default function Login() {

//     const signUpButton = useRef(null);
//     const signInButton = useRef(null);
//     const container = useRef(null);

//     useEffect(() => {
//         const signUp = signUpButton.current;
//         const signIn = signInButton.current;
//         const cont = container.current;

//         const handleSignUp = () => {
//             cont.classList.add("right-panel-active");
//         };

//         const handleSignIn = () => {
//             cont.classList.remove("right-panel-active");
//         };

//         signUp.addEventListener('click', handleSignUp);
//         signIn.addEventListener('click', handleSignIn);

//         return () => {
//             signUp.removeEventListener('click', handleSignUp);
//             signIn.removeEventListener('click', handleSignIn);
//         };
//     }, []);




//     return (
//         <>
//             <main className='Login d-flex col-6 justify-content-center' >
//                 <div className="container d-flex " ref={container}>
//                     <div className="form-container sign-up-container">
//                         <form action="#" >
//                             <h1>Create Account</h1>
//                             <div className="social-container">
//                                 <a href="#" className="social"><i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF} /></i></a>
//                                 <a href="#" className="social"><i className="fab fa-google-plus-g"><FontAwesomeIcon icon={faGooglePlusG} /></i></a>
//                                 <a href="#" className="social"><i className="fab fa-linkedin-in"><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
//                             </div>
//                             <span>or use your email for registration</span>
//                             <input type="text" placeholder="Username" />
//                             <input type="email" placeholder="Email" />
//                             <input type="password" placeholder="Password" />
//                             <button >Sign Up</button>
//                         </form>
//                     </div>
//                     <div className="form-container sign-in-container">
//                         <form action="#">
//                             <h1>Sign in</h1>
//                             <div className="social-container">
//                                 <a href="#" className="social"><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
//                                 <a href="#" className="social"><i className="fab fa-google-plus-g"><FontAwesomeIcon icon={faGooglePlusG} /></i></a>
//                                 <a href="#" className="social"><i className="fab fa-linkedin-in"> <FontAwesomeIcon icon={faLinkedinIn} /></i></a>
//                             </div>
//                             <span>or use your account</span>
//                             <input type="email" placeholder="Email" />
//                             <input type="password" placeholder="Password" />
//                             <a href="#">Forgot your password?</a>
//                             <button >Sign In</button>
//                         </form>
//                     </div>
//                     <div className="overlay-container">
//                         <div className="overlay">
//                             <div className="overlay-panel overlay-left">
//                                 <h1>Welcome Back!</h1>
//                                 <p>To keep connected with us please login with your personal info</p>
//                                 <button className="ghost" ref={signInButton}>Sign In</button>
//                             </div>
//                             <div className="overlay-panel overlay-right">
//                                 <h1>Hello, Friend!</h1>
//                                 <p>Enter your personal details and start journey with us</p>
//                                 <button className="ghost" ref={signUpButton} onClick={() => {
//                                     if (email.current.value === '' || password.current.value === '') {
//                                         alert('Please, write your Email and Password.');
//                                     } else {
//                                         const arr = JSON.parse(localStorage.getItem('localLogin'));
//                                         arr.push({ email: email.current.value, password: password.current.value });
//                                         localStorage.setItem('localLogin', JSON.stringify(arr));


//                                     }
//                                 }}>Sign Up</button>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </main>



//         </>
//     )
// }
import { faFacebookF, faGooglePlusG, faLinkedinIn } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();
    const goHome = () => { navigate('/'); };
    const signUpButton = useRef(null);
    const signInButton = useRef(null);
    const container = useRef(null);
    const alert = () => {
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Your work has been saved",
            showConfirmButton: false,
            timer: 1500
        });
    }

    const [signupUsername, setSignupUsername] = useState('');
    const [signupEmail, setSignupEmail] = useState('');
    const [signupPassword, setSignupPassword] = useState('');
    const [signupError, setSignupError] = useState('');
    const [signupSuccess, setSignupSuccess] = useState('');

    const [loginIdentifier, setLoginIdentifier] = useState('');
    const [loginPassword, setLoginPassword] = useState('');
    const [loginError, setLoginError] = useState('');

    useEffect(() => {
        const signUp = signUpButton.current;
        const signIn = signInButton.current;
        const cont = container.current;

        const handleSignUpClick = () => {
            cont.classList.add("right-panel-active");
        };

        const handleSignInClick = () => {
            cont.classList.remove("right-panel-active");
        };

        if (signUp) {
            signUp.addEventListener('click', handleSignUpClick);
        }
        if (signIn) {
            signIn.addEventListener('click', handleSignInClick);
        }

        return () => {
            if (signUp) {
                signUp.removeEventListener('click', handleSignUpClick);
            }
            if (signIn) {
                signIn.removeEventListener('click', handleSignInClick);
            }
        };
    }, []);

    const handleSignupSubmit = async (e) => {
        e.preventDefault();
        setSignupError('');
        setSignupSuccess('');

        try {
            const response = await fetch('http://localhost:1337/api/auth/local/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    username: signupUsername,
                    email: signupEmail,
                    password: signupPassword,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                setSignupSuccess();
                console.log('Registration successful:', data);
                setSignupUsername('');
                setSignupEmail('');
                setSignupPassword('');
            } else {
                setSignupError(data.error.message || 'Incorrect email or password.');
                console.error('Registration failed:', data);
            }
        } catch (error) {
            setSignupError('Failed to connect to the server.');
            console.error('Registration error:', error);
        }
    };

    const handleLoginSubmit = async (e) => {
        e.preventDefault();
        setLoginError('');

        try {
            const response = await fetch('http://localhost:1337/api/auth/local', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    identifier: loginIdentifier,
                    password: loginPassword,
                }),
            });

            const data = await response.json();

            if (response.ok) {
                // تم تسجيل الدخول بنجاح، يمكنك حفظ رمز JWT وبيانات المستخدم
                localStorage.setItem('jwt', data.jwt);
                localStorage.setItem('user', JSON.stringify(data.user));
                console.log('Login successful:', data);
                // يمكنك هنا إعادة توجيه المستخدم إلى لوحة التحكم أو صفحة أخرى
                // مثال بسيط لإعادة التوجيه:
                // window.location.href = '/dashboard';
            } else {
                setLoginError(data.error.message || 'بيانات الاعتماد غير صحيحة.');
                console.error('Login failed:', data);
            }
        } catch (error) {
            setLoginError('حدث خطأ في الاتصال بالخادم.');
            console.error('Login error:', error);
        }
    };

    return (
        <main className='Login d-flex col-md-6 justify-content-center'>
            <div className="container d-flex" ref={container}>
                <div className="form-container sign-up-container">
                    <form onSubmit={handleSignupSubmit}>
                        <h1>Create Account</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i className="fab fa-facebook-f"><FontAwesomeIcon icon={faFacebookF} /></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"><FontAwesomeIcon icon={faGooglePlusG} /></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"><FontAwesomeIcon icon={faLinkedinIn} /></i></a>
                        </div>
                        <span>or use your email for registration</span>
                        <input
                            type="text"
                            placeholder="Username"
                            value={signupUsername}
                            onChange={(e) => setSignupUsername(e.target.value)}
                            required
                        />
                        <input
                            type="email"
                            placeholder="Email"
                            value={signupEmail}
                            onChange={(e) => setSignupEmail(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={signupPassword}
                            onChange={(e) => setSignupPassword(e.target.value)}
                            required
                        />
                        {signupError && <p style={{ color: 'red' }}>{signupError}</p>}
                        {signupSuccess && <p style={{ color: 'green' }}>{signupSuccess}</p>}
                        <button type="submit" onClick={alert}>Sign Up</button>
                    </form>
                </div>
                <div className="form-container sign-in-container">
                    <form onSubmit={handleLoginSubmit}>
                        <h1>Sign in</h1>
                        <div className="social-container">
                            <a href="#" className="social"><i><FontAwesomeIcon icon={faFacebookF} /></i></a>
                            <a href="#" className="social"><i className="fab fa-google-plus-g"><FontAwesomeIcon icon={faGooglePlusG} /></i></a>
                            <a href="#" className="social"><i className="fab fa-linkedin-in"> <FontAwesomeIcon icon={faLinkedinIn} /></i></a>
                        </div>
                        <span>or use your account</span>
                        <input
                            type="text" // يمكن أن يكون نوع الإدخال email أيضًا، بناءً على إعدادات Strapi
                            placeholder="Email or Username"
                            value={loginIdentifier}
                            onChange={(e) => setLoginIdentifier(e.target.value)}
                            required
                        />
                        <input
                            type="password"
                            placeholder="Password"
                            value={loginPassword}
                            onChange={(e) => setLoginPassword(e.target.value)}
                            required
                        />
                        <a href="#">Forgot your password?</a>
                        {loginError && <p style={{ color: 'red' }}>{loginError}</p>}
                        <button type="submit" onClick={goHome}>Sign In</button>
                    </form>
                </div>
                <div className="overlay-container">
                    <div className="overlay">
                        <div className="overlay-panel overlay-left">
                            <h1>Welcome Back!</h1>
                            <p>To keep connected with us please login with your personal info</p>
                            <button className="ghost" ref={signInButton}>Sign In</button>
                        </div>
                        <div className="overlay-panel overlay-right">
                            <h1>Hello, Friend!</h1>
                            <p>Enter your personal details and start journey with us</p>
                            <button className="ghost" ref={signUpButton}>Sign Up</button>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}