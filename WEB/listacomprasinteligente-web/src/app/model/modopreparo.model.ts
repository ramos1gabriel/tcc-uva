import { Receita } from './receita.model';

export class ModoPreparo {
    constructor(
        public id: string,
        public flagCobertura : boolean,
        public flagMassa : boolean,
        public flagRecheio : boolean,
        public descricaoCobertura : string,
        public descricaoMassa : string,
        public descricaoRecheio : string,
        public receita : Receita
    ){}
}