import { Receita } from './receita.model';

export class CardapioSemanal {
    constructor(
        public id: string,
        public dataCriacao : Date,
        public tipoRefeicao : string,
        public diaSemana : string,
        public receita : Receita
    ){}
}