const URL = "https://api.quotable.io/random";


function getData(){
    const response = $.ajax(URL)
response.then(function(data){
    console.log(data);
})
}