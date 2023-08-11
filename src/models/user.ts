export interface User {
    email:      string;
    password:   string;
    name:       string;
    avatar:     string;
    role:       string;
    id:         number;
    creationAt: Date;
    updatedAt:  Date;
}

export interface createUserDTO {
    email:      string;
    password:   string;
    name:       string;
    avatar?:     string;
}

export interface updateUserDTO {
    email:      string;
    name:       string;
}

export interface logInDTO {
    email:      string;
    password:   string;
}