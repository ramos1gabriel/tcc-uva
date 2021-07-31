import { User } from './user.model';

export class currentUser {
    public token : string;
    public user : User;

    /*public toString(){
        return this.user.toString()+"|"+this.token;
    }*/
}