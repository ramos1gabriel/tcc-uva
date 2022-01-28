import { Receita } from './receita.model';

export class ModoPreparo {
    constructor(
        public id: string,
        public descricao : string,
        public receita : Receita
    ){}
}