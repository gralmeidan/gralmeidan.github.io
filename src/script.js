function handleMobileNav() {
  const nav = document.getElementById('nav')
  console.log(nav.className.in)
  if(nav.style.display === 'flex'){
    nav.style.display = 'none'
  } else {
    nav.style.display = 'flex'
  }
}

window.onload = () => {
  document.getElementById('mobile-nav-btn').addEventListener('click', handleMobileNav)
}