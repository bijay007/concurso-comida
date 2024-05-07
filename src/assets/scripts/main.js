function goHome() {
    const homeNav = document.getElementsByClassName('nav-home')[0];
    if (homeNav) {
        homeNav.addEventListener('click', function() {
            window.location.href = '/';
        });
    }
}
function goToPage(pageNavClass) {
    if (!pageNavClass) {
        goHome();
    }
    const pageNumber = pageNavClass.split('-')[1];
    const pageNav = document.getElementsByClassName(pageNavClass)[0];
    if (pageNav) {
        pageNav.addEventListener('click', function() {
            window.location.href = `/views/${pageNumber}`;
        });
    } else {
        window.location.href = `/views/404.html`;
    }
}

goToPage(pageNavClass);