import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faSearch } from '@fortawesome/free-solid-svg-icons';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { SlBag, SlUser, SlHeart, SlOptions } from "react-icons/sl";

const Navbar = ({ authenticate, setAuthenticate }) => {
    const menuList = ["Women", "Men", "Baby", "Kids", "H&M Home", "Sport", "Sale", "지속가능성"];
    const navigate = useNavigate();
    const location = useLocation(); // 현재 경로를 가져옵니다.
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

    const isLoginOrProductDetailPage = location.pathname === '/login' || location.pathname.includes('/product/');

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
            <div className='nav-box'>
                <div className="nav-header">
                    <div className="burger-menu hide">
                        <FontAwesomeIcon icon={faBars} onClick={() => setWidth(250)} />
                    </div>
                    {authenticate ? (
                        <div className='login-button' onClick={() => setAuthenticate(false)}>
                            <SlUser className="user-icon" />
                            <div className='login-text'>로그아웃</div>
                        </div>
                    ) : (
                        <div className='login-button' onClick={goToLogin}>
                            <SlUser className="user-icon" />
                            <div className='login-text'>로그인</div>
                        </div>
                    )}
                    <div className='heart-button'>
                        <SlHeart className="heart-icon" />
                        <div className='heart-text'>즐겨찾기</div>
                    </div>
                    <div className='shoppingBag-button'>
                        <SlBag className="shoppingBag-icon" />
                        <div className='shoppingBag-text'>쇼핑백</div>
                    </div>
                </div>
            </div>
            <div className='logo-container'>
                <div className='left-menu'>
                    <div className='service-text'>고객 서비스</div>
                    <div className='service-text'>뉴스레터</div>
                    <div className='service-text'>매장찾기</div>
                    <div className='service-text'><SlOptions /></div>
                </div>
                <div className='nav-section'>
                    <img width={65} className='logo-img' onClick={goToProductAll}
                        src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/709px-H%26M-Logo.svg.png' />
                </div>
            </div>

            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu, index) => (
                        <li key={index}>{menu}</li>
                    ))}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon className="search-icon" icon={faSearch} />
                    <input type='text' placeholder='검색' onKeyPress={onCheckEnter} />
                </div>
            </div>

            {!isLoginOrProductDetailPage && (
                <>
                    <div className='discount-area'>
                        <div>회원 혜택:3만원 이상 무료배송 & 첫구매 10% 할인</div>
                    </div>
                    <div className='d1image'>
                        <img width={1200} className='newArrival-img' src='img/detail1.png' alt="Detail" />
                    </div>
                </>
            )}
        </div>
    );
};

export default Navbar;
