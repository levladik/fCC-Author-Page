# fCC-Author-Page

# News Author Page

This project is a simple web page that displays information about authors fetched from a JSON file. It utilizes HTML, CSS, and JavaScript to create a user interface that showcases authors' names, images, biographies, and links to their author pages.

## Features

1. **Author Display**: The web page dynamically fetches author data from the [authors.json](https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json) file and displays it in a card format.

2. **Load More Button**: Users can click the "Load More" button to fetch and display additional authors. The authors are loaded in batches of 8.

3. **Responsive Design**: The user interface is designed to be responsive, providing a seamless experience across different devices.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/news-author-page.git
   ```

2. Open the `index.html` file in a web browser.

## Project Structure

- **index.html**: Contains the structure of the web page.
- **style.css**: Provides the styles for the web page.
- **script.js**: Includes the JavaScript code for fetching and displaying author data.

## How to Use

1. Open the web page in a browser.
2. Initially, the page displays the first 8 authors.
3. Click the "Load More" button to fetch and display the next set of authors.
4. Repeat step 3 until all authors are displayed.

## Dependencies

- None

## API Used

The author data is fetched from the [authors.json](https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json) file.