import { combineReducers } from "redux";
import { userReducer } from "../../domain/user/redux/reducer/user.reducer";

export const rootReducer = combineReducers({
    user: userReducer
})