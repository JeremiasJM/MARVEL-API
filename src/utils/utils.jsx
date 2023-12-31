import md5 from "md5";
export const charactersUrl = "https://gateway.marvel.com/v1/public/characters";
export const comicsUrl = "https://gateway.marvel.com/v1/public/comics";
export const eventsUrl = "https://gateway.marvel.com/v1/public/events";
export const ts = Date.now().toString();
export const privateKey = "4a37d1f426c92505227230ebf51390410e95f3ee";
export const publicKey = "26621e2e1a2512d95fc6d68789c46cd2";
export const hash = md5(ts + privateKey + publicKey);
export const limit = 100;

const fetchHeroes = async (value) => {
  let heroUrl = `${charactersUrl}?ts=${ts}&apikey=${publicKey}&hash=${hash}&nameStartsWith=${value}`;

  try {
    let response = await fetch(heroUrl);
    let data = await response.json();
    return data.data.results;
  } catch (err) {
    console.error(err);
    return;
  }
};

const fetchHero = async (id) => {
  let heroUrl = `${charactersUrl}/${id}?ts=${ts}&apikey=${publicKey}&hash=${hash}`;

  try {
    let response = await fetch(heroUrl);
    let data = await response.json();
    return data.data.results;
  } catch (err) {
    console.error(err);
    return;
  }
};
export { fetchHeroes, fetchHero };
