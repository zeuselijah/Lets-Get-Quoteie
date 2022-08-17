var url = "https://api.quotable.io/random";
const url2 ="https://picsum.photos/200/300";

const body = $('#mainBody')

$('document').ready(getQuote);


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
    const randomNum = Math.floor(Math.random() * 100);
  body.css('background-image', `url('${url2}?random=${randomNum}')`);
  body.css('background-repeat', 'no-repeat');
  body.css('background-size', 'cover');
};









   