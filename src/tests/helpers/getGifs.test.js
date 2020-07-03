import { getGifs } from '../../helpers/GetGifs';


describe('Pruebas con getGifs Fetch', () => {

  test('Debe de traer 10 elementos', async () => {

    const gifs = await getGifs('One Punch');

    expect( gifs.length ).toBe( 10 );
  });

  test('Debe de traer un Array vacio al no mandar el argumento en getGifs', async () => {

    const gifs = await getGifs('');

    expect( gifs.length ).toBe( 0 );
  });
});
