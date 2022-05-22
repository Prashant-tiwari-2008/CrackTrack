import { REMOVE_CURRENT_USER, SET_CURRENT_USER } from "../../../../library/constant/user.constant"
import { User } from "../../model/user"

export interface UserState {
    currentUser: User | undefined;
    users: User[]
}

const INITIAL_STATE: UserState = {
    currentUser: undefined,
    users: []
}

type UserActions = { type: string, payload?: any }

export const userReducer = (state: UserState = INITIAL_STATE, action: UserActions) => {
    switch(action.type) {
        case SET_CURRENT_USER:
           return {
                ...state,
                currentUser: action.payload
            }
        case REMOVE_CURRENT_USER:
            return {
                ...state,
                currentUser: undefined
            }
        default:
            return state;
    }

}