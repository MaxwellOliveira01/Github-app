import React from "react"

import Search from "./search";
import UserInfo from "./user-info";
import Actions from "./actions";
import Repos from "./repos";

import Proptypes from 'prop-types'

const AppContent = ({ userinfo, repos, starred, searchingData, handleSearch, getRepos, getStarred }) => (
    
    <div className='app'>
        
        <Search disableField = {searchingData} handleSearch={handleSearch}/>
        
        {searchingData && <div>Carregando....</div>}
        
        {!!userinfo && <UserInfo userinfo={userinfo}/>}
        
        {!!userinfo && <Actions getRepos={getRepos} getStarred={getStarred} />}

        {!!repos.length && <Repos className='repos' title="Repositórios" reps={repos}/>}

        {!!starred.length && <Repos className='starred' title='Favoritos' reps={starred}/>}

    </div>

)

AppContent.propTypes = {

    userinfo: Proptypes.object,
    repos: Proptypes.array,
    starred: Proptypes.array,
    searchingData: Proptypes.bool.isRequired,
    handleSearch: Proptypes.func.isRequired,
    getRepos: Proptypes.func.isRequired,
    getStarred: Proptypes.func.isRequired

}

export default AppContent