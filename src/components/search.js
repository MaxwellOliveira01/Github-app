import React from 'react'
import PropTypes from 'prop-types'

const Search = ({ disableField, handleSearch }) => (
    <div className='search'>
        <input 
            type = 'search'
            placeholder = "Digite o nome do usuário no Github"
            disabled = {disableField}
            onKeyUp = {handleSearch} 
            size = {30}
        />
    </div>
)

Search.propTypes = {

    disableField: PropTypes.bool.isRequired,
    handleSearch: PropTypes.func.isRequired

}

export default Search