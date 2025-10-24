import React from 'react';
import logoImg from "../assets/logo.jpg"
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';
const Footer = () => {
    return (
        <div>

            <footer className="footer sm:footer-horizontal  text-base-content p-10 bg-black">
                <nav>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <footer className="footer  text-base-content border-sky-500 border-t px-10 py-4 bg-black">
                <aside className="items-center">
                    <img className='h-22' src={logoImg} alt="" />
                    <h1 className='font-bold text-2xl'>GameHive Corporations Ltd.</h1>
                    <p className='text[20px]'>Providing reliable games since 2004</p>
                    


                </aside>
                <nav className="md:place-self-center md:justify-self-end">
                    <div className="grid grid-flow-col gap-4">

                        
                        
                        <a href="https://x.com/"><FaTwitter size={35} ></FaTwitter></a>
                        <a href="https://www.instagram.com/"><FaInstagram size={35}></FaInstagram></a>
                        <a href="https://www.facebook.com/"><FaFacebook size={35}></FaFacebook></a>

                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Footer;