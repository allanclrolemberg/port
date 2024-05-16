// Array de projetos de exemplo
const projects = [
    {
        title: "Projeto 1",
        description: "Descrição do Projeto 1",
        category: "Categoria 1",
        images: ["imagem1.jpg", "imagem2.jpg"],
        videos: ["video1.mp4", "video2.mp4"],
        externalLink: "URL_EXTERNO_1"
    },
    {
        title: "Projeto 2",
        description: "Descrição do Projeto 2",
        category: "Categoria 2",
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
            <div class="project">
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
            </div>
        `;
        projectsSection.innerHTML += projectHTML;
    });
}

// Adicione os projetos à página quando a página carregar
document.addEventListener('DOMContentLoaded', addProjects);
