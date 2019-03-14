function showFirstScreen(){
   document.getElementById("howYouFeel").style.display = "none";
   document.getElementById("showMovies").style.display = "block";
}
document.getElementById("btnSmile").addEventListener('click',showFirstScreen);
document.getElementById("btnSquint").addEventListener('click',showFirstScreen);
document.getElementById("btnSad").addEventListener('click',showFirstScreen);

//Esta funcion solo oculta el contenido principal para mostrar el siguiente.
