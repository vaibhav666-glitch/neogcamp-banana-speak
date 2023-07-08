var btnTranslate=document.querySelector("#btn-translate");
var txtInput=document.querySelector("#txt-input");
var outputDiv=document.querySelector("#output");
var serverUrl="https://api.funtranslations.com/translate/minion.json"


function getTranslationUrl(text){
    return serverUrl + "?" + "text=" + text
}
function errorHandler(error){
    console.log("error occured", error);
    alert("something wrong with server! try again after some time");
}
function clichHandler(){
    var inputText=txtInput.value;// taking input
     //calling server for processing
     fetch(getTranslationUrl(inputText))
     .then(response=>response.json())
     .then(json=>{outputDiv.innerText=json.contents.translated;})// output
     .catch(errorHandler)
};

btnTranslate.addEventListener("click", clichHandler)
