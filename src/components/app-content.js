import React from "react"

import Search from "./search";
import UserInfo from "./user-info";
import Actions from "./actions";
import Repos from "./repos";

import Proptypes from 'prop-types'

const AppContent = ({ userinfo, repos, starred, handleSearch, getRepos, getStarred }) => (
    
    <div className='app'>
        <Search handleSearch={handleSearch}/>
        
        {!!userinfo && <UserInfo userinfo={userinfo}/>}
        
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

        {!!repos.length && <Repos className='repos' title="Repositórios" reps={repos}/>}

        {!!starred.length && <Repos className='starred' title='Favoritos' reps={starred}/>}

    </div>

)

AppContent.propTypes = {

    userinfo: Proptypes.object,
    repos: Proptypes.array,
    starred: Proptypes.array

}

export default AppContent