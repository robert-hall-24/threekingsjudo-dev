window.onload = function () {
  const hamburgerBtn = document.getElementById('hamburger-btn')
  const mobileMenu = document.getElementById('mobile-menu-2')

  if (hamburgerBtn && mobileMenu) {
    hamburgerBtn.addEventListener('click', function () {
      mobileMenu.classList.toggle('hidden')
    })
  }
}
