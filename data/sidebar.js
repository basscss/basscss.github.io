

export default sidebarScript = `
  var sidebar = document.querySelector('.SideBar');
  function debounce(func, wait) {
    var timeout;
    return function() {
      var context = this,
        args = arguments;
      var later = function() {
        timeout = null;
        func.apply(context, args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  };
  function setPosition(y) { localStorage.setItem('sidebarY', y) }
  function getPosition() { return localStorage.getItem('sidebarY') || 0 }
  sidebar.addEventListener('scroll', function(e) {
    var y = e.target.scrollTop;
    debounce(setPosition(y), 300);
  });
  sidebar.scrollTop = getPosition();
`

