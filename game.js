class Game{
constructor(){

}


    start(){

        form = new Form();
        form.display();

            

        bird=createSprite(100, 100, 50, 50);
        bird.addAnimation('ani',ab_animation)
        bird.scale = 0.2
        

        
        
    }
    handleElements() {
        form.hide();
       // form.titleImg.position(40, 50);
      // form.titleImg.class("gameTitleAfterEffect");
      }

    play(){
        this.handleElements()
        drawSprites();
        if(keyIsDown(UP_ARROW)){
            bird.velocityY -=5
            }
            
            //adding gravity to the bird
            bird.velocityY +=0.9
      
                this.showClouds();
                this.showWitch();
                  
 

       // witch = createSprite()
        

    }

    showClouds(){
        if(frameCount % 30 === 0  ){
            cloud = createSprite(600,100,40,10)
            cloud.velocityX= -6
            cloud.addImage("cloud",cloud_img)
            cloud.scale= 0.5
            cloud.y =Math.round(random(10, 120 ))
          
            
        
            // cloud.lifetime = 200;
        }
    }
   showWitch(){
    if(frameCount % 100=== 0  ){
        witch = createSprite(700,500,40,10)
        witch.velocityX= -3
        witch.addImage("a",witch_img)
        witch.scale= 0.5
        witch.y =Math.round(random(130, 700))
      
        
    
        cloud.lifetime = 200;
    }
}}