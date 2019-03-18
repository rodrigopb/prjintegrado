// This is a JavaScript file

$(document).on("click","#btncalc",function(){
var peso=$("#peso").val();
var altura=$('#altura').val();
var idade=$('#idade').val();
var ativ=$('#atividade').val();
var sexo=$('#sexo').val();

if(ativ=="Sedentários"){
  var atividade = 1.2;
}
else if(ativ=="Levemente ativo"){
  var atividade = 1.375;
}
else if(ativ=="Moderadamente ativo"){
  var atividade = 1.55;
}
else if(ativ=="Altamente ativo"){
  var atividade = 1.725;
}
else if(ativ=="Extremamente ativo"){
  var atividade = 1.9;
}


if(sexo=="Masculino"){
  //atividade * {66 + [(13,7 * peso) + ( 5 * altura) - (6,8 * idade)]}
  var calculo1 = ((13.7 * peso) + ( 5 * altura) - (6.8 * idade));
  var mb = atividade * (66 + calculo1);
}
else if(sexo=="Feminino"){
  //Taxa de atividade x {655 + [(9,6 x Peso(kg)) + (1,8 x Altura(cm)) - (4,7 x Idade(anos))]}
  var calculo1 = ((9.6 * peso) + (1.8 * altura) - (4.7 * idade));
  var mb = atividade * (655 + calculo1);
}

$("#resultado").val(mb);


});