const URL = 'https://api.chucknorris.io/jokes/random';

/**
 * @returns {Promise<string>}
 */
export const getRandomJoke = async() => {
    let result = await fetch(URL);
    let parsedData = await result.json();
    return parsedData.value;
}