document.addEventListener('DOMContentLoaded',async () => {
    await ucitajFooter();
}, false);

const ucitajFooter = () => {
    const gridContainer = document.getElementById('Footer');
    
    let gridElement = `
    <div class="container-foot">
        <div class="footer-main">
            <ul>
                <li>
                    <b>INFORMACIJE I KONTAKT</b>
                </li>
                <li>
                    <a>O nama</a>
                </li>
                <li>
                    <a>Uslovi koristenja</a>
                </li>
                <li>
                    <a>Online sigurnost</a>
                </li>
                <li>
                    <a>marketing</a>
                </li>
            </ul>
            <ul>
                <li>
                    <b>OSTALI LINKOVI</b>
                </li>
                <li>
                    <a>OLX.ba blog</a>
                </li>
                <li>
                    <a>OLX.ba na Facebooku</a>
                </li>
                <li>
                    <a>Shopovi</a>
                </li>
                <li>
                    <a>Pridruži se OLX timu</a>
                </li>
                <li>
                    <a>Šta je OLX dostava</a>
                </li>
            </ul>
            <ul>
                <li>
                    <b>VAŠ OLX</b>
                </li>
                <li>
                    <a> OLX kredit</a>
                </li>
                <li>
                    <a>Sigurnost i zaštita</a>
                </li>
                <li>
                    <a>Pravila i uslovi korištenja</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a>Podrška korisnicima</a>
                </li>
            </ul>
            <ul>
                <li>
                    <a>Podrška korisnicima</a>
                </li>
            </ul>
        </div>
        <div class="copyright">
            Copyright © 2023 - 2024 SystemDuo. Sva prava zadržana.
        </div>
    </div>
    `
    let text ="";
    for (let i = 0; i<1; i++){
        text += gridElement;
    }

    gridContainer.innerHTML = text
}