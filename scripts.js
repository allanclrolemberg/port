  // Array de projetos de exemplo
const projects = [
    {
        title: "Projeto 1",
        platforms: ["icon_platform1.png", "icon_platform2.png"],
        description: "Descrição do Projeto 1",
        category: "Multiplayer",
        images: ["imagem1.jpg", "imagem2.jpg"],
        videos: ["video1.mp4", "video2.mp4"],
        externalLink: "URL_EXTERNO_1"
    },
    {
        title: "Projeto 2",
       platforms: ["icon_platform1.png", "icon_platform2.png"],
        description: "Descrição do Projeto 2",
        category: "Ação",
        images: ["imagem3.jpg", "imagem4.jpg"],
        videos: ["video3.mp4", "video4.mp4"],
        externalLink: "URL_EXTERNO_2"
    },
    // Adicione mais projetos conforme necessário
];

// Função para adicionar projetos à página
function addProjects() {
    const projectsSection = document.getElementById('projects');

    projects.forEach(project => {
        const projectHTML = `
            <div class="project ${project.category}">
                <h2>${project.title}</h2>
                <p>${project.description}</p>
                <p>Categoria: ${project.category}</p>
                <div>
                    <h3>Imagens:</h3>
                    ${project.images.map(image => `<img src="${image}" alt="Imagem do Projeto">`).join('')}
                </div>
                <div>
                    <h3>Vídeos:</h3>
                    ${project.videos.map(video => `<video controls><source src="${video}" type="video/mp4">Your browser does not support the video tag.</video>`).join('')}
                </div>
                <p><a href="${project.externalLink}" target="_blank">Link Externo</a></p>

                 <!-- Seção para ícones das plataformas -->
                <div class="platforms">
                    ${project.platforms.map(platform => `<img src="${platform}" alt="Plataforma">`).join('')}
                </div>
            </div>
        `;
        });
        projectsSection.innerHTML += projectHTML;
        projectsSection.appendChild(platformsElement);
    });
}

 // Adiciona os ícones das plataformas
         

// Função para filtrar projetos por categoria
function filterProjects(category) {
    const projects = document.querySelectorAll('.project');
    projects.forEach(project => {
        if (category === 'all' || project.classList.contains(category)) {
            project.style.display = 'block';
        } else {
            project.style.display = 'none';
        }
    });
}

// Adiciona event listeners aos botões de filtro
document.addEventListener('DOMContentLoaded', () => {
    addProjects();
    const filterButtons = document.querySelectorAll('.filter-btn');
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            filterProjects(category);
        });
    });
});
