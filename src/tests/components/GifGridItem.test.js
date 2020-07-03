import React from 'react';
import { shallow } from 'enzyme';
import { GifGridItem } from '../../components/GifGridItem';


describe('Pruebas en <GifGridItem />', () => {
  
  const title = 'Título';
  const url = 'https://google.com';
  const wrapper = shallow( <GifGridItem title={ title } url={ url }/>);

  test('Debe de mostrar el componente correctamente', () => {
    expect( wrapper ).toMatchSnapshot();
  });

  test('Debe de tener un párrafo con el valor Title', () => {

    const p = wrapper.find('p');
    expect( p.text() ).toBe( title );
  });

  test('Debe de tener la imagen igual al url y al de los props', () => {
    
    const img = wrapper.find('img');

    expect( img.prop('src') ).toBe( url );
    expect( img.prop('alt') ).toBe( title );
  });

  test('Debe de tener animate__fadeIn en la class', () => {
    
    const div = wrapper.find('div');

    expect( div.prop('className').includes('animate__fadeIn')).toBe( true );
  });
});
