import React from "react";

const UserInfo = () => (
    <div className='user-info'>
        
        <h1 className='username'>
            <a href="https://google.com">Nome</a>
        </h1>

        <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/158.png" alt=""/>

        <ul className='repos-info'>
            <li>- Repositórios: x</li>
            <li>- Seguidores: x </li>
            <li>- Seguindo: x </li>
        </ul>

    </div>
)

export default UserInfo