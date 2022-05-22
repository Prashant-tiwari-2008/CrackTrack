import { FirebaseApp } from "firebase/app";
import { Database, getDatabase, ref, set, get, child, push } from "firebase/database";
import { isEntityName } from "typescript";
import { Firebase } from "../firebase";

type RealtimeDatabase = Database

interface HasUid {
    uid?: string
}

export class FirebaseDatabase<T extends HasUid> {

    /**
     * Holds the instance of firebase realtime database
     */
    database: RealtimeDatabase;

    constructor(
        private firebaseApp: FirebaseApp,
        private path: string
    ) {
        this.database = getDatabase(this.firebaseApp)
    }

    /**
     * Insert a record in firebase realtime database
     * @param enity 
     * 
     */
    create(entity: T) {
        set(ref(this.database, this.path + "/" + entity.uid), entity);
    }

    async sync(id: string) {
        const refs = ref(this.database);
        const path = `${this.path}/${id}`;
        const userSnapshot = await get(child(refs, path));
        if(userSnapshot.exists()) {
            console.log(userSnapshot.val())
            return userSnapshot.val()
        }
        return undefined
    }
}


