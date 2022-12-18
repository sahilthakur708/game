// creating global variables


       var metalTrap1,metalTrap2,metalTrap1Group;
       var invisibleBrick4,invisibleBrick4Group;
       var playerCount;
       var onlinePlayButton;
       var player,game,form;
       var database,index,Players;
       var player1,player2;
       var coinsSprite4,coinsGroup4;
       var form,player,game;
       var rock2Group;
       var brickLevel4,brickGroupLevel4;
       var gun8,gun9;
       var gun8Group,gunBullets4Group_1;
      var trapsSpike2Group,trap6;
      var rock1,rock1Group;
      var trapsSpikeGroupLevel5;
      var trapGroupLevel5,bombGroupLevel5;
      var gun1;
      var metalTrap3,metalTrap4;
      var metalTrap2Group;
      var bomb,bombGroup3;
      var gunBullets1Group;
      var gunBullets1;
      var brick9,brickGroupLevel5;
      var invisibleBrick10,invisibleBrickGroupLevel5;
      var coinsSprite9,coinsSprite7,brick7;
      var invisibleBrick9,coinsGroupLevel5;
      var gunBulletsGroupLevel5,gunGroupLevel5;
      var gunBullets5_1,gunBullets5_2;
      var gun11,gun10;
      var brick2,coins1;
      var trap7,trapsGroups2;
      var bgImg,invisibleGround;
      var playerRightRunning,player;
      var about,aboutButtonImage;
      var endline,invisibleWall,invisibleWall2,invisibleWall3;
      var reload1;
      var playerLeftRunning;
      var playerStandingLeft;
      var playerStandingRight;
      var drone=0
      var droneBullets1="right"
      var droneSprite1="alive"
      var index = 0;
      var x ;
      var y;
      var bombImage,bombExplodingImage;
      var brickImage,coinImage;
      var bg2Img,bg3Img,bg4Img;
      var backGroundSound,bombExplodingSound;
      var healthKitGroup;
      var bulletFiringSound,healingSound;
      var jamingMachineSound,jumpingSound;
      var trapSound;
      var drone,hangingTrap;
      var enemyMachineGun;
      var playButton,rock;
      var playButtonImage;
      var trap1,trap2;
      var scientificEnemyGun,scientificTrap;
      var smallGround;
      var onlinePlay=0;
      var invisibleBrick,brickGroup;
      var invisibleBrick;
      const Engine=Matter.Engine
      const World=Matter.World
      const Body=Matter.Body
      const Bodies=Matter.Bodies
      var invisibleGroundGroupLevel5,groundGroupLevel5;
      var engine,world;
      var bulletDirection="right"
      var groundGroup,invisibleGroundGroup;
      var ground;
      var gun;
      var scieFieGun;
      var brick;
      var scieFieGunBullets;
      var scieFieGunBulletsImage,enemyMachineGunBulletsImage;
      var playerBulletImage;
      var gameState=0
      var level1Image,level2Image;
      var level3Image,level4Image;
      var gunCount=0
      var level5Image;
      var gunBullets2,brick2;
      var brickBody,playerBody;
      var buttonClickingSound;
      var trap,trap1,trap2,trap3;
      var bomb5,bomb6,bombGroup5;
      var trap10,ground3;
      var colliderGroup;
      var gun4,gunBullets4;
      var brick4,scieFieGun2;
      var ScieFiegunBullets2,ground2;
      var brick3;
      var invisibleBrick3,invisibleBrick3up;
      var invisibleBrickGroup,invisibleBrickupGroup;
      var trap1Group;
      var brickGroup2;
      var traps2Group,traps3Group;
      var gun2Group,bomb2Group
      var bullets,bulletsgroup;
      var gunBulletsGroup;
      var invisibleBrick2Group;
      var ground1,ground1Group;
      var level1,level2,level3;
      var level4,level5;
      var bombGroup2,bomb2;
      var brick2;
      var gun3Group;
      var gunBullets3Group;
      var rullesButtonImage;
      var invisibleWall3;
      var coins=0
      var exitButtonImage;
      var exit;
      var database;
      var  life=0
      var lifeImage;
      var life1;
      var coins1,coinsGroup1;
      var coinImage;
      var coinColectingSound;
      var scieFieGunGroup,scieFieGunBulletsGroup;
      var life2,life3;
      var traps3Groups;
      var droneSound;
      var droneBullets;
      var gun12;
      var bulletsCount=300;
      var howToPlayImage;
      var brickGroupLevel4brick;
      var exitLevel1;
      var brick2Group,invisibleBrick2Group;
      var coinsGroup2,gunGroup2;
      var gunBullets3_1,gunBullets3_2;
      var gun7,gun7Group,gunBullets3Group_2;
      var invisibleBrick4Group,invisibleBrick4;
      var coinsGroup3,trapsSpike3Group,trap8;
      var coinsSprite3;
      var trap9,brick6,gun5,gun5Group;
      var gunBullets4Group_1;
      var gun5Group;
      


// function preload to load images



function preload (){


           howToPlayImage=loadImage("images/Howtoplay.png")
           droneSound=loadSound("sounds/drone flying.mp3")
           coinColectingSound=loadSound("sounds/coin collecting.mp3")
           lifeImage=loadImage("images/life.png.png")
           exitButtonImage=loadImage("images/exit.png")
           rullesButtonImage=loadImage("images/rullesButton.png")
           buttonClickingSound=loadSound("sounds/buttonClicking.mp3")
           level1Image=loadImage("images/level 1.png")
           level2Image=loadImage("images/level 2.png")
           level3Image=loadImage("images/level 3.png")
           level4Image=loadImage("images/level 4.png")
           level5Image=loadImage("images/level 5.png")
           playerBulletImage=loadImage("images/playerBullet.png")
           enemyMachineGunBulletsImage=loadImage("images/machineBullets.png")
           scieFieGunBulletsImage=loadImage("images/scieFieGunBulletsimage.png")
           drone=loadImage("images/drone.png")
           aboutButtonImage=loadImage("images/about.png")
           hangingTrap=loadImage("images/hangingTrap.png")
           enemyMachineGun=loadImage("images/machine enemy.png")
           playButtonImage=loadImage("images/playsurvivel.png")
           rock=loadImage("images/rock.png")
           trap1=loadImage("images/trap1.png")
           trap2=loadImage("images/trap2.png")
           scientificEnemyGun=loadImage("images/scie fie enemy.png")
           scientificTrap=loadImage("images/scie-fi.png")
           smallGround=loadImage("images/small ground.png")
           trap2=loadImage("images/trap2.png")
           bombImage=loadImage("images/bomb.png")
           bombExplodingImage=loadImage("images/bombExploding.png")
           brickImage=loadImage("images/brick.png")
           coinImage=loadImage("images/coin.png")
           bgImg=loadImage("images/ground.jpg")
           playerRightRunning=loadAnimation("images/player1.png","images/player2.png","images/player3.png","images/player4.png","images/player5.png","images/player6.png")
           playerStandingLeft=loadAnimation("images/leftPlayer1.png")
           playerStandingRight=loadAnimation("images/player1.png")
           playerLeftRunning=loadAnimation("images/leftPlayer1.png","images/leftPlayer2.png","images/leftPlayer3.png","images/leftPlayer4.png","images/leftPlayer5.png","images/leftPlayer6.png")
           bulletFiringSound=loadSound("sounds/bulletFiring.mp3")
           healingSound=loadSound("sounds/healing.mp3")
           jamingMachineSound=loadSound("sounds/jamingMachine.mp3")
           jumpingSound=loadSound("sounds/jumpingSound.mp3")
           trapSound=loadSound("sounds/trap.mp3")
           backGroundSound=loadSound("sounds/backGround.mp3")
           bombExplodingSound=loadSound("sounds/bombExplosion.mp3")
           bg2Img=loadImage("images/ground2.jpg")
           bg3Img=loadImage("images/ground3.jpg")
           bg4Img=loadImage("images/ground4.png")


}






// function preload ending here






// function setup starting



function setup() {

                // creating Canvas for game objects

                        createCanvas(windowWidth,windowHeight);
 
                     //database=firebase.database()

                          engine = Engine.create();
                          world = engine.world;
                          player=createSprite(500,height-280,10,10)
                          player.visible=false
                          player.setCollider("rectangle",0,0,80,150)
                          about=createSprite(width/2,height/2+100)
                          about.addImage(aboutButtonImage)
                          invisibleGround=createSprite(width/2,height-70 , width*100, 50);
                          invisibleGround.visible=false
                          player.collide(invisibleGround)
                          player.addAnimation("running3",playerStandingRight)
                          player.addAnimation("running1",playerRightRunning)
                          player.addAnimation("running2",playerLeftRunning)
                          player.addAnimation("running4",playerStandingLeft)
                          player.addImage(bombExplodingImage)
                          brickGroup=createGroup()
                          groundGroup=createGroup()
                          invisibleBrickGroup=createGroup()
                          playButton=createSprite(windowWidth/2,200)
                          playButton.addImage(playButtonImage)
                          playButton.setCollider("rectangle",0,-30,200,60)
                          rulles=createSprite(windowWidth/2,300,100,50)
                          rulles.addImage(rullesButtonImage)
                          rulles.scale+=1/3
                          howToPlay=createSprite(width/2+10,420,100,50)
                          howToPlay.addImage(howToPlayImage)
                          howToPlay.scale=1/2
                          colliderGroup=createGroup()
                          invisibleBrickGroup=createGroup()
                          invisibleBrickupGroup=createGroup()
                          trap1Group=createGroup()
                          brickGroup2=createGroup()
                          traps2Group=createGroup()
                          gun2Group=createGroup()
                          bomb2Group=createGroup()
                          traps3Group1=createGroup()
                          bulletsgroup=createGroup()
                          gunBulletsGroup=createGroup()
                          invisibleBrick2Group=createGroup()
                          level1=createSprite(990,400)
                          level2=createSprite(800,340)
                          level3=createSprite(800,440)
                          level4=createSprite(800,540)
                          level5=createSprite(800,640)
                          level1.addImage(level1Image)
                          level2.addImage(level2Image)
                          level3.addImage(level3Image)
                          level4.addImage(level4Image)
                          level5.addImage(level5Image)
                          level1.visible=false
                          level2.visible=false
                          level3.visible=false
                          level4.visible=false
                          level5.visible=false
                          gun3Group=createGroup()
                          gunBullets3Group=createGroup()
                          wall=createSprite(600,500,20,1000)
                          wall.visible=false
                          life1=createSprite(player.x-650,100)
                          life1.addImage(lifeImage)
                          life1.visible=false
                          life1.scale=1/6
                          life2=createSprite(player.x-590,100)
                          life2.addImage(lifeImage)
                          life2.visible=false
                          life2.scale=1/6
                          life3=createSprite(player.x-530,100)
                          life3.addImage(lifeImage)
                          life3.visible=false
                          life3.scale=1/6
                          coinsGroup1=createGroup()
                          traps3Groups=createGroup()
                          backRulles=createSprite(1600,40)
                          backRulles.addImage(exitButtonImage)
                          backRulles.scale=1/6
                          backRulles.visible=false
                          backHowtoplay=createSprite(1600,40)
                          backHowtoplay.addImage(exitButtonImage)
                          backHowtoplay.scale=1/6
                          backHowtoplay.visible=false
                          backLevel=createSprite(1600,40)
                          backLevel.addImage(exitButtonImage)
                          backLevel.scale=1/6
                          backLevel.visible=false
                          droneSprite=createSprite(1000,1000)
                          droneSprite.addImage(drone)
                          droneSprite.scale=1/4
                          droneSprite.visible=false
                          brickGroup1=createGroup()
                          backLevel1=createSprite(player.x+600,50)
                          backLevel1.addImage(exitButtonImage)
                          backLevel1.scale=1/6
                          backLevel1.visible=false
                          
                        /*  game = new Game();
                          game.getState();
                          game.start();*/
                        
                         exitLevel1=createSprite(player.x+600,50)
                         exitLevel1.addImage(exitButtonImage)
                         exitLevel1.scale=1/6
                         exitLevel1.visible=false
                         exitButton=createSprite(width-150,40)
                         exitButton.addImage(exitButtonImage)
                         exitButton.scale=1/5
                         exitButton.visible=false
                         invisibleBrick2Group=createGroup()
                         brick2Group=createGroup()
                         coinsGroup2=createGroup()
                         gunGroup2=createGroup()
                         gunBullets1Group=createGroup()
                         trapsSpike2Group=createGroup()
                         bombGroup2=createGroup()
                         trapsGroups2=createGroup()
                         bombGroup3=createGroup()
                         invisibleBrick4Group=createGroup()
                         gun7Group=createGroup()
                         gunBullets3Group_2=createGroup()
                         coinsGroup3=createGroup()
                         trapsSpike3Group=createGroup()
                         ground1Group=createGroup()
                         metalTrap1Group=createGroup()
                         brickGroup3=createGroup()
                         gun5Group=createGroup()
                         metalTrap2Group=createGroup()
                         bombGroup5=createGroup()
                         gun8Group=createGroup()
                         gunBullets4Group_1=createGroup()
                         brickGroupLevel4=createGroup()
                         invisibleBrick4Group=createGroup()
                         coinsGroup4=createGroup()
                         rock1Group=createGroup()
                         trapsSpike4Group=createGroup()
                         brickGroupLevel4brick=createGroup()
                         brickGroupLevel5=createGroup()
                         invisibleBrickGroupLevel5=createGroup()
                         coinsGroupLevel5=createGroup()
                         gunBulletsGroupLevel5=createGroup()
                         gunGroupLevel5=createGroup()
                         trapsSpikeGroupLevel5=createGroup()
                         invisibleGroundGroupLevel5=createGroup()
                         groundGroupLevel5=createGroup()
                         bombGroupLevel5=createGroup()
                         scieFieGunGroup=createGroup()
                         scieFieGunBulletsGroup=createGroup()
                         trapGroupLevel5=createGroup()
                         rock2Group=createGroup()
                         healthKitGroup=createGroup()

}
 






// function setup ending








//function draw starting






function draw() {






      background(255,255,255); 





      about.visible=false
      rulles.visible=false
      playButton.visible=false
      howToPlay.visible=false



     //backGroundSound.play(true)
      

    

     //gameState 0 starting for giving some functions to the gameState 0






       if(gameState===0){


      

          image(bgImg,0,0,width,height)

         
     
          about.visible=true
        player.visible=false

        backLevel1.visible=false

        playButton.visible=true
        rulles.visible=true
        howToPlay.visible=true

        level1.visible=false
        level2.visible=false
        level3.visible=false
        level4.visible=false
        level5.visible=false

        life1.visible=false
        life2.visible=false
        life3.visible=false

  
       wall.x=600

       if(playerCount === 2){
        game.update(1);
      }
      if(onlinePlay === 1){
        clear();
        game.play();
      }
       if(mousePressedOver(about)){

        gameState="about"
        buttonClickingSound.play(false)
        about.visible=false
       
      
      }

          if(mousePressedOver(howToPlay)){


       
          gameState="howtoplay"
          buttonClickingSound.play()

        



          }

         
       if(mousePressedOver(rulles)){


         gameState="rules"
        buttonClickingSound.play()

      



       }




       if(mousePressedOver(playButton)){
    



       gameState="selectLevel"
       playButton.visible=false



       buttonClickingSound.play()

    


if(mousePressedOver(level1)){

  player.visible=true
  
}


      }


      }

   
      if(gameState==="about"){
        background("lightGreen")
        
        exitButton.visible=true
        
        if(mousePressedOver(exitButton)){
          buttonClickingSound.play()
          gameState=0
          exitButton.visible=false
        }
          textSize(35)
          text("The inspiration behind this game are the soldiers who save the country and fight for there country",20,200)
          text(" Whatever obstacles come in their way, they face them steadily and finish them to save there country.",20,300)
          text("The main goal behind this game is what if the games could inspire people to become soldier and this.",20,400)
          text(" game will give one more message to all the people in the world that there will be many ups and downs in the life ",20,500)
          text("but face them steadily and beat them. Fiercely face whatever life is in your life never give up on them, FACE THEM",20,600)
        }

if(gameState==="rules"){


player.visible=false


  background("lightGreen")

  backRulles.visible=true


  playButton.visible=false

  if(mousePressedOver(backRulles)){
    buttonClickingSound.play()
    gameState=0
    backRulles.visible=false
  }


  textSize(40)


  text(" 1) In this game there will be some obstacles will be coming like brick and guns",10,50)
  text(" 2) There will be some traps will be coming to decrease your life",10,120)
  text(" 3) You have to destroy the guns and reach to the end line of the game to win the level",10,190)
  text("4) after destroying the gun there will be some bullets will be creating at the place of gun ",10,260)
  text("5) There will be 3 life given to the player ",10,340)
  text("6) you can use the drone only one time in the game",10,410)
  text("7) The drone will be able to shoot the bullets ",10,480)
  text("8) The game will not start before 10 seconds in any level",10,550)
  text("9) You will be able to run after 10 seconds in the game",10,620)
  text("10) You will be able to use the drone only one time in the game",10,690)
  text("11) If the drone touches the any obstacle coming the game the drone will be destroyed",10,760)
  text("12) There will be some health kits coming to increase your life",10,820)

}




if(gameState==="howtoplay"){

  background("lightGreen")

  player.visible=false

  playButton.visible=false

  


  howToPlay.visible=false
  backHowtoplay.visible=true

  if(mousePressedOver(backHowtoplay)){
    buttonClickingSound.play()
    gameState=0
    backHowtoplay.visible=false
  }


  textSize(40)
  text("1) To move the player right press right arrow key",400,80)
  text("2) press space key so that the player can jump",400,160)
  text("3) To move the player left press left arrow key",400,240)
  text("4) press enter to fire the bullets",400,320)
  text("5) press d key to get drone",400,400)
  text("6) press h key to move drone forward",400,480)
  text("7) press f key to move drone backward",400,560)
  text("8) press t key to move drone upward ",400,640)
  text("9) press g key to move drone downward ",400,720)
  text("10) press u key to make drone to fire bullets ",400,800)
}

if(gameState==="selectLevel"){



  

  image(bgImg,0,0,width,height)


backLevel.visible=true

if(mousePressedOver(backLevel)){

  buttonClickingSound.play()
  gameState=0

  backLevel.visible=false
  

}


          level1.visible=true
          level2.visible=true
          level3.visible=true
          level4.visible=true
          level5.visible=true
      



        playButton.visible=false


       
        level1.setCollider("rectangle",-200,-165,240,70)


        if(mousePressedOver(level1)){


          
  
          gameState="play1"
          buttonClickingSound.play()
         

  

        }
        

        if(mousePressedOver(level2)){


          gameState="play2"
          buttonClickingSound.play()
   





        }







        if(mousePressedOver(level3)){
  

          gameState="play3"
          buttonClickingSound.play()





        }






        if(mousePressedOver(level4)){
  


          gameState="play4"
          buttonClickingSound.play()
   


        }





        if(mousePressedOver(level5)){


          gameState="play5"
          buttonClickingSound.play()
   



        }




 }




//gameState select level ending

// gameState play1 starting for level 1




if(gameState==="play1"){

  
      
      



        background("red")
        image(bgImg,-900,0,width*2+900,height) 
        image(bg2Img,3600,0,width*2+900,height)






        push()

        textSize(80)

        text("FINISH",8400,600)

        pop()








        player.visible=true






        exitLevel1.visible=true







        life1.visible=true
        life2.visible=true
        life3.visible=true
        backLevel.visible=false








        level1.visible=false
        level2.visible=false
        level3.visible=false
        level4.visible=false
        level5.visible=false








        life1.x=player.x-850
        life2.x=player.x-790
        life3.x=player.x-730








        exitLevel1.x=player.x+500
        




    



         invisibleWall=createSprite(-10,500,20,height*2)
         invisibleWall2=createSprite(1000,-1000,width*18,2000)








         endLine=createSprite(width*4+1200,300,30,800)








         endLine.visible=false









        player.collide(endLine)

       





        textSize(40)
        text("Bullets = "+bulletsCount,player.x-850,50)








        textSize(50)
        text("coins = "+coins,player.x+600,60)









        player.collide(wall)








        setTimeout(()=>{
        


          wall.velocityX=100
        



        },10000)








        invisibleWall.visible=false
        player.collide(invisibleWall)







        invisibleWall2.visible=false
        player.collide(invisibleWall2)
        




       
        camera.x=player.x
        player.collide(invisibleGround)
        player.velocityY+=3
        backLevel1.x=player.x+40

if(mousePressedOver(exitLevel1)){
  buttonClickingSound.play()
  alert(" you got "+coins+" coins")
  location.reload()
}

        if(player.x>width*4+870){



          gameState="win1"

        
          
        }








        if(gameState==="win1"){





          player.destroy()
          life1.destroy()
          life2.destroy()
          life3.destroy()
  




          background("red")
          alert("YOU WON")
          background("red")
          alert("You won "+coins+" coins")
          background("red")




          location.reload()

    

        }








        if(keyWentUp("left")){




          player.changeAnimation("running4",playerStandingLeft)
        



          }
        


        




          if(keyDown("left")){
        



            player.x-=18
        



            player.changeAnimation("running2",playerLeftRunning)
            bulletDirection="left"
        



           }
        
        


          if(keyWentUp("right")){
        



           player.changeAnimation("running3",playerStandingRight)
        



           }
        







        
           if(keyDown("right")){
        



            player.x+=18
        



            player.changeAnimation("running1",playerRightRunning)
            bulletDirection="right"
        



            }
        







        
            if(keyWentDown("space")){
        




            player.velocityY-=30
            jumpingSound.play()
        




            }
        




        


            if(keyWentDown("enter")){
            




            bullets=createSprite(player.x+70,player.y-20,10,10)
          


            bulletFiringSound.play()



            bulletsCount-=1



            

             bullets.setCollider("rectangle",0,0,100,40)



             bulletsgroup.add(bullets)
        



              if(bulletDirection==="right"){
            



                    bullets.velocityX=80
                  

                    bullets.addImage(playerBulletImage)


                    bullets.lifetime=130
                  
            


            
             }



        
            else if(bulletDirection==="left"){
            


                      bullets.velocityX=-80
                    


                      bullets.addImage(playerBulletImage)
                      bullets.x=player.x-70



                      bullets.lifetime=130
            

                       
              }
        
        



              else{
              



                bullets.x=player.x-70


                bullets.velocityX=-80


                bullets.addImage(playerBulletImage)
              



                }






                }





                if(bulletsCount===0){




                  alert("Bullets loss have a steady targets next time")
                  alert("You got "+coins+" coins")
                  location.reload()





                }









                        if(droneSprite1==="alive"){








                        if(keyDown("d")){





                                droneSprite.visible=true
                                droneSprite.x=player.x+300
                                droneSprite.y=player.y

                                healingSound.play()

                                drone=1





                        }




                        droneSprite.velocityY= 1






                        if(drone===1){




                                  if(keyDown("t")){




                                    droneSprite.velocityY=-20
                                    droneSound.play()
                                  



                                  }






                                  if(keyWentUp("h")){




                                    droneBullets1="right"




                                  }






                                  if(keyDown("h")){

                                    




                                    droneBullets1="right"
                                    droneSprite.velocityX=20
                                    



                                    
                                    droneSound.play()





                                  }


                          





                                    if(keyDown("f")){




                                    
                                      droneBullets1="left"
                                      droneSprite.velocityX=-20
                                      droneSound.play()




                                    }



                                    
                                    if(keyDown("g")){



                                      droneSprite.velocityY=20
                                      droneSound.play()



                                    }

                                    if(keyWentDown("u")){



                                      if(droneBullets1==="right"){




                                      droneBullets=createSprite(droneSprite.x,droneSprite.y)
                                      droneBullets.addImage(playerBulletImage)
                                      bulletFiringSound.play()
                                      droneBullets.velocityX=90



                                      droneBullets.lifetime=190
                                      bulletsgroup.add(droneBullets)



                                    }



                                  }




                              if(keyWentDown("u")){




                              if(droneBullets1==="left"){
                                
                                
                                
                                
                                droneBullets=createSprite(droneSprite.x,droneSprite.y)
                                droneBullets.addImage(playerBulletImage)
                                bulletFiringSound.play()
                                
                                
                                
                                droneBullets.velocityX=-90
                                droneBullets.lifetime=190
                                bulletsgroup.add(droneBullets)
                              



                              }




                              }




                              droneSprite.collide(invisibleWall)
                              droneSprite.collide(invisibleWall2)
                              droneSprite.collide(invisibleGround)





                              if(droneSprite.isTouching(brickGroup)||droneSprite.isTouching(invisibleBrick2Group)){





                                droneSound.stop()
                                droneSprite1="destroyed"






                              }





                          if(droneSprite1==="destroyed"){
                            




                            droneSprite.destroy()
                            bombExplodingSound.play()





                          }




                        }





                        }

                spawnBricks1()
                spawnGuns1()


                spawnTraps1Spike()


                spawnBombs1()
                spawnTraps1()
                





                if(coinsGroup3.isTouching(player)){
               



                  coins+=20
                  coinColectingSound.play()
                  coinsGroup3.destroyEach()




                }






                else   if(bulletsgroup.isTouching(gun3Group)){




                            gunBullets3Group.destroyEach()
                            coins+=200
                            healingSound.play()
                            gun3Group.destroyEach()
                            



                    }

               

                    else if(traps3Groups.isTouching(player)){




                      trapSound.play()
                      life+=1
                      traps3Groups.destroyEach()





                    if(life===1){

                      


                      life3.destroy()




                    }





                    if(life===2){



                      life2.destroy()



                    }






                    if(life===3){




                      life1.destroy()




                    }






                    }






                    else if(traps2Group.isTouching(player)){





                      trapSound.play()
                      life+=2






                      life3.destroy()
                      life2.destroy()



                      player.velocityY=0



                      traps2Group.destroyEach()






                    }






                    else if(life===3 || life > 3 ){




                          gameState="end1"



                                  
                       }






                        if(gameState==="end1"){




                          alert("YOU LOOSE HAVE BETTER LUCK NEXT TIME")




                         location.reload()




                        }
                
                 

                          else if(player.isTouching(bomb2Group)){




                            gameState="bombAttack"

                            



                          }









                      if(gameState==="bombAttack"){





                        bombExplodingSound.play()




                        bomb2Group.destroyEach()

                        


                        droneSound.stop()




                        var bomb=createSprite(player.x,player.y-110)
                        bomb.addImage(bombExplodingImage)






                        life=4







                        life1.destroy()
                        life2.destroy()
                        life3.destroy()








                        setTimeout(()=>{
                        



                          bomb.visible=false
                          player.destroy()




                          alert("YOU LOOSE")




                          alert("you get"+ " "+coins+" "+"coins")

                          


                          location.reload()
                         




                        },5000)






                  
                }




                 if(player.isTouching(brickGroup1)){





                  player.velocityY=0
                  player.velocityX=-13






                if(keyWentDown("space")){




                  player.velocityY=-30




                }



              }





              if(player.isTouching(brickGroup1)){
            



                player.velocityX=-13





              }


                


                else if(player.isTouching(invisibleBrick2Group)){
                
                



                  player.velocityY=10
                
                


                }




               if(gunBullets3Group.isTouching(player)){





                life+=1
                life1.destroy()              
                
                
                


                gunBullets3Group.destroyEach()






                }





                
                  else if(life===2){

                  


                    life2.destroy()
                  
                  


                  
                  }







                  else if(life===3){





                    life3.destroy()





                      }







                      else{





                        player.velocityX=0





                      }
             





                      player.velocityX=0





                      drawSprites()

     




}




// gameState play1 ending




if(gameState==="play2"){



        background("red")



        image(bgImg,-900,0,width*2+900,height) 
        image(bg2Img,3600,0,width*2+900,height)
        image(bg3Img,8100,0,width*2+900,height)





        push()

        textSize(80)

        text("FINISH",13000,600)

         pop()








        player.visible=true






        exitLevel1.visible=true







        life1.visible=true
        life2.visible=true
        life3.visible=true
        backLevel.visible=false








        level1.visible=false
        level2.visible=false
        level3.visible=false
        level4.visible=false
        level5.visible=false








        life1.x=player.x-850
        life2.x=player.x-790
        life3.x=player.x-730








        exitLevel1.x=player.x+500
        




    



         invisibleWall=createSprite(-10,500,20,height*2)
         invisibleWall2=createSprite(1000,-1000,width*18,2000)








         endLine=createSprite(width*7+900,300,30,800)








         endLine.visible=false









        player.collide(endLine)

       





        textSize(40)
        text("Bullets = "+bulletsCount,player.x-850,50)








        textSize(50)
        text("coins = "+coins,player.x+600,60)









        player.collide(wall)








        setTimeout(()=>{
        


          wall.velocityX=100
        



        },10000)








        invisibleWall.visible=false
        player.collide(invisibleWall)







        invisibleWall2.visible=false
        player.collide(invisibleWall2)
        




       
        camera.x=player.x










        player.collide(invisibleGround)








        player.velocityY+=3

        




        backLevel1.x=player.x+40






if(mousePressedOver(exitLevel1)){

  buttonClickingSound.play()

  alert(" you got "+coins+" coins")

  location.reload()

}

        if(player.x>width*7+300){



          gameState="win2"

        
          
        }



        if(player.x>width*4+500){



          

        
          
        }





        if(gameState==="win2"){





          player.destroy()
          life1.destroy()
          life2.destroy()
          life3.destroy()
  




          background("red")
          alert("YOU WON")
          background("red")
          alert("You won "+coins+" coins")
          background("red")




          location.reload()

    

        }








        if(keyWentUp("left")){




          player.changeAnimation("running4",playerStandingLeft)
        



          }
        


        




          if(keyDown("left")){
        



            player.x-=22
        



            player.changeAnimation("running2",playerLeftRunning)
            bulletDirection="left"
        



           }
        
        


          if(keyWentUp("right")){
        



           player.changeAnimation("running3",playerStandingRight)
        



           }
        







        
           if(keyDown("right")){
        



            player.x+=22
        



            player.changeAnimation("running1",playerRightRunning)
            bulletDirection="right"
        



            }
        







        
            if(keyWentDown("space")){
        




            player.velocityY-=35
            jumpingSound.play()
        




            }
        




        


            if(keyWentDown("enter")){
            




            bullets=createSprite(player.x+70,player.y-20,10,10)
          


            bulletFiringSound.play()



            bulletsCount-=1



            

             bullets.setCollider("rectangle",0,0,100,40)



             bulletsgroup.add(bullets)
        



              if(bulletDirection==="right"){
            



                    bullets.velocityX=80
                  

                    bullets.addImage(playerBulletImage)


                    bullets.lifetime=130
                  
            


            
             }



        
            else if(bulletDirection==="left"){
            


                      bullets.velocityX=-80
                    


                      bullets.addImage(playerBulletImage)
                      bullets.x=player.x-70



                      bullets.lifetime=130
            

                       
              }
        
        



              else{
              



                bullets.x=player.x-70


                bullets.velocityX=-80


                bullets.addImage(playerBulletImage)
              



                }






                }





                if(bulletsCount===0){




                  alert("Bullets loss have a steady targets next time")
                  alert("You got "+coins+" coins")
                  location.reload()





                }









                        if(droneSprite1==="alive"){








                        if(keyDown("d")){





                                droneSprite.visible=true
                                droneSprite.x=player.x+300
                                droneSprite.y=player.y

                                healingSound.play()

                                drone=1





                        }




                        droneSprite.velocityY= 1






                        if(drone===1){




                                  if(keyDown("t")){




                                    droneSprite.velocityY=-20
                                    droneSound.play()
                                  



                                  }






                                  if(keyWentUp("h")){




                                    droneBullets1="right"




                                  }






                                  if(keyDown("h")){

                                    




                                    droneBullets1="right"
                                    droneSprite.velocityX=20
                                    



                                    
                                    droneSound.play()





                                  }


                          





                                    if(keyDown("f")){




                                    
                                      droneBullets1="left"
                                      droneSprite.velocityX=-20
                                      droneSound.play()




                                    }



                                    
                                    if(keyDown("g")){



                                      droneSprite.velocityY=20
                                      droneSound.play()



                                    }

                                    if(keyWentDown("u")){



                                      if(droneBullets1==="right"){




                                      droneBullets=createSprite(droneSprite.x,droneSprite.y)
                                      droneBullets.addImage(playerBulletImage)
                                      bulletFiringSound.play()
                                      droneBullets.velocityX=90



                                      droneBullets.lifetime=190
                                      bulletsgroup.add(droneBullets)



                                    }



                                  }




                              if(keyWentDown("u")){




                              if(droneBullets1==="left"){
                                
                                
                                
                                
                                droneBullets=createSprite(droneSprite.x,droneSprite.y)
                                droneBullets.addImage(playerBulletImage)
                                bulletFiringSound.play()
                                
                                
                                
                                droneBullets.velocityX=-90
                                droneBullets.lifetime=190
                                bulletsgroup.add(droneBullets)
                              



                              }




                              }




                              droneSprite.collide(invisibleWall)
                              droneSprite.collide(invisibleWall2)
                              droneSprite.collide(invisibleGround)





                              if(droneSprite.isTouching(brickGroup2)||droneSprite.isTouching(invisibleBrick2Group)){





                                droneSound.stop()
                                droneSprite1="destroyed"






                              }





                          if(droneSprite1==="destroyed"){
                            




                            droneSprite.destroy()
                            bombExplodingSound.play()





                          }




                        }





                        }

                spawnBricks2()
                spawnGuns2()


                spawnTraps2Spike()


                spawnBombs2()
                spawnTraps2()
                





                if(coinsGroup2.isTouching(player)){
               



                  coins+=20
                  coinColectingSound.play()
                  coinsGroup2.destroyEach()




                }






                  if(bulletsgroup.isTouching(gunGroup2)){




                            gunBullets1Group.destroyEach()
                            coins+=200
                            healingSound.play()
                            gunGroup2.destroyEach()
                            



                    }

               

                    else if(trapsGroups2.isTouching(player)){




                      trapSound.play()
                      life+=1
                      trapsGroups2.destroyEach()





                    if(life===1){

                      


                      life3.destroy()




                    }





                    if(life===2){



                      life2.destroy()



                    }






                    if(life===3){




                      life1.destroy()




                    }






                    }






                    else if(trapsSpike2Group.isTouching(player)){





                      trapSound.play()
                      life+=2






                      life3.destroy()
                      life2.destroy()



                      player.velocityY=0



                      trapsSpike2Group.destroyEach()






                    }






                    else if(life===3 || life > 3 ){




                          gameState="end2"



                                  
                       }






                        if(gameState==="end2"){




                          alert("YOU LOOSE HAVE BETTER LUCK NEXT TIME")




                         location.reload()




                        }
                
                 

                          else if(player.isTouching(bombGroup2)){




                            gameState="bombAttack2"

                            



                          }









                      if(gameState==="bombAttack2"){





                        bombExplodingSound.play()




                        bombGroup2.destroyEach()

                        


                        droneSound.stop()




                        var bomb=createSprite(player.x,player.y-110)
                        bomb.addImage(bombExplodingImage)
                        bomb.scale+=1/2

                        
                        exitLevel1.visible=false




                        life=4







                        life1.destroy()
                        life2.destroy()
                        life3.destroy()








                        setTimeout(()=>{
                        



                          bomb.visible=false
                          player.destroy()




                          alert("YOU LOOSE")




                          alert("you get"+ " "+coins+" "+"coins")

                          


                          location.reload()
                         




                        },5000)






                  
                }




                 if(player.isTouching(brick2Group)){





                  player.velocityY=0
                  player.velocityX=-13






                if(keyWentDown("space")){




                  player.velocityY=-30




                }



              }





              if(player.isTouching(brick2Group)){
            



                player.velocityX=-13





              }


                


                else if(player.isTouching(invisibleBrick2Group)){
                
                



                  player.velocityY=10
                
                


                }




               if(gunBullets1Group.isTouching(player)){





                life+=1
                life1.destroy()              
                
                
                


                gunBullets1Group.destroyEach()






                }





                
                  else if(life===2){

                  


                    life2.destroy()
                  
                  


                  
                  }







                  else if(life===3){





                    life3.destroy()





                      }







                      else{





                        player.velocityX=0





                      }
             





                      player.velocityX=0





                      drawSprites()

     


                      

}







if(gameState==="play3"){


  background("red")



  image(bgImg,-900,0,width*2+900,height) 
  image(bg2Img,3600,0,width*2+900,height)
  image(bg3Img,8100,0,width*2+900,height)
  image(bg4Img,12500,0,width*2+900,height)





  push()

  textSize(80)

  text("FINISH",16800,600)

   pop()








  player.visible=true






  exitLevel1.visible=true







  life1.visible=true
  life2.visible=true
  life3.visible=true
  backLevel.visible=false








  level1.visible=false
  level2.visible=false
  level3.visible=false
  level4.visible=false
  level5.visible=false








  life1.x=player.x-850
  life2.x=player.x-790
  life3.x=player.x-730








  exitLevel1.x=player.x+500
  








   invisibleWall=createSprite(-10,500,20,height*2)
   invisibleWall2=createSprite(1000,-1000,width*30,2000)








   endLine=createSprite(width*9+800,300,30,800)








   endLine.visible=false









  player.collide(endLine)

 





  textSize(40)
  text("Bullets = "+bulletsCount,player.x-850,50)








  textSize(50)
  text("coins = "+coins,player.x+600,60)









  player.collide(wall)








  setTimeout(()=>{
  


    wall.velocityX=100
  



  },15000)








  invisibleWall.visible=false
  player.collide(invisibleWall)







  invisibleWall2.visible=false
  player.collide(invisibleWall2)
  




 
  camera.x=player.x










  player.collide(invisibleGround)








  player.velocityY+=3

  




  backLevel1.x=player.x+40






if(mousePressedOver(exitLevel1)){

buttonClickingSound.play()

alert(" you got "+coins+" coins")

location.reload()

}

  if(player.x>width*9+900){



    gameState="win2"

  
    
  }








  if(gameState==="win2"){





    player.destroy()
    life1.destroy()
    life2.destroy()
    life3.destroy()





    background("red")
    alert("YOU WON")
    background("red")
    alert("You won "+coins+" coins")
    background("red")




    location.reload()



  }








  if(keyWentUp("left")){




    player.changeAnimation("running4",playerStandingLeft)
  



    }
  


  




    if(keyDown("left")){
  



      player.x-=30
  



      player.changeAnimation("running2",playerLeftRunning)
      bulletDirection="left"
  



     }
  
  


    if(keyWentUp("right")){
  



     player.changeAnimation("running3",playerStandingRight)
  



     }
  







  
     if(keyDown("right")){
  



      player.x+=30
  



      player.changeAnimation("running1",playerRightRunning)
      bulletDirection="right"
  



      }
  







  
      if(keyWentDown("space")){
  




      player.velocityY-=40
      jumpingSound.play()
  




      }
  




  


      if(keyWentDown("enter")){
      




      bullets=createSprite(player.x+70,player.y-20,10,10)
    


      bulletFiringSound.play()



      bulletsCount-=1



      

       bullets.setCollider("rectangle",0,0,100,40)



       bulletsgroup.add(bullets)
  



        if(bulletDirection==="right"){
      



              bullets.velocityX=80
            

              bullets.addImage(playerBulletImage)


              bullets.lifetime=130
            
      


      
       }



  
      else if(bulletDirection==="left"){
      


                bullets.velocityX=-80
              


                bullets.addImage(playerBulletImage)
                bullets.x=player.x-70



                bullets.lifetime=130
      

                 
        }
  
  



        else{
        



          bullets.x=player.x-70


          bullets.velocityX=-80


          bullets.addImage(playerBulletImage)
        



          }






          }





          if(bulletsCount===0){




            alert("Bullets loss have a steady targets next time")
            alert("You got "+coins+" coins")
            location.reload()





          }









                  if(droneSprite1==="alive"){








                  if(keyDown("d")){





                          droneSprite.visible=true
                          droneSprite.x=player.x+300
                          droneSprite.y=player.y

                          healingSound.play()

                          drone=1





                  }




                  droneSprite.velocityY= 1






                  if(drone===1){




                            if(keyDown("t")){




                              droneSprite.velocityY=-20
                              droneSound.play()
                            



                            }






                            if(keyWentUp("h")){




                              droneBullets1="right"




                            }






                            if(keyDown("h")){

                              




                              droneBullets1="right"
                              droneSprite.velocityX=20
                              



                              
                              droneSound.play()





                            }


                    





                              if(keyDown("f")){




                              
                                droneBullets1="left"
                                droneSprite.velocityX=-20
                                droneSound.play()




                              }



                              
                              if(keyDown("g")){



                                droneSprite.velocityY=20
                                droneSound.play()



                              }

                              if(keyWentDown("u")){



                                if(droneBullets1==="right"){




                                droneBullets=createSprite(droneSprite.x,droneSprite.y)
                                droneBullets.addImage(playerBulletImage)
                                bulletFiringSound.play()
                                droneBullets.velocityX=90



                                droneBullets.lifetime=190
                                bulletsgroup.add(droneBullets)



                              }



                            }




                        if(keyWentDown("u")){




                        if(droneBullets1==="left"){
                          
                          
                          
                          
                          droneBullets=createSprite(droneSprite.x,droneSprite.y)
                          droneBullets.addImage(playerBulletImage)
                          bulletFiringSound.play()
                          
                          
                          
                          droneBullets.velocityX=-90
                          droneBullets.lifetime=190
                          bulletsgroup.add(droneBullets)
                        



                        }




                        }




                        droneSprite.collide(invisibleWall)
                        droneSprite.collide(invisibleWall2)
                        droneSprite.collide(invisibleGround)





                        if(droneSprite.isTouching(brickGroup3)||droneSprite.isTouching(invisibleBrick2Group)){





                          droneSound.stop()
                          droneSprite1="destroyed"






                        }





                    if(droneSprite1==="destroyed"){
                      




                      droneSprite.destroy()
                      bombExplodingSound.play()





                    }




                  }





                  }

          spawnBricks3()
          spawnGuns3_1()
          spawnGuns3_2()
          spawnGround1()


          spawnTraps3Spike_1()
          spawnTraps3Spike_2()

          spawnBombs3_1()
          spawnBombs3_2()
          spawnTraps3_1()
          spawnTraps3_2()
         




          

          if(coinsGroup3.isTouching(player)){
         



            coins+=20
            coinColectingSound.play()
            coinsGroup3.destroyEach()




          }






            if(bulletsgroup.isTouching(gun7Group)){




                      gunBullets3Group_2.destroyEach()
                      coins+=200
                      healingSound.play()
                      gun7Group.destroyEach()
                      



              }

              if(bulletsgroup.isTouching(gun5Group)){




                gunBullets3Group_2.destroyEach()
                coins+=200
                healingSound.play()
                gun5Group.destroyEach()
                



        }

         

              else if(metalTrap1Group.isTouching(player)){




                trapSound.play()
                life+=1
                metalTrap1Group.destroyEach()





              if(life===1){

                


                life3.destroy()




              }





              if(life===2){



                life2.destroy()



              }






              if(life===3){




                life1.destroy()




              }






              }






              else if(trapsSpike3Group.isTouching(player)){





                trapSound.play()
                life+=2






                life3.destroy()
                life2.destroy()



                player.velocityY=0



                trapsSpike3Group.destroyEach()






              }






              else if(life===3 || life > 3 ){




                    gameState="end3"



                            
                 }






                  if(gameState==="end3"){




                    alert("YOU LOOSE HAVE BETTER LUCK NEXT TIME")




                   location.reload()




                  }
          
           

                    else if(player.isTouching(bombGroup3)){




                      gameState="bombAttack3"

                      



                    }









                if(gameState==="bombAttack3"){





                  bombExplodingSound.play()




                  bombGroup3.destroyEach()

                  


                  droneSound.stop()




                  var bomb=createSprite(player.x,player.y-250)
                  bomb.addImage(bombExplodingImage)
                  bomb.scale+=1/2

                  
                  exitLevel1.visible=false




                  life=4







                  life1.destroy()
                  life2.destroy()
                  life3.destroy()








                  setTimeout(()=>{
                  



                    bomb.visible=false
                    player.destroy()




                    alert("YOU LOOSE")




                    alert("you get"+ " "+coins+" "+"coins")

                    


                    location.reload()
                   




                  },5000)






            
          }




           if(player.isTouching(brickGroup3)){





            player.velocityY=0
            player.velocityX=-13






          if(keyWentDown("space")){




            player.velocityY=-30




          }



        }





        if(player.isTouching(brickGroup3)){
      



          player.velocityX=-13





        }


          


          else if(player.isTouching(invisibleBrick4Group)){
          
          



            player.velocityY=10
          
          


          }




         if(gunBullets3Group_2.isTouching(player)){





          life+=1
          life1.destroy()              
          
          
          


          gunBullets3Group_2.destroyEach()






          }





          
            else if(life===2){

            


              life2.destroy()
            
            


            
            }







            else if(life===3){





              life3.destroy()





                }







                else{





                  player.velocityX=0





                }
       





                player.velocityX=0





                drawSprites()





}







if(gameState==="play4"){


  background("red")



  image(bgImg,-900,0,width*2+900,height) 
  image(bg2Img,3600,0,width*2+900,height)
  image(bg3Img,8100,0,width*2+900,height)
  image(bg4Img,12000,0,width*2+900,height)




  







  player.visible=true






  exitLevel1.visible=true







  life1.visible=true
  life2.visible=true
  life3.visible=true
  backLevel.visible=false








  level1.visible=false
  level2.visible=false
  level3.visible=false
  level4.visible=false
  level5.visible=false








  life1.x=player.x-850
  life2.x=player.x-790
  life3.x=player.x-730








  exitLevel1.x=player.x+500
  








   invisibleWall=createSprite(-10,500,20,height*2)
   invisibleWall2=createSprite(1000,-1000,width*17,2000)








   endLine=createSprite(width*9+500,300,30,800)




   push()

   textSize(80)
 
   text("FINISH",endLine.x+100,600)
    pop()
 

   




   endLine.visible=false









  player.collide(endLine)

 





  textSize(40)
  text("Bullets = "+bulletsCount,player.x-850,50)








  textSize(50)
  text("coins = "+coins,player.x+600,60)









  player.collide(wall)








  setTimeout(()=>{
  


    wall.velocityX=100
  



  },10000)








  invisibleWall.visible=false
  player.collide(invisibleWall)







  invisibleWall2.visible=false
  player.collide(invisibleWall2)
  




 
  camera.x=player.x










  player.collide(invisibleGround)








  player.velocityY+=3

  




  backLevel1.x=player.x+40






      if(mousePressedOver(exitLevel1)){

          buttonClickingSound.play()

          alert(" you got "+coins+" coins")

          location.reload()

      }

  if(player.x>width*9+150){



    gameState="win4"

  
    
  }


 



  if(gameState==="win4"){





    player.destroy()
    life1.destroy()
    life2.destroy()
    life3.destroy()





    background("red")
    alert("YOU WON")
    background("red")
    alert("You won "+coins+" coins")
    background("red")  




    location.reload()



  }








  if(keyWentUp("left")){




    player.changeAnimation("running4",playerStandingLeft)
  



    }
  


  




    if(keyDown("left")){
  



      player.x-=18
  



      player.changeAnimation("running2",playerLeftRunning)
      bulletDirection="left"
  



     }
  
  


    if(keyWentUp("right")){
  



     player.changeAnimation("running3",playerStandingRight)
  



     }
  







  
     if(keyDown("right")){
  



      player.x+=18
  



      player.changeAnimation("running1",playerRightRunning)
      bulletDirection="right"
  



      }
  







  
      if(keyWentDown("space")){
  




      player.velocityY-=30
      jumpingSound.play()
  




      }
  




  


      if(keyWentDown("enter")){
      




      bullets=createSprite(player.x+70,player.y-20,10,10)
    


      bulletFiringSound.play()



      bulletsCount-=1



      

       bullets.setCollider("rectangle",0,0,100,40)



       bulletsgroup.add(bullets)
  



        if(bulletDirection==="right"){
      



              bullets.velocityX=80
            

              bullets.addImage(playerBulletImage)


              bullets.lifetime=130
            
      


      
       }



  
      else if(bulletDirection==="left"){
      


                bullets.velocityX=-80
              


                bullets.addImage(playerBulletImage)
                bullets.x=player.x-70



                bullets.lifetime=130
      

                 
        }
  
  



        else{
        



          bullets.x=player.x-70


          bullets.velocityX=-80


          bullets.addImage(playerBulletImage)
        



          }






          }





          if(bulletsCount===0){




            alert("Bullets loss have a steady targets next time")
            alert("You got "+coins+" coins")
            location.reload()





          }









                  if(droneSprite1==="alive"){








                  if(keyDown("d")){





                          droneSprite.visible=true
                          droneSprite.x=player.x+300
                          droneSprite.y=player.y

                          healingSound.play()

                          drone=1





                  }




                  droneSprite.velocityY= 1






                  if(drone===1){




                            if(keyDown("t")){




                              droneSprite.velocityY=-20
                              droneSound.play()
                            



                            }






                            if(keyWentUp("h")){




                              droneBullets1="right"




                            }






                            if(keyDown("h")){

                              




                              droneBullets1="right"
                              droneSprite.velocityX=20
                              



                              
                              droneSound.play()





                            }


                    





                              if(keyDown("f")){




                              
                                droneBullets1="left"
                                droneSprite.velocityX=-20
                                droneSound.play()




                              }



                              
                              if(keyDown("g")){



                                droneSprite.velocityY=20
                                droneSound.play()



                              }

                              if(keyWentDown("u")){



                                if(droneBullets1==="right"){




                                droneBullets=createSprite(droneSprite.x,droneSprite.y)
                                droneBullets.addImage(playerBulletImage)
                                bulletFiringSound.play()
                                droneBullets.velocityX=90



                                droneBullets.lifetime=190
                                bulletsgroup.add(droneBullets)



                              }



                            }




                        if(keyWentDown("u")){




                        if(droneBullets1==="left"){
                          
                          
                          
                          
                          droneBullets=createSprite(droneSprite.x,droneSprite.y)
                          droneBullets.addImage(playerBulletImage)
                          bulletFiringSound.play()
                          
                          
                          
                          droneBullets.velocityX=-90
                          droneBullets.lifetime=190
                          bulletsgroup.add(droneBullets)
                        



                        }




                        }




                        droneSprite.collide(invisibleWall)
                        droneSprite.collide(invisibleWall2)
                        droneSprite.collide(invisibleGround)





                        if(droneSprite.isTouching(brickGroupLevel4)||droneSprite.isTouching(invisibleBrick4Group)){





                          droneSound.stop()
                          droneSprite1="destroyed"






                        }





                    if(droneSprite1==="destroyed"){
                      




                      droneSprite.destroy()
                      bombExplodingSound.play()





                    }




                  }





                  }

          spawnBricks4()
          spawnGuns4_1()
          spawnGuns4_2()
         

          spawnTraps4Spike_1()
          spawnTraps4Spike_2()

          spawnBombs4_1()
          spawnBombs4_2()
          spawnTraps4_1()
          spawnTraps4_2()

          spawnGround2()
          spawnRocks1()





          if(coinsGroup4.isTouching(player)){
         



            coins+=20
            coinColectingSound.play()
            coinsGroup4.destroyEach()




          }






            if(bulletsgroup.isTouching(gun8Group)){




                      gunBullets1Group.destroyEach()
                      coins+=200
                      healingSound.play()
                      gun8Group.destroyEach()
                      



              }

         

              else if(metalTrap2Group.isTouching(player)){




                trapSound.play()
                life+=1
               metalTrap2Group.destroyEach()





              if(life===1){

                


                life3.destroy()




              }





              if(life===2){



                life2.destroy()



              }






              if(life===3){




                life1.destroy()
                textSize(50)
                text("you have only 1 life left",player.x,player.y-300)




              }






              }






              else if(trapsSpike4Group.isTouching(player)){





                trapSound.play()
                life+=2






                life3.destroy()
                life2.destroy()



                player.velocityY=0



                trapsSpike4Group.destroyEach()






              }






              else if(life===3 || life > 3 ){




                    gameState="end4"



                            
                 }






                  if(gameState==="end4"){


                    life1.destroy()
                    life2.destroy()
                    life3.destroy()


                    alert("YOU LOOSE HAVE BETTER LUCK NEXT TIME")

                  


                   location.reload()




                  }
          
           

                    else if(player.isTouching(bombGroup5)){




                      gameState="bombAttack4"

                      



                    }









                if(gameState==="bombAttack4"){





                  bombExplodingSound.play()




                  bombGroup5.destroyEach()

                  


                  droneSound.stop()




                  var bomb=createSprite(player.x,player.y-200)
                  bomb.addImage(bombExplodingImage)
                  bomb.scale+=1/2

                  
                  exitLevel1.visible=false




                  life=4







                  life1.destroy()
                  life2.destroy()
                  life3.destroy()








                  setTimeout(()=>{
                  



                    bomb.visible=false
                    player.destroy()




                    alert("YOU LOOSE")




                    alert("you get"+ " "+coins+" "+"coins")

                    


                    location.reload()
                   




                  },5000)






            
          }




           if(player.isTouching(brickGroupLevel4)){





            player.velocityY=0
            player.velocityX=-13






           if(keyWentDown("space")){




            player.velocityY=-30




          }




        }

        if(player.isTouching(brickGroupLevel4brick)){





          player.velocityY=0
          player.velocityX=-13






         if(keyWentDown("space")){




          player.velocityY=-30




        }




      }


        if(player.isTouching(rock1Group)){



       life+=1

         rock1Group.destroyEach()






         if(keyWentDown("space")){




          player.velocityY=-30




        }




      }





        if(player.isTouching(brickGroupLevel4)){
      



          player.velocityX-=13





        }


          


          else if(player.isTouching(invisibleBrick4Group)){
          
          



            player.velocityY=10
          
          


          }




         if(gunBullets4Group_1.isTouching(player)){





          life+=1
          life1.destroy()              
          
          
          


          gunBullets4Group_1.destroyEach()






          }





          
            else if(life===2){

            


              life2.destroy()
            
            


            
            }







            else if(life===3){





              life3.destroy()





                }







                else{





                  player.velocityX=0





                }
       





                player.velocityX=0





                drawSprites()






}



// gameState play5 starting for level 5





if(gameState==="play5"){


  background("red")



  image(bgImg,-900,0,width*2+900,height) 
  image(bg2Img,3600,0,width*2+900,height)
  image(bg3Img,8100,0,width*2+900,height)
  image(bg4Img,12000,0,width*2+900,height)




  







  player.visible=true






  exitLevel1.visible=true







  life1.visible=true
  life2.visible=true
  life3.visible=true
  backLevel.visible=false








  level1.visible=false
  level2.visible=false
  level3.visible=false
  level4.visible=false
  level5.visible=false








  life1.x=player.x-850
  life2.x=player.x-790
  life3.x=player.x-730








  exitLevel1.x=player.x+500
  








   invisibleWall=createSprite(-10,500,20,height*2)
   invisibleWall2=createSprite(1000,-1000,width*17,2000)








   endLine=createSprite(width*9+500,300,30,800)




   push()

   textSize(80)
 
   text("FINISH",endLine.x+100,600)
    pop()
 

   




   endLine.visible=false









  player.collide(endLine)

 





  textSize(40)
  text("Bullets = "+bulletsCount,player.x-850,50)








  textSize(50)
  text("coins = "+coins,player.x+600,60)









  player.collide(wall)








  setTimeout(()=>{
  


    wall.velocityX=100
  



  },10000)








  invisibleWall.visible=false
  player.collide(invisibleWall)







  invisibleWall2.visible=false
  player.collide(invisibleWall2)
  




 
  camera.x=player.x










  player.collide(invisibleGround)








  player.velocityY+=3

  




  backLevel1.x=player.x+40






      if(mousePressedOver(exitLevel1)){

          buttonClickingSound.play()

          alert(" you got "+coins+" coins")

          location.reload()

      }

  if(player.x>width*9+150){



    gameState="win4"

  
    
  }


 



  if(gameState==="win4"){





    player.destroy()
    life1.destroy()
    life2.destroy()
    life3.destroy()





    background("red")
    alert("YOU WON")
    background("red")
    alert("You won "+coins+" coins")
    background("red")  




    location.reload()



  }








  if(keyWentUp("left")){




    player.changeAnimation("running4",playerStandingLeft)
  



    }
  


  




    if(keyDown("left")){
  



      player.x-=25
  



      player.changeAnimation("running2",playerLeftRunning)
      bulletDirection="left"
  



     }
  
  


    if(keyWentUp("right")){
  



     player.changeAnimation("running3",playerStandingRight)
  



     }
  







  
     if(keyDown("right")){
  



      player.x+=25
  



      player.changeAnimation("running1",playerRightRunning)
      bulletDirection="right"
  



      }
  







  
      if(keyWentDown("space")){
  




      player.velocityY-=35
      jumpingSound.play()
  




      }
  




  


      if(keyWentDown("enter")){
      




      bullets=createSprite(player.x+70,player.y-20,10,10)
    


      bulletFiringSound.play()



      bulletsCount-=1



      

       bullets.setCollider("rectangle",0,0,100,40)



       bulletsgroup.add(bullets)
  



        if(bulletDirection==="right"){
      



              bullets.velocityX=80
            

              bullets.addImage(playerBulletImage)


              bullets.lifetime=130
            
      


      
       }



  
      else if(bulletDirection==="left"){
      


                bullets.velocityX=-80
              


                bullets.addImage(playerBulletImage)
                bullets.x=player.x-70



                bullets.lifetime=130
      

                 
        }
  
  



        else{
        



          bullets.x=player.x-70


          bullets.velocityX=-80


          bullets.addImage(playerBulletImage)
        



          }






          }





          if(bulletsCount===0){




            alert("Bullets loss have a steady targets next time")
            alert("You got "+coins+" coins")
            location.reload()





          }









                  if(droneSprite1==="alive"){








                  if(keyDown("d")){





                          droneSprite.visible=true
                          droneSprite.x=player.x+300
                          droneSprite.y=player.y

                          healingSound.play()

                          drone=1





                  }




                  droneSprite.velocityY= 1






                  if(drone===1){




                            if(keyDown("t")){




                              droneSprite.velocityY=-27
                              droneSound.play()
                            



                            }






                            if(keyWentUp("h")){




                              droneBullets1="right"




                            }






                            if(keyDown("h")){

                              




                              droneBullets1="right"
                              droneSprite.velocityX=27
                              



                              
                              droneSound.play()





                            }


                    





                              if(keyDown("f")){




                              
                                droneBullets1="left"
                                droneSprite.velocityX=-27
                                droneSound.play()




                              }



                              
                              if(keyDown("g")){



                                droneSprite.velocityY=27
                                droneSound.play()



                              }

                              if(keyWentDown("u")){



                                if(droneBullets1==="right"){




                                droneBullets=createSprite(droneSprite.x,droneSprite.y)
                                droneBullets.addImage(playerBulletImage)
                                bulletFiringSound.play()
                                droneBullets.velocityX=90



                                droneBullets.lifetime=190
                                bulletsgroup.add(droneBullets)



                              }



                            }




                        if(keyWentDown("u")){




                        if(droneBullets1==="left"){
                          
                          
                          
                          
                          droneBullets=createSprite(droneSprite.x,droneSprite.y)
                          droneBullets.addImage(playerBulletImage)
                          bulletFiringSound.play()
                          
                          
                          
                          droneBullets.velocityX=-90
                          droneBullets.lifetime=190
                          bulletsgroup.add(droneBullets)
                        



                        }




                        }




                        droneSprite.collide(invisibleWall)
                        droneSprite.collide(invisibleWall2)
                        droneSprite.collide(invisibleGround)





                        if(droneSprite.isTouching(brickGroupLevel4)||droneSprite.isTouching(invisibleBrick4Group)){





                          droneSound.stop()
                          droneSprite1="destroyed"






                        }





                    if(droneSprite1==="destroyed"){
                      




                      droneSprite.destroy()
                      bombExplodingSound.play()





                    }




                  }





                  }


          spawnBricks5_1()
          spawnBricks5_2()
          spawnGuns5_1()
          spawnGuns5_2()
         

          spawnTraps5Spike_1()
          spawnTraps5Spike_2()

          spawnBombs5_1()
          spawnBombs5_2()
          spawnTraps5_1()
          spawnTraps5_2()

          spawnGround5_1()
          spawnGround5_2()
          spawnRocks2()
          spawnSciFieGun()





          if(coinsGroupLevel5.isTouching(player)){
         



            coins+=20
            coinColectingSound.play()
            coinsGroupLevel5.destroyEach()




          }






            if(bulletsgroup.isTouching(gunGroupLevel5)){




                      gunBulletsGroupLevel5.destroyEach()
                      coins+=200
                      healingSound.play()
                      gunGroupLevel5.destroyEach()
                      



              }

              if(bulletsgroup.isTouching(scieFieGunGroup)){




                gunBulletsGroupLevel5.destroyEach()
                coins+=300
                healingSound.play()
                scieFieGunGroup.destroyEach()
                



        }

         

              else if(trapGroupLevel5.isTouching(player)){




                trapSound.play()
                life+=1
                trapGroupLevel5.destroyEach()





              if(life===1){

                


                life3.destroy()




              }





              if(life===2){



                life2.destroy()



              }






              if(life===3){




                life1.destroy()
                textSize(50)
                text("you have only 1 life left",player.x,player.y-300)




              }






              }






              else if(trapsSpikeGroupLevel5.isTouching(player)){





                trapSound.play()
                life+=2






                life3.destroy()
                life2.destroy()



                player.velocityY=0



                trapsSpikeGroupLevel5.destroyEach()






              }






              else if(life===3 || life > 3 ){




                    gameState="end4"



                            
                 }






                  if(gameState==="end4"){


                    life1.destroy()
                    life2.destroy()
                    life3.destroy()


                    alert("YOU LOOSE HAVE BETTER LUCK NEXT TIME")

                  


                   location.reload()




                  }
          
           

                    else if(player.isTouching(bombGroupLevel5)){




                      gameState="bombAttack4"

                      



                    }









                if(gameState==="bombAttack4"){





                  bombExplodingSound.play()




                  bombGroupLevel5.destroyEach()

                  


                  droneSound.stop()




                  var bomb=createSprite(player.x,player.y-200)
                  bomb.addImage(bombExplodingImage)
                  bomb.scale+=1/2

                  
                  exitLevel1.visible=false




                  life=4







                  life1.destroy()
                  life2.destroy()
                  life3.destroy()








                  setTimeout(()=>{
                  



                    bomb.visible=false
                    player.destroy()




                    alert("YOU LOOSE")




                    alert("you get"+ " "+coins+" "+"coins")

                    


                    location.reload()
                   




                  },5000)






            
          }




           if(player.isTouching(brickGroupLevel5)){





            player.velocityY=0
            player.velocityX=-13






           if(keyWentDown("space")){




            player.velocityY=-30




          }




        }

        if(player.isTouching(groundGroupLevel5)){





          player.velocityY=0
          player.velocityX=-13






         if(keyWentDown("space")){




          player.velocityY=-30




        }




      }


        if(player.isTouching(rock2Group)){

        
         player.velocityY=0
         player.velocityX=22




         if(keyWentDown("space")){




          player.velocityY=-35




        }




      }





        if(player.isTouching(brickGroupLevel5)){
      



          player.velocityX-=13





        }


          


          else if(player.isTouching(invisibleBrickGroupLevel5)){
          
          



            player.velocityY=10
          
          


          }

          else if(player.isTouching(invisibleGroundGroupLevel5)){
          
          



            player.velocityY=10
          
          


          }




         if(gunBulletsGroupLevel5.isTouching(player)){





          life+=1
          life1.destroy()              
          
          
          


          gunBulletsGroupLevel5.destroyEach()






          }

          if(scieFieGunBulletsGroup.isTouching(player)){





            life+=2
            life1.destroy()              
            
            
            
  
  
            scieFieGunBulletsGroup.destroyEach()
  
  
  
  
  
  
            }





          
            else if(life===2){

            


              life2.destroy()
            
            


            
            }







            else if(life===3){





              life3.destroy()





                }







                else{





                  player.velocityX=0





                }
       





                player.velocityX=0





                drawSprites()

    
 }






//rect(playerBody.position.x,playerBody.position.y,100,100)
  

drawSprites()

      
}

// function draw ending

// function spawn bricks for creating small bricks


function spawnBricks() {



  if (frameCount % 300 === 0) {



        brick = createSprite(14000,120,100,40);
        brick.y = Math.round(random(200,500));
        brick.addImage(brickImage);


        brick.velocityX = -10;
        brick.lifetime = 1500;
        brickGroup.add(brick)
       // invisibleBrick.visible=false
        


       }



}



// function spawn bricks ending

// function spawn ground starting for creating small grounds






// function spawn ground ending

// function spawn guns starting for creating enemy gun


function spawnGuns(){



  if(frameCount%600===0){


    gun=createSprite(7000,110,100,20)
    gun.y=ground.y-20
    gun.x=ground.x


    gun.addImage(enemyMachineGun)
    gun.lifetime=700
    gun.velocityX=-10


    gun.scale=1/2


   setInterval(()=>{


    gunBullets=createSprite(gun.x-20,gun.y-30,10,5)
    gunBullets.velocityX=-30
    gunBullets.setlifetime=100


    gunBullets.addImage(enemyMachineGunBulletsImage)
    gunBullets.scale=1/3



   },2000)



  }



}



// function spawn guns ending

// function spawn sciFieGun for creating enemy powerfull gun



function spawnSciFieGun (){



if (frameCount%500===0){


scieFieGun=createSprite(16000,120,10,5)
scieFieGun.y=Math.round(random(120,600))


scieFieGun.addImage(scientificEnemyGun)
scieFieGun.lifetime=900
scieFieGun.velocityX=-22


scieFieGun.scale=1/2
scieFieGunGroup.add(scieFieGun)



setInterval(()=>{


  scieFieGunBullets=createSprite(scieFieGun.x-20,scieFieGun.y-20,10,20)
  scieFieGunBullets.velocityX=-60
  scieFieGunBullets.lifetime=200


  scieFieGunBullets.addImage(scieFieGunBulletsImage)
  scieFieGunBullets.scale=1/3
  scieFieGunBulletsGroup.add(scieFieGunBullets)


},3000)



}



}



// function spawn scieFieGun ending

// function spawn bricks2 starting


function spawnBricks2() {



  if (frameCount % 200 === 0) {



        brick2 = createSprite(12000,120,100,40);
        brick2.y = Math.round(random(200,500));
        brick2.addImage(brickImage);
        brick2.velocityX = -20;

        
       

        brick2.lifetime = 800;
        brick2Group.add(brick2)
       

       invisibleBrick2=createSprite(12000,140,150,30)
       invisibleBrick2.x=brick2.x
       invisibleBrick2.y=brick2.y+20
       invisibleBrick2Group.add(invisibleBrick2)
       invisibleBrick2.velocityX=-20
       invisibleBrick2.lifetime=800
       invisibleBrick2.visible=false




       coinsSprite1=createSprite(12000,110,10,10)
       coinsSprite1.addImage("coinImage",coinImage)


         coinsSprite1.x=brick2.x
         coinsSprite1.y=brick2.y-30


         coinsSprite1.velocityX=-20

         coinsSprite1.lifetime=800

         coinsGroup2.add(coinsSprite1)

      



       }



}

function spawnGuns2(){


  if(frameCount%600===0){

  
  gun1=createSprite(12000,110,100,20)
  
gun1.y=Math.round(random(120,500))


  gun1.addImage(enemyMachineGun)
  gun1.lifetime=800
  gun1.velocityX=-28


  gun1.scale=1/2
  gun1.setCollider("rectangle",0,0,250,100)

  gunGroup2.add(gun1)


  setInterval(()=>{


    gunBullets1=createSprite(gun1.x-20,gun1.y-30,50,50)
    gunBullets1.velocityX=-50
    gunBullets1.lifetime=80
gunBullets1.addImage(enemyMachineGunBulletsImage)
gunBullets1.setCollider("rectangle",0,0,200,50)

// gunBullets3.debug=true
   
    gunBullets1.scale=1/3
    gunBullets1Group.add(gunBullets1)
  
 
   },3500)
 
   
    }
    
 }


function spawnTraps2Spike (){



  if (frameCount%600===0){


    trap6=createSprite(brick2.x,brick2.y-60)
    trap6.velocityX=-22
    trap6.addImage(trap2)
    trap6.lifetime=800
    trap6.setCollider("rectangle",0,0,100,100)
   // trap.debug=true
    trapsSpike2Group.add(trap6) 
  
    trap6.scale=1/3


  }



}


 function spawnBombs2 (){



  if (frameCount%500===0){


    bomb2=createSprite(12000,height-120)
    bomb2.velocityX=-15
    bomb2.addImage(bombImage)
    bombGroup2.add(bomb2)
    bomb2.lifetime=800

    if(player.isTouching(bomb2)){

bomb2.changeAnimation(bombExplodingImage)
bomb2.visible=false

    }
    
  }

 }





function spawnBombs1 (){



  if (frameCount%600===0){


    bomb=createSprite(9000,height-120)
    bomb.velocityX=-15
    bomb.addImage(bombImage)
    bomb2Group.add(bomb)
bomb.lifetime=800
    if(player.isTouching(bomb)){

bomb.changeAnimation(bombExplodingImage)
bomb.visible=false

    }
    
  }



}


function spawnTraps2 (){



  if (frameCount%500===0){
  

    trap7=createSprite(12000,height-130)
    trap7.velocityX=-15
    trap7.addImage(trap1)
  trap7.lifetime=800
  trapsGroups2.add(trap7)
  trap7.setCollider("rectangle",0,0,100,50)
  //trap.debug=true

  }
}

// function spawn bricks2 ending

// function spawn guns 2 starting





function spawnTraps1 (){



  if (frameCount%500===0){
  

    trap=createSprite(8300,height-130)
    trap.velocityX=-14
    trap.addImage(trap1)
  trap.lifetime=800
  traps3Groups.add(trap)
  trap.setCollider("rectangle",0,0,100,50)
  //trap.debug=true

  }



}

function  spawnTraps5Spike_1() {

  if(frameCount%200===0){

    trap11=createSprite(brickGroupLevel5.x,brickGroupLevel5.y-60)
    trap11.velocityX=-22
    trap11.addImage(trap2)
    trap11.lifetime=400
    trap11.setCollider("rectangle",0,0,100,100)
   
    trapsSpikeGroupLevel5.add(trap11) 
  
    trap11.scale=1/3
  
  }

}

function  spawnTraps5Spike_2() {

  if(frameCount%200===0){

    trap11=createSprite(groundGroupLevel5.x,groundGroupLevel5.y-60)
    trap11.velocityX=-22
    trap11.addImage(trap2)
    trap11.lifetime=400
    trap11.setCollider("rectangle",0,0,100,100)
   
    trapsSpikeGroupLevel5.add(trap11) 
  
    trap11.scale=1/3
  
  }

}

function spawnGround5_1 (){

  if(frameCount%400===0){
ground7=createSprite(8300,120,40,40)
ground7.y=Math.round(random(120,600))
ground7.addImage(smallGround)
ground7.velocityX = -22;
ground7.lifetime = 400;
groundGroupLevel5.add(ground7)
ground7.scale+=1/2


invisibleBrick7=createSprite(9000,170,200,30)
invisibleBrick7.x=ground7.x
invisibleBrick7.y=ground7.y+20
invisibleGroundGroupLevel5.add(invisibleBrick7)
invisibleBrick7.velocityX=-22
invisibleBrick7.lifetime=800
invisibleBrick7.visible=false

coinsSprite6=createSprite(16000,110,10,10)
coinsSprite6.addImage("coinImage",coinImage)


  coinsSprite6.x=ground7.x
  coinsSprite6.y=ground7.y-30


  coinsSprite6.velocityX=-22

  coinsSprite6.lifetime=800

  coinsGroupLevel5.add(coinsSprite6)

  }


}

function spawnGround5_2 (){

  if(frameCount%400===0){
ground8=createSprite(16000,120,40,40)
ground8.y=Math.round(random(120,600))
ground8.addImage(smallGround)
ground8.velocityX = -22;
ground8.lifetime = 400;
groundGroupLevel5.add(ground8)
ground8.scale+=1/2

invisibleBrick11=createSprite(9000,170,200,30)
invisibleBrick11.x=ground8.x
invisibleBrick11.y=ground8.y+20
invisibleGroundGroupLevel5.add(invisibleBrick11)
invisibleBrick11.velocityX=-22
invisibleBrick11.lifetime=800
invisibleBrick11.visible=false

coinsSprite6=createSprite(16000,110,10,10)
coinsSprite6.addImage("coinImage",coinImage)


  coinsSprite6.x=ground8.x
  coinsSprite6.y=ground8.y-30


  coinsSprite6.velocityX=-22

  coinsSprite6.lifetime=800

  coinsGroupLevel5.add(coinsSprite6)

  }


}

function spawnBombs3_1 (){



  if (frameCount%500===0){


    bomb=createSprite(8300,height-130)
    bomb.velocityX=-16
    bomb.addImage(bombImage)
    bomb.lifetime=400
    bombGroup3.add(bomb)

  }



}

function spawnBombs3_2 (){



  if (frameCount%600===0){


    bomb=createSprite(16000,height-130)
    bomb.velocityX=-16
    bomb.addImage(bombImage)
    bomb.lifetime=400
    bombGroup3.add(bomb)

  }



}

function spawnBricks1(){


  if(frameCount%200===0){
  brick6 = createSprite(8000,120,80,40);
       
      

        brick6.y = Math.round(random(200,600));
        brick6.addImage(brickImage);


        brick6.velocityX = -15;
        brick6.lifetime = 600;
        brickGroup1.add(brick6)

        invisibleBrick4=createSprite(9000,170,200,30)
        invisibleBrick4.x=brick6.x
        invisibleBrick4.y=brick6.y+20
        invisibleBrick4Group.add(invisibleBrick4)
        invisibleBrick4.velocityX=-15
        invisibleBrick4.lifetime=600
        invisibleBrick4.visible=false
       
        //brick3.debug=true


        coinsSprite3=createSprite(16000,110,10,10)
        coinsSprite3.addImage("coinImage",coinImage)


          coinsSprite3.x=brick6.x
          coinsSprite3.y=brick6.y-30


          coinsSprite3.velocityX=-15

          coinsSprite3.lifetime=600

          coinsGroup3.add(coinsSprite3)


  }


}
function spawnTraps1Spike (){



  if (frameCount%500===0){


    trap=createSprite(brickGroup1.x,brickGroup1.y-60)
    trap.velocityX=-15
    trap.addImage(trap2)
    trap.lifetime=400
    trap.setCollider("rectangle",0,0,100,100)
   // trap.debug=true
    traps2Group.add(trap) 
  
    trap.scale=1/3


  }



}


function spawnBricks3(){


  if(frameCount%200===0){
  brick6 = createSprite(16000,120,80,40);
       
      

        brick6.y = Math.round(random(200,600));
        brick6.addImage(brickImage);


        brick6.velocityX = -15;
        brick6.lifetime = 400;
        brickGroup3.add(brick6)

        invisibleBrick4=createSprite(9000,170,200,30)
        invisibleBrick4.x=brick6.x
        invisibleBrick4.y=brick6.y+20
        invisibleBrick4Group.add(invisibleBrick4)
        invisibleBrick4.velocityX=-15
        invisibleBrick4.lifetime=800
        invisibleBrick4.visible=false
       
        //brick3.debug=true

        brickGroup3.add(brick6)

        coinsSprite3=createSprite(16000,110,10,10)
        coinsSprite3.addImage("coinImage",coinImage)


          coinsSprite3.x=brick6.x
          coinsSprite3.y=brick6.y-30


          coinsSprite3.velocityX=-13

          coinsSprite3.lifetime=400

          coinsGroup3.add(coinsSprite3)


  }


}

function spawnTraps3Spike_2 (){

  if(frameCount%600===0){
    trap9=createSprite(brickGroup3.x,brickGroup3.y-60)
    trap9.velocityX=-22
    trap9.addImage(trap2)
    trap9.lifetime=400
    trap9.setCollider("rectangle",0,0,100,100)
   // trap.debug=true
    trapsSpike3Group.add(trap9) 
  
    trap9.scale=1/3
  
  }
  }


  function spawnGround1 () {



    if (frameCount % 300 === 0) {
  
  
          ground1 = createSprite(8000,120,100,30);
          ground1.y= Math.round(random(200,500));
          ground1.addImage(smallGround);
         ground1.scale+=1/2
  
          ground1.velocityX = -15;
          ground1.lifetime = 400;
          brickGroup3.add(ground1)

         invisibleBrick5=createSprite(9000,170,200,30)
        invisibleBrick5.x=ground1.x
        invisibleBrick5.y=ground1.y+20
        invisibleBrick4Group.add(invisibleBrick5)
        invisibleBrick5.velocityX=-15
        invisibleBrick5.lifetime=400
        invisibleBrick5.visible=false

        coinsSprite3=createSprite(16000,110,10,10)
        coinsSprite3.addImage("coinImage",coinImage)


          coinsSprite3.x=ground1.x
          coinsSprite3.y=ground1.y-30


          coinsSprite3.velocityX=-15

          coinsSprite3.lifetime=400

          coinsGroup3.add(coinsSprite3)

  
         // invisibleBrick2.visible=false
         
  
  
         }
  
  
  
  }




function spawnGuns5_1 (){

  if(frameCount%300===0){



    gun10=createSprite(8300,110,100,20)
    gun10.y=Math.round(random(120,500))



    gun10.addImage(enemyMachineGun)
    gun10.lifetime=600
    gun10.velocityX=-22


    gun10.scale=1/2
    gun10.setCollider("rectangle",0,0,250,100)

    gunGroupLevel5.add(gun10)

  
  
      setInterval(()=>{


        gunBullets5_1=createSprite(gun10.x-20,gun10.y-30,50,50)
        gunBullets5_1.velocityX=-30
        gunBullets5_1.lifetime=60
        gunBullets5_1.addImage(enemyMachineGunBulletsImage)
        gunBullets5_1.setCollider("rectangle",0,0,200,50)

   // gunBullets3.debug=true
       
        gunBullets5_1.scale=1/3
        gunBulletsGroupLevel5.add(gunBullets5_1)
      
     
       },3000)
   }

}


function spawnGuns5_2 (){

  if(frameCount%470===0){



    gun11=createSprite(16000,110,100,20)
    gun11.y=Math.round(random(120,500))



    gun11.addImage(enemyMachineGun)
    gun11.lifetime=600
    gun11.velocityX=-22


    gun11.scale=1/2
    gun11.setCollider("rectangle",0,0,250,100)

    gunGroupLevel5.add(gun11)

  
  
      setInterval(()=>{


        gunBullets5_2=createSprite(gun11.x-20,gun11.y-30,50,50)
        gunBullets5_2.velocityX=-30
        gunBullets5_2.lifetime=60
        gunBullets5_2.addImage(enemyMachineGunBulletsImage)
        gunBullets5_2.setCollider("rectangle",0,0,200,50)

   // gunBullets3.debug=true
       
        gunBullets5_2.scale=1/3
        gunBulletsGroupLevel5.add(gunBullets5_2)
      
     
       },3000)
   }

}


  
function spawnTraps3Spike_1 (){

if(frameCount%900===0){


  trap8=createSprite(ground1.x,ground1.y-70)
  trap8.velocityX=-15
  trap8.addImage(trap2)
  trap8.lifetime=400
  trap8.setCollider("rectangle",0,0,100,100)
 
  trapsSpike3Group.add(trap8) 

  trap8.scale=1/3


}

}


function spawnGuns3_1(){


  if(frameCount%600===0){



    gun5=createSprite(8300,110,100,20)
    gun5.y=Math.round(random(120,500))



    gun5.addImage(enemyMachineGun)
    gun5.lifetime=400
    gun5.velocityX=-17


    gun5.scale=1/2
    gun5.setCollider("rectangle",0,0,250,100)

    gun7Group.add(gun5)

  
  
      setInterval(()=>{


        gunBullets3_1=createSprite(gun5.x-20,gun5.y-30,50,50)
        gunBullets3_1.velocityX=-30
        gunBullets3_1.lifetime=60
        gunBullets3_1.addImage(enemyMachineGunBulletsImage)
        gunBullets3_1.setCollider("rectangle",0,0,200,50)

   // gunBullets3.debug=true
       
        gunBullets3_1.scale=1/3
        gunBullets3Group_2.add(gunBullets3_1)
      
     
       },4000)
   }
      
      
  
}



function spawnGuns3_2(){


  if(frameCount%600===0){



    gun7=createSprite(16000,110,100,20)
   gun7.y=Math.round(random(120,500))



    gun7.addImage(enemyMachineGun)
    gun7.lifetime=400
    gun7.velocityX=-17


    gun7.scale=1/2
    gun7.setCollider("rectangle",0,0,250,100)

    gun5Group.add(gun7)

  
  
      setInterval(()=>{


        gunBullets3_2=createSprite(gun7.x-20,gun7.y-30,50,50)
        gunBullets3_2.velocityX=-40
        gunBullets3_2.lifetime=60
        gunBullets3_2.addImage(enemyMachineGunBulletsImage)
        gunBullets3_2.setCollider("rectangle",0,0,200,50)

   // gunBullets3.debug=true
       
        gunBullets3_2.scale=1/3
        gunBullets3Group_2.add(gunBullets3_2)
      
     
       },3000)
   }
      
      
  
}


function spawnRocks1 (){

if(frameCount%737===0){
 
  rock1=createSprite(16000,600)
  rock1.addImage(rock)
  rock1.scale=1/3
 
  rock1.setCollider("rectangle",0,0,200,200)
  rock1.velocityX=-13
  rock1Group.add(rock1)
  rock1.lifetime=1000


}


}

function spawnRocks2 (){

  if(frameCount%300===0){
   
    rock1=createSprite(16000,600)
    rock1.addImage(rock)
    rock1.scale=1/3
   
    rock1.setCollider("rectangle",0,0,200,200)
    rock1.velocityX=-18
    rock2Group.add(rock1)
    rock1.lifetime=1000
  
  
  }
  
  
  }

function spawnGuns4_1(){


  if(frameCount%400===0){



    gun8=createSprite(8300,110,100,20)
    gun8.y=Math.round(random(120,500))



    gun8.addImage(enemyMachineGun)
    gun8.lifetime=1000
    gun8.velocityX=-20


    gun8.scale=1/2
    gun8.setCollider("rectangle",0,0,250,100)

    gun8Group.add(gun8)

  
  
      setInterval(()=>{


        gunBullets4_1=createSprite(gun8.x-20,gun8.y-30,50,50)
        gunBullets4_1.velocityX=-30
        gunBullets4_1.lifetime=60
        gunBullets4_1.addImage(enemyMachineGunBulletsImage)
        gunBullets4_1.setCollider("rectangle",0,0,200,50)

   // gunBullets3.debug=true
       
        gunBullets4_1.scale=1/3
        gunBullets4Group_1.add(gunBullets4_1)
      
     
       },4000)
   }
      
      
  
}

function spawnBombs5_1(){

if(frameCount%300===0){

  bomb1=createSprite(8300,700)
  bomb1.velocityX=-20
  bomb1.lifetime=600
  bomb1.addImage(bombImage)
  bombGroupLevel5.add(bomb1)
  bomb1.scale+=1/2


}

}


function spawnBombs5_2(){

  if(frameCount%300===0){
  
    bomb1=createSprite(16000,700)
    bomb1.velocityX=-20
    bomb1.lifetime=900
    bomb1.addImage(bombImage)
    bombGroupLevel5.add(bomb1)
    bomb1.scale+=1/2
  
  }
  
  }
  

function spawnTraps5_1(){

if(frameCount%200===0){

trap12=createSprite(8300,700)
trap12.velocityX=-22
trap12.lifetime=600
trap12.addImage(trap1)
trapGroupLevel5.add(trap12)

}

}

function spawnTraps5_2(){

  if(frameCount%200===0){
  
  trap12=createSprite(16000,700)
  trap12.velocityX=-22
  trap12.lifetime=900
  trap12.addImage(trap1)
  trapGroupLevel5.add(trap12)
  
  }
  
  }


function spawnGuns4_2(){


  if(frameCount%400===0){



    gun9=createSprite(15000,110,100,20)
   gun9.y=Math.round(random(120,500))



    gun9.addImage(enemyMachineGun)
    gun9.lifetime=1000
    gun9.velocityX=-22


    gun9.scale=1/2
    gun9.setCollider("rectangle",0,0,250,100)

    gun8Group.add(gun9)

  
  
      setInterval(()=>{


        gunBullets4_2=createSprite(gun9.x-20,gun9.y-30,50,50)
        gunBullets4_2.velocityX=-40
        gunBullets4_2.lifetime=60
        gunBullets4_2.addImage(enemyMachineGunBulletsImage)
        gunBullets4_2.setCollider("rectangle",0,0,200,50)

   // gunBullets3.debug=true
       
        gunBullets4_2.scale=1/3
        gunBullets4Group_1.add(gunBullets4_2)
      
     
       },3000)
   }
      
      
  
}


function spawnTraps3_1 (){
if(frameCount%500===0){
metalTrap1=createSprite(8000,player.y+50)
metalTrap1.addImage(trap1)
metalTrap1.lifetime=1000
metalTrap1.velocityX=-17
metalTrap1Group.add(metalTrap1)
}
}

function spawnBricks5_1 (){

  if(frameCount%100===0){
    brick7 = createSprite(8000,120,80,40);
         
        
  
          brick7.y = Math.round(random(200,600));
          brick7.addImage(brickImage);
  
  
          brick7.velocityX = -22;
          brick7.lifetime = 800;
          brickGroupLevel5.add(brick7)
  
          invisibleBrick9=createSprite(9000,170,200,30)
          invisibleBrick9.x=brick7.x
          invisibleBrick9.y=brick7.y+20
          invisibleBrickGroupLevel5.add(invisibleBrick9)
          invisibleBrick9.velocityX=-22
          invisibleBrick9.lifetime=800
          invisibleBrick9.visible=false
         
          //brick3.debug=true
  
         
  
          coinsSprite7=createSprite(16000,110,10,10)
          coinsSprite7.addImage("coinImage",coinImage)
  
  
            coinsSprite7.x=brick7.x
            coinsSprite7.y=brick7.y-30
  
  
            coinsSprite7.velocityX=-22
  
            coinsSprite7.lifetime=800
  
            coinsGroupLevel5.add(coinsSprite7)
  
  }

}

function spawnBricks5_2 (){

  if(frameCount%100===0){
    brick9= createSprite(16000,120,80,40);
         
        
  
          brick9.y = Math.round(random(200,600));
          brick9.addImage(brickImage);
  
  
          brick9.velocityX = -22;
          brick9.lifetime = 800;
          brickGroupLevel5.add(brick9)
  
          invisibleBrick10=createSprite(9000,170,200,30)
          invisibleBrick10.x=brick9.x
          invisibleBrick10.y=brick9.y+20
          invisibleBrickGroupLevel5.add(invisibleBrick10)
          invisibleBrick10.velocityX=-22
          invisibleBrick10.lifetime=800
          invisibleBrick10.visible=false
         
          //brick3.debug=true
  
         
  
          coinsSprite9=createSprite(16000,110,10,10)
          coinsSprite9.addImage("coinImage",coinImage)
  
  
            coinsSprite9.x=brick9.x
            coinsSprite9.y=brick9.y-30
  
  
            coinsSprite9.velocityX=-22
  
            coinsSprite9.lifetime=800
  
            coinsGroupLevel5.add(coinsSprite9)
  
  }

}




function spawnTraps3_2 (){
  if(frameCount%500===0){
  metalTrap2=createSprite(16000,player.y+50)
  metalTrap2.addImage(trap1)
  metalTrap2.lifetime=1000
  metalTrap2.velocityX=-17
  metalTrap1Group.add(metalTrap2)
  }
  }





  function spawnTraps4_1 (){
    if(frameCount%400===0){
    metalTrap3=createSprite(8000,player.y+50)
    metalTrap3.addImage(trap1)
    metalTrap3.lifetime=1000
    metalTrap3.velocityX=-17
    metalTrap2Group.add(metalTrap3)
    }
    }
    




    function spawnTraps4_2 (){
      if(frameCount%400===0){
      metalTrap4=createSprite(16000,player.y+50)
      metalTrap4.addImage(trap1)
      metalTrap4.lifetime=1000
      metalTrap4.velocityX=-17
      metalTrap2Group.add(metalTrap4)
      }
      }





      function spawnBombs4_1 (){



        if (frameCount%500===0){
      
      
          bomb5=createSprite(8300,height-130)
          bomb5.velocityX=-16
          bomb5.addImage(bombImage)
          bomb5.lifetime=1000
          bombGroup5.add(bomb5)
          bomb5.scale+=1/2
      
        }
      
      
      
      }
      
      function spawnBombs4_2 (){
      
      
      
        if (frameCount%600===0){
      
      
          bomb6=createSprite(16000,height-130)
          bomb6.velocityX=-17
          bomb6.addImage(bombImage)
          bomb6.lifetime=1000
          bombGroup5.add(bomb6)
          bomb6.scale+=1/2
      
        }
      
      
      
      }



// function spawn guns 2 ending



function spawnBricks4 () {



  if (frameCount % 300 === 0) {



        brickLevel4 = createSprite(16000,120,80,40);
       
      

        brickLevel4.y = Math.round(random(200,600));
        brickLevel4.addImage(brickImage);


        brickLevel4.velocityX = -20;
        brickLevel4.lifetime = 800;
        brickGroupLevel4brick.add(brickLevel4)

        invisibleBrick4=createSprite(9000,170,200,30)
        invisibleBrick4.x=brickLevel4.x
        invisibleBrick4.y=brickLevel4.y+20
        invisibleBrick4Group.add(invisibleBrick4)
        invisibleBrick4.velocityX=-20
        invisibleBrick4.lifetime=400
        invisibleBrick4.visible=false
       
        //brick3.debug=true

      

        coinsSprite4=createSprite(16000,110,10,10)
        coinsSprite4.addImage("coinImage",coinImage)


          coinsSprite4.x=brickLevel4.x
          coinsSprite4.y=brickLevel4.y-30


          coinsSprite4.velocityX=-20

          coinsSprite4.lifetime=400

          coinsGroup4.add(coinsSprite4)


      



       }



}

function spawnHealthKits (){

  if(frameCount%600===0){

    var healthKit=createSprite(16000,199)
    healthKit.velocityX=-11
    healthKit.y=Math.round(random(120,600))
    healthKit.lifetime=1000
    healthKitGroup.add(healthKit)

}
}

function spawnTraps4Spike_1 (){

  if(frameCount%900===0){
  
  
    trap10=createSprite(brickGroupLevel4.x,brickGroupLevel4.y-70)
    trap10.velocityX=-20
    trap10.addImage(trap2)
    trap10.lifetime=1000
    trap10.setCollider("rectangle",0,0,100,100)
   
    trapsSpike4Group.add(trap10) 
  
    trap10.scale=1/3
  
  
  }
  
  }

  function spawnGround2 (){

  if(frameCount%200===0){

    ground3=createSprite(8000,120)
    ground3.y=Math.round(random(120,500))
    ground3.addImage(smallGround)
    ground3.scale+=1/2
    ground3.lifetime=600

    ground3.velocityX=-15
    brickGroupLevel4.add(ground3)

    invisibleBrick8=createSprite(9000,170,200,30)
    invisibleBrick8.x=ground3.x
    invisibleBrick8.y=ground3.y+30
    invisibleBrick4Group.add(invisibleBrick8)
    invisibleBrick8.velocityX=-15
    invisibleBrick8.lifetime=600
    invisibleBrick8.visible=false
   
    //brick3.debug=true

  

    coinsSprite5=createSprite(8300,110,10,10)
    coinsSprite5.addImage("coinImage",coinImage)


      coinsSprite5.x=ground3.x
      coinsSprite5.y=ground3.y-30


      coinsSprite5.velocityX=-15

      coinsSprite5.lifetime=600

      coinsGroup4.add(coinsSprite5)


  
  }


  }

  function spawnTraps4Spike_2 (){

    if(frameCount%600===0){
    
    
      trap10=createSprite(ground3.x,ground3.y-70)
      trap10.velocityX=-15
      trap10.addImage(trap2)
      trap10.lifetime=600
      trap10.setCollider("rectangle",0,0,100,100)
     
      trapsSpike4Group.add(trap10) 
    
      trap10.scale=1/3
    
    
    }
    
    }




function spawnGuns1(){


  if(frameCount%500===0){



    gun3=createSprite(8300,110,100,20)
    


    gun3.addImage(enemyMachineGun)
    gun3.lifetime=500
    gun3.velocityX=-13


    gun3.scale=1/2
gun3.setCollider("rectangle",0,0,250,100)

    gun3Group.add(gun3)

  
  
      setInterval(()=>{


        gunBullets3=createSprite(gun3.x-20,gun3.y-30,50,50)
        gunBullets3.velocityX=-30
        gunBullets3.lifetime=60
    gunBullets3.addImage(enemyMachineGunBulletsImage)
    gunBullets3.setCollider("rectangle",0,0,200,50)

   // gunBullets3.debug=true
       
        gunBullets3.scale=1/3
        gunBullets3Group.add(gunBullets3)
      
     
       },4000)
   }
      
      
  
}






function spawnGuns4gun(){



  if(frameCount%600===0){


    var gun4=createSprite(15000,110,100,20)
    gun4.y=ground2.y
    gun4.x=ground2.x


    gun4.addImage(enemyMachineGun)
    gun4.lifetime=300
    gun4.velocityX=-10


    gun4.scale=1/2


   setInterval(()=>{



    gunBullets4=createSprite(gun4.x-20,gun4.y-30,10,5)
    gunBullets4.velocityX=-30
    gunBullets4.lifetime=130


    gunBullets4.addImage(enemyMachineGunBulletsImage)
    gunBullets4.scale=1/3
    console.log("inside set interval of spawn guns 2")



   },1000)



  }



}




function spawnGuns4(){



  if(frameCount%600===0){


    gun4=createSprite(15000,110,100,20)
    gun4.y=brick4.y
    gun4.x=brick4.x


    gun4.addImage(enemyMachineGun)
    gun4.lifetime=300
    gun4.velocityX=-10


    gun4.scale=1/2


   setInterval(()=>{



    gunBullets4=createSprite(gun4.x-20,gun4.y-30,10,5)
    gunBullets4.velocityX=-30
    gunBullets4.lifetime=130



    gunBullets4.addImage(enemyMachineGunBulletsImage)
    gunBullets4.scale=1/3
    console.log("inside set interval of spawn guns 2")



   },1000)



    
  }




}


 
