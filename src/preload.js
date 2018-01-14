var startPos = [{
    "startX":100,
    "startY":1150
},{
    "startX":100,
    "startY":623
},{
    "startX":100,
    "startY":1150
},{
    "startX":100,
    "startY":1150
},{
    "startX":100,
    "startY":655
},{
    "startX":100,
    "startY":1135
},{
    "startX":100,
    "startY":1150
},{
    "startX":100,
    "startY":1150
},{
    "startX":100,
    "startY":1150
},{
    "startX":100,
    "startY":623
},{
    "startX":100,
    "startY":1150
},{
    "startX":100,
    "startY":1150
},{
    "startX":100,
    "startY":655
},{
    "startX":100,
    "startY":1150
},{
    "startX":100,
    "startY":1150
}];

var preload = function(game){}
 
preload.prototype = {
	preload: function(){ 
        //sprite sheets
        this.game.load.spritesheet('playerSheet', "assets/playerSheet.png", 40, 32, 24);

		this.game.load.image('player', 'assets/player.png');
        this.game.load.image('floor', 'assets/floor.png');
        this.game.load.image('upSpring', 'assets/spring.png');
        this.game.load.image('downSpring', 'assets/spring2.png');
        this.game.load.image('flyer', 'assets/flyer.png');
        this.game.load.image('speed', 'assets/speed.png');
        this.game.load.image('slow', 'assets/slow.png');
        this.game.load.tilemap('level1', 'assets/1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level2', 'assets/2.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level3', 'assets/3.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level4', 'assets/4.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level5', 'assets/5.json', null, Phaser.Tilemap.TILED_JSON);        
        this.game.load.tilemap('level6', 'assets/6.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level7', 'assets/7.json', null, Phaser.Tilemap.TILED_JSON); 
        this.game.load.tilemap('level8', 'assets/8.json', null, Phaser.Tilemap.TILED_JSON); 
        this.game.load.tilemap('level9', 'assets/9.json', null, Phaser.Tilemap.TILED_JSON); 
        this.game.load.tilemap('level10', 'assets/10.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level11', 'assets/11.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level12', 'assets/12.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level13', 'assets/13.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level14', 'assets/10.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level15', 'assets/10.json', null, Phaser.Tilemap.TILED_JSON);         
        this.game.load.image('tileset', 'assets/tileset.png');
        this.game.load.image('title', 'assets/title.png');
        this.game.load.image('play', 'assets/play.png');
        this.game.load.image('1', 'assets/1.png');
        this.game.load.image('2', 'assets/2.png');
        this.game.load.image('3', 'assets/3.png');
        this.game.load.image('4', 'assets/4.png');
        this.game.load.image('5', 'assets/5.png');
        this.game.load.image('6', 'assets/6.png');
        this.game.load.image('7', 'assets/7.png');
        this.game.load.image('8', 'assets/8.png');
        this.game.load.image('9', 'assets/9.png');
        this.game.load.image('10', 'assets/10.png');
        this.game.load.image('11', 'assets/11.png');
        this.game.load.image('12', 'assets/12.png');
        this.game.load.image('13', 'assets/13.png');
        this.game.load.image('14', 'assets/14.png');
        this.game.load.image('15', 'assets/15.png');
        this.game.load.image('pause', 'assets/pause.png');
        this.game.load.image('menu', 'assets/menu.png');
        this.game.load.image('resume', 'assets/resume.png');
	},
  	create: function(){
  		console.log("preload");
		this.game.state.start("Menu");
	}
}