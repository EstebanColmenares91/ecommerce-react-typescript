import { API_URL_BASE } from "../APILIST";
import { User, createUserDTO, logInDTO, updateUserDTO } from "../models/user";

interface Token {
    access_token: string;
    refresh_token: string;
}

//getAllUsers
export const getAllUsers = async (): Promise<User[]> => {
    const response = await fetch(`${API_URL_BASE}/users`);
    const data: User[] = await response.json();
    
    return data;
}

//getUser
export const getUser = async (id: string): Promise<User> => {
    const response = await fetch(`${API_URL_BASE}/users/${id}`);
    const data: User = await response.json();
    
    return data;
}

//createUser
export const createUser = async (user: createUserDTO): Promise<User> => {
    const response = await fetch(`${API_URL_BASE}/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data: User = await response.json();
    
    return data;
}

//updateUser
export const updateUser = async (id: string, user: User): Promise<User> => {
    const response = await fetch(`${API_URL_BASE}/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data: User = await response.json();
    
    return data;
}

//log in
export const logIn = async (user: logInDTO): Promise<Token> => {
    const response = await fetch(`${API_URL_BASE}/auth/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
            'Content-Type': 'application/json'
        }
    });
    const data: Token = await response.json();

    console.log(data);
    
    return data;
}

