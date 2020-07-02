export const getGifs = async ( category ) => {

  const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=5CAiDn3UK2nAYdsGTBj6gD73UMdXrS5O`;
  const resp = await fetch( url );
  const { data } = await resp.json();

  const gifs = data.map(({ id, title, images: { downsized_medium: { url }}}) => ({ id, title, url: url || '' }) );
  
  return gifs;
}