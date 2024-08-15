const fetchGithubRepositories = async () => {    
    try {    
        const response = await fetch('https://api.github.com/users/ramon-victor/repos?sort=updated&direction=desc&per_page=6');    
        const repos = await response.json();    
    
        const reposContainer = document.getElementById('repositorios-container');    
        reposContainer.innerHTML = repos.map(repo => `    
            <div>  
                <a class="repo" href="${repo.html_url}" target="_blank">  
                    <h3>${repo.name}</h3>    
                    <p class="descricao">${truncateText(repo.description || 'Sem descrição', 128)}</p>    
                    <p class="status">⭐ ${repo.stargazers_count} | 🍴 ${repo.forks_count}</p>   
                </a> 
            </div>    
        `).join('');    
    } catch (error) {    
        console.error('Erro ao buscar repositórios:', error);    
    }    
};    
    
fetchGithubRepositories();    
