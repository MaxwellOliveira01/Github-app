import React from "react"

import Search from "./search";
import UserInfo from "./user-info";
import Actions from "./actions";
import Repos from "./repos";

const AppContent = () => {
    return (
        <div className='app'>

        <Search />
        <UserInfo />
        <Actions />

        <Repos className='repos' title="Repositórios" reps={[
            {
            name: 'Nome repositório',
            link: '#' 
            },
            {
            name: 'Nome repositório 2',
            link: '#'
            }
        ]}/>

        <Repos className='starred' title='Favoritos' reps={[
        {
            name: 'Nome fav',
            link: '#'
        },
        {
            name: 'Nome fav2',
            link: '#'
        }  
        ]}/>

    </div>
    )
}

export default AppContent