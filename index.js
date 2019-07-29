var one = $(".one");
var two = $(".two");
var three = $(".three");
var four = $(".four");
var five = $(".five");
var yi = $(".yi");
var er = $(".er");
var san = $(".san");
var si = $(".si");
var wu = $(".wu");
var text = $(".text");

one.on("click", first);
two.on("click", second);
three.on("click", third);
four.on("click", fourth);
five.on("click", fifth);

one.on("mouseover", first);
two.on("mouseover", second);
three.on("mouseover", third);
four.on("mouseover", fourth);
five.on("mouseover", fifth);


function first(event){
  event.preventDefault();
  yi.text("★");
  er.text("☆");
  san.text("☆");
  si.text("☆");
  wu.text("☆");
  text.text("Aww, you'll have a better day tomorrow!");
}

function second(event){
  event.preventDefault();
  yi.text("★");
  er.text("★");
  san.text("☆");
  si.text("☆");
  wu.text("☆");
  text.text("Don't be sad, you'll feel better after coffee.")
}

function third(event){
  event.preventDefault();
  yi.text("★");
  er.text("★");
  san.text("★");
  si.text("☆");
  wu.text("☆");
  text.text("You should go out in the sun today!")
}

function fourth(event){
  event.preventDefault();
  yi.text("★");
  er.text("★");
  san.text("★");
  si.text("★");
  wu.text("☆");
  text.text("You're having a blast! Let's go!")
}

function fifth(event){
  event.preventDefault();
  yi.text("★");
  er.text("★");
  san.text("★");
  si.text("★");
  wu.text("★");
  text.text("You're having the time of your life! Keep doing your thing, girl!")
}
