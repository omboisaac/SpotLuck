let menu = document.querySelector('#menu-bar');
let navbar = document.querySelector('.navbar');


var h = document.querySelector('#nonvisible');
h.style.display = 'none';

/* for popup*/


document.querySelector('#chefadd').addEventListener('click', function(){
  document.querySelector('.popup').style.display = 'flex'; 
}); 

document.querySelector('.close').addEventListener('click', function(){
  document.querySelector('.popup').style.display = 'none'; 
}); 


/* append dish to all meals upond form submittion*/
document.querySelector('#submitbtn').addEventListener('click', function(){
  
  

  let dishname = document.querySelector('#dishname').value;
  let price = document.querySelector('#pricee').value;
  let chefname = document.querySelector('#chefname').value;
 
  
  /* create box */
  var box1 = document.createElement('div');
  box1.className= 'box';


  /*for image */

  var img1 = document.createElement('img');
  const image_input = document.querySelector("#image_input");
  var uploaded_image;

  
  image_input.addEventListener('change', function() {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      uploaded_image = reader.result;
      img1.setAttribute('src', `url(${uploaded_image})`);
    });
    reader.readAsDataURL(this.files[0]);
  });
  box1.appendChild(img1);


  /*for dish name */
  var h33 = document.createElement('h3');
  h33.innerText = dishname;
  box1.appendChild(h33);

  /* create span for price of meal */
  var span1 = document.createElement('span');
  span1.className='price';
  span1.innerText = price;
  box1.appendChild(span1);


  /*for chefname*/
  var h22 = document.createElement('h2');
  h22.innerText = chefname;
  box1.appendChild(h22);

  
  /*for starts */
  var stars1 = document.createElement('div');
  stars1.className = "stars"
  let i1 = document.createElement('i');
  i1.className= 'far fa-star';
  stars1.appendChild(i1);
  let i2 = document.createElement('i');
  i2.className= 'far fa-star';
  stars1.appendChild(i2);
  let i3 = document.createElement('i');
  i3.className= 'far fa-star';
  stars1.appendChild(i3);
  let i4 = document.createElement('i');
  i4.className= 'far fa-star';
  stars1.appendChild(i4);
  let i5 = document.createElement('i');
  i5.className= 'far fa-star';
  stars1.appendChild(i5);

  box1.appendChild(stars1);


  



  document.querySelector('.box-container').appendChild(box1);
  document.querySelector('.popup').style.display = 'none'; 


});







menu.onclick = () =>{

  menu.classList.toggle('fa-times');
  navbar.classList.toggle('active');

}

window.onscroll = () =>{

  menu.classList.remove('fa-times');
  navbar.classList.remove('active');

  if(window.scrollY > 60){
    document.querySelector('#scroll-top').classList.add('active');
  }else{
    document.querySelector('#scroll-top').classList.remove('active');
  }

}

function loader(){
  document.querySelector('.loader-container').classList.add('fade-out');
}

function fadeOut(){
  setInterval(loader, 3000);
}

window.onload = fadeOut();


