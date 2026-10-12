document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-menu a');

    // Toggle mobile menu
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        menuToggle.classList.toggle('open');
    });

    // Close mobile menu on link click
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            menuToggle.classList.remove('open');
        });
    });

    // Handle agendamento form submit
    const form = document.getElementById('agendamentoForm');
    const feedback = document.getElementById('formFeedback');

    if (form) {
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const nome = document.getElementById('nome').value;
            const servico = document.getElementById('servicoSelect').value;

            feedback.style.color = 'var(--accent)';
            feedback.textContent = `Obrigado, ${nome}! Seu agendamento para ${servico} foi pré-reservado. Entraremos em contato via WhatsApp para confirmação.`;
            
            form.reset();

            setTimeout(() => {
                feedback.textContent = '';
            }, 6000);
        });
    }
});