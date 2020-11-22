import React from 'react'
import PropTypes from 'prop-types';

export const Footer = ({ fecha }) => {
    return (
        <footer className="footer">
            <p>Guillén Ramses Salinas { fecha } &copy;</p>
        </footer>
    )
}

Footer.propTypes = {
    fecha: PropTypes.number.isRequired
}