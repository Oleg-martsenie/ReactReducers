import { useReducer } from 'react';
import { ActionType, Person, reducerState } from '../components/types/types'
import { v4 as uuidV4} from 'uuid' // GERAR um HASH aleatório

/*type Person = {
    id: StringConstructor;
    name: string;
}
type reducerState = Person[];

type ActionType = {
    type: string,
    payload?: {
        name?:string;
        id?: string; 
    }
}*/

const IniitalState: Person[] = [

];

const reducer = (state: Person[], action: ActionType) => {

    switch(action.type) {
        case "ADD":
            if(action.payload?.name) {
                const newState = [...state]
                newState.push({
                    id: uuidV4(),
                    name: action.payload?.name
                })
                return newState;
            }
        break;
        case 'DEL':
            if(action.payload?.id) {
                let newState = [...state];
                newState = newState.filter(item => item.id !== action.payload?.id); 
                return newState
            }
        break;
        case 'ORDER':
            let newState = [...state]
            newState = newState.sort((a, b) => (a.name > b.name) ? 1 : -1);
            return newState
        break;
    }

    return state;
}

export const UsePeopleList = () => {
    return useReducer(reducer, IniitalState);
}