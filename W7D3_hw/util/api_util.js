import { receiveSearchGiphys } from "../actions/giphy_actions";

export const fetchSearchGiphys = (searchterm) => {
    return $.ajax({
        method: 'GET',
        url: `https://api.giphy.com/v1/gifs/search?q=${searchterm}&api_key=cswa1as0emsnDTuSN2tFJ31nRSLSP8bA&limit=20`
    });
};