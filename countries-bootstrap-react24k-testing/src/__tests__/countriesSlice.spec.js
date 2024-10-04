import { configureStore } from "@reduxjs/toolkit";
import countriesReducer from "../store/countriesSlice";

jest.mock("../services/countriesServices");

describe('countriesSlice tests', () => {
    let store;

    beforeEach(() => {
        store = configureStore({
            reducer: {
                countries: countriesReducer
            }
        });
        console.log(store.getState());
    });

    it('initial state exists', () => {
        expect(store.getState().countries).toBeDefined();
    })
    // Tests below will be to check the redux state at different points following certain actions
    it('countries should contain an initial state with certain properties', () => {
        const {countries, isLoading, search} = store.getState().countries;
        // can also be written like this:
        // const countries = store.getState().countries.countries;
        // const isLoading = store.getState().countries.isLoading;
        // const search = store.getState().countries.search;

        expect(countries).toEqual([]);
        expect(isLoading).toBe(true);
        expect(search).toBe('');
    })

    it('should handle getCountries action inside countriesSlice', () => {

        const countriesPayload = [{name: "Nigeria"}];

        store.dispatch({
            type: "countries/getCountries",
            payload: countriesPayload,
        });
        console.log('Countries after payload: ', store.getState().countries.countries);
        expect(store.getState().countries.countries).toEqual(countriesPayload);
    })
});