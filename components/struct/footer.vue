<template>
    <footer>
       <nav class="menu">
           <li class="menu-item ">
               <a href="#">Strona główna</a>
           </li>
           <li class="menu-item ">
               <a href="#">Usługi</a>
           </li>
           <li class="menu-item ">
               <a href="#">O mnie</a>
           </li>
           <li class="menu-item ">
               <a href="#">Portfolio</a>
           </li>
           <li class="menu-item ">
               <a href="#">Kontakt</a>
           </li>
       </nav>
       <div class="contact-button">
           <a href="#">+48 535 558 333</a>
       </div>
    </footer>
    <div class="copy">
         <a href="https://ziubinski.pl" title="Tworzenie Stron Internetowych"> &copy Kacper Ziubiński</a>
    </div>
</template>

<style scoped>
footer{
   background-color: black;
   padding: 2rem 5rem;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: space-around;
   position: sticky;
}
nav.menu{
   display: flex;
   padding: 0;
   margin: 0;
}
.sub-menu{
   position: absolute;
   background-color: black;
   padding: 20px;
   display: none;
}
.menu-item a{
   color: white;
   text-decoration: none;
   font-weight: 700;
   font-size: 16px;
}
.contact-button{
   position: relative;
}
.contact-button a{
   border: 1px solid white;
   padding: 10px;
   border-radius: 20px;
   text-decoration: none;
   color: white;
}
img{
   max-height: 75px;
   filter: brightness(0) invert(1);
}
.copy{
    background: black;
    color: white;
    text-align: center;
    padding: 1rem;
}
.copy a{
    color: white;
    text-decoration: none;
}
@media (max-width: 897px) {
    footer{
        flex-direction: column;
    }
    nav.menu{
        flex-direction: column;
        justify-content: space-between;
        text-align: center
    }
    .contact-button{
        margin-top: 20px;
    }
    .menu-item{
        margin-top: 20px;
    }
}
</style>