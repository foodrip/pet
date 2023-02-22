
let container = document.querySelector(`.films`);
for(let i = 0; i < films.length; i++) 
container.innerHTML += `
    <div class="col">
        <a href="film.html" class="text-decoration-none">
            <div class="card">
                <img src="${films[i].img}" class="card-img-top" alt="">
                <div class="card-body">
                    <p class="card-text">${films[i].title}</p>
            </div>
        </div>
    </a>
</div>`;