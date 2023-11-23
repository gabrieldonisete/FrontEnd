
const url = 'https://api.github.com/users';
const main = document.getElementById('main')
// let user = 'marcelocant'
let text = ''

function getUserInfo() {
    const username = document.getElementById('username').value;

    if (username) {
        const url = `https://api.github.com/users/${username}`;

        fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Erro na requisição: ${response.statusText}`);
                }
                return response.json();
            })
            .then(data => {
                displayUserInfo(data);
            })
            .catch(error => {
                console.error('Erro:', error);
                document.getElementById('userInfo').innerHTML = 'Erro ao carregar dados do usuário do GitHub.';
            });
    } else {
        alert('Por favor, digite o nome do usuário do GitHub.');
    }
}

function displayUserInfo(user) {
    const userInfoHTML = `
        <p>Login: ${user.login}</p>
        <p>Nome: ${user.name || 'N/A'}</p>
        <p>Seguidores: ${user.followers || 0}</p>
        <p>Repositórios públicos: ${user.public_repos || 0}</p>
    `;
    document.getElementById('userInfo').innerHTML = userInfoHTML;
}

function getUser(user) {

    fetch(`${url}/${user}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json; charset=UTF-8'
        }
    })
        .then((response) => response.json())
        .then((data) => {
            text += `<p>${data.name} possui ${data.public_repos} repositórios públicos no GitHub como ${data.login}</p>`
            main.innerHTML = text
        })
        .catch((error) => console.error('Erro: ', error.message || error))

}

const userInput = document.getElementById('username')

userInput.addEventListener('focusout', function(event){
    getUser(event.target.value)
})


