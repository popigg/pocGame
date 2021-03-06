/// <reference path='bower_components/phaser/typescript/phaser.d.ts'/>

class SimpleGame {

    constructor() {
        this.game = new Phaser.Game(800, 400, Phaser.AUTO, 'content', { preload: this.preload, create: this.create });
    }

    game: Phaser.Game;

    preload() {
        this.game.load.image('logo', 'logo2.png');
    }

    create() {
        var logo = this.game.add.sprite(this.game.world.centerX, this.game.world.centerY, 'logo');
        logo.anchor.setTo(0.5, 0.5);
        logo.scale.setTo(0.1, 0.1);
        this.game.add.tween(logo.scale).to({ x: 0.6, y: 0.6 }, 2000, Phaser.Easing.Bounce.Out, true);
    }

}

window.onload = () => {

    var game = new SimpleGame();

};
