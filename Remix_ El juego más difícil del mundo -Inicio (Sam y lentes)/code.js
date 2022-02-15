var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["2a53f642-62a6-4fc2-bb2d-a0b8f2d83191","446ec0e5-4548-4d6b-9272-d69281b2c961","257ba80b-fcde-455c-ba6f-bd9be77147f9","2b83c5ad-cce0-41d7-91d5-2421ea136449","0a67150d-a7b9-4f8b-952a-e3ea486528ae"],"propsByKey":{"2a53f642-62a6-4fc2-bb2d-a0b8f2d83191":{"name":"beto","sourceUrl":null,"frameSize":{"x":15,"y":42},"frameCount":1,"looping":true,"frameDelay":12,"version":"JpUn3lxeBobvHArwqSaLdMI44J78rqzm","categories":["people"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":42},"rootRelativePath":"assets/2a53f642-62a6-4fc2-bb2d-a0b8f2d83191.png"},"446ec0e5-4548-4d6b-9272-d69281b2c961":{"name":"1","sourceUrl":null,"frameSize":{"x":15,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"RVYnYIxCGpsxe1UYQiPnKBEz0ytqPMEF","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":28},"rootRelativePath":"assets/446ec0e5-4548-4d6b-9272-d69281b2c961.png"},"257ba80b-fcde-455c-ba6f-bd9be77147f9":{"name":"2","sourceUrl":null,"frameSize":{"x":15,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"XHWI77Gg4V6LCfeD1PuJY0JHZpwSRRWY","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":28},"rootRelativePath":"assets/257ba80b-fcde-455c-ba6f-bd9be77147f9.png"},"2b83c5ad-cce0-41d7-91d5-2421ea136449":{"name":"3","sourceUrl":null,"frameSize":{"x":15,"y":28},"frameCount":1,"looping":true,"frameDelay":12,"version":"DuFXYin_ae6xpv.OAfEcT_H6G2MJxex4","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":15,"y":28},"rootRelativePath":"assets/2b83c5ad-cce0-41d7-91d5-2421ea136449.png"},"0a67150d-a7b9-4f8b-952a-e3ea486528ae":{"name":"4","sourceUrl":null,"frameSize":{"x":15,"y":27},"frameCount":5,"looping":true,"frameDelay":12,"version":"w0y4Z0MqRVK4fQJlxyva_MGKYXv0Vpn4","categories":["vehicles"],"loadedFromSource":true,"saved":true,"sourceSize":{"x":45,"y":54},"rootRelativePath":"assets/0a67150d-a7b9-4f8b-952a-e3ea486528ae.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var life = 0;
var car1, car2, car3,car4;
var boundary1, boundary2;
var sam;



  boundary1 = createSprite(190,120,420,3);
  boundary2 = createSprite(190,260,420,3);
  
  
  sam = createSprite(20,190,13,13);
  sam.shapeColor = "green";
  
  sam.setAnimation("beto");
 
  
  car1 = createSprite(100,130,10,10);
  car1.shapeColor = "red";
  car2 = createSprite(215,130,10,10);
  car2.shapeColor = "red";
  car3 = createSprite(165,250,10,10);
  car3.shapeColor = "red";
  car4 = createSprite(270,250,10,10);
  car4.shapeColor = "red";
  
  car1.setAnimation("1");
  car2.setAnimation("2");
  car3.setAnimation("3");
  car4.setAnimation("4");
  
  
//Agrega velocidad  para hacer que el auto se mueva.

car1.velocityY=7;
car2.velocityY=7;
car3.velocityY=7;
car4.velocityY=7;

function draw() {
   background("white");
   fill("green");
  textSize(20);
  
  text("Lives: " + life,200,100);
  strokeWeight(0);
  fill("lightblue");
  rect(0,120,52,140);
  fill("yellow");
  rect(345,120,52,140);
  
// Crea la función bounceoff para hacer que el auto rebote en los límites.
createEdgeSprites();
car1.bounceOff( boundary1);
car1.bounceOff( boundary2);

car2.bounceOff( boundary1);
car2.bounceOff( boundary2);

car3.bounceOff( boundary1);
car3.bounceOff( boundary2);

car4.bounceOff( boundary1);
car4.bounceOff( boundary2);

sam.bounceOff( boundary1);
sam.bounceOff( boundary2);

//Agregar la condición para hacer que Sam se mueva de izquiera a derecha.
if (keyDown("UP_ARROW")) {
  sam.y=sam. y-3;
}
if (keyDown("DOWN_ARROW")) {
  sam.y=sam.y+3;
}
if (keyDown("LEFT_ARROW")) {
  sam.x=sam.x-3;
}
if (keyDown("RIGHT_ARROW")) {
  sam.x=sam.x+3;
}


//Agregar la condición de reducir la vida de Sam si toca el carro.
if (sam.isTouching(car1)||sam.isTouching(car2)||sam.isTouching(car3)||sam.isTouching(car4)) {
  life=life-1;
  sam.x=20;
  sam.y=180;
}


  
 drawSprites();
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
