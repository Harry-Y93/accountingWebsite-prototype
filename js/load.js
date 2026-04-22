async function loadComponent(selector, filePath) {
    const target = document.querySelector(selector);
    if(!target) return;

    try{
        const response = await fetch(filePath);
        if(!response.ok) throw new Error('Failed to load ${filePath}');

        const html = await response.text();
        target.innerHTML = html;
    } catch(error){
        console.error(error);
    };
}

function setActiveNavLink() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    const navLinks = document.querySelectorAll('.menu a');

    navLinks.forEach(link => {
        const linkPage = link.getAttribute('href');

        if(linkPage === currentPage) {
            link.classList.add('active');
        }
    });
}

async function initLayout(){
    await loadComponent('#nav-placeholder','components/nav.html');
    await loadComponent('#footer-placeholder','components/footer.html');
    setActiveNavLink();
}

initLayout();