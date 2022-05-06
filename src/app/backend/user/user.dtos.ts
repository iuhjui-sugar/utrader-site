
export type RegisterDTO = {
    username : string,
    password : string,
}; 

export type LoginDTO = {
    username : string,
    password : string,
}

export type LoginByTokenDTO = {
    token : string,
}