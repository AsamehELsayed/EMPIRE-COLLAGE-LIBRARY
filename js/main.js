//events controller
var events=[
    //You can add more
{
img:"img/eventOne.jpg"
},{
img:"img/eventTwo.jpg"
},{
img:"img/EventThree.jpg"
}
]
//Courses
var Courses=[
//You can add more 
{
img:"img/doctorOne.jfif",
name:"DR-Mohamed",
subject:"ECO",
year:"One",
price:"100",
text:"some information like date and discounts ,etc"
},{
img:"img/doctorTwo.jfif",
name:"DR-Ahmed",
subject:"Accointing",
year:"One",
price:"100",
text:"some information like date and discounts ,etc"
},{
img:"img/doctorThree.jfif",
name:"DR-Sameh",
subject:"English",
year:"One",
price:"100",
text:"some information like date and discounts ,etc"
},{
img:"img/doctorFour.jfif",
name:"DR-Abdelrahman",
subject:"Mathmatics",
year:"One",
price:"1000",
text:"some information like date and discounts ,etc"
}
]
//News controller
var News=[
    //You can add more
{
img:"img/newsTwo.jpg"
},{
img:"img/newsOne.jpg"
},{
img:"img/newsThree.jpg"
}
]
//footer controller
var information={
    //You can not add more
phone:"tel:01270754106",
address:"address",
telegram: [
//You can add more
{ year: "English-One", telegramLink: "https://t.me/+T-Ff0_B5Rx1lM2Rk" },
{ year: "English-Two", telegramLink: "https://t.me/+T-Ff0_B5Rx1lM2Rk" },
{ year: "English-Three", telegramLink: "https://t.me/+T-Ff0_B5Rx1lM2Rk" },
{ year: "Arabic-One", telegramLink: "https://t.me/+T-Ff0_B5Rx1lM2Rk"}
]
}










function closeModal(){
  ModalScreen=document.getElementById("myModalFather");
  ModalScreen.classList.toggle("none");
}

























//courses code
var CoursesSlider=document.querySelector("#slidercontainerTwo")
for(var i=0;i<=Courses.length-1;i++){
var sliderCard=document.createElement("div");
var cardBody=document.createElement("div");
var cardImg=document.createElement("img")
var cardTitle=document.createElement("h5");
var cardSubject=document.createElement("h6")
var cardYear=document.createElement("h6")
var cardPrice=document.createElement("h6");
var cardText=document.createElement("p");
CoursesSlider.appendChild(sliderCard);
sliderCard.setAttribute("class","card cardBorder");
sliderCard.appendChild(cardImg);
cardImg.setAttribute("src",Courses[i].img);
cardImg.setAttribute("class","card-img")
sliderCard.appendChild(cardBody);
cardBody.setAttribute("class","card-body text-start");
cardBody.appendChild(cardTitle);
cardTitle.setAttribute("class","card-title");
cardTitle.innerText=Courses[i].name;
cardBody.appendChild(cardSubject)
cardSubject.innerText="Subject: "+Courses[i].subject
cardBody.appendChild(cardYear);
cardYear.innerText="Year: "+Courses[i].year
cardBody.appendChild(cardPrice); 
cardPrice.innerText="Price: "+Courses[i].price +" EGP";
cardBody.appendChild(cardText);
cardText.setAttribute("class","card-text");
cardText.innerText=Courses[i].text;
}






//warning :( لو لمستو اكلام دا الموقع كله هيبوظ //
//News code
var OwlSLiderFather=document.getElementById("slidercontainer");
for(var i=0;i<=News.length-1;i++){
var sliderImg=document.createElement("img");
OwlSLiderFather.appendChild(sliderImg);
sliderImg.setAttribute("src",News[i].img);
sliderImg.setAttribute("class","itemPhoto item img-fluid");
}
//carousel code
var carouselInner=document.getElementById("carousel-inner");
for(var i=0;i<=events.length-1;i++){
var carouselItem=document.createElement("div");
var carouselImg=document.createElement("img");
carouselInner.appendChild(carouselItem);
carouselItem.appendChild(carouselImg);
carouselItem.setAttribute("class","carousel-item");
carouselItem.setAttribute("data-bs-interval","3000")
var carouselItemActive=document.getElementsByClassName("carousel-item");
carouselItemActive[0].setAttribute("class","carousel-item active");
carouselImg.setAttribute("src",events[i].img);
carouselImg.setAttribute("class","d-block w-100 carouselImgs img-fluid");
}
//footer code
var informationDiv=document.getElementById("information");
var address=document.createElement("span");
var addressText=document.createTextNode(information.address);
var PhoneText=document.createTextNode("Click to call us");
var phone=document.createElement("a");
var br=document.createElement("br");
var telegramList=document.createElement("ul");
informationDiv.appendChild(phone);
phone.setAttribute("href",information.phone);
phone.appendChild(PhoneText);
phone.setAttribute("class","gold links");
informationDiv.appendChild(br);
informationDiv.appendChild(address);
address.appendChild(addressText);
address.setAttribute("class","mb-0");
informationDiv.appendChild(telegramList);
telegramList.setAttribute("class","telegram-list text-center");
for(var i=0;i<=information.telegram.length-1;i++){
var telegramListItem=document.createElement("li");
var telegramLinks=document.createElement("a");
telegramListItem.appendChild(telegramLinks);
telegramList.appendChild(telegramListItem);
var telegramText=document.createTextNode("Telegram Group: "+information.telegram[i].year);
telegramLinks.setAttribute("href",information.telegram[i].telegramLink);
telegramLinks.appendChild(telegramText);
telegramLinks.setAttribute("class","gold links");
}
//warning//