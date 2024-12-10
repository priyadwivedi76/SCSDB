# SCSDB - Frontend Project

Welcome to **SCSDB**, a web application that fetches and displays movie, TV, and people data from The Movie Database (TMDb) API. This project leverages **Redux** for state management and **infinite scroll** to provide a smooth and interactive user experience.

## Features

- **Trending Movies**: View a dynamic list of trending movies.
- **Popular Movies**: Discover popular movies at the moment.
- **Trending TV Shows**: Check out the current trending TV shows.
- **Popular People**: Explore popular people in the film and television industry.
- **Infinite Scroll**: Automatically load more content as the user scrolls down the page.
- **Redux**: Centralized state management to handle the application's state efficiently.

## Tech Stack

- **React** - Frontend framework for building the user interface.
- **Redux** - State management to handle data across components.
- **TMDb API** - Provides data about movies, TV shows, and people.
- **React Router** - Used for routing and navigation within the app.
- **Axios** - HTTP client for making requests to the TMDb API.
- **CSS/Styled-Components** - For styling the app.
- **Infinite Scroll** - Infinite scrolling functionality to load content progressively.


## Routes

The application includes several key routes:

- \`/\` (Home): Displays trending movies, popular TV shows, and people.
- \`/movies\`: Shows a list of popular movies.
- \`/tv\`: Displays popular TV shows.
- \`/people\`: Lists popular people in the film and TV industry.

## Redux

The application uses Redux to manage global state. The state includes:

- **Movies**: Data for trending and popular movies.
- **TV Shows**: Data for popular TV shows.
- **People**: Data for popular people in the entertainment industry.

Each of these slices is managed in its own Redux file (e.g., \`movieSlice.js\`, \`tvShowSlice.js\`, \`personSlice.js\`). The global state is managed in the \`store.js\` file.

## Infinite Scroll

Infinite scroll is implemented in this project to load more content as the user scrolls down the page. This is achieved by listening for scroll events and triggering additional API requests when the user reaches the bottom of the page. The infinite scroll functionality works seamlessly across the trending movies, TV shows, and people routes.

## Contributing

Contributions are welcome! If you'd like to improve this project, please fork the repository and create a pull request.

### Steps for Contributing:

1. Fork the repo.
2. Create a new branch (\`git checkout -b feature-name\`).
3. Make your changes.
4. Commit your changes (\`git commit -am 'Add new feature'\`).
5. Push to the branch (\`git push origin feature-name\`).
6. Create a pull request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgements

- The Movie Database (TMDb) API for providing movie and TV show data.
- React, Redux, and all other open-source libraries used in this project.
`;

