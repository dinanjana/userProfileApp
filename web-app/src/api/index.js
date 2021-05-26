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
        
export const updateUser = async (id, name, profilePic) => {
    const formData = new FormData();
    formData.append('name', name);
    formData.append('profilePic', profilePic);
    return fetch(`${API_URL}/users/${id}`, 
        {
            method: 'PATCH', 
            credentials: 'include',
            body: formData
        }).catch(e => { throw e });
}

export const getUserById = async (id) => 
    fetch(`${API_URL}/users/${id}`, 
        {
            method: 'GET', 
            headers: {'Content-Type': 'application/json'},
            credentials: 'include',
        })
        .then(res => res.json())
        .catch(e => { throw e });

export const login = async (email, password) => 
    fetch(`${API_URL}/login`, 
        {
            method: 'POST',
            credentials: 'include', 
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({ email, password })
        }).then(res => {
            if (res.status === 401) {
                throw new Error("Unauthorized username/password");
            }
            return res.json()
        }).catch(e => { console.error(e); throw e});