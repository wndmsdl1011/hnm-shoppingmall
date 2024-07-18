import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"];
    
    const navigate = useNavigate();
    const [width, setWidth] = useState(0);

    const goToLogin = () => {
        navigate('/login');
    };

    const onCheckEnter = (event) => {
        if (event.key === "Enter") {
            navigate(`?q=${event.target.value}`);
        }
    };

    const goToProductAll = () => {
        navigate('/');
    };

    const search = (event) => {
        if (event.key === "Enter") {
            let keyword = event.target.value;
            navigate(`/?q=${keyword}`);
        }
    };

    return (
        <div>
            <div className="side-menu" style={{ width: width }}>
                <button className="closebtn" onClick={() => setWidth(0)}>
                    &times;
                </button>
                <div className="side-menu-list" id="menu-list">
                    {menuList.map((menu, index) => (
                        <button key={index}>{menu}</button>
                    ))}
                </div>
            </div>
            <div className="nav-header">
                <div className="burger-menu hide">
                    <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
                </div>
                {authenticate ? (
                    <div className='login-button' onClick={() => setAuthenticate(false)}>
                        <FontAwesomeIcon className="user-icon" icon={faUser} />
                        <div className='login-text'>로그아웃</div>
                    </div>
                ) : (
                    <div className='login-button' onClick={goToLogin}>
                        <FontAwesomeIcon className="user-icon" icon={faUser} />
                        <div className='login-text'>로그인</div>
                    </div>
                )}
            </div>

            <div className='nav-section'>
                <img width={100} className='logo-img' onClick={goToProductAll}
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png' />
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                    <input type='text' placeholder='제품 검색' onKeyPress={onCheckEnter} />
                </div>
            </div>
        </div>
    );
};

export default Navbar;
