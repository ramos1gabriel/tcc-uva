import { Cardapio } from './cardapio.model';
export class ListaCompra {
    constructor(
        public id: string,
        public item : string,
        public cardapio : Cardapio
    ){}
}