const details_content = document.querySelector(".details-content");

fetch(
  "https://northwind.vercel.app/api/customers/" + window.location.hash.slice(1)
)
  .then((res) => res.json())
  .then((data) => {
    details_data(data);
  });

function details_data(data) {
  const id = document.createElement("p");
  const companyName = document.createElement("h2");
  const contactName = document.createElement("h3");
  const contactTitle = document.createElement("p");
  const address = document.createElement("p");
  const street = document.createElement("p");
  const city = document.createElement("p");
  const region = document.createElement("p");
  const postalCode = document.createElement("p");
  const country = document.createElement("p");
  const phone = document.createElement("p");
console.log(data);
  id.innerText = data.id;
  companyName.innerText = data.companyName;
  contactName.innerText = data.contactName;
  contactTitle.innerText = data.contactTitle;
  address.innerText = data.contactTitle;
  street.innerText = data?.address?.street;
  city.innerText = data?.address?.city;
  region.innerText = data?.address?.region;
  postalCode.innerText = data?.address?.postalCode;
  country.innerText = data?.address?.country;
  phone.innerText = data?.address?.phone;

  details_content.append(
    id,
    companyName,
    contactName,
    contactTitle,
    address,
    street,
    city,
    region,
    postalCode,
    country,
    phone
  );
}
