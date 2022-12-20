import { useState } from "react"
import PropTypes from 'prop-types';

export const AddCategory = ( { onNewCategory } ) => {

    const [InputValue, setInputValue] = useState('')

    const onInputChange = ({ target }) => {
        // console.log(target.value)
        setInputValue(target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault();
        if (InputValue.trim().length <= 1) return

        // setCategories((categories) => [InputValue, ...categories])
        onNewCategory(InputValue.trim())
        setInputValue('');
       
    }



    return (
        <form onSubmit={ onSubmit } aria-label='form'>
            <input 
                type="text"
                placeholder="Buscar Gifs"
                value={ InputValue }
                // onChange={ (event) => onInputChange(event) }
                onChange={ onInputChange } 
            />
        </form>
  )
}


AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}