
   
    window.onload = function (){
        var buton =document.getElementById('buttom');
        buton.style.opacity='1.5'
        var textarea = document.getElementById('letters');
        textarea.addEventListener('keyup',account);
        function newstwitter(){
            var storydiv = document.createElement('div')
            var hours = moment().format('LT');
            var text = document.getElementById('letters').value;
            var story=document.getElementById('story')
            document.body.appendChild(storydiv);
            storydiv.style.background='white';
            storydiv.style.margin='50px 20px'
            storydiv.style.padding='20px'
            storydiv.style.borderRadius='5px'
            storydiv.innerHTML= text + '\n'+ hours;
        }
        function account(){
            var max = 140
            var rest =''
            var letters = document.getElementById('letters').value.length;
            rest = max-letters;
            document.getElementById('number').value = rest
            number.innerHTML=rest
            var buton =document.getElementById('buttom')
            if(letters.value===0){
                buton.disabled = true;
            } else if(number.value<0){
                buton.disabled = true;
            } else if(number.value < 10){
                number.style.color= 'red' ;
            } else if(20>number.value && number.value>=10){
                number.style.color= 'green';
            } else{
                number.style.color= 'black';
            }
                buton.addEventListener('click',newstwitter)
            };   
        function resize(){
            textarea.style.overflow='hidden'
            textarea.style.height= (textarea.scrollHeight)+'px'
        } 
            textarea.addEventListener('keyup',resize);      
    }
        

    
    
    
   

/*function caracteres(){
    var max = new Number();
    max = 140;
    var text = document.getElementById('letters').value.length;
    var valor = new Number();
    valor = valor - text;
if (valor > 0){
    if(valor == 1){valor=0}
    document.getElementById('number').innerHTML = valor ;
    document.getElementById('buttom').disabled='';
} else {
    document.getElementById('buttom').disabled = 'disabled';
    document.getElementById('number').style.color = 'red'
}
text.addEventListener('keypress',caracteres);
};
var time =document.getElementById('time')
    var moment = new Date();
    var hour = moment.getHours();
    var minutes = moment.getMinutes(),
    ampm =''
    if(hour>= 12){
        hour = hour-12;
        ampm = 'pm'
    } else {
        ampm = 'am'
    }

    var printhours = hour +':'+ minutes;
    time = printhours



*/
    


    
