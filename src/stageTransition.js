var stageTransition = function(game){}
 
stageTransition.prototype = {
  	create: function(){
        if(stageNumber < maxStageNumber){
            stageNumber++;
        }else{
            stageNumber = 1;
        }

        this.game.state.start("Game");
	}
}