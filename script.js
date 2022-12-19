$(document).ready(function (){

$('#clear').click(function (){
   $('#display').text('0')
   $('#decimal').prop('disabled', false)
})

$('.num').click(function (){
     if($('#display').text()== "0"){
        $('#display').text("")
     }
      $('#display').append(this.value) 
   })

$('#decimal').click(function (){
   $('#display').append(this.value)
   $(this).prop('disabled', true)
   $('.oper').click(function (){
      $('#decimal').prop('disabled', false)
      $('#decimal').click(function (){
         $(this).prop('disabled', true)
      })
   })
}) 
// $('.oper').click(function (){
//    $('#display').append(this.value)
//    })
let answer = []
$('.oper').click(function(){
   $('#display').append(this.value)
   answer.push(this.value)
})

let negs = /[--]/;
let reggie = /\D{2,}/g;

$('#equals').click(function (){
if ($('#display').text().match(reggie) && answer[answer.length - 1] !== "-") {
   $('#display').text(eval($('#display').text().replace(reggie, answer[answer.length - 1])));
} else if (negs.test($('#display').text())) {
   $('#display').text(eval($('#display').text().replace('--', '+')));
} else {
   $('#display').text(eval($('#display').text()));
}


});
});

