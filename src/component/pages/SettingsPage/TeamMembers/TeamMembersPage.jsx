import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getPosts } from '../../../../services/PostsService';
import './teammembers.scss';

const TeamMembersPage = () => {
    const navigate = useNavigate();

    const [empoyees, setEmployees] = useState([]);

    useEffect(() => {
        getPosts(`/api/user/member`)
            .then(res => {
                console.log(res.data.data)
                setEmployees(res.data.data)
            })
    }, [])


    return (
        <div className='team-members-container'>
            <div className='content-container'>
                <div className='content-header'>
                    <div className='header-content'>
                        <span className='header-link' onClick={() => window.location.href = '/setup'}>Settings</span>
                        <span className='header-title'>Team members</span>
                    </div>
                    <div className='header-action'>
                        <button className='action-save' onClick={() => { navigate("/employee/add") }}>Add a team member</button>
                    </div>
                </div>
                <div className='content-setting'>
                    <div className='search-container'>
                        <svg viewBox="0 0 30 30" xmlns="http://www.w3.org/2000/svg"><path d="M23.78 22.722l-4.328-4.328c1.073-1.307 1.72-2.983 1.72-4.808C21.17 9.398 17.77 6 13.585 6 9.395 6 6 9.398 6 13.586c0 4.187 3.394 7.585 7.586 7.585 1.825 0 3.497-.64 4.805-1.712l4.33 4.324c.294.294.768.294 1.06 0 .295-.29.295-.767 0-1.057zm-10.194-3.06c-3.354 0-6.08-2.726-6.08-6.076 0-3.35 2.726-6.08 6.08-6.08 3.35 0 6.08 2.73 6.08 6.08s-2.73 6.076-6.08 6.076z"></path></svg>
                        <input type="text" placeholder='Search by name or title' />
                    </div>
                    <div className='schedule-container'>
                        <select className='select-schedule'>
                            <option>Custom order</option>
                            <option>Surname (A-Z)</option>
                            <option>Surname (Z-A)</option>
                            <option>Started at (oldest first)</option>
                            <option>Started at (newest first)</option>
                            <option>Rating (highest first)</option>
                            <option>Rating (lowest first)</option>
                        </select>
                    </div>
                </div>
                <div className='content-details'>
                    {
                        empoyees?.map((item, key) => (

                            <div className='content-item' key={key}>
                                <div className='item-logo'>
                                    <div className='logo-container'>
                                        <span>MS</span>
                                    </div>
                                </div>
                                <div className='item-detail'>
                                    <span className='item-name'>{`${item.firstName} ${item.lastName}`}</span>
                                </div>
                                <div className='item-info'>
                                    <span className='item-email'>{item.email}</span>
                                    <span className='item-phone'>{item.phone}</span>
                                </div>
                            </div>
                        ))
                    }
                  
                </div>
            </div>
        </div>
    )
}

export default TeamMembersPage;