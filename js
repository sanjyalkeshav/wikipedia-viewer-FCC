//Making the input box larger than the placeholder
var input = document.querySelectorAll('input');
for(i=0; i<input.length; i++){
    input[i].setAttribute('size',input[i].getAttribute('placeholder').length);
} 



$(document).ready(function(){
                     //when search is click, run following code
  $('#search').click(function(){      
                   //Gets user's search input
  var searchTerm = $('#searchTerm').val();      
                  //API url with searchTerm
  var url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" +searchTerm + "&format=json&callback=?";
    
    
    $.ajax({
        type:"GET",
        url:url,
        async:false,
        dataType: "json",
        success: function(data){
        // heading  data[1][0]
        //description data[2][0]
        //link    data[3][0]
        
            $('#output').html(' ');
            for (var i=data.length+5; i>=0; --i){
              $('#output').prepend("<li><a href= " +data[3][i]+">"+data[1][i]+"</a><p>"+data[2][i]+"</p></li>");
                  }
             $('#searchTerm').val('');
                    },
      
          error: function(data){
              alert("Error");
                    }      
              });
            });
  //Makes it search if you press the enter key
     $('#searchTerm').keypress(function(e){
      if(e.which==13){
        $("#search").click();
                }     
          });
});



