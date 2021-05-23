import getConfig from "next/config";
const API_URL = getConfig().publicRuntimeConfig.API_URL;

export const getUsers = async () => 
    fetch(`${API_URL}/users`)
        .then(res => { return res.json(); });
    
export const createUser = async (name, email, password) => 
    fetch(`${API_URL}/users`, 
        {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name, email, password })
        }).then(res => {
            if (res.status === 400) {
                return res.json();
            }
        }).catch(e => { console.error(e); throw e; });
        
export const updateUser = async (id, name, profilePic) => 
    fetch(`${API_URL}/users/${id}`, 
        {
            method: 'PATCH', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ name, profilePic })
        }).catch(e => { throw e});

export const login = async (email, password) => 
    fetch(`${API_URL}/login`, 
        {
            method: 'POST', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        }).then(res => {
            if (res.status === 401) {
                throw new Error("Unauthorized username/password");
            }
            res.json()
        }).catch(e => { console.error(e); throw e});