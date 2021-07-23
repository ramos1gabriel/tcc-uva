import { User } from './user.model';

export class Receita {
    constructor(
        public id: string,
        public categoria : string,
        public descricao : string,
        public nome : string,
        public usuario : User
    ){}
}