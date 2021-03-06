import { Firebase } from "../../../library/firebase/firebase";
import { Model } from "../../../library/model/model";
import { Toastr } from "../../../library/Notifier/toastr";
import { UserSerializer } from "../../../library/serializer/user/user.serializer";
import { store } from "../../../redux/store/store";
import { removeCurrentUser, setUser } from "../redux/action/user.action";
import { User, UserForm } from "./user";
 
export class UserModel extends Model<User> {
    private static readonly path = 'user'


    static make(user: User) {
        const userModel = new UserModel(user);
        return userModel;
    }

    /**
     * Handle user
     * @param values 
     * 
     */
    static async makeUser(values: UserForm): Promise<void> {
        const { email, password } = values
        const registerUser = await Firebase.auth.register(email, password);
        if(registerUser.status === 'failure') {
            Toastr.fire(registerUser.message || 'Something went wrong!').error()
        }
        if (registerUser && registerUser.uid) {
            // Serialize user object
            const user = UserSerializer.for(values, registerUser.uid).serialize();
            //Send it to firebase realtime database
             Firebase.database<User>(this.path).create(user);
            //Set current user
            await this.setCurrentUser(user);
        }
    }


    /***
     * Set current user to redux state and local storage
     */
    public static async setCurrentUser(user: User) {
        localStorage.setItem('uid', user.uid!);
        store.dispatch(setUser(user))
    }


    /**
     * Authenticate user
     * @param email 
     * @param password 
     * @returns
     *  
     */
    public static async authenticateUser(email: string, password: string) {
        if (!email || !password) return;
        //Firebase authentication
        const loggedinUser = await Firebase.auth.login(email, password);
        //Get user details
        const user = await this.syncUser(loggedinUser.uid!)
        //Set current user
        this.setCurrentUser(user)
    }

    /**
     * Sync user details
     * @param id 
     * @returns 
     */
    public static async syncUser(id: string): Promise<User> {
        const user = await Firebase.database(this.path).sync(id);
        return user
    }


    public static async logoutMe() {
        localStorage.removeItem('uid');
        store.dispatch(removeCurrentUser());
    }
}