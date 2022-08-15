var rows=document.getElementById("rows");
var allData=[];
async function getData(){
  var response=await fetch('https://www.mp3quran.net/api/radio/radio_ar.json');
  var data= await response.json();
  allData=data.Radios;
  console.log(data.Radios);
  display()
}
getData();
function display() {
  var cartona = "";
  for (var i = 0; i < 153; i++) {
    cartona += ` 
      <div class="col-md-3">
      <div class="desc mt-5">
      <p>${allData[i].Name}</p>
      <audio controls src="${allData[i].URL}"></audio>
      </div>
     </div>
      `;
  }
  document.getElementById("rows").innerHTML = cartona;
}
$(window).scroll(function(){
  let current=$(window).scrollTop();
  if(current>100){
    $(".m-1").css({"display":"none","transition":"all 1s"})
  }
  else{
    $(".m-1").css("display","flex")
  }
});
var inputSearch=document.getElementById("inputS");
inputSearch.onkeyup=function(){
  var cartona = "";
  var val = inputSearch.value;
  for (var i = 0; i < 153; i++) {
    if (allData[i].Name.includes(val)) {
      cartona += `
      <div class="col-md-3">
      <div class="desc mt-5">
      <p>${allData[i].Name}</p>
      <audio controls src="${allData[i].URL}"></audio>
      </div>
     </div>
          `;
    }
    
  }document.getElementById("rows").innerHTML = cartona;
};

$(document).ready(function(){
  $(".section-loading").fadeOut(3000,function(){
    $("body").css("overflow","auto")
  })
})