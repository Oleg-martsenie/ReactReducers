export type Person = {
    id: string;
    name: string;
}

export type reducerState = Person[];

export type ActionType = {
    type: string,
    payload?: {
        name?:string;
        id?: string; 
    }
}