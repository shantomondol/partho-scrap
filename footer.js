const footersData = [
    {}
];


function footerTemplate(footer) {
    return `
    <div class="row">
                    <div class="col-lg-4 col-sm-12">
                        <div class="map_text">
                            <img src="./images/map-icon.png" class="image_main"><span class="padding_left_10"> Ajman,Industrial Area-2 <br>Post Box: 9400, Office no: 404</span>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-12">
                        <div class="map_text">
                            <a href="tel:+97165377282"><img src="./images/call-icon.png" class="image_main"><span class="padding_left_10">(+97165377282)</span></a>
                        </div>
                    </div>
                    <div class="col-lg-4 col-sm-12">
                        <div class="map_text">
                            <a href="mailto:parthoscrap@gmail.com"><img src="./images/mail-icon.png" class="image_main"><span class="padding_left_10">parthoscrap@gmail.com</span></a>
                        </div>
                    </div>
                </div>
    `;
}


document.getElementById("footer").innerHTML = `
    ${footersData.map(footerTemplate).join("")}
  `;