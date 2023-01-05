import { render, screen, fireEvent, getByText, getByRole, getAllByPlaceholderText } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';


describe('Pruebas en <GifExpertApp />', () => {

    test('debe hacer match con el snapshot', () => {
        
        const {container} = render(<GifExpertApp />);
        expect(container).toMatchSnapshot()

    });


// [x] Hacer un snapshot
// Evaluar onAddCategory
// Escribir en el imput
// Postear el formulario y ver que pasa
// Que pasa si vuelvo a pasar la misma categoría
// O si paso una categoria diferente
// Que pasa en el html

// AddCategory.test.jsx AQUI HAY EJEMPLOS DE COMO REALIZAR ESTAS PRUEBAS

// USANDO chatGPT

test('should be able to add a new category', () => {
    const { getByTestId } = render(<GifExpertApp />);
    // screen.debug()

    const input = screen.getByRole('textbox');
    const form  = screen.getByRole('form');

    fireEvent.change(input, { target: { value: 'Valorant' } });
    fireEvent.submit(form);

    const categories = getBy('card-grid');
    expect(categories).toHaveTextContent('Valorant');
  });



// test('should not be able to add a duplicate category', () => {
//     const { getByTestId } = render(<GifExpertApp />);
//     const input = getByTestId('input-category');
//     const form = getByTestId('form-add-category');

//     fireEvent.change(input, { target: { value: 'One Punch' } });
//     fireEvent.submit(form);

//     const categories = getByTestId('gif-grid');
//     expect(categories).not.toHaveTextContent('One Punch');
//   });



});