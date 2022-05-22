import { REMOVE_CURRENT_USER, SET_CURRENT_USER } from "../../../../library/constant/user.constant"
import { User } from "../../model/user"

export const setUser = (user: User) => ({
    type: SET_CURRENT_USER,
    payload: user
});

export const removeCurrentUser = () => ({
    type: REMOVE_CURRENT_USER
})