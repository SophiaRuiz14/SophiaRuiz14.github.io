$(function () {
// initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
     toggleGrid();


    // TODO 2 - Create Platforms
      createPlatform(400, 620, 200, 20, "pink");
      createPlatform(100, 500, 200, 20, "pink");  
      createPlatform(800, 350, 20, 100, "pink");
      createPlatform(1300, 500, 200, 20, "pink");
      createPlatform(1300, 630, 200, 20, "pink");
      createPlatform(1300, 370, 200, 20, "pink");
      createPlatform(1300, 235, 200, 20, "pink");
      createPlatform(400, 380, 200, 20, "pink");
      createPlatform(600, 260, 100, 20, "pink");
      createPlatform(100, 100, 20, 500, "pink");
      createPlatform(1190, 230, 20, 400, "pink");
      createPlatform(1000, 600, 200, 30, "pink");
      createPlatform(990, 100, 20, 530, "pink");
      createPlatform(1100, 300, 100, 20, "pink");
      createPlatform(1000, 420, 100, 20, "pink");
     
      


    // TODO 3 - Create Collectables
      createCollectable("diamond", 789, 210, 0.5, 0.7)
      createCollectable("steve", 1330, 190, 0.5, 0.7)
      createCollectable("grace", 1080, 560, 0.5, 0.7)


    
    // TODO 4 - Create Cannons
      createCannon("top", 650, 600);
      createCannon("left", 390, 1100);
      createCannon("top", 1250, 2000)

    
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //
    //////////////////////////////////
  }

  registerSetup(setup);
});
