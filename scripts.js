    // Array de projetos de exemplo
    const projects = [
        {
            title: "Kukoos: Lost Pets",
            platforms: ["Icons/PS.png", "Icons/windows.png"],
            description: "Descubra o universo dos Kukoos neste incrível jogo de plataforma 3D. Explore mundos misteriosos e descubra mistérios para libertar os pets que sofreram lavagem cerebral. Conheça grandes personagens, novas mecânicas, lugares malucos e divirta-se a valer!",
            category: "Multiplayer",
            images: ["Icons/PS.png", "imagem2.jpg"],
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
                    <div class="project-details">
                        <img src="${project.images[0]}" alt="Imagem do Projeto" class="project-image">
                        <div class="project-links">
                            <button class="more-info-button" data-title="${project.title}" data-description="${project.description}" data-images='${JSON.stringify(project.images)}' data-videos='${JSON.stringify(project.videos)}' data-externalLink="${project.externalLink}" data-platforms='${JSON.stringify(project.platforms)}'>Mais sobre</button>
                        </div>
                    </div>
                </div>
            `;
            projectsSection.innerHTML += projectHTML;
        });
    }

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

    // Função para abrir o modal com mais informações
    function openModal(event) {
           console.log("Modal aberto!"); // Adicionando um console.log para verificar se a função é chamada
        const button = event.target;
        const title = button.dataset.title;
        const description = button.dataset.description;
        const images = JSON.parse(button.dataset.images);
        const videos = JSON.parse(button.dataset.videos);
        const externalLink = button.dataset.externalLink;
        const platforms = JSON.parse(button.dataset.platforms);
    console.log(title, description, images, videos, externalLink, platforms); // Verificando os dados recebidos

        document.getElementById('modal-title').innerText = title;
        document.getElementById('modal-description').innerText = description;
        document.getElementById('modal-external-link').href = externalLink;

        const modalImages = document.getElementById('modal-images');
        modalImages.innerHTML = images.map(image => `<img src="${image}" alt="Imagem do Projeto">`).join('');

        const modalVideos = document.getElementById('modal-videos');
        modalVideos.innerHTML = videos.map(video => `<video controls><source src="${video}" type="video/mp4">Your browser does not support the video tag.</video>`).join('');

        const modalPlatforms = document.getElementById('modal-platforms');
        modalPlatforms.innerHTML = platforms.map(platform => `<img src="${platform}" alt="Plataforma">`).join('');

        document.getElementById('project-modal').style.display = 'block';
    }

    // Função para fechar o modal
    function closeModal() {
        document.getElementById('project-modal').style.display = 'none';
    }

    // Adiciona event listeners aos botões de mais informações
    function addMoreInfoEventListeners() {
        const buttons = document.querySelectorAll('.more-info-button');
        buttons.forEach(button => {
            button.addEventListener('click', openModal);
        });
    }

    // Adiciona event listeners aos botões de filtro
    document.addEventListener('DOMContentLoaded', () => {
        addProjects();
        addMoreInfoEventListeners();

        const filterButtons = document.querySelectorAll('.filter-button');
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                const category = button.dataset.category;
                filterProjects(category);
            });
        });

        const closeButton = document.querySelector('.close-button');
        closeButton.addEventListener('click', closeModal);
    });

