let botonSend=document.getElementById("botonSend")
let textoChat=document.getElementById("textoChat")
let mensajeChat=document.getElementById("mensajeChat")

let preguntas=[
    "¿Cual es tu nombre?",
    "¿Cuantos años tienes?",
    "¿De que país eres?",
    "¿Cuál es tu pelicula favorito?",
    "¿tienes mascotas?",
    "¿Qué tipo de animales te gustan mas?",
    "¿Qué tipo de música te gusta escuchar?",
    "¿Cuál es tu hobby favorito?",
    "¿Cuál es tu trabajo actual?",
    "¿Cuál es tu pasión?"
]

let respuestas=[
    "Mi nombre es Jenni",
    "tengo 28 años",
    "Argentina",
    "La Pulga",
    "Si",
    "Perros",
    "Rock",
    "Leer",
    "Desarrollador web",
    "Viajar"

]

let indicePregntas=[]


//funcion para detectar el inicip y desarrollo de la conversación

function procesarEntradaChat(){
    let escribeUsuario=textoChat.value.toLowerCase()
    textoChat.value=""
    if(escribeUsuario=="hola"){
        let listaPreguntas=preguntas.map((pregunta,index)=>`${index+1}. ${pregunta}`).join("<br>")
        mensajeChat.innerHTML+=`<p class="Text-start"> Hola bienvenido </b> ${listaPreguntas}</p>`
    }else{
        let numeroPregunta=parseInt(escribeUsuario)-1
        if(numeroPregunta>=0 && numeroPregunta<preguntas.length){
            mensajeChat.innerHTML+=`<p class="Text-start">  </b> ${preguntas[numeroPregunta]}</p>` 
            mensajeChat.innerHTML+=`<p class="Text-end">  </b> ${respuestas[numeroPregunta]}</p>` 
        }
    }
}

// rutina para activar el chatbot
botonSend.addEventListener("click",procesarEntradaChat)

textoChat.addEventListener("keypress",function(evento){
    if(evento.key=="Enter"){
        evento.preventDefault()
        procesarEntradaChat()

    }
})