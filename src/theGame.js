//flyer collides 18 tiles left of spawn

var theGame = function(game){
}

//game variables
var cursors;
var gameState = "GO";
var keyup = false;

//player variables
var player;
var playerState = "RUN";
var startx;
var starty;
var blocked = false;


//sprite groups
var upFacingSprings;
var downFacingSprings;
var flyers;
var speeds;
var slows;
var flyerPositionsX = [];
var flyerPositionsY = [];

//player variables saved for pause
var previousState = "RUN";
var velocityX = 0;
var velocityY = 0;
var gravity = 0;
//camera variables
var startCameraX = 0;
var startCameraY = 608;
var runGravity = 200;
var slowGravity = 1500;
var fastGravity = 3000;

//map variables
var map;
var backgroundLayer;
var platformCollisionLayer;
var obstacleCollisionLayer;
var finishLineLayer;
var spritelayer;
var movementSpeed = 6;
var resetSpeed = 40;
var bottomHeight = 1200;

//pause menu variables
var pauseBlock;
var resumeButton;
var menuButton;

//screen text
var t;
 
theGame.prototype = {
    create: function(){

        //remove jitter
        this.game.renderer.renderSession.roundPixels = true

        //gameState set
        gameState = "GO";

        //setup input
        cursors = this.game.input.keyboard.createCursorKeys();

        //setup physics/gravity
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.physics.startSystem(Phaser.Physics.ARCADE);
        this.game.world.enableBody = true;

        //setup map
        map = this.game.add.tilemap('level'+stageNumber, 16, 16);
        map.addTilesetImage('tileset');
        backgroundLayer = map.createLayer('Background');
        platformsLayer = map.createLayer('Platforms');
        platformCollisionLayer = map.createLayer('PlatformCollision');
        platformCollisionLayer.visible = false;
        obstacleCollisionLayer = map.createLayer('ObstacleCollision');
        obstacleCollisionLayer.visible = false;
        finishLineLayer = map.createLayer('FinishLine');
        finishLineLayer.visible = false;
        spritelayer = map.createLayer('Sprites');
        spritelayer.visible = false;

        map.setCollision(17, true, 'PlatformCollision', true);
        map.setCollision(17, true, 'ObstacleCollision', true);
        map.setCollision(27, true, 'FinishLine', true);


        backgroundLayer.resizeWorld();
        this.game.physics.enable(map, Phaser.Physics.ARCADE);
        this.game.physics.enable(platformCollisionLayer, Phaser.Physics.ARCADE);
        this.game.physics.enable(obstacleCollisionLayer, Phaser.Physics.ARCADE);
        this.game.physics.enable(finishLineLayer, Phaser.Physics.ARCADE);

        this.game.camera.x = startCameraX;
        this.game.camera.y = startCameraY;

        //setup sprites
        upFacingSprings = this.game.add.group();
        downFacingSprings = this.game.add.group();
        flyers = this.game.add.group();
        speeds = this.game.add.group();
        slows = this.game.add.group();

        for(var i = 0; i < map.height; i++){
            for(var j = 0; j < map.width; j++){
                var tile = map.getTile(j, i, spritelayer);
                if(tile != null){
                    switch(tile.index){
                        case 38:
                            var newSpring = this.game.add.sprite(tile.worldX, (tile.worldY+(tile.height-11)), 'upSpring');
                            upFacingSprings.add(newSpring);
                            break;
                        case 39:
                            var newSpring = this.game.add.sprite(tile.worldX, tile.worldY, 'downSpring');
                            downFacingSprings.add(newSpring);
                            break;
                        case 40:
                            var newFlyer = this.game.add.sprite(tile.worldX, tile.worldY+7, 'flyer');
                            newFlyer.body.setSize(23, 15, 6, 2);
                            flyers.add(newFlyer);
                            flyerPositionsX.push(tile.worldX);
                            flyerPositionsY.push(tile.worldY);
                            break;
                        case 49:
                            var newSpeed = this.game.add.sprite(tile.worldX, tile.worldY, 'speed');
                            speeds.add(newSpeed);
                            break;
                        case 50:
                            var newSlow = this.game.add.sprite(tile.worldX, tile.worldY, 'slow');
                            slows.add(newSlow);
                            break;
                        default:

                    }
                }
            }
        }

        upFacingSprings.setAll('body.immovable', true);
        downFacingSprings.setAll('body.immovable', true);
        flyers.setAll('body.immovable', true);

        //setup player
        startx = startPos[stageNumber-1].startX;
        starty = startPos[stageNumber-1].startY;

        player = this.game.add.sprite(startx, starty, 'playerSheet');
        player.body.setSize(20, 32, 10, 0);
        player.animations.add('running', [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 15, true);
        player.animations.add('jumping', [11], 15, false);
        player.animations.add('jumpTransition', [12, 13, 14, 15, 16], 15, false);
        player.animations.add('slowFall', [17, 18, 19, 20, 21, 22], 15, true);
        player.animations.add('fastFall', [23], 15, false);
        player.animations.play('running');

        this.game.physics.enable(player, Phaser.Physics.ARCADE);
        player.anchor.setTo(0.5);
        player.body.gravity.y = runGravity;
        playerState = "RUN";

        //setup pause menu
        pauseBlock = this.game.add.sprite(this.game.camera.x + 300, this.game.camera.y + 100, 'pause');
        resumeButton = this.game.add.button(this.game.camera.x + 325, this.game.camera.y + 170, 'resume', this.resume, this);
        menuButton = this.game.add.button(this.game.camera.x + 340, this.game.camera.y + 250, 'menu', this.menu, this);
        pauseBlock.kill();
        resumeButton.kill();
        menuButton.kill();  

        //text
        if(speeds.length > 0){
            var text = "Speed: " + Math.floor(movementSpeed*10);
            var style = { font: "12px Arial", fill: "#ffffff", align: "center" };
            t = this.game.add.text(this.game.camera.x+10, this.game.camera.y+10, text, style);
        }
    },

    render: function(){
        this.game.debug.body(player);
    },

    update: function(){
        console.log(player.body.velocity.x);
        //move text
        if(speeds.length > 0){
            t.position.x = player.body.position.x - 60;
            t.setText("Speed: " + Math.floor(movementSpeed*10));
        }

        //set up collisions and overlaps
        this.game.physics.arcade.collide(player, platformCollisionLayer);
        this.game.physics.arcade.collide(player, obstacleCollisionLayer);
        this.game.physics.arcade.collide(player, finishLineLayer, this.finish, null, this);
        this.game.physics.arcade.collide(player, upFacingSprings, this.upSpringCollide, null, this);
        this.game.physics.arcade.overlap(player, downFacingSprings, this.downSpringCollide, null, this);
        this.game.physics.arcade.overlap(player, speeds, this.speedOverlap, null, this);
        this.game.physics.arcade.overlap(player, slows, this.slowOverlap, null, this);
        this.game.physics.arcade.collide(player, flyers, this.flyerCollide, null, this);

        //reset y velocity of player
        if(player.body.velocity.y > 800){
            player.body.velocity.y = 800;
        }

        //player state fsa
        switch(playerState){
            case "RUN":
                this.runUpdate();
                break;
            case "JUMP":
                this.jumpUpdate();
                break;
            case "SLOWFALL":
                this.slowfallUpdate();
                break;
            case "FASTFALL":
                this.fastfallUpdate();
                break;
            case "RESET":
                this.resetUpdate();
                break;
            default:
                break;
        }

        //game state fsa
        switch(gameState){
            case "GO":
                this.gameGo();
                break;
            case "RESET":
                this.gameReset();
                break;
            case "PAUSE":
                this.gamePause();
                break;
            default:

                break;
        }
    },

    //////////////////
    //misc functions//
    /////////////////

    resume: function(){
        player.body.velocity.x = velocityX;
        player.body.velocity.y = velocityY;
        player.body.gravity.y = gravity;
        playerState = previousState;
        player.animations.paused = false;

        pauseBlock.kill();
        resumeButton.kill();
        menuButton.kill();
        gameState = "GO";
    },

    menu: function(){
        //reset game state, flyers and player speed
        movementSpeed = 6;
        flyers = [];
        flyerPositionsX = [];
        flyerPositionsY = [];
        gameState = "GO";

        //go to menu
        this.game.state.start('Menu');
    },

    stop: function(){
        player.body.velocity.x = 0;
    },

    flyerEnter: function(flyer){
        console.log("WOOP");
        flyer.body.velocity.x = -200;
    },

    ///////////////////////
    //collision callbacks//
    ///////////////////////

    resetUpdate: function(){
        if(player.body.blocked.down && this.camera.x <= startCameraX){
            for(var i = 0; i < flyers.length; i++){
                var flyer = flyers.getChildAt(i);
                flyer.revive();
                flyer.body.position.x = flyerPositionsX[i];
                flyer.body.position.y = flyerPositionsY[i];
                flyer.body.velocity.x = 0;
            }

            gameState = "GO";
            player.animations.play('running');
            playerState = "RUN";
        }
    },

    finish: function(){ 
        flyerPositionsX = [];
        flyerPositionsY = [];
        if(stageNumber < maxStageNumber){
            stageNumber++;
        }else{
            stageNumber = 1;
        }
        gameState = "GO";
        this.game.state.start('Game');
    },

    upSpringCollide: function(){
        switch(playerState){
            case "FASTFALL":
                player.body.velocity.y = -900;
                break;
            default:
                player.body.velocity.y = -750;
                break;
        }
        player.body.gravity.y = slowGravity;
        player.animations.play('jumping');
        playerState = "JUMP";
    },

    downSpringCollide: function(){
        player.body.gravity.y = 4000;
        player.animations.play('fastFall');
        playerState = "FASTFALL";
    },

    flyerCollide: function(){
        gameState = "RESET";
        player.body.gravity.y = runGravity;
        player.body.position.x = startx;
        player.body.position.y = starty;
        player.body.velocity.x = 0;
        player.body.velocity.y = 0;
        movementSpeed = 6;
        playerState = "RESET";
    },

    speedOverlap: function(){
        movementSpeed += 0.1;
    },

    slowOverlap: function(){
        movementSpeed -= 0.1;
    },

    ////////////////////////
    //player fsa functions//
    ////////////////////////

    runUpdate: function(){
        player.body.gravity.y = runGravity;

        //if death
        if(player.body.blocked.right || player.body.position.y >= bottomHeight){
;           //reset player
            gameState = "RESET";
            player.body.gravity.y = runGravity;
            player.body.position.x = startx;
            player.body.position.y = starty;
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
            movementSpeed = 6;
            playerState = "RESET";
            return;
        }

        if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
            player.body.gravity.y = slowGravity;
            player.body.velocity.y = -600;
            player.animations.play('jumping');
            playerState = "JUMP";
        }else if(!player.body.blocked.down){
            player.body.gravity.y = runGravity;
            player.animations.play('jumpTransition');
            playerState = "SLOWFALL"
        }
    },

    jumpUpdate: function(){
        //if death
        if(player.body.blocked.right || player.body.position.y >= bottomHeight){
            gameState = "RESET";
            player.body.gravity.y = runGravity;
            player.body.position.x = startx;
            player.body.position.y = starty;
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
            movementSpeed = 6;
            playerState = "RESET";
            return;
        }
        if(player.body.velocity.y >= 0){
            player.body.gravity.y = runGravity;
            player.animations.play('jumpTransition');
            playerState = "SLOWFALL"
        }
    },

    slowfallUpdate: function(){
        //if death
        if(player.body.blocked.right || player.body.position.y >= bottomHeight){
            gameState = "RESET";
            player.body.gravity.y = runGravity;
            player.body.position.x = startx;
            player.body.position.y = starty;
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
            movementSpeed = 6;
            playerState = "RESET";
            return;
        }

        if(this.game.input.keyboard.isDown(Phaser.Keyboard.SPACEBAR)){
            //console.log("IN");
            player.body.gravity.y = fastGravity;
            player.animations.play('fastFall');
            playerState = "FASTFALL";
        }else if(player.body.blocked.down){
            player.animations.play('running');
            playerState = "RUN";
        }
    },

    fastfallUpdate: function(){
        //if death
        if(player.body.blocked.right || player.body.position.y >= bottomHeight){
            gameState = "RESET";
            player.body.gravity.y = runGravity;
            player.body.position.x = startx;
            player.body.position.y = starty;
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
            movementSpeed = 6;
            playerState = "RESET";
            return;            
        }

        if(player.body.blocked.down){
            player.animations.play('running');
            playerState = "RUN";
        }
    },

    //////////////////
    //Game state fsa//
    //////////////////

    gameGo: function(){
        for(var i = 0; i < flyers.length; i++){
            var flyer = flyers.getChildAt(i);
            if(flyer.inCamera && flyer.body.velocity.x == 0){
                flyer.body.velocity.x = -200;
            }
        }

        player.body.velocity.x = movementSpeed*60;
        this.game.camera.x = player.body.position.x - 100;

        if(!this.game.input.keyboard.isDown(Phaser.Keyboard.ESC)){
            keyup = true;
        }

        if(this.game.input.keyboard.isDown(Phaser.Keyboard.ESC) && keyup){
            //playerPause
            velocityX = player.body.velocity.x;
            velocityY = player.body.velocity.y;
            gravity = player.body.gravity.y;
            player.body.velocity.x = 0;
            player.body.velocity.y = 0;
            player.body.gravity.y = 0;
            previousState = playerState;
            player.animations.paused = true;
            playerState = "PAUSED";

            //flyers pause
            for(var i = 0; i < flyers.length; i++){
                var flyer = flyers.getChildAt(i);
                flyer.body.velocity.x = 0;
            }


            //game pause
            keyup = false;
            pauseBlock.position.x = this.game.camera.x + 300;
            pauseBlock.position.y = this.game.camera.y + 100;
            resumeButton.position.x = this.game.camera.x + 325;
            resumeButton.position.y = this.game.camera.y + 170;
            menuButton.position.x = this.game.camera.x + 340;
            menuButton.position.y = this.game.camera.y + 250;
            pauseBlock.revive();
            resumeButton.revive();
            menuButton.revive();
            gameState = "PAUSED";
        }
    },

    gameReset: function(){
        this.game.camera.x -= resetSpeed;
    },

    gamePause: function(){
        if(!this.game.input.keyboard.isDown(Phaser.Keyboard.ESC)){
           keyup = true;
        }

        if(this.game.input.keyboard.isDown(Phaser.Keyboard.ESC) && keyup){
           keyup = false;
            resume();
        }
    }
}

function resume(){
    player.body.velocity.x = velocityX;
    player.body.velocity.y = velocityY;
    player.body.gravity.y = gravity;
    playerState = previousState;
    player.animations.paused = false;

    pauseBlock.kill();
    resumeButton.kill();
    menuButton.kill();
    gameState = "GO";
}