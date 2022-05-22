// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { FIREBASE_CONFIG } from "./firebase.config";
import { FirebaseAuth } from "./auth/firebaseAuth";
import { FirebaseDatabase } from "./database/firebase.database";

export class Firebase {

    /**
     * Holds the instance of `Firebase`
     */
    private static instance: Firebase;


    /**
     * Hold the instance of `FirebaseApp`
     */
    private static firebaseApp: FirebaseApp

    private constructor() { }

    /**
     * Get Instance for firebase class as SINGLETON
     * @returns 
     */
    public static getInstance(): Firebase {
        if (!Firebase.instance) {
            this.instance = new Firebase();
            this.initializeFirebase();
        }
        return this.instance
    }

    /**
     * Init firebase app
     */
    private static initializeFirebase() {
        this.firebaseApp = initializeApp(FIREBASE_CONFIG);
    }

    /**
     * Get authentication class instance
     * @returns 
     * 
     */
    static get auth() {
        return FirebaseAuth.make()
    }

    /**
     * Get database class instance
     * @param path 
     * @returns 
     * 
     */
    static database<E>(path: string) {
        return new FirebaseDatabase<E>(this.firebaseApp, path)
    }
}