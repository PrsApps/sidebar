const menuToggle = document.querySelector('.menuToggle')
const navigation = document.querySelector('.navigation')
const list = document.querySelectorAll('.list')

menuToggle.onclick = function(){
    navigation.classList.toggle('open')
}

function activeLink(){
    list.forEach((i) => 
    i.classList.remove('active'));
    this.classList.add('active');
}

list.forEach((i) => 
i.addEventListener('click', activeLink))