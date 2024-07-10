<template>
     <header>
        <img src="~/assets/img/ziub.png" alt="">
        <nav class="menu">
            <li class="menu-item ">
                <a href="#">Strona główna</a>
            </li>
            <li class="menu-item ">
                <a href="#">Usługi</a>
                <ul class="sub-menu">
                    <li ><a href="#">Strony Internetowe</a></li>
                    <li><a href="#">Sklepy Internetowe</a></li>
                    <li><a href="#">Pozycjonowanie Stron</a></li>
                    <li><a href="#">Aplikacje Webowe</a></li>
                </ul>
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
            <a href="#">Zadzwoń</a>
        </div>
    </header>
</template>

<style scoped>
header{
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
</style>