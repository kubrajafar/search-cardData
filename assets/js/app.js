const ourTeam_cards = document.querySelector(".ourTeam-cards");
const card_search = document.querySelector(".card-search");
const card_submit = document.querySelector(".card-submit");

fetch("https://northwind.vercel.app/api/customers")
  .then((res) => res.json())
  .then((data) => {
    ourTeam_card(data);
  });

function ourTeam_card(data) {
  data.forEach((element) => {
    const ourteam_card = document.createElement("div");
    const card_titleBox = document.createElement("div");
    const card_companyName = document.createElement("h3");
    const card_contactName = document.createElement("h4");
    const card_country = document.createElement("p");
    const card_btnBox = document.createElement("div");
    const card_btn_link = document.createElement("a");

    card_companyName.innerText = element.companyName;
    card_contactName.innerText = element.contactName;
    card_country.innerText = element.address.country;
    card_btn_link.innerText = "details";
    ourteam_card.classList.add("ourTeam-card");

    card_btn_link.href = "./page_detalis.html#" + element.id;

    card_titleBox.classList.add("card-titleBox");
    card_companyName.classList.add("card_companyName");
    card_contactName.classList.add("card_contactName");
    card_btnBox.classList.add("card-btnBox");
    card_btn_link.classList.add("card-btn");

    card_titleBox.append(card_companyName, card_contactName, card_country);

    card_btnBox.append(card_btn_link);
    ourteam_card.append(card_titleBox, card_btnBox);

    ourTeam_cards.appendChild(ourteam_card);
  });
}

card_search.addEventListener("keyup", (e) => {
  const boxes = document.querySelectorAll(".ourTeam-card");

  boxes.forEach((element) => {
    if (
      element.children[0].innerText
        .toLowerCase()
        .includes(card_search.value.toLowerCase())
    ) {
      element.style.display = "flex";
    } else {
      element.style.display = "none";
    }
  });
});
