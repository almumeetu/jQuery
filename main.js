// document.querySelector("h1").innerHTML="Hello I'm Saikat";

// $("h1").text("Good Bye");


// Selector and text Manipulation


// .text("");

$("h1").text("Hello, Change heading text outside a div. ");

$(".my-div h1").text("Hello, Change heading text inside a div.");

$("#p1").text("Hello, Change paragraph text outside a div.");

// $("#p1,h1").text("Hello, Change All");


// .html("");
$("#p1").html("<b>Hello, Change paragraph <br> text outside a div.</b>");

// .append("");
$(".my-div h1").append(" hi");


// .prepend("");
$("#p1").prepend(" hi");



var mypara1 = $("<p> </p>").text("This is paragraph 0")

// after
$("#p2").after(mypara1)

// before
$("#p1").before(mypara1) 