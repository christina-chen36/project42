var iss, spaceCraft;
var hasDocked = false;
var backgroundImg,
  issImg,
  spaceCraftImg,
  leftCraftImg,
  rightCraftImg,
  bothCraftImg;

function preload() {
  backgroundImg = loadImage("images/spacebg.jpg");
  issImg = loadImage("images/iss.png");
  leftCraftImg = loadImage("images/spaceCraft3.png");
  rightCraftImg = loadImage("images/spaceCraft4.png");
  bothCraftImg = loadImage("images/spaceCraft2.png");
  spaceCraftImg = loadImage("images/spacecraft1.png");
}

function setup() {
  createCanvas(800, 400);

  iss = createSprite(200, 200, 20, 20);
  iss.addImage(issImg);
  iss.scale = 0.5;

  spaceCraft = createSprite(400, 200, 20, 20);
  spaceCraft.addImage(spaceCraftImg);
  spaceCraft.scale = 0.3;

  spaceCraft.x = Math.round(random(0, 800));
}

function draw() {
  background(backgroundImg);

  if (!hasDocked) {
    if (keyDown("LEFT_ARROW")) {
      spaceCraft.addImage(leftCraftImg);
      spaceCraft.x -= 10;
    }
    if (keyDown("RIGHT_ARROW")) {
      spaceCraft.addImage(rightCraftImg);
      spaceCraft.x += 10;
    }
    if (keyDown("DOWN_ARROW")) {
      spaceCraft.addImage(spaceCraftImg);
      spaceCraft.y += 10;
    }
    if (keyDown("UP_ARROW")) {
      spaceCraft.addImage(bothCraftImg);
      spaceCraft.y -= 10;
    }

    if (
      spaceCraft.x < 190 &&
      spaceCraft.x > 140 &&
      spaceCraft.y > 240 &&
      spaceCraft.y < 320
    ) {
      hasDocked = true;
    }
  }
  if (hasDocked == true) {
    fill("green");
    text("Docking Successful!", 400, 200);
  }
  drawSprites();
}
