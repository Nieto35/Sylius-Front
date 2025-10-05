import React from 'react';
import { Link } from 'react-router';
import {useOrder} from "../../context/OrderContext";
import UserNavigation from "./header/UserNavigation";
import Navbar from "./Navbar";

const Header: React.FC =  () => {
    const { order } = useOrder();
    return (
        <div className="border-bottom">
            <div className="lg:w-[1200px] lg:h-[73px] mx-auto">
                <div className="grid grid-cols-6 gap-4 flex align-items-center">
                    <div className="col">
                        <Link to="/" className="d-inline-block" aria-label="ilerna logo">
                            <img
                                src="/ilerna-logo.svg"
                                alt="Logo Ilerna"
                                style={{ width: '110px', height: '60px', objectFit: 'contain' }}
                            />
                        </Link>
                    </div>

                    <div className="col-span-4">
                        <Navbar />
                    </div>


                    <UserNavigation />

                </div>
            </div>
        </div>
    );
}

export default Header;
