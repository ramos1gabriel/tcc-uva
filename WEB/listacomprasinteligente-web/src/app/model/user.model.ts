export class User {
    constructor(
        public id: string,
        public nome : string,
        public email : string,
        public senha : string,
        public username : string
    ){}

    //TESTE F5
    /**/public toString(){
        return this.id+","+this.username+","+this.senha;
    }
}