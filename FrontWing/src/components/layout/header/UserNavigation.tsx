import React from "react";
import {useCustomer} from "../../../context/CustomerContext";
import {Link} from "react-router";
import { IconUser } from '@tabler/icons-react';


const UserNavigation: React.FC = () => {
    const { customer , clearCustomer } = useCustomer();

    const handleLogout = () => {
        clearCustomer();
    }

    return (
        <>
            {customer ? (
                <div className="col-auto">
                    <div className="d-lg-none">
                        <button className="btn btn-icon btn-transparent px-0" data-bs-toggle="dropdown"
                                aria-expanded="false">
                            <IconUser stroke={1.25} size={28} />
                        </button>
                        <ul className="dropdown-menu dropdown-menu-end">
                            <li>
                                <a href="/en_US/account/dashboard" className="link-reset dropdown-item"
                                   id="mobile-my-account-button">
                                    My account
                                </a>
                            </li>
                            <li>
                                <a href="/en_US/logout" className="link-reset dropdown-item" id="mobile-logout-button">
                                    Logout
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div className="d-none d-lg-flex gap-2 align-items-center ps-2">
                        <IconUser stroke={1.25} size={28} />
                        <span>
                            Hello {customer.firstName}!
                        </span>

                        <small className="text-black-50 px-1">|</small>
                        <Link to="/account/dashboard" className="link-reset" id="my-account-button">
                            My account
                        </Link>

                        <small className="text-black-50 px-1">|</small>
                        <button className="btn btn-transparent px-0" id="logout-button" onClick={handleLogout}>
                            Logout
                        </button>
                    </div>
                </div>
            ) : (
                <div className="col-auto ms-auto">
                    <div className="d-flex align-items-center">
                        <div className="d-lg-none">
                            <a href="/login" className="btn btn-icon btn-transparent px-0"
                               aria-label="account button">
                                <IconUser stroke={1.25} size={28} />
                            </a>
                        </div>

                        <div className="d-none d-lg-flex align-items-center gap-2 ps-2">
                            <Link
                                to="/login"
                                className="link-reset border border-[1px] !border-[#202020] rounded-[100px] px-3 py-1 font-bold hover:bg-[#202020] hover:!text-white"
                                id="login-page-button"
                            >
                                Iniciar sesión
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}

export default UserNavigation;
