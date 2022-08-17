var url = "https://api.quotable.io/random";
const url2 ="https://picsum.photos/200/300";


$(document).ready(getQuote);


$("#quoteie").click(getQuote);

function getQuote(){
    $.ajax({
        dataType: 'json',
        url: url,
        success: function(data){
            console.log(data);
            $("#quoteText").html(data['content']);
            $("#arthur").html(data['author']);
            changeBackgroundImage();  
        }
    })
};

function changeBackgroundImage(){
    document.body.style.backgroundImage = "url('https://picsum.photos/200/300?random=1')";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "100%";
    console.log("background");
}









   