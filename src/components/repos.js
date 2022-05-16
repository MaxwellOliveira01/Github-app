import React from 'react';
import PropTypes from 'prop-types'

const Repos = ({ className, title, reps }) => (
    <div className={className} >
        <h2>{title}</h2>
        <ul>
            {reps.map((rep, idx) => (
                <li key={idx}> 
                    <a href={rep.link}>{rep.name}</a>  
                </li>
            ))}
        </ul>
    </div>
)

Repos.defaultProps = {
    className: 'none',
    reps: []
}

Repos.propTypes = {
    className: PropTypes.string,
    title: PropTypes.string.isRequired,
    reps: PropTypes.array
}

export default Repos