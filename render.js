const h1 = document.querySelector('h1')

h1.addEventListener('click', () => {
  let n = parseInt(h1.innerText, 10)
  n++
  h1.innerText = n
})
