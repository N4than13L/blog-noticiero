$(document).ready(function(){
     if (window.location.href.indexOf('index') > -1){
          $('.galeria').bxSlider({
               mode: 'fade',
               captions: true,
               slideWidth: 1200,
               responsive: true,
               pager: false
          });    
     }

     //post
     if (window.location.href.indexOf('index') > -1){

          var posts = [
               {
                    title: "Prueba de titulo 1",
                    date: 'publicado el ' + moment().date() + " " + moment().format('MMMM') + " " + moment().format("YYYY"),
                    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lorem sit amet libero accumsan, ac ultricies odio dignissim. In sit amet odio vel sem pretium mollis tempor nec lacus. Fusce ullamcorper sollicitudin mollis. Mauris at ultrices velit. Nam tempus at risus sed tempor. Cras non volutpat est, nec consectetur risus. Cras finibus feugiat pellentesque. Ut eros neque, commodo vitae sagittis et, fermentum eu mauris. Ut vehicula, lectus at molestie rutrum, lacus libero tempor odio, quis auctor quam lorem non nunc. Praesent iaculis faucibus nulla, eu maximus arcu mattis auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pretium ut nisl non rutrum. Sed rhoncus dui at elementum dignissim. Nam suscipit ut urna sed aliquam. Donec et mollis arcu.'
               
               },
               {
                    title: "Prueba de titulo 2",
                    date: 'publicado el ' + moment().date() + " " + moment().format('MMMM') + " " + moment().format("YYYY"),
                    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lorem sit amet libero accumsan, ac ultricies odio dignissim. In sit amet odio vel sem pretium mollis tempor nec lacus. Fusce ullamcorper sollicitudin mollis. Mauris at ultrices velit. Nam tempus at risus sed tempor. Cras non volutpat est, nec consectetur risus. Cras finibus feugiat pellentesque. Ut eros neque, commodo vitae sagittis et, fermentum eu mauris. Ut vehicula, lectus at molestie rutrum, lacus libero tempor odio, quis auctor quam lorem non nunc. Praesent iaculis faucibus nulla, eu maximus arcu mattis auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pretium ut nisl non rutrum. Sed rhoncus dui at elementum dignissim. Nam suscipit ut urna sed aliquam. Donec et mollis arcu.'
               },
               {
                    title: "Prueba de titulo 3",
                    date: 'publicado el ' + moment().date() + " " + moment().format('MMMM') + " " + moment().format("YYYY"),
                    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lorem sit amet libero accumsan, ac ultricies odio dignissim. In sit amet odio vel sem pretium mollis tempor nec lacus. Fusce ullamcorper sollicitudin mollis. Mauris at ultrices velit. Nam tempus at risus sed tempor. Cras non volutpat est, nec consectetur risus. Cras finibus feugiat pellentesque. Ut eros neque, commodo vitae sagittis et, fermentum eu mauris. Ut vehicula, lectus at molestie rutrum, lacus libero tempor odio, quis auctor quam lorem non nunc. Praesent iaculis faucibus nulla, eu maximus arcu mattis auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pretium ut nisl non rutrum. Sed rhoncus dui at elementum dignissim. Nam suscipit ut urna sed aliquam. Donec et mollis arcu.'
               },
               {
                    title: "Prueba de titulo 4",
                    date: 'publicado el ' + moment().date() + " " + moment().format('MMMM') + " " + moment().format("YYYY"),
                    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lorem sit amet libero accumsan, ac ultricies odio dignissim. In sit amet odio vel sem pretium mollis tempor nec lacus. Fusce ullamcorper sollicitudin mollis. Mauris at ultrices velit. Nam tempus at risus sed tempor. Cras non volutpat est, nec consectetur risus. Cras finibus feugiat pellentesque. Ut eros neque, commodo vitae sagittis et, fermentum eu mauris. Ut vehicula, lectus at molestie rutrum, lacus libero tempor odio, quis auctor quam lorem non nunc. Praesent iaculis faucibus nulla, eu maximus arcu mattis auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pretium ut nisl non rutrum. Sed rhoncus dui at elementum dignissim. Nam suscipit ut urna sed aliquam. Donec et mollis arcu.'
               },
               {
                    title: "Prueba de titulo 5",
                    date: 'publicado el ' + moment().date() + " " + moment().format('MMMM') + " " + moment().format("YYYY"),
                    content: ' Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed maximus lorem sit amet libero accumsan, ac ultricies odio dignissim. In sit amet odio vel sem pretium mollis tempor nec lacus. Fusce ullamcorper sollicitudin mollis. Mauris at ultrices velit. Nam tempus at risus sed tempor. Cras non volutpat est, nec consectetur risus. Cras finibus feugiat pellentesque. Ut eros neque, commodo vitae sagittis et, fermentum eu mauris. Ut vehicula, lectus at molestie rutrum, lacus libero tempor odio, quis auctor quam lorem non nunc. Praesent iaculis faucibus nulla, eu maximus arcu mattis auctor. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nulla pretium ut nisl non rutrum. Sed rhoncus dui at elementum dignissim. Nam suscipit ut urna sed aliquam. Donec et mollis arcu.'
               }
          ];

          posts.forEach((item ,index) =>{
               var post = `
               <article class="post">
                    <h2>${item.title}</h2>
                         <span class="date">${item.date}</span>
                    <p>
                         ${item.content}
                    </p>
                    <a href="#" class="button-more">Leer Más</a>
               </article>
               `;

               // console.log(post);

               $("#posts").append(post);
          });
     }    
     // selector de temas.

     var theme = $("#theme");

     $("#to-green").click(function(){
          theme.attr("href", "css/green.css");
     });

     $("#to-red").click(function(){
          theme.attr("href", "css/red.css");
     });

     $("#to-blue").click(function(){
          theme.attr("href", "css/blue.css");
     });

     //scroll arriba de la web.

     $(".subir").click(function(e){

          e.preventDefault();

          $('html, body').animate({
               scrollTop: 0
          }, 500);

          return false;
     });

     //login falso

     $("#login form").submit(function(){
         var form_Name = $("#form_Name").val();
         localStorage.setItem("form_Name", form_Name);
     });

     var form_Name = localStorage.getItem("form_Name");

     if(form_Name != null && form_Name != "undefined"){
          var about_Parrafo = $("#about p");

          about_Parrafo.html("<br/><strong>Bienvenido, " + form_Name + "</strong> ");
          about_Parrafo.append("<a href='#' id='logout'> Cerrar sesion </a");
          $("#login").hide();

          $("#logout").click(function(){
               localStorage.clear();
               location.reload();
          });  

     }
     
     if (window.location.href.indexOf('about') > -1){
          $("#acordeon").accordion();
     }  
     
     if (window.location.href.indexOf('clock') > -1){
          setInterval(() => {
               var reloj = moment().format("hh:mm:ss");
               $("#reloj").html(reloj);
          }, 1000);
          
          
     }

});