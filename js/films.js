let container = document.querySelector(`.filma`);

let search = new URLSearchParams(window.location.search);

let film = films[search.get('i')];


сontainer.innerHTML += `
    <div class="card mb-3">
    <div class="row">
        <div class="col-md-4">
            <img src="${films.img}" alt="" class="img-fluid rounded-start">
        </div>
        <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">${films.title}</h5>
                <p class="card-text">${films.description}</p>
            </div>
        </div>
    </div>
</div>`