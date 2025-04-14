const menu = document.querySelector('.menu');
const navMenu = document.querySelector('.nav-menu');
const menuItems = document.querySelectorAll('.nav-menu a'); // Seleciona os links dentro do menu

menu.addEventListener('click', () => {
    menu.classList.toggle('ativo');
    navMenu.classList.toggle('ativo');

    
    if (navMenu.classList.contains('ativo')) {
        document.body.style.overflow = 'hidden';
    } else {
        document.body.style.overflow = ''; 
    }
});

// Fecha o menu ao clicar em um item do menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('ativo');
        navMenu.classList.remove('ativo');
        document.body.style.overflow = ''; // Restaura o scroll
    });
});

// Adiciona um evento de clique para cada item do menu
menuItems.forEach(item => {
    item.addEventListener('click', () => {
        menu.classList.remove('ativo'); // Remove a classe "ativo" do menu
        navMenu.classList.remove('ativo'); // Remove a classe "ativo" do nav-menu
    });
});


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    let button = document.getElementById("backToTop");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        button.style.display = "block";
    } else {
        button.style.display = "none";
    }
}

document.getElementById('backToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});