
$(function(){
  // (document).ready
  var direction;
  var blink;
  var one_color;
  var change = "blue";
  var i = "start";
  var run;
  var lights = $(".lamp");
  function lightOpacity(){
    var light_opacity = +lights.css("opacity");
    if(light_opacity == 0.1){
      direction = 'up';
    }else if(light_opacity == 1){
      direction = 'down';
    }
    if(direction == "up"){
      lights.css("opacity", light_opacity + 0.05);
    }else{
      lights.css("opacity", light_opacity - 0.05);
    }
  }
  function oneColor(){
    if(change == "blue"){
      lights.not(".green").removeClass("in-active");
      lights.not(".blue").addClass("in-active");
      change = "red";
    }else if(change == "red"){
      lights.not(".blue").removeClass("in-active");
      lights.not(".red").addClass("in-active");
      change = "green";
    }else if(change == "green"){
      lights.not(".red").removeClass("in-active");
      lights.not(".green").addClass("in-active");
      change = "blue";
    }
  }

  $("#light-change").click(function(){
    blink = setInterval(lightOpacity, 100);
  })
  
  $("#run").click(function(){

  })

  $("#one-color").click(function(){
    clearInterval(one_color);
    one_color = setInterval(oneColor, 100);
  })

})
