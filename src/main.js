function showFirstScreen(Mood){
 
  document.getElementById(Mood).style.display = "block";
   document.getElementById("howYouFeel").style.display = "none";
   document.getElementById("showMovies").style.display = "block";
}
document.getElementById("btnSmile").addEventListener('click',()=>{showFirstScreen("movieCardsSmile")});
document.getElementById("btnSquint").addEventListener('click',()=>{showFirstScreen("movieCardsBored")});
document.getElementById("btnSad").addEventListener('click',()=>{showFirstScreen("movieCardsSad")});

//Esta funcion solo oculta el contenido principal para mostrar el siguiente, responde a los tres botones que tenemos y muestra la data que corresponde a cada uno.

function goBack(){
  document.getElementById("showMovies").style.display = 'none';
  document.getElementById("howYouFeel").style.display = 'block';
}
document.getElementById("btnBack").addEventListener('click',goBack);

//Esta funcion responde al boton "volver" para regresar a la pantalla inicial.
