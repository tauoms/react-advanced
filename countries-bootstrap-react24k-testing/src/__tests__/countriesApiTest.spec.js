import {getAllCountries} from '../services/countriesServices'

describe('Countries API should return data', () => {
    let data;
    beforeAll(async () => {
        data = await getAllCountries();
    });
    // check that the data is an array (since the API returns an array of countries)
    it('API should return an array of countries', async () => {
        expect(Array.isArray(data)).toBe(true);
    })

    it('Each item should contain the following properties', async () => {
        const data = await getAllCountries();
        data.forEach((country) => {
            expect(country).toHaveProperty('name');
            expect(country).toHaveProperty('area');
            expect(country).toHaveProperty('population');
        })
    })
})