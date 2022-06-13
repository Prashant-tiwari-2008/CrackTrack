import { getAuth, signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth'
import { AuthAction, AuthResponse, ResponseType } from "./auth.model";

export class FirebaseAuth {

    /**
     * Store user email and password
     */
    private email: string | undefined;
    private password: string | undefined;


    /**
     * makes an instance of FirebaseAUth class
     * @returns instance of the FirebaseAuth class 
     */
    public static make(): FirebaseAuth {
        return new FirebaseAuth()
    }

    /**
     * Store authentication action types
     */
    //TODO: NEED TO DISCUSS 
    private authAction = {
        [AuthAction.Login]: signInWithEmailAndPassword,
        [AuthAction.Register]: createUserWithEmailAndPassword
    }

    /**
     * Authenticate user with firebase 
     * @param action  
     * @returns 
     * 
     */
    async authenticateMe(action: AuthAction): Promise<AuthResponse> {
        const response: AuthResponse = { status: ResponseType.failure, uid: undefined, message: undefined }
        const authentication = getAuth();
        if (!this.email || !this.password) return response;
        try {
            const loggedingUser = await this.authAction[action](authentication, this.email, this.password);
            const { refreshToken, uid } = loggedingUser.user;
            response.status = ResponseType.success;
            response.uid = uid;
            response.token = refreshToken
        } catch (e: any) {
            response.message = e.code
            response.status = ResponseType.failure
        }
        return response
    }

    /**
     * Get user logged in
     * @param email 
     * @param password 
     * @returns
     *  
     */
    async login(email: string, password: string): Promise<AuthResponse> {
        this.email = email;
        this.password = password;
        return await this.authenticateMe(AuthAction.Login)
    }


    /**
     * Get user register
     * @param email 
     * @param password 
     * @returns
     *  
     */
    async register(email: string, password: string): Promise<AuthResponse> {
        this.email = email;
        this.password = password;
        return await this.authenticateMe(AuthAction.Register)
    }

}

