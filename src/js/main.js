import $ from 'jquery'

$(document).ready(function(){
  
      // let s = $('.list_second li a')[3].attr("data-secret");
      // console.log(s)
      

   const square = $("#square");
   const btn = $("#btn");
   

   btn.click(()=>{
      square.toggleClass('square-soft');
   })
   

   square.mouseenter(function(){
      $(this).css({
         'background-color':'#000',
         'border-radius':'40px'
      });

      btn.css({
         'width':'200px'
      });
   })

   square.mouseleave(function(){
      $(this).css({
         'background-color':'red',
         'border-radius':'40px'
      });

      btn.css({
         'width':'initial'
      });
   })
  
     
      
     

});

