function executar() {
    //classe
    var veiculos = /** @class */ (function () {
        function veiculos(m, a) {
            this.marca = m;
            this.ano = a;
        }
        veiculos.prototype.mover = function () {
            return "eu viagei em um  " + this.marca + " " + this.ano;
        };
        return veiculos;
    }());
    var automovel = new veiculos('audio', 2015);
    automovel.ano = 2010;
    document.write(automovel.mover());
}
