document.addEventListener("DOMContentLoaded", function() {
    // Lista de projetos
    const projects = [
        {
            name: "Projeto 1",
            categories: ["Ação", "Multiplayer"],
            description: "Descrição do Projeto 1...",
            platforms: ["platform1.png", "platform2.png"],
            images: ["project1_image1.jpg", "project1_image2.jpg"],
            videos: ["project1_video1.mp4"],
            externalLink: "#"
        },
        {
            name: "Projeto 2",
            categories: ["Aventura", "VR"],
            description: "Descrição do Projeto 2...",
            platforms: ["platform3.png", "platform4.png"],
            images: ["project2_image1.jpg", "project2_image2.jpg"],
            videos: [],
            externalLink: "#"
        }
        // Adicione mais projetos conforme necessário
    ];

    // Função para adicionar projetos à página
    function addProjectsToPage() {
        const projectsContainer = document.getElementById("projects");

        projects.forEach(project => {
            const projectElement = document.createElement("div");
            projectElement.classList.add("project");

            // Adiciona os ícones das plataformas
            const platformsElement = document.createElement("div");
            platformsElement.classList.add("platforms");
            project.platforms.forEach(platform => {
                const platformIcon = document.createElement("img");
                platformIcon.src = platform;
                platformIcon.alt = "Plataforma";
                platformsElement.appendChild(platformIcon);
            });
            projectElement.appendChild(platformsElement);

            // Adiciona o nome do projeto
            const projectNameElement = document.createElement("h3");
            projectNameElement.textContent = project.name;
            projectElement.appendChild(projectNameElement);

            // Adiciona as categorias
            const categoriesElement = document.createElement("p");
            categoriesElement.textContent = "Categorias: " + project.categories.join(", ");
            projectElement.appendChild(categoriesElement);

            // Adiciona a descrição do projeto
            const descriptionElement = document.createElement("p");
            descriptionElement.textContent = project.description;
            projectElement.appendChild(descriptionElement);

            // Adiciona as imagens e vídeos
            const mediaElement = document.createElement("div");
            mediaElement.classList.add("media");
            project.images.forEach(image
