var config = {
    // Define que o navegador escolhe o renderizador
   type: Phaser.AUTO,
//    altura e largura da tela do jogo
   width: 800,
   height: 600,

//    Funções do ciclo de vida do jogo
   scene: {
    preload: preload,
    create: create,
    update: update
   }
};

// Cria uma instância do jogo Phaser com as configurações definidas acima
var game= new Phaser.Game(config);
var peixinho;
var brasao;

// Carrega os primeiros recursos do jogo, permitindo seu uso em create()
function preload() {
    // carrega o fundo
    this.load.image('fundo', 'assets/bg_azul-claro.png');
    // carrega a logo
    this.load.image('logo', 'assets/logo-inteli_azul.png');
    // carrega o peixe
    this.load.image('peixe', 'assets/peixes/peixe_amarelo.png');
    // carrega o brasão de SP
    this.load.image('brasao', 'assets/brasao.png');
}

// Cria e configura elementos do jogo
function create() {
    // adiciona o fundo
    this.add.image('400','300', 'fundo');
    // adiciona a logo e a escala altera o tamanho da imagem
    this.add.image(400, 525, 'logo').setScale(0.5);
    // atribui o peixe na variável peixinho e cria-o, seta a origem da imagem (ou seja de onde deriva a rotação, dimensionamento e posicionamento) -- importante notar que os parametros têm um range de 0 a 1. Se 0,0 é o canto esquerdo superior, se 1 e 1 é o inferior direito.
    peixinho = this.add.image(400,300, 'peixe').setOrigin(0.5, 0.5);

    // transforma a variável. O setflip define o espelhamento da imagem, o parametro 1 é horizontal e o 2 é vertical
    peixinho.setFlip(true, false);

    brasao = this.add.image(750, 80, 'brasao').setOrigin(0.5,0.5).setScale(0.2);

}

// Lógica de atualização
function update() {
    // Adiciona controles ao peixe de modo que a posição dele seja igual a posição do cursor definida por this.input.x ou this.input.y
    peixinho.x = this.input.x;
    peixinho.y = this.input.y;
}
