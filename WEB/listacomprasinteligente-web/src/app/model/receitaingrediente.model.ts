import { Receita } from './receita.model';
import { Ingrediente } from './ingrediente.model';

export class ReceitaIngrediente {
    constructor(
        public id: string,
        public observacao : string,
        public quantidade : number,
        public unidadeMedida : string,
        public receita : Receita,
        public ingrediente : Ingrediente
    ){}
}