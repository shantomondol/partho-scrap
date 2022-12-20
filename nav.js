const navsData = [
    {}
];


function navTemplate(nav) {
    return `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
               <a class="logo" href="index.html"><img src="./images/logo.png"></a>
               <p class="logo-title">Partho Scrap</p>
               <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span class="navbar-toggler-icon"></span>
               </button>
               <div class="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul class="navbar-nav mr-auto">
                     <li class="nav-item">
                        <a class="nav-link" href="index.html">Home</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="about.html">About</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="services.html">Services</a>
                     </li>
                     <li class="nav-item">
                        <a class="nav-link" href="contact.html">Contact Us</a>
                     </li>
                  </ul>
               </div>
            </nav> 
    `;
}


document.getElementById("nav").innerHTML = `
    ${navsData.map(navTemplate).join("")}
  `;