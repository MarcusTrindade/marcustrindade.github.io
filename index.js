const sectionAboutMe = document.getElementById('about-me');
const divImgAboutMe = sectionAboutMe.getElementsByTagName('div')[1];

divImgAboutMe.onclick = function() {
  let numberPhotos = 4;
  let randomNumber = Math.floor(Math.random() * (numberPhotos - 1) + 1);
  let imgAboutMe = divImgAboutMe.getElementsByTagName('img');
  
  if (randomNumber === 1) {
    imgAboutMe[0].src = 'src/images/ed_e_alphonse.jpg';
  } else if (randomNumber === 2) {
    imgAboutMe[0].src = 'src/images/eu_platinado_2.jpg';
  } else {
    imgAboutMe[0].src = 'src/images/Inuryasha.jpg';
  }
};
