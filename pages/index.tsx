import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { setTokenCookie } from 'utils/cookies';
import AxiosInstance from "context/AxiosInstance";

export const Login = (props: any) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const response = await AxiosInstance.post('/user/login', {
            email,
            password: pass
        });

        setTokenCookie(response.data.token)
    }

    return (
      <>
      <main className="w-full min-h-[inherit] flex justify-center items-center font-spartan bg-skin-main transition-all duration-200 ease-in-out">
      <div className="bg-skin-main  auth-form-container">
            <h2>Login</h2>
            <form className="login-form" onSubmit={handleSubmit}>
                <label htmlFor="email">email</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
                <label htmlFor="password">password</label>
                <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="********" id="password" name="password" />
                <button type="submit">Log In</button>
            </form>
            <Link href="/register">Sign up here</Link>
        </div>
      </main>
      </>
        
    )
}

export default Login;