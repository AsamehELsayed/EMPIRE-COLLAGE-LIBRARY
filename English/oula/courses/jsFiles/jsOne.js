var title=document.title="micro"
var parts=[{
    name:"part-1",
    pdf:"https://drive.google.com/file/d/1mDbEmsxpW0FCxoFRdLtpcut7L7rK4SBQ/view?usp=sharing",
    voice:"https://drive.google.com/file/d/1mDbEmsxpW0FCxoFRdLtpcut7L7rK4SBQ/view?usp=sharing",
    img:"img/unknown_person.jpg"}
]
  
for(let i=0;i<=parts.length-1;i++){
    MyMain=document.getElementById("mainSection");
    var MyCard=document.createElement("div");
    MyCard.setAttribute("class","users col-md-2 mb-5");
    MyCard.setAttribute("id","cards");
    var MyImg=document.createElement("img");
    MyImg.setAttribute("src",parts[i].img);
    MyImg.setAttribute("class","imgs rounded-circle");
    var MyParagraph=document.createElement("p");
    var MyName=document.createTextNode(parts[i].name);
    var br=document.createElement("br");
    var myPdfButton=document.createElement("a");
    myPdfButton.setAttribute("class","btn btn-outline-warning col-12")
    myPdfButton.setAttribute("href",`${parts[i].pdf}`)
    myPdfButton.setAttribute("target","blank")
    var myPdfButtonText=document.createTextNode(`Download pdf`)
    var myVoiceButton=document.createElement("a")
    myVoiceButton.setAttribute("class","btn mt-2 btn-outline-warning col-12")
    myVoiceButton.setAttribute("href",parts[i].pdf)
    myVoiceButton.setAttribute("target","blank")
    var myVoiceButtonText=document.createTextNode("Download voice")
    MyMain.appendChild(MyCard);
    MyCard.appendChild(MyImg);
    MyCard.appendChild(br);
    MyCard.appendChild(MyParagraph)
    MyParagraph.appendChild(MyName)
    MyCard.appendChild(myPdfButton)
    MyCard.appendChild(myVoiceButton)
    myPdfButton.appendChild(myPdfButtonText)
    myVoiceButton.appendChild(myVoiceButtonText)}