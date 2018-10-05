var mainNavItem = document.querySelector('.main-nav--active');
var allNavItems = document.querySelectorAll('header a');

// main menu toggle
// adding new class to an a element and removing it from the rest
for (var i = 0; i < allNavItems.length; i++) {
  allNavItems[i].addEventListener('click', function() {
    if (this.className !== 'main-nav--active') {
      allNavItems.forEach(function(elem) {
        elem.classList.remove('main-nav--active');
      });
      this.classList.add('main-nav--active');
    }
  });
}
