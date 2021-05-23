import { writable } from 'svelte/store';

const API_URL = 'http://localhost:18112';

// TODO: Replace with Svelte-Kit server side logic
export const user = writable(null);

export async function login(email, password)
{
    const { token, user: data } = await request('/auth/login', { email, password });
    user.set({ ...data, token });
}

export async function register(email, username, password, school)
{
    const { token } = await request('/auth/register', { email, username, password, school });
    user.set({ user: { email, username, school }, token });
}

function request(path, payload)
{
    return fetch(API_URL + path, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(payload)
    })
        .then(r => r.json())
        .then(r => {
            if (!r.success) {
                console.error('Error during request: ' + r.error);
            }
            
            return r;
        })
        .catch(err => console.error(err));
}