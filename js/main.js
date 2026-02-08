// 1. Render Projects secara Dinamis
const projectContainer = document.getElementById('project-grid');

function renderProjects() {
    projectContainer.innerHTML = ''; // Bersihkan container

    projectsData.forEach(project => {
        // Buat elemen kartu project
        const card = document.createElement('article');
        card.className = 'project-card';

        // Gunakan Template Literal untuk struktur HTML
        card.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
            <div class="project-tags">
                ${project.tags.map(tag => `<span>${tag}</span>`).join('')}
            </div>
            <br>
            <a href="${project.link}" class="btn-text">Lihat Detail →</a>
        `;

        projectContainer.appendChild(card);
    });
}

// Panggil fungsi render saat halaman dimuat
document.addEventListener('DOMContentLoaded', renderProjects);

// 2. Logic Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

// Cek local storage (agar preferensi user tersimpan)
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    body.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') themeToggle.textContent = '☀️';
}

themeToggle.addEventListener('click', () => {
    const isDark = body.getAttribute('data-theme') === 'dark';
    
    if (isDark) {
        body.setAttribute('data-theme', 'light');
        themeToggle.textContent = '🌙';
        localStorage.setItem('theme', 'light');
    } else {
        body.setAttribute('data-theme', 'dark');
        themeToggle.textContent = '☀️';
        localStorage.setItem('theme', 'dark');
    }
});