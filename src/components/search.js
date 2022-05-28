import React from 'react'

const Search = ({ disableField, handleSearch }) => (
    <div className='search'>
        <input 
            type = 'search'
            placeholder = "Digite o nome do usuário no Github"
            disabled = {disableField}
            onKeyUp = {handleSearch} />
    </div>
)

Search.protTypes = {

    disableField: Proptypes.bool.isRequired,
    handleSearch: Proptypes.func.isRequired


}

export default Search