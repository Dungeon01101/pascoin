document.addEventListener('DOMContentLoaded', function() {
    // Плавная прокрутка по ссылкам меню
    document.querySelectorAll('nav a[href^="#"], .hero-cta a[href^="#"], .about-text a[href^="#"], .footer-nav a[href^="#"], .footer-legal a[href^="#"], .footer-contact a[href^="#"], .section-header a[href^="#"], .cta-button[href^="#"], .btn-primary[href^="#"], .btn-secondary[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Пример: Простая анимация для дорожной карты (можно улучшить)
    const timelineItems = document.querySelectorAll('.roadmap-timeline .timeline-item');
    const timelineLine = document.querySelector('.roadmap-timeline::before');

    // Можно добавить логику для выделения активного элемента при скролле,
    // но для начала просто оставим его как есть.
    // Для более сложной интерактивности дорожной карты может потребоваться библиотека.

    // Пример: Имитация анимации фона (можно заменить на реальную библиотеку частиц)
    // Если вы используете particle.js или аналогичную, подключите ее здесь.
    // function createParticles() {
    //     const particlesContainer = document.querySelector('.hero-background');
    //     if (!particlesContainer) return;

    //     const numParticles = 100;
    //     for (let i = 0; i < numParticles; i++) {
    //         const particle = document.createElement('div');
    //         particle.classList.add('particle');
    //         const size = Math.random() * 5 + 2; // Размер от 2 до 7px
    //         particle.style.width = `${size}px`;
    //         particle.style.height = `${size}px`;
    //         particle.style.left = `${Math.random() * 100}%`;
    //         particle.style.top = `${Math.random() * 100}%`;
    //         particle.style.animationDuration = `${Math.random() * 5 + 5}s`; // Длительность анимации от 5 до 10с
    //         particlesContainer.appendChild(particle);
    //     }
    // }
    // createParticles(); // Запустить создание частиц

    // Если у вас есть 3D-модель, которую нужно анимировать (например, через Three.js):
    // const canvas = document.getElementById('3d-canvas');
    // if (canvas) {
    //     // Инициализация Three.js и загрузка модели
    // }
});
