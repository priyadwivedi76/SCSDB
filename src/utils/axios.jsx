
import axios from "axios";

const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJhNzM0NTRjYWU0ZjkxYjJkMzJkYzFiNTcxNjkzMDg4YyIsIm5iZiI6MTczMjI2Nzg0OC45OTY3NjgsInN1YiI6IjY3M2M4YjUxNjBiN2IzYmM5NGEwYmViNiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.auQCPuNXfW7Bn0uFQi25xMkCbtaUFkPasSyOL29bT-8'
    }
});

export default instance;