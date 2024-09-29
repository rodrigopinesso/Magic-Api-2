document.addEventListener('DOMContentLoaded', () => {

    const API_URL = 'http://localhost:3000';
    //const SCRYFALL_API = 'https://api.scryfall.com/cards/named?fuzzy=';
    
    function handleLogin(e) {
        e.preventDefault();
        
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        loginUser(email, password);
    }

    async function loginUser(email, password) {
        try {
            const response = await fetch(`${API_URL}/auth/login`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();
            console.log('Login Response:', data);

            if (response.ok) {
                localStorage.setItem('token', data.token);
                alert('Login bem-sucedido!');
                window.location.href = 'cards.html';  
            } else {
                alert('Erro no login: ' + data.message);
            }
        } catch (error) {
            console.error('Error during login:', error);
        }
    }

    function handleSignup(e) {
        e.preventDefault();
        
        const name = document.getElementById('signupName').value;
        const email = document.getElementById('signupEmail').value;
        const password = document.getElementById('signupPassword').value;

        signupUser(name, email, password);
    }

    async function signupUser(name, email, password) {
        try {
            const response = await fetch(`${API_URL}/auth/signup`, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, password })
            });

            const data = await response.json();
            console.log('Signup Response:', data);

            if (response.ok) {
                alert('Cadastro realizado com sucesso!');
            } else {
                alert('Erro no signup: ' + data.message);
            }
        } catch (error) {
            console.error('Error:', error);
        }
    }

    function handleLoadDecks() {
        loadDecks();
    }

    async function loadDecks() {
        try {
            const token = localStorage.getItem('token');

            if (!token) {
                alert('Token não encontrado! Por favor, faça login.');
                return;
            }

            const response = await fetch(`${API_URL}/deck/myDeck`, {
                method: 'GET',
                headers: { 'Authorization': `Bearer ${token}` }
            });

            if (!response.ok) {
                throw new Error('Erro ao buscar decks: ' + response.statusText);
            }
        } catch (error) {
            console.error('Error fetching decks:', error);
        }
    }

    function handleCreateDeck(e) {
        e.preventDefault();
        
        const commanderName = document.getElementById('commanderName').value;
        const deckName = document.getElementById('deckName').value;

        createDeck(commanderName, deckName);
    }

    async function createDeck(commanderName, deckName) {
        try {
            const token = localStorage.getItem('token');
            if (!token) {
                alert('Token não encontrado! Por favor, faça login.');
                return;
            }
            const response = await fetch(`${API_URL}/decks/createDeckWithCommander?commanderName=${encodeURIComponent(commanderName)}&deckName=${encodeURIComponent(deckName)}`, {

                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`,
                    'Content-Type': 'application/json',
                },
            });

            if (!response.ok) {
                const errorData = await response.json();
                throw new Error('Erro ao criar o deck: ' + errorData.message);
            }

            const newDeck = await response.json();
            alert('Deck criado com sucesso!');
            console.log('Deck criado:', newDeck);

            loadDecks();

        } catch (error) {
            console.error('Erro ao criar o deck:', error);
            alert(error.message);
        }
    }

    // Event Listeners
    const loginForm = document.getElementById('loginForm');
    if (loginForm) loginForm.addEventListener('submit', handleLogin);

    const signupForm = document.getElementById('signupForm');
    if (signupForm) signupForm.addEventListener('submit', handleSignup);

    const loadDecksButton = document.getElementById('loadDecksButton');
    if (loadDecksButton) loadDecksButton.addEventListener('click', handleLoadDecks);

    const createDeckForm = document.getElementById('createDeckForm');
    if (createDeckForm) createDeckForm.addEventListener('submit', handleCreateDeck);
});
