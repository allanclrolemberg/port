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
            </div>
        `;

        // Adiciona os ícones das plataformas
        const platformsElement = document.createElement("div");
        platformsElement.classList.add("platforms");
        project.platforms.forEach(platform => {
            const platformIcon = document.createElement("img");
            platformIcon.src = platform;
            platformIcon.alt = "Plataforma";
            platformsElement.appendChild(platformIcon);
        });
        projectsSection.innerHTML += projectHTML;
        projectsSection.appendChild(platformsElement);
    });
}
