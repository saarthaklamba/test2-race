class Game {
    constructor(){}
    //to update the global var gameState from db.
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
     
    }
  //update gameState in db.
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
   async start(){
      if(gameState === 0){
  
        player = new Player();
        //to get the global var playerCount.
        var playercountref=await database.ref('playerCount').once("value"); if(playercountref.exists()) { playerCount=playercountref.val(); player.getCount(); }
       
        //to display the form for user to enter the text.
        form = new Form()
        form.display();
      }
      runner1=createSprite(100,100)
     runner1.addImage("runner1",runner1img)
     runner1.scale=0.3
      runner2=createSprite(100,300)
      runner2.addImage("runner2",runner2img)
      runner2.scale=0.3
      runner3=createSprite(100,500)
      runner3.addImage("runner3",runner3img)
      runner3.scale=0.3
     runner4=createSprite(100,700)
      runner4.addImage("runner4",runner4img)
      runner4.scale=0.3
      runners=[runner1,runner2,runner3,runner4]
  
    }
    play(){
      form.hide()
      console.log("test1")
      textSize(40)
      text("gameStart",120,100)
      console.log("test2")
      Player.getallplayers()
      console.log("test3")
      console.log(allplayers)
      if(allplayers!=undefined){
        background (rgb(198,135,103))
        //image( 0, -20, displayWidth * 5, displayHeight);
      var x=10
      var index=0
      var y=0
        for(var plr in allplayers){
          index=index+1
          y=y+180
          x=displayWidth-allplayers[plr].distance
          //y=displayHeight-allplayers[plr].distance
          runners[index-1].x=x
          runners[index-1].y=y
         if(index==player.index){
          // cars[index-1].shapeColor="red"
  fill ("red")
  ellipse(x,y,60,60)
      camera.position.x=runners[index-1].x
      camera.position.y=runners[index-1].y
         }
  
        }
      }
      if(keyIsDown(RIGHT_ARROW)&&player.index!=null){
  player.distance+=10
  player.update()
      }
      if(player.distance>3860){
        gameState=2
      }
      drawSprites();
    }
  }
  