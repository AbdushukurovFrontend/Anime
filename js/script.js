let manga = [
  {
    id: 1,
    imgUrl:
      "https://w0.peakpx.com/wallpaper/358/749/HD-wallpaper-demon-slayer-manga-anime-kny.jpg",
    title: "Iblislar Qotili [15:Jild]",
    URL: "./tanjirom.html",
    description: "janr:Ekshen Syonen Sarguzasht  ",
    price: "0",
  },
  {
    id: 2,
    imgUrl:
      "https://w0.peakpx.com/wallpaper/827/167/HD-wallpaper-tanjiro-demon-slayer.jpg",
    title: "Iblislar Qotili [16:Jild]",
    URL: "./tanjirom.html",
    description: "janr:Ekshen Syonen Sarguzasht  ",
    price: "0",
  },
  {
    id: 3,
    imgUrl:
      "https://w0.peakpx.com/wallpaper/650/338/HD-wallpaper-demon-slayer-sun-super.jpg",
    title: "Iblislar Qotili [17:Jild]",
    URL: "./tanjirom.html",
    description: "janr:Ekshen Syonen Sarguzasht  ",
    price: "0",
  },
  {
    id: 4,
    imgUrl: "https://wallpaperaccess.com/full/9295373.jpg",
    title: "Iblislar Qotili [18:Jild]",
    URL: "./tanjirom.html",

    description: "janr:Ekshen Syonen Sarguzasht  ",

    price: "0",
  },

  {
    id: 9,
    imgUrl: "https://wallpapercave.com/wp/wp10424264.jpg",
    title: "Arra-Odam [17+] [23:Jild]",
    URL: "./arra.html",
    description: "janr : Ekshen Fantaziya Syonen ",
    price: "0",
  },
  {
    id: 10,
    imgUrl: "https://wallpaper.dog/large/20517380.png",
    title: "Arra-Odam [17+] [23:Jild]",
    URL: "./arra.html",
    description: "janr : Ekshen Fantaziya Syonen ",
    price: "0",
  },
  {
    id: 11,
    imgUrl:
      "https://w0.peakpx.com/wallpaper/583/975/HD-wallpaper-chainsaw-man-aki-anime-chainsawman-manga-theme.jpg",
    title: "Arra-Odam [17+] [23:Jild]",
    URL: "./arra.html",
    description: "janr : Ekshen Fantaziya Syonen ",
    price: "0",
  },
  {
    id: 12,
    imgUrl:
      "https://rare-gallery.com/mocahbig/5431275-chainsaw-man-anime-aki-hayakawa-denji-power.jpg",
    title: "Arra-Odam [17+] [24:Jild]",
    URL: "./arra.html",
    description: "janr : Ekshen Fantaziya Syonen ",

    price: "0",
  },
];

let baskets = [];

const myModal = new bootstrap.Modal("#mymodal", {
  keyboard: false,
});

const basketModal = new bootstrap.Modal("#basketModal", {
  keyboard: false,
});

function openbasket() {
  basketModal.show();
}

function closebasket() {
  basketModal.hide();
}

function deletmodal(index) {
  manga.splice(index, 1);
  render();
}

let id = 0;

function cardmodal() {
  let findIndex = manga.findIndex((m) => m.id === id);
  manga[findIndex].imgUrl = document.getElementById("url").value;
  manga[findIndex].title = document.getElementById("title").value;
  manga[findIndex].description = document.getElementById("description").value;
  manga[findIndex].price = document.getElementById("price").value;
  render();
  myModal.hide();
}

function openmodal(itemId) {
  id = itemId;
  let findIndex = manga.findIndex((m) => m.id === id);
  document.getElementById("url").value = manga[findIndex].imgUrl;
  document.getElementById("title").value = manga[findIndex].title;
  document.getElementById("description").value = manga[findIndex].description;
  document.getElementById("price").value = manga[findIndex].price;
  myModal.show();
}

function render() {
  let card_container = document.getElementById("row");

  card_container.innerHTML = "";
  manga.forEach((item, index) => {
    card_container.innerHTML += `    
    <div class="mt-5 col-xl-3 col-lg-3 col-md-4 col-sm-6 col-12">
      <div class="section_card">
        <a href="">
          <img class ="img" src="${item.imgUrl}" alt="" width="100%;" />
        </a>
        <div class="content w-100">
          <h3>${item.title}</h3>
          <div class="des">
            <p>${item.description}</p>
            <div class=" d-flex justify-content-between">
              <span class ="fs-5 text-white">$${item.price}</span>
              <div class="d-flex gap-2 align-items-center mt-4">

              <a href="${item.URL}" class=" best rounded-4 fw-bold">
              Read <i class="fa-regular fa-eye"></i>
            </a>
         
                <i style="cursor: pointer" class="fa-solid fa-cart-plus"></i>

               
                
                <div class="dropdown">
                  <button class="border-0 bg-transparent" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i class="fa-solid fa-ellipsis-vertical" style="color: #ffffff"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li class ="li">
                      <button id="mymodal" onclick="openmodal(${item.id})" type="button" class="ms-3 border-0 bg-transparent" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        Edit
                        <i class="fa-regular fa-pen-to-square" style="color: black;"></i>
                      </button>
                    </li>
                    <li>
                      <button onclick="deletmodal(${index})" class="border-0 bg-transparent ms-3">Delete <i class="ms-2 fa-solid fa-trash-can-arrow-up" ></i></button>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>`;
  });
}

render();
