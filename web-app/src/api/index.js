/* eslint-disable no-undef */
export const getUsers = async () => 
    fetch(`${process.env.API_URL}/users`).then(res => { console.log(res); return res.json()});  