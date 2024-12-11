import { useState } from 'react'
import { register } from '@/services/login/login-service'
import Link from 'next/link'
import Image from 'next/image';

export default function Register() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault()
        register(email, password, name)
    }


    return <>
        <>
            <div className="app-auth-wrapper g-0 row">
                <div className="p-5 auth-main-col text-center col-12 col-lg-6 col-md-7">
                    <div className="d-flex flex-column align-content-end">
                        <div className="mx-auto app-auth-body">
                            <div className="mb-4 app-auth-branding">
                                <Link className="app-logo" href="index.html">
                                    <Image
                                        className="logo-icon me-2"
                                        src="assets/images/app-logo.svg"
                                        alt="logo"
                                    />
                                </Link>
                            </div>
                            <h2 className="mb-4 auth-heading text-center">Sign up to Portal</h2>
                            <div className="auth-form-container mx-auto text-start">
                                <form className="auth-signup-form auth-form" onSubmit={(e) => {
                                    e.preventDefault()
                                    handleSubmit(e)
                                }}>
                                    <div className="mb-3 email">
                                        <label className="sr-only" htmlFor="signup-email">
                                            Your Name
                                        </label>
                                        <input
                                            id="signup-name"
                                            name="signup-name"
                                            type="text"
                                            className="form-control signup-name"
                                            onChange={(e) => setName(e.target.value)}
                                            placeholder="Full name"
                                            required="required"
                                        />
                                    </div>
                                    <div className="mb-3 email">
                                        <label className="sr-only" htmlFor="signup-email">
                                            Your Email
                                        </label>
                                        <input
                                            id="signup-email"
                                            name="signup-email"
                                            type="email"
                                            onChange={(e) => setEmail(e.target.value)}
                                            className="form-control signup-email"
                                            placeholder="Email"
                                            required="required"
                                        />
                                    </div>
                                    <div className="mb-3 password">
                                        <label className="sr-only" htmlFor="signup-password">
                                            Password
                                        </label>
                                        <input
                                            id="signup-password"
                                            name="signup-password"
                                            type="password"
                                            onChange={(e) => setPassword(e.target.value)}
                                            className="form-control signup-password"
                                            placeholder="Create a password"
                                            required="required"
                                        />
                                    </div>
                                    <div className="mb-3 extra">
                                        <div className="form-check">
                                            <input
                                                className="form-check-input"
                                                type="checkbox"
                                                defaultValue=""
                                                id="RememberPassword"
                                            />
                                            <label
                                                className="form-check-label"
                                                htmlFor="RememberPassword"
                                            >
                                                I agree to Portal&apos;s{" "}
                                                <Link href="#" className="app-link">
                                                    Terms of Service
                                                </Link>{" "}
                                                and{" "}
                                                <Link href="#" className="app-link">
                                                    Privacy Policy
                                                </Link>
                                                .
                                            </label>
                                        </div>
                                    </div>
                                    {/*//extra*/}
                                    <div className="text-center">
                                        <button
                                            type="submit"
                                            className="mx-auto app-btn-primary w-100 btn theme-btn"
                                        >
                                            Sign Up
                                        </button>
                                    </div>
                                </form>
                                {/*//auth-form*/}
                                <div className="pt-5 auth-option text-center">
                                    Already have an account?{" "}
                                    <Link className="text-link" href="/screens/auth/login">
                                        Log in
                                    </Link>
                                </div>
                            </div>
                            {/*//auth-form-container*/}
                        </div>
                        {/*//auth-body*/}
                        <footer className="app-auth-footer">
                            <div className="py-3 text-center container">
                                {/*/* This template is free as long as you keep the footer attribution link. If you'd like to use the template without the attribution link, you can buy the commercial license via our website: themes.3rdwavemedia.com Thank you for your support. :) * /*/}
                                <small className="copyright">
                                    Designed by <span >ReDevs</span>
                                    <i className="fa-heart fas" />
                                </small>
                            </div>
                        </footer>
                        {/*//app-auth-footer*/}
                    </div>
                    {/*//flex-column*/}
                </div>
                {/*//auth-main-col*/}
                <div className="auth-background-col h-100 col-12 col-lg-6 col-md-5">
                    <div className="auth-background-holder"></div>
                    <div className="auth-background-mask" />
                    <div className="p-3 p-lg-5 auth-background-overlay">
                        <div className="d-flex flex-column align-content-end h-100">
                            <div className="h-100" />

                        </div>
                    </div>

                </div>
                {/*//auth-background-col*/}
            </div>
            {/*//row*/}
        </>

    </>
}