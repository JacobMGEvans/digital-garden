import * as React from 'react'
const { useState } = React


type ErrorPartial<T> = {
    [P in keyof T]?: T[P];
}
type ErrorReadonly<T> = {
    readonly [P in keyof T]?: T[P];
}

interface IError{
    data: any
    message: string 
    timer: number
}



export function useErrorBoundry({data, message, timer}: ErrorPartial<IError>): ErrorReadonly<IError>{
    const [error, seterror] = useState({})
    try {
        async () => await Promise.all(data)
    } catch (error) {
       throw new Error(message ?? error)
    }
    
    return {message, timer}
}

console.log(useErrorBoundry({}))