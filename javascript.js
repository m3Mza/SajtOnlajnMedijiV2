 
/* Dugme za pop-up mapu */

   const showImageButton = document.getElementById("show-image-button");
   const myImage = document.getElementById("my-image");
   showImageButton.addEventListener("click", () => {
	  myImage.hidden = !myImage.hidden;
   });

/* Linkovi za slike sa slideshowa */

const slika1 = document.getElementById("slika1"); 
  	const slika2 = document.getElementById("slika2");
  	const slika3 = document.getElementById("slika3");
  	const slika4 = document.getElementById("slika4");
  	const slika5 = document.getElementById("slika5");

  slika1.addEventListener("click", () => {
    window.location.href = "https://cyberpunk.fandom.com/wiki/Solo";
  });

  slika2.addEventListener("click", () => {
    window.location.href = "https://cyberpunk.fandom.com/wiki/Netrunner?so=search";
  });

  slika3.addEventListener("click", () => {
    window.location.href = "https://cyberpunk.fandom.com/wiki/Rockerboy";
  });

  slika4.addEventListener("click", () => {
    window.location.href = "https://cyberpunk.fandom.com/wiki/Nomad?so=search"; 
  });

  slika5.addEventListener("click", () => {
    window.location.href = "https://cyberpunk.fandom.com/wiki/Fixer?so=search"; 
  });
	  
	  
/* Menjajuca slika Night City-ja */

  const image = document.getElementById("cyberpunkeasy");
  image.addEventListener("click", function() {
	if (image.src.match("easy.jpeg")) {
	  image.src = "hard.jpeg";
	} else {
	  image.src = "easy.jpeg";
	}
  });

  /* Kontakt forma */

  const contactForm = document.getElementById("contact-form");
		contactForm.addEventListener("submit", (event) => { /* strelica sluzi kao skracenica za "function", funkcija se obavlja nakon sto se trigeruje event */
		  event.preventDefault(); /* Ukoliko program ne ide kako treba event se prekida */
		  fetch("send-email.php", {   
		  })
			.catch((error) => {
			  alert("Greska.");
			});
		});

   
