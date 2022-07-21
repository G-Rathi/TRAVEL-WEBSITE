let currentSlide = 0;
const slides = document.querySelectorAll(".slide")
const dots = document.querySelectorAll('.dot')

const init = (n) => {
  slides.forEach((slide, index) => {
    slide.style.display = "none"
    dots.forEach((dot, index) => {
      dot.classList.remove("active")
    })
  })
  slides[n].style.display = "block"
  dots[n].classList.add("active")
}
document.addEventListener("DOMContentLoaded", init(currentSlide))
const next = () => {
  currentSlide >= slides.length - 1 ? currentSlide = 0 : currentSlide++
  init(currentSlide)
}

const prev = () => {
  currentSlide <= 0 ? currentSlide = slides.length - 1 : currentSlide--
  init(currentSlide)
}

document.querySelector(".next").addEventListener('click', next)

document.querySelector(".prev").addEventListener('click', prev)


setInterval(() => {
  next()
}, 5000);

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    console.log(currentSlide)
    init(i)
    currentSlide = i
  })
})

// <-----------Slider end------------->






// <---------------------------- Show Table btn ----------------------------->

let showTableBtn = document.querySelector('.table_button');
let toggleTable = document.querySelector('.table_container');
toggleTable.style.display = "none";

showTableBtn.addEventListener('click', () => {
  (toggleTable.style.display === 'none') ? (toggleTable.style.display = 'block') : (toggleTable.style.display = 'none');

  (showTableBtn.innerHTML === "Show Table") ? (showTableBtn.innerHTML = "Hide Table") : (showTableBtn.innerHTML = "Show Table");

})





// <-------------------------- DropDown ----------------------------------->

let placesDownBtn = document.querySelector('.p_btn');
let dropDownMenu = document.querySelector('.dropdown_menu')
dropDownMenu.style.display = 'none';

placesDownBtn.addEventListener('click', () => {
  (dropDownMenu.style.display === 'none') ? (dropDownMenu.style.display = 'block') : (dropDownMenu.style.display = 'none');
  active();
})

// <------ Click on Screen -------->
let clickBody = document.querySelector('.main_section');

clickBody.addEventListener('click', () => {
  dropDownMenu.style.display = 'none';

  (downArrow.classList.contains('fa-angle-up')) ? (downArrow.classList.remove('fa-angle-up',)) : ('');

})


// <--------------------- Toggle downArrow ------------------------->

let downArrow = document.querySelector('.downArrow');
// let upArrow = document.querySelector('.upArrow');

// const active =()=>{
//  if(downArrow.style.display==='none' && upArrow.style.display ==='inline'){
//   downArrow.style.display='inline';
//   upArrow.style.display='none';
//  }else{
//   downArrow.style.display='none';
//   upArrow.style.display='inline';
//  }
// }

let active = () => {
  downArrow.classList.toggle("fa-angle-up")
}








// <--------------Email sending -------------->

let submit = document.querySelector('.submit');
let emailPlace = document.querySelector('.email_place')

submit.addEventListener('click', () => {
  let valid = '@';
  (emailPlace.value.match(valid)) ? (alert('Thanks for contacting us.\nYour email address has been submitted ')) : ((emailPlace.value === '') ? (alert('Please enter your email address !')) : (alert('Please enter your valid email address !')));

  emailPlace.value = '';
})







// <-----------Upload Files---------------------------->

let uploadBtn = document.querySelector('.upload');
let inputValue = document.querySelector('.file')


uploadBtn.addEventListener('click', () => {

  let chooseFile = inputValue.value;
  (chooseFile === '') ? (alert('Select your "File" first !')) : (alert(inputValue.files[0].name + ' has been successfully uploaded.\nThank-you.'));
  inputValue.value = '';
})







// <----------- Fetch Data From API --------->


let URL = 'https://jsonplaceholder.typicode.com/users';

function loadData() {
  fetch(URL)
    .then(response => response.json())
    .then(data => showTable(data))
}

function showTable(empolyee) {
  let table = document.getElementById('table');
  for (let i = 0; i <= 5; i++) {
    let obj = empolyee[i];
    console.log(obj);
    let row = document.createElement('tr');
    let id = document.createElement('th');
    let name = document.createElement('td');
    let username = document.createElement('td');
    let email = document.createElement('td');

    id.innerHTML = obj.id
    name.innerHTML = obj.name
    username.innerHTML = obj.username
    email.innerHTML = obj.email

    row.append(id);
    row.append(name);
    row.append(username);
    row.append(email);

    table.append(row);
  }
}

window.onload = loadData




// <------------- Random images in cards using unsplash ----------->

// let imageArray = document.getElementByClassName('image8');

// // console.log(imageArray.length);

// imageArray.style.backgroundImage = 'url("https:/source.unsplash.com/random/900x600")';


// let cardImage1 = document.querySelector('.image1');
// let cardImage2 = document.querySelector('.image2');
// let cardImage3 = document.querySelector('.image3');
// let cardImage4 = document.querySelector('.image4');
// let cardImage5 = document.querySelector('.image5');
// let cardImage6 = document.querySelector('.image6');
// let cardImage7 = document.querySelector('.image7');
// let cardImage8 = document.querySelector('.image8');

// // console.log(cardImage)
// let imageTag1 = document.createElement('img');
// let imageTag2 = document.createElement('img');
// let imageTag3 = document.createElement('img');
// let imageTag4 = document.createElement('img');
// let imageTag5 = document.createElement('img');
// let imageTag6 = document.createElement('img');
// let imageTag7 = document.createElement('img');
// let imageTag8 = document.createElement('img');
// let imageTag9 = document.createElement('img');

// cardImage1.append(imageTag1);
// cardImage2.append(imageTag2);
// cardImage3.append(imageTag3);
// cardImage4.append(imageTag4);
// cardImage5.append(imageTag5);
// cardImage6.append(imageTag6);
// cardImage7.append(imageTag7);
// cardImage8.append(imageTag8);

// console.log(cardImage8);

// imageTag1.src = 'https:/source.unsplash.com/random/700x600/?city';
// imageTag2.src = 'https:/source.unsplash.com/700x600/?tourist';
// imageTag3.src = 'https:/source.unsplash.com/700x600/?paris';
// imageTag4.src = 'https:/source.unsplash.com/700x600/?spain';
// imageTag5.src = 'https:/source.unsplash.com/700x600/?bridge';
// imageTag6.src = 'https:/source.unsplash.com/700x600/?tour';
// imageTag7.src = 'https:/source.unsplash.com/700x600/?street';
// imageTag8.src = 'https:/source.unsplash.com/700x600/?camping';


let cardImages = document.getElementsByClassName('card_img')

console.log(cardImages)


for (let cardImage of cardImages) {
  cardImage.append(document.createElement('img'));
}

// cardImages[0].append(document.createElement('img'));
// cardImages[1].append(document.createElement('img'));
// cardImages[2].append(document.createElement('img'));
// cardImages[3].append(document.createElement('img'));
// cardImages[4].append(document.createElement('img'));
// cardImages[5].append(document.createElement('img'));
// cardImages[6].append(document.createElement('img'));
// cardImages[7].append(document.createElement('img'));

console.log(cardImages[5]);

document.querySelector('.image1>img').src = 'https:/source.unsplash.com/random/700x600/?city';
document.querySelector('.image2>img').src = 'https:/source.unsplash.com/700x600/?tourist';
document.querySelector('.image3>img').src = 'https:/source.unsplash.com/700x600/?paris';
document.querySelector('.image4>img').src = 'https:/source.unsplash.com/700x600/?spain';
document.querySelector('.image5>img').src = 'https:/source.unsplash.com/700x600/?bridge';
document.querySelector('.image6>img').src = 'https:/source.unsplash.com/700x600/?tour';
document.querySelector('.image7>img').src = 'https:/source.unsplash.com/700x600/?street';
document.querySelector('.image8>img').src = 'https:/source.unsplash.com/700x600/?camping';

