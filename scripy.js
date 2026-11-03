// ==========================================
// BANNER AUTOMÁTICO (10 SEGUNDOS)
// ==========================================
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const indicators = document.querySelectorAll('.indicator');
let bannerInterval;

function goToSlide(index) {
    if (slides.length === 0) return;
    
    slides.forEach(s => s.classList.remove('active'));
    indicators.forEach(i => i.classList.remove('active'));

    currentSlide = index;

    if (slides[currentSlide]) slides[currentSlide].classList.add('active');
    if (indicators[currentSlide]) indicators[currentSlide].classList.add('active');
}

function nextSlide() {
    let next = (currentSlide + 1) % slides.length;
    goToSlide(next);
}

function startBannerTimer() {
    if (slides.length > 0) {
        bannerInterval = setInterval(nextSlide, 10000);
    }
}

indicators.forEach((ind, i) => {
    ind.addEventListener('click', () => {
        clearInterval(bannerInterval);
        goToSlide(i);
        startBannerTimer();
    });
});

startBannerTimer();

// ==========================================
// FILTRO DE DALTONISMO (FUNCIONA VIA ARQUIVO LOCAL)
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    const root = document.documentElement;
    const filterButtons = document.querySelectorAll('.colorblind-dropdown button');
    const detailsMenu = document.querySelector('details.colorblind-control');

    // Mapeamento dos filtros diretamente via CSS
    const filters = {
        'none': 'none',
        'protanopia': 'sepia(0.6) hue-rotate(-50deg) saturate(2.5)',
        'deuteranopia': 'sepia(0.8) hue-rotate(170deg) saturate(1.2)',
        'tritanopia': 'sepia(0.5) hue-rotate(80deg) saturate(2.2)',
        'achromatopsia': 'grayscale(100%)'
    };

    filterButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            // Pega o tipo de filtro no atributo data-filter do botão
            const filterType = e.target.getAttribute('data-filter');
            
            if (filters[filterType] !== undefined) {
                // Aplica o filtro diretamente no estilo da página inteira
                root.style.filter = filters[filterType];
                
                // Salva no navegador caso suportado
                try {
                    localStorage.setItem('colorblindFilter', filterType);
                } catch(err) {
                    console.log('LocalStorage inacessível localmente');
                }
            }

            // Fecha o menu suspenso
            if (detailsMenu) {
                detailsMenu.removeAttribute('open');
            }
        });
    });

    // Carrega a escolha anterior
    try {
        const saved = localStorage.getItem('colorblindFilter');
        if (saved && filters[saved]) {
            root.style.filter = filters[saved];
        }
    } catch(err) {}
});