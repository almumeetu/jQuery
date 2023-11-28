// document.querySelector("h1").innerHTML="Hello I'm Saikat";

// $("h1").text("Good Bye");


// Selector and text Manipulation


// .text("");

// $("h1").text("Hello, Change heading text outside a div. ");

//  $(".my-div h1").text("Hello, Change heading text inside a div.");

// $("#p1").text("Hello, Change paragraph text outside a div.");

// $("#p1,h1").text("Hello, Change All");


// .html("");
// $("#p1").html("<b>Hello, Change paragraph <br> text outside a div.</b>");

// .append("");
// $(".my-div h1").append(" hi");


// .prepend("");
// $("#p1").prepend(" hi");



// var mypara1 = $("<p> </p>").text("This is paragraph 0")

// after
// $("#p2").after(mypara1)

// before
// $("#p1").before(mypara1) 


// 1. html selector and text manipulation
// using js
//  document.querySelector("h2").innerHTML = "hello";

// using jquery for selecting and changing text
// $("h2").text("hello"); 

// $(".my-div h2").text("bye");

// we can select multiple elements
// $("#para1, h1").text("changed text of paragraph");

// $("#para1").html("<strong>hello i am strong paragraph</strong>");
// $("#para1").prepend("starting");
// $("#para1").append("ending");

// before, after for adding new elements
// var para2 = $("<p></p>").text("this is paragraph 2");
// $("#para1").after(para2);
// $("#para1").before(para2);

// 2. attribute manipulation using jquery
// var attributeValue = $("a").attr("href");
// console.log(attributeValue);

// $("a").attr("href", "https://www.studywithanis.com");
// $("a").removeAttr("target");

// 3. css manipulate
// $("h1").css("color", "tomato");

// $("h2").css({ color: "green", "font-style": "italic" });

// $("a").addClass("link-style");

// 4. event listener
// $(".mybtn").click(function () {
// var value = this.innerHTML;
// $("#result").text(value + " is selected");
// });

// $(".mybtn").mouseover(function () {
// var value = this.innerHTML;
// $("#result").text(value + " is overed by mouse");
// });

// 5. animation

// 6.
// $(".demo2").parent().css("background-color", "green");
// $(".my-div").children().css("color", "white");

// $("ol li:nth-child(2)").css("color", "green");
// $("ol li:nth-child(3)").css("color", "green");

// $("ol li:odd").css("color", "green");
// $("ol li:even").css("color", "green");

// $("body").addClass("animated hinge");

/*

  css()
  prop()
  remove()
  appendTo()
  clone().appendTo()
  parent().css()
  child().css()
  addClass()


*/

/* Moshiur jQuery Tutorial--*/

$(document).ready( function(){
  $('button').click(function(){
    $('h1').hide();
    
  })
});


$(document).ready(function () {

  $("p").dblclick(function () {
    $(this).hide();

  })
});


$(document).ready(function () {

  $("p").mouseleave(function () {
    $(this).hide();

  })
});

$(document).ready(function () {

  $("h1").mouseenter(function () {
    alert("Hello This Heading is hide");

  })
});

