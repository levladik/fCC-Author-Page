const authorContainer = document.getElementById('author-container');
const loadMoreBtn = document.getElementById('load-more-btn');

let startingIndex = 0;
let endingIndex = 8;
let authorDataArr = [];

fetch("https://cdn.freecodecamp.org/curriculum/news-author-page/authors.json")
  .then((res) => res.json())
  .then((data) => {
    authorDataArr = data;
    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));
  })
  .catch((err) => console.error(`There was an error: ${err}`));

  const fetchMoreAuthors = () => {
    startingIndex += 8;
    endingIndex += 8;

    displayAuthors(authorDataArr.slice(startingIndex, endingIndex));

    if(authorDataArr.length <= endingIndex) {
      loadMoreBtn.disabled = true;
      loadMoreBtn.textContent = 'No more data to load';
    }
  }

  const displayAuthors = (authors) => {
    authors.forEach(({author, image, url, bio}, index) => {
      authorContainer.innerHTML += `
        <div id="${index}" class="user-card">
          <h2 class="author-name">${author}</h2>
          <img class="user-img" src="${image}" alt="${author} avatar"> 
          <div class="purple-divider"></div>
          <p class="bio">${bio.length > 50 ? `${bio.slice(0, 50)}...` : bio}</p>
          <a class="author-link" target="_blank" href="${url}">${author}'s author page</a>  
        </div>          
      `;
    });
  };

  loadMoreBtn.addEventListener('click', fetchMoreAuthors);
  