var url = "https://api.quotable.io/random";





$("#quoteie").click(function(){
    $.ajax({
        dataType: 'json',
        url: url,
        success: function(data){
            console.log(data);
        }
    })
})












   