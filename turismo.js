function id( el ){
  return document.getElementById( el );
}
window.onload = function(){
  id('mais').onclick = function(){
          id('format').value = parseInt( id('format').value )+1;
          
          id('total').value = 20*id('format').value;
  }
  id('menos').onclick = function(){
          if( id('format').value>0 )
                  id('format').value = parseInt( id('format').value )-1;
          
          id('total').value = 20*id('format').value;

          
  }
  id('mais1').onclick = function(){
          id('format1').value = parseInt( id('format1').value )+1;
          
          id('total1').value = 20*id('format1').value;
  }
  id('menos1').onclick = function(){
          if( id('format1').value>0 )
                  id('format1').value = parseInt( id('format1').value )-1;
          
          id('total1').value = 20*id('format1').value;

          
  }
  id('mais2').onclick = function(){
          id('format2').value = parseInt( id('format2').value )+1;
          
          id('total2').value = 20*id('format2').value;
  }
  id('menos2').onclick = function(){
          if( id('format2').value>0 )
                  id('format2').value = parseInt( id('format2').value )-1;
          
          id('total2').value = 20*id('format2').value;

          
  }
}   

$(function () {
  $("#calendario").datepicker({
      showOn: "button",
      buttonImage: "imagens embank/calendario.png",
      buttonImageOnly: true,
      numberOfMonths: 2,
      showOtherMonths: true,
      selectOtherMonths: true,
      showButtonPanel: true,
      changeMonth: true,
      changeYear: true,
      showOtherMonths: true,
      selectOtherMonths: true,
      dateFormat: 'dd/mm/yy',
      dayNames: ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado', 'Domingo'],
      dayNamesMin: ['D', 'S', 'T', 'Q', 'Q', 'S', 'S', 'D'],
      dayNamesShort: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'],
      monthNames: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
      monthNamesShort: ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez']
  });
});


//function botaoMais() {
 //   let botao = new botaoMais();
 //   let bootaoMais = 0;
 //   const value =i;
 //   let receber = 0 ;
    
 //   if( bootaoMais =>  1 ){
 //   for (let bootaoMais = 1; value <=20; value++){
 //       console.log(botaoMais, i++);
 //   }
//}
  
 //   }