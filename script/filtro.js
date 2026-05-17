const searchInput = document.getElementById("searchInput");
const minPrice = document.getElementById("minPrice");
const maxPrice = document.getElementById("maxPrice");
const sortSelect = document.getElementById("sortSelect");

const cardsContainer = document.getElementById("cardsContainer");

function filterCards(){

  const search = searchInput.value.toLowerCase();

  const min = parseInt(minPrice.value) || 0;
  const max = parseInt(maxPrice.value) || Infinity;

  const cards = Array.from(document.querySelectorAll(".card"));

  cards.forEach(card => {

    const name = card.dataset.name.toLowerCase();

    const price = parseInt(card.dataset.price);

    const matchesSearch = name.includes(search);

    const matchesPrice =
      price >= min &&
      price <= max;

    if(matchesSearch && matchesPrice){
      card.style.display = "block";
    }else{
      card.style.display = "none";
    }

  });

  sortCards();
}

function sortCards(){

  const cards = Array.from(document.querySelectorAll(".card"));

  const visibleCards = cards.filter(card =>
    card.style.display !== "none"
  );

  const option = sortSelect.value;

  visibleCards.sort((a,b)=>{

    const priceA = parseInt(a.dataset.price);
    const priceB = parseInt(b.dataset.price);

    if(option === "cheap"){
      return priceA - priceB;
    }

    if(option === "expensive"){
      return priceB - priceA;
    }

    return 0;

  });

  visibleCards.forEach(card=>{
    cardsContainer.appendChild(card);
  });

}

searchInput.addEventListener("input", filterCards);

minPrice.addEventListener("input", filterCards);

maxPrice.addEventListener("input", filterCards);

sortSelect.addEventListener("change", filterCards);