let accesskey = "tyA3w60YHAOElzoCbEt3ZO4ZzkQXx6-hLX2COP8ABTw";
const searchForm = document.getElementById("searchForm");
const searchBox = document.getElementById("searchbox");
const searchResults = document.getElementById("search-results");
const showmoreBtn = document.getElementById("show-more-btn");
let page=1;
async function searchImages() {
    if(page===1){
        searchResults.innerHTML='';
    }
  let searchkey = searchBox.value;
  let url = `https://api.unsplash.com/search/photos?page=${page}&query=${searchkey}&per_page=12&client_id=${accesskey}`;
  const response = await fetch(url);
  const data = await response.json();
  console.log(data);
  const result = data.results;
  result.map((result) => {
    let image = document.createElement("img");
    image.src = result.urls.small;
    let imagelink = document.createElement("a");
    imagelink.href = result.links.html;
    imagelink.target='_blank';
    imagelink.appendChild(image);
    searchResults.appendChild(imagelink);
  });
  showmoreBtn.style.display='block';
}
searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  searchImages();
});
showmoreBtn.addEventListener("click",()=>{
    page++;
    searchImages();
})
