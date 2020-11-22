
import React, { useState } from 'react' //* rafc - snipet
import PropTypes  from 'prop-types';

export const AddCategory = ({ setCategories }) => {

    const [inputValue, setInputValue] = useState('');

    const handleInputChange = ( e ) => {
        setInputValue( e.target.value );
    }

    const handleSubmit = ( e ) => {
        e.preventDefault();
        if ( inputValue.trim().length > 2) {
            setCategories( cats => [inputValue,...cats]);
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input
                placeholder='Buscar gif de...'
                type="text"
                value={ inputValue }
                onChange= { (e) => handleInputChange(e) }
            />
            <div className="separador"></div>
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
}

