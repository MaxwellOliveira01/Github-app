import React from "react";

import Proptypes from 'prop-types'

const UserInfo = ({ userinfo }) => (
    <div className='user-info'>
        
        <img src={userinfo.picture} alt=""/>

        <h1 className='username'>
            <a href={"https://github.com/" + userinfo.login}>{userinfo.username}</a>
        </h1>

        <ul className='repos-info'>
            <li> Repositórios: {userinfo.repos}</li>
            <li> Seguidores: {userinfo.followers} </li>
            <li> Seguindo: {userinfo.following} </li>
        </ul>

    </div>
)

UserInfo.propTypes = {
    userinfo: Proptypes.shape({
        login: Proptypes.string,
        repos: Proptypes.number,
        picture: Proptypes.string,
        username: Proptypes.string,
        followers: Proptypes.number,
        following: Proptypes.number
    })
}

export default UserInfo