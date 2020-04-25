import * as React from 'react'
const { useReducer } = React


type ErrorPartial<T> = {
    [P in keyof T]?: T[P];
}
type ErrorReadonly<T> = {
    readonly [P in keyof T]?: T[P];
}

interface IError{
    message: string 
    timer: number
}



export function userErrorBoundry({message, timer}: ErrorPartial<IError>): ErrorReadonly<IError>{
    
    return {message, timer}
}

console.log(userErrorBoundry({message: 'Error'}))