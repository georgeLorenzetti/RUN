var boot = function(game){
};
  
boot.prototype = {
  	create: function(){
  		console.log("boot");
		this.game.state.start("Preload");
	}
}