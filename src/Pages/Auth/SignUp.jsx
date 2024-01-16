import React, { useContext, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { AuthContext } from '../../Auth/Context/AuthProvider'

const title = "Register"
const socialTitle = "Login with Social Media"
const btnText = "Signup Now"

const SignUp = () => {
    const [ errorMessage , setErrorMessage ] = useState("")
    const {signUpWithGmail , createUser} = useContext(AuthContext)
    const location = useLocation()
    const navigate = useNavigate()

    const from = location.state?.from?.pathname || "/"
    

    const handleSignUp = (e) => {
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirmPassword = form.confirmPassword.value;
        console.log(password,confirmPassword)
        
        if(password !== confirmPassword ) {
            setErrorMessage("password doesn't match! Please , provide a correct password")
        }else{
            setErrorMessage("")
            createUser(email,password).then((userCredential) =>{
                const user = userCredential.user
                alert("Account created successfully done!!!")
                navigate(from,{replace:true})
            }).catch((err) => {
                console.log(err.message)
                alert(`${err.message}`)
            })
        }
        
    }
    const handleRegister = () => {
        signUpWithGmail().then((res) => {
            const user = res.user;
            navigate(from , {replace:true})
        }).catch(err => {
            const errMsg = err.message;
            setErrorMessage("please Provide valid email & Password")
        })
    }
  return (
    <div>
        <div className="login-section padding-tb section-bg">
            <div className="container">
                <div className="account-wrapper">
                    <h3 className='title'>{title}</h3>
                    <form  className="account-form" onSubmit={handleSignUp}>
                        <div className="form-group">
                            <input type="text" name='name' id='name' placeholder='Full Name *' required />
                        </div>
                        <div className="form-group">
                            <input type="email" name='email' id='email' placeholder='Email Address *' required />
                        </div>
                        <div className="form-group">
                            <input type="password" name='password' id='password' placeholder='Password *' required />
                        </div>

                        <div className="form-group">
                            <input type="password" name='confirmPassword' id='confirmPassword' placeholder='Confirm Password *' required />
                        </div>

                        {/* showing Message */}
                        <div>
                            {
                                errorMessage && (
                                    <div className="error-message text-danger m-2">
                                        {errorMessage}
                                    </div>
                                )
                            }
                        </div>

                        
                        <div className="form-group">
                            <button type='submit' className="d-block lab-btn">
                                <span>{btnText}</span>
                            </button>
                        </div>
                    </form>

                    {/*  account bottom  */}
                    <div className="account-bottom">
                        <span className="d-block cate pt-10">
                            Have an Account ? <Link to="/login">Log In</Link>
                        </span>
                        <span className="or">
                            <span>or</span>
                        </span>
                    </div>

                    {/*social login  */}
                    <h5 className="subtitle">{socialTitle}</h5>
                    <ul className="lab-ul social-icons justify-content-center">
                        <li>
                            <button className="github" onClick={handleRegister}>
                                <i className="icofont-github"></i>
                            </button>
                        </li>
                        <li>
                            <a href='/' className="facebook">
                                <i className="icofont-facebook"></i>
                            </a>
                        </li>
                        <li>
                            <a href='/' className="twitter">
                                <i className="icofont-twitter"></i>
                            </a>
                        </li>
                        <li>
                            <a href='/' className="linkedin">
                                <i className="icofont-linkedin"></i>
                            </a>
                        </li>
                        <li>
                            <a href='/' className="instagram">
                                <i className="icofont-instagram"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp