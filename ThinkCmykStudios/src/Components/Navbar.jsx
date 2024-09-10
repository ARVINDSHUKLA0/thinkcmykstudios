import React, { useState, useEffect } from 'react';
import logoImage from '/assets/img/logo.webp';

const Navbar = () => {
    const [asidebar, setAsideBar] = useState(false);
    const [navbarstciky, setNavbarStciky]= useState(false)

    const handelfun = ()=>{
        if(window.scrollY > 200){
            setNavbarStciky(true)
        }
        else{
            setNavbarStciky(false)
        }
    }
    useEffect((asidebar)=>{
        window.addEventListener('scroll',handelfun)
        return()=>{
            window.removeEventListener('scroll',handelfun)
        }
    },[asidebar])
 
    useEffect(() => {
        if (asidebar) {
            document.body.classList.add('active-body');
        } else {
            document.body.classList.remove('active-body');
        }
    }, [asidebar]);

    const sliderOpen = () => {
        setAsideBar(true);
    };

    const sliderRemove = () => {
        setAsideBar(false);
    };

    return (
        <>
            <div className="container-fluid navbar-container">
                <div className={`row align-items-center py-2 navbar ${navbarstciky ? 'sticky' : ''}`}>
                    <div className="col-lg-5 d-none d-lg-block">
                        <span>
                            <button className="bg-transparent border-0 m-0">
                                <span><i className="fa-solid fa-phone"></i> +91 8287993010</span>
                                <span className="px-2"><i className="fa-brands fa-whatsapp"></i> +91 8287993010</span>
                            </button>
                        </span>
                    </div>
 
                    <div className="col-lg-2 col-6 text-center text-start logo-set p-0">
                        <img className="img-fluid pointer-cursor" src={logoImage} alt="Logo" width={100} />
                    </div>

                    <div className="col-lg-5 col-6 d-flex justify-content-end align-items-center  ">
                        <ul className="d-flex gap-2 m-0 p-0 list-padding list-unstyled pointer-cursor">
                            <li><i className="fa-brands fa-facebook"></i></li>
                            <li><i className="fa-brands fa-instagram"></i></li>
                            <li><i className="fa-brands fa-youtube"></i></li>
                            <li>
                                <i className="fa-solid fa-bars asidebaropen pointer-cursor" onClick={sliderOpen}></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <aside className={`position-fixed  aidewrap top-0 bg-white min-vh-100  ${asidebar ? 'asidebaropen' : 'asidebarclosed '}`}>
                <div className="container-fluid  ">
                    <div className="row">
                        <div className="col-12 py-3 text-end pointer-cursor">
                            <span onClick={sliderRemove} >
                                <i className="fa-solid fa-xmark fs-5 xmark-list"></i>
                            </span>
                        </div>
                        <div className="col-12 my-1 px-4">
                            <ul className="list-unstyled">
                                <li className="py-1">Home</li>
                                <li className="py-1">About Us</li>
                                <li className="py-1">Our Services</li>
                                <li className="py-1">Portfolio</li>
                                <li className="py-1">Contact Us</li>
                            </ul>
                            <div className="my-4 text-wrap">
                                <h6>Contact Us</h6>
                                <p className='m-0'>C-26, Sector-65, Noida, Uttar Pradesh - 201301, INDIA</p>
                                <p className='m-0 '>thinkcmystudios@00.com</p>
                                <p className='m-0'>(+91) 8287993010</p>
                            </div>
                            <div>
                                <h6>Follow Us</h6>
                                <ul className="d-flex gap-3 list-unstyled">
                                    <li><i className="fa-brands fa-instagram"></i></li>
                                    <li><i className="fa-brands fa-linkedin"></i></li>
                                    <li><i className="fa-brands fa-facebook"></i></li>
                                    <li><i className="fa-brands fa-youtube"></i></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Navbar;
