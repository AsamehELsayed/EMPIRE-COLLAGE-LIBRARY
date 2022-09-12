var courses=[{
    name:"micro",
    link:"courses/courseOne.html",
    img:"img/unknown_person.jpg"},{
    name:"accounting",
    link:"courses/courseTwo.html",
    img:"img/unknown_person.jpg"
    },{
    name:"pure math",
    link:"courses/courseThree.html",
    img:"img/unknown_person.jpg"
    },{
    name:"mangment",
    link:"courses/courseFour.html",
    img:"img/unknown_person.jpg"
    },{
    name:"political",
    link:"courses/courseFive.html",
    img:"img/unknown_person.jpg"
    },{
    name:"english",
    link:"courses/courseSix.html",
    img:"img/unknown_person.jpg"
    }
]
for(var i=0;i<=courses.length-1;i++){
var MyMain=document.getElementById("mainSection");
var MyCard=document.createElement("div");
MyCard.setAttribute("class","parts text-center col-md-4 mb-5");
MyCard.setAttribute("id","cards");
var MyImg=document.createElement("img");
MyImg.setAttribute("src",courses[i].img);
MyImg.setAttribute("class","imgs rounded-circle");
var MyParagraph=document.createElement("p");
var MyName=document.createTextNode(courses[i].name);
var br=document.createElement("br");
var myButton=document.createElement("a");
myButton.setAttribute("class","btn btn-outline-warning")
myButton.setAttribute("href",(courses[i].link))
myButton.setAttribute("target","_blank")
var myButtonText=document.createTextNode("DOWNLOAD")
MyMain.appendChild(MyCard);
MyCard.appendChild(MyImg);
MyCard.appendChild(br);
MyCard.appendChild(MyParagraph)
MyParagraph.appendChild(MyName)
MyCard.appendChild(myButton)
myButton.appendChild(myButtonText)
}