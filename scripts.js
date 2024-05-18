document.addEventListener("DOMContentLoaded", function() {
    // Array de projetos de exemplo
    const projects = [
        {
            title: "Kukoos: Lost Pets",
            platforms: ["Icons/PS.png", "Icons/windows.png", "Icons/nintendo.png"],
            description: "Descubra o universo dos Kukoos neste incrível jogo de plataforma 3D. Explore mundos misteriosos e descubra mistérios para libertar os pets que sofreram lavagem cerebral. Conheça grandes personagens, novas mecânicas, lugares malucos e divirta-se a valer!",
            category: "Multiplayer",
            images: ["imagem1.jpg", "imagem2.jpg"],
            videos: ["https://www.youtube.com/watch?v=EAHIOrhQZsI", "video2.mp4"],
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
                    <div class="platforms">
                        ${project.platforms.map(platform => `<img src="${platform}" alt="Plataforma">`).join('')}
                    </div>
                    <img src="${project.images[
