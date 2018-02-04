var startPos = [{
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
}];

var locked;

var preload = function(game){}
 
preload.prototype = {
	preload: function(){ 
        //load memory
        if(localStorage.level == undefined){
            locked = [false, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
        }else{
            locked = [true, true, true, true, true, true, true, true, true, true, true, true, true, true, true];
            var number = parseInt(localStorage.level);
            for(var i = 0; i < number; i++){
                locked[i] = false;
            }
        }

        //sprite sheets
        this.game.load.spritesheet('playerSheet', "assets/playerSheet.png", 40, 32, 24);
        this.game.load.spritesheet('flyer', 'assets/flyer-sheet.png', 29, 19, 9);
        this.game.load.image('upSpring', 'assets/spring.png');

		this.game.load.image('player', 'assets/player.png');
        this.game.load.image('floor', 'assets/floor.png');
        this.game.load.image('downSpring', 'assets/spring2.png');
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
        this.game.load.tilemap('level14', 'assets/14.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.tilemap('level15', 'assets/15.json', null, Phaser.Tilemap.TILED_JSON);         
        this.game.load.image('RooftopGuy', 'assets/tileset2.png');
        this.game.load.image('rooftopGuyTitle', 'assets/rooftopGuy.png');
        this.game.load.image('play', 'assets/play.png');
        this.game.load.image('play2', 'assets/play2.png');
        this.game.load.image('menuBackground', 'assets/mainMenu.png');
        this.game.load.image('stageSelectBackground', 'assets/stageSelect.png');
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
        this.game.load.image('1-2', 'assets/1-2.png');
        this.game.load.image('2-2', 'assets/2-2.png');
        this.game.load.image('3-2', 'assets/3-2.png');
        this.game.load.image('4-2', 'assets/4-2.png');
        this.game.load.image('5-2', 'assets/5-2.png');
        this.game.load.image('6-2', 'assets/6-2.png');
        this.game.load.image('7-2', 'assets/7-2.png');
        this.game.load.image('8-2', 'assets/8-2.png');
        this.game.load.image('9-2', 'assets/9-2.png');
        this.game.load.image('10-2', 'assets/10-2.png');
        this.game.load.image('11-2', 'assets/11-2.png');
        this.game.load.image('12-2', 'assets/12-2.png');
        this.game.load.image('13-2', 'assets/13-2.png');
        this.game.load.image('14-2', 'assets/14-2.png');
        this.game.load.image('15-2', 'assets/15-2.png');
        this.game.load.image('2-l', 'assets/2-l.png');
        this.game.load.image('3-l', 'assets/3-l.png');
        this.game.load.image('4-l', 'assets/4-l.png');
        this.game.load.image('5-l', 'assets/5-l.png');
        this.game.load.image('6-l', 'assets/6-l.png');
        this.game.load.image('7-l', 'assets/7-l.png');
        this.game.load.image('8-l', 'assets/8-l.png');
        this.game.load.image('9-l', 'assets/9-l.png');
        this.game.load.image('10-l', 'assets/10-l.png');
        this.game.load.image('11-l', 'assets/11-l.png');
        this.game.load.image('12-l', 'assets/12-l.png');
        this.game.load.image('13-l', 'assets/13-l.png');
        this.game.load.image('14-l', 'assets/14-l.png');
        this.game.load.image('15-l', 'assets/15-l.png');
        this.game.load.image('instructions', 'assets/instructions.png');
        this.game.load.image('pause', 'assets/pauseMenu.png');
        this.game.load.image('pauseButton', 'assets/pause.png');
        this.game.load.image('menu', 'assets/menu.png');
        this.game.load.image('menu-2', 'assets/menu-2.png');
        this.game.load.image('resume', 'assets/resume.png');
        this.game.load.image('resume-2', 'assets/resume-2.png');

	},
  	create: function(){
		this.game.state.start("Menu");
	}
}