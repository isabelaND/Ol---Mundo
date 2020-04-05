function executar(): void{

    //classe
    class veiculos {
        marca: string;
        ano: number;

        constructor(m:string, a:number){
            this.marca = m;
            this.ano = a;
        }

        mover(){
            return "eu viagei em um  " + this.marca + " " + this.ano;
        }

    }

    let automovel = new veiculos('audio',2015);
    automovel.ano = 2010;
    document.write(automovel.mover())

}
