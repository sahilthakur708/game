class Game {
    constructor(){
  
    }
  
    getState(){
            var onlinePlayRef  = database.ref('onlinePlay');
            onlinePlayRef.on("value",function(data){
            onlinePlay = data.val();    
      })
  
    }
  
  
    update(state){
  
      database.ref('/').update({
  
        onlinePlay: state
      
      });
  
    }
  
  
    
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }


  
      player1=createSprite(width/2-250,650)

      player1.addAnimation("running3",playerStandingRight)
      player1.addAnimation("running1",playerRightRunning)
      player1.addAnimation("running2",playerLeftRunning)
      player1.addAnimation("running4",playerStandingLeft)


      player2=createSprite(width-150,650)

      player2.addAnimation("running3",playerStandingRight)
      player2.addAnimation("running1",playerRightRunning)
      player2.addAnimation("running2",playerLeftRunning)
      player2.addAnimation("running4",playerStandingLeft)


      Players = [player1, player2];
      

    }
  
    play(){
      form.hide();
      
      Player.getPlayerInfo();
      
      
      player1=createSprite(width/2-250,650)

      player1.addAnimation("running3",playerStandingRight)
      player1.addAnimation("running1",playerRightRunning)
      player1.addAnimation("running2",playerLeftRunning)
      player1.addAnimation("running4",playerStandingLeft)


      player2=createSprite(width-150,650)

      player2.addAnimation("running3",playerStandingRight)
      player2.addAnimation("running1",playerRightRunning)
      player2.addAnimation("running2",playerLeftRunning)
      player2.addAnimation("running4",playerStandingLeft)


      Players = [player1, player2];
     
      drawSprites();
    }
  
    end(){
      console.log("Game Ended");
      alert(player.rank)
    }
  }
  