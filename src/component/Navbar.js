import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser } from '@fortawesome/free-regular-svg-icons'
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
    const menuList = ["여성", "Divided", "남성", "신생아/유아", "아동", "H&M Home", "Sale", "지속가능성"];

    const navigate = useNavigate();
    
    const goToLogin = () => {
        navigate('/login')
    }

    const goToProductAll = () => {
        navigate('/')
    }


    return (
        <div>
            <div>
                <div className='login-button' onClick={goToLogin}>
                    <FontAwesomeIcon className="user-icon" icon={faUser} />
                    <div className='login-text'>로그인</div>
                </div>

            </div>
            <div className='nav-section'>
                <img width={100} className='logo-img' onClick={goToProductAll}
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/1064px-H%26M-Logo.svg.png' />
            </div>
            <div className='menu-area'>
                <ul className='menu-list'>
                    {menuList.map((menu) => (
                        <li>{menu}</li>
                    ))}
                </ul>
                <div className='search-box'>
                    <FontAwesomeIcon className="search-icon" icon={faSearch}/>
                    <input type='text' placeholder='제품 검색'/>
                </div>
            </div>
        </div>
    )
}

export default Navbar
