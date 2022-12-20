const copyrightsData = [
    {}
];


function copyrightTemplate(copyright) {
    return `
    <div class="container">
                <p class="copyright_text">Copyright 2022 All Right Reserved By.<a href="https://shantomondol.github.io/shanto/"> Shanto Mondol</p>
            </div>
    `;
}


document.getElementById("copyright").innerHTML = `
    ${copyrightsData.map(copyrightTemplate).join("")}
  `;