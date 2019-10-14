$(function(){
//   alert("fffff");
    $('.myjsdemo .showaddcommentformlink').click(
      function(){
//             $(this).hide();
//             $('.myjsdemo .hideaddcommentformlink').show();
//             $('.myjsdemo .form').show();
            $('.bibtex').show();
	    return false;
        }
    );

    $('.showbibtex').click(
      function(){
            $('.showbibtex').hide();
            $('.hidebibtex').show();
//             $('.myjsdemo .form').show();
            $('.bibtex').show();
	    return false;
        }
    );
    
    $('.myjsdemo .hideaddcommentformlink').click(
      function(){
//             $(this).hide();
//             $('.myjsdemo .showaddcommentformlink').show();
            $('.hidebibtex').hide();
            $('.bibtex').hide();
            return false;
        }
    );

    $('.hidebibtex').click(
      function(){
            $('.hidebibtex').hide();
            $('.showbibtex').show();
            $('.bibtex').hide();
            return false;
        }
    );

});