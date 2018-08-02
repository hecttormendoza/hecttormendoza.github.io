var formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 0
});

$(document).ready(function () {
  showProjects();
  fillSelects();
});


function showProjects () {
  projects.map(item => {
    item.inmuebles.map(property => {
      let html_structure = `
        <div class="col s12 m6 l4">
          <div class="card">
            <div class="card-image">
              <img src="assets/imgs/marina-01-min.jpg" alt="">
              <span class="card-title">`+property.type+`</span>
            </div>
            <div class="card-content">
              <p class="name">`+property.inmueble+`</p>
              <p class="price">`+formatter.format(property.precio)+`</p>
            </div>
            <div class="card-action">
              <div class="meta">
                <img src="assets/imgs/metros_cuadrados.svg" alt="metros cuadrados" />
                `+property.metas.metros_cuadrados+` m<sup>2</sup>
              </div>
              <div class="meta">
                <img src="assets/imgs/rooms.svg" alt="Cuartos" />
                `+property.metas.rooms+`
              </div>
              <div class="meta">
                <img src="assets/imgs/bathrooms.svg" alt="bathrooms" />
                `+property.metas.bathrooms+`
              </div>
              <div class="meta">
                <img src="assets/imgs/garage.svg" alt="Estacionamiento" />
                `+property.metas.garage+`
              </div>
            </div>
          </div>
        </div>
      `;
      $('.projects-container').append(html_structure);
    });
  })
}

function fillSelects () {
  projects.map(item => {
    console.log(item.zona);
    let option = `
      <option value="`+item.zona+`">`+(item.zona).toUpperCase()+`</option>
    `;
    $('.zona-list select').append(option);
  });
}
