var boot = function(game){
};
  
boot.prototype = {
  	create: function(){
  		this.game.stage.disableVisibilityChange = true;
		this.game.state.start("Preload");
	}
}