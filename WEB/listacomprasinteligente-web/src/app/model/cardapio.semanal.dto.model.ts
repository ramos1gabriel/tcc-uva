import { Receita } from './receita.model';

export class CardapioSemanalDTO {
    constructor(
        public segundaCafe : Receita,
        public tercaCafe : Receita,
        public quartaCafe : Receita,
        public quintaCafe : Receita,
        public sextaCafe : Receita,

        public segundaAlmoco : Receita,
        public tercaAlmoco : Receita,
        public quartaAlmoco : Receita,
        public quintaAlmoco : Receita,
        public sextaAlmoco : Receita,

        public segundaLanche : Receita,
        public tercaLanche : Receita,
        public quartaLanche : Receita,
        public quintaLanche : Receita,
        public sextaLanche : Receita,
        
        public segundaJantar : Receita,
        public tercaJantar : Receita,
        public quartaJantar : Receita,
        public quintaJantar : Receita,
        public sextaJantar : Receita
    ){}
}