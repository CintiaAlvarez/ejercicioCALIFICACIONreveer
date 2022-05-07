let input1 = document.getElementById("input1");
let input2 = document.getElementById("input2");
let btnEnv = document.getElementById("btnEnviar");
let practica : number = 0;
let problemas : number = 0;
let teoria : number = 0;

let btnEnviar = document.getElementById ("Enviar");
let rotulo1 = document.getElementById ("rotulo1");
let rotulo2 = document.getElementById ("rotulo2");

rotulo1.innerHTML = "Ingrese alumno";
rotulo2.innerHTML = "Ingrese calificaciones";

btnEnv.addEventListener("click" , () =>{
   
  let alumno: string = input1;
   let nota: number = Number(input2.value);

   while(alumno != ""){

   if(nota >= 0 && nota <== 10){
   // console.log ("");
   
   practica = (nota * 0.10)*10;
   problemas = (nota * 0.50)*10;
   teoria = (nota * 0.40)*10;
