var url = "https://api.quotable.io/random";
const url2 ="https://picsum.photos/200/300?random=1";




$("#quoteie").click(function(){
    // $.ajax({
    //     dataType: 'json',
    //     url: url,
    //     success: function(data){
    //         console.log(data);
    //         document.getElementById("quoteText").innerHTML = data['content'];
    //         document.getElementById("arthur").innerHTML = data['author'];
    //     }
    // })
    $.ajax({
        dataType: 'json',
        url: url2,
        success: function(data2){
            console.log(data2);
        }
    })
})












   