import { render } from "@testing-library/react";
import { GifItem } from "../../src/components/GifItem";



describe('Pruebas sobre el <GifItem /> ', () => {

    
    const title = 'Saitama';
    const url = 'https://one-push.com/saitama.jpg'


    test('debe hacer match con el snapshot', () => {
        
        const {cointainer} = render( <GifItem title={title} url={url}/> )
        expect( cointainer ).toMatchSnapshot();

    });

});