const showObjaviOglasOnClick = () => {
    document.getElementById("modal").style.display = "block";
}

const hideObjaviOglas = () => {
    document.getElementById("modal").style.display = "none";
}

const loadArticleGrid = async () => {
    const articleGridId = "grid-list"
    const gridListElement = document.getElementById(articleGridId);

    const products = await (await fetch('http://localhost:3000/products',{
        method: "GET"
    })).json();

    const htmlElements = products.map(item => {
        const link = `./product/index.html?id=${item.id}`
        return `
        
        <li>
            <a href="${link}">
                <card>
                    <img src="${item.imageURL || "../HTML.irhan/olx-clonee/addVehicle/index.html"}" />
                    <div class="card-body">
                        <h1>
                        ${item.title}
                        </h1>
                        <span class="tag">Novo</span>
                        <div class="card-end">
                        <small>Prije 20 sati</small>
                        <span><b>${item.price} KM</b></span>
                        </div>
                    </div>
                </card>
            </a>
        </li>
    `
    })

    gridListElement.innerHTML = htmlElements.join("");

}


const loadTestItem = async () => {
    const products = await (await fetch('http://localhost:3000/properties', {
        method: "GET"
    })).json();
    
    console.log(products)
    
    const item = `
    <li>
    <a href="item">
        <img src="../HTML.irhan/olx-clone/images/items/placeholder.png" alt="plejsholder">
        <div class="card-body">
            <h1>Heading Lorem ipsum, dolor </h1>
            <span class="tag">Novo</span>
            <div class="card-end">
                <small>Prije 20 sati</small>
                <span><b>200,20 KM</b></span>
            </div>
        </div>
    </a>
</li>`
const gridList = document.getElementById("grid-list");
gridList.innerHTML = item
}



document.addEventListener('DOMContentLoaded', async () => {
    loadTestItem();
    hideObjaviOglas();
}, false);