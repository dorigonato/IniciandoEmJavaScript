// const post1 = document.getElementById('post01')
// console.log(post1)

// const posts = document.getElementsByClassName('lista_redes')
// console.log(posts)

// const h1 = document.querySelector('h1')
// console.log(h1)

// const primeiro_h2 = document.querySelector('h2')
// console.log(primeiro_h2)

// const all_h2 = document.querySelectorAll('h2')
// console.log(all_h2)

// const post01 = document.querySelector('#post01')
// console.log(post01)

// const posts = document.querySelectorAll('.post')
// console.log(posts)

// const a = document.querySelector('section .post-texto a')
// console.log(a.innerText)

// const negrito = document.querySelector('section .post-texto strong')
// console.log(negrito)

// const autor = document.querySelectorAll('section .post .post-autor')
// console.log(autor)

const redes = document.querySelectorAll('footer .lista_redes a')
console.log(redes[0].innerText)
console.log(redes[1].innerText)
console.log(redes[2].innerText)

function imprimirTodos(lista){
     for(let i = 0; i < redes.length; i++){
         console.log(redes[i].innerText)
     }
 }
 imprimirTodos(redes)