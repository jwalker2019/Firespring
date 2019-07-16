function showMenu() {
    $(document.getElementById('showDropMenu')).dropdown('show'); 
};

function hideMenu() {
    $(document.getElementById('showDropMenu')).dropdown('hide'); 
};

function toggleMobileMenu() {
    var mobileNav = document.getElementById('mainNav');
    if (mobileNav.classList.contains("showMobileMenu")) {
        mobileNav.classList.remove('showMobileMenu');
    } else {
        mobileNav.classList.add('showMobileMenu');
    }
};
