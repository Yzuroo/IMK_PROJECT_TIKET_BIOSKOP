// Data Film
const movies = [
    {
        id: 1,
        title: 'Avengers: Endgame',
        genre: ['action', 'adventure'],
        rating: 8.4,
        poster: 'https://via.placeholder.com/200x300?text=Avengers',
        price: 50000,
        duration: '181 min',
        director: 'Anthony Russo',
        cast: 'Robert Downey Jr., Chris Evans',
        description: 'After the devastating events that befell Asgard, Thor must seek out the remaining Avengers and rally them against Thanos.'
    },
    {
        id: 2,
        title: 'The Shawshank Redemption',
        genre: ['drama'],
        rating: 9.3,
        poster: 'https://via.placeholder.com/200x300?text=Shawshank',
        price: 45000,
        duration: '142 min',
        director: 'Frank Darabont',
        cast: 'Tim Robbins, Morgan Freeman',
        description: 'Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.'
    },
    {
        id: 3,
        title: 'Inception',
        genre: ['action', 'drama'],
        rating: 8.8,
        poster: 'https://via.placeholder.com/200x300?text=Inception',
        price: 55000,
        duration: '148 min',
        director: 'Christopher Nolan',
        cast: 'Leonardo DiCaprio, Marion Cotillard',
        description: 'A skilled thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea.'
    },
    {
        id: 4,
        title: 'The Dark Knight',
        genre: ['action', 'drama'],
        rating: 9.0,
        poster: 'https://via.placeholder.com/200x300?text=Dark+Knight',
        price: 50000,
        duration: '152 min',
        director: 'Christopher Nolan',
        cast: 'Christian Bale, Heath Ledger',
        description: 'When the menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman must accept one of the greatest tests.'
    },
    {
        id: 5,
        title: 'Parasite',
        genre: ['drama', 'thriller'],
        rating: 8.5,
        poster: 'https://via.placeholder.com/200x300?text=Parasite',
        price: 48000,
        duration: '132 min',
        director: 'Bong Joon-ho',
        cast: 'Song Kang-ho, Lee Sun-kyun',
        description: 'Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.'
    },
    {
        id: 6,
        title: 'The Conjuring',
        genre: ['horror'],
        rating: 7.5,
        poster: 'https://via.placeholder.com/200x300?text=Conjuring',
        price: 45000,
        duration: '112 min',
        director: 'James Wan',
        cast: 'Vera Farmiga, Patrick Wilson',
        description: 'Paranormal investigators work to help a family terrorized by a dark presence in their farmhouse.'
    }
];

// Load saat halaman dibuka
document.addEventListener('DOMContentLoaded', function() {
    loadMovies();
    setupEventListeners();
});

function loadMovies(filteredMovies = movies) {
    const moviesGrid = document.getElementById('moviesGrid');
    if (!moviesGrid) return;
    
    moviesGrid.innerHTML = '';

    filteredMovies.forEach(movie => {
        const movieCard = document.createElement('div');
        movieCard.className = 'movie-card';
        movieCard.innerHTML = `
            <div class="movie-poster">
                <img src="${movie.poster}" alt="${movie.title}">
                <div class="movie-rating">⭐ ${movie.rating}</div>
            </div>
            <div class="movie-info">
                <h3>${movie.title}</h3>
                <p>${movie.duration}</p>
                <div class="movie-genre">
                    ${movie.genre.map(g => `<span class="genre-badge">${g}</span>`).join('')}
                </div>
                <button class="btn-primary" onclick="viewFilm(${movie.id})">Pilih Jadwal</button>
            </div>
        `;
        moviesGrid.appendChild(movieCard);
    });
}

function filterFilm() {
    const genre = document.getElementById('genreFilter').value;

    let filtered = movies;

    if (genre) {
        filtered = filtered.filter(m => m.genre.includes(genre));
    }

    loadMovies(filtered);
}

function viewFilm(filmId) {
    localStorage.setItem('selectedFilmId', filmId);
    window.location.href = 'detail-film.html';
}

function toggleLoginModal() {
    const modal = document.getElementById('loginModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function toggleRegisterModal() {
    const modal = document.getElementById('registerModal');
    modal.style.display = modal.style.display === 'block' ? 'none' : 'block';
}

function setupEventListeners() {
    window.onclick = function(event) {
        const loginModal = document.getElementById('loginModal');
        const registerModal = document.getElementById('registerModal');

        if (event.target == loginModal) {
            loginModal.style.display = 'none';
        }
        if (event.target == registerModal) {
            registerModal.style.display = 'none';
        }
    }

    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Login berhasil!');
            document.getElementById('loginModal').style.display = 'none';
            localStorage.setItem('userLogin', 'true');
        });
    }

    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Pendaftaran berhasil! Silakan login.');
            document.getElementById('registerModal').style.display = 'none';
        });
    }
}
