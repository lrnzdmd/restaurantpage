import createLogo from '../modules/logo.js';
import pizzabirdimg from '../images/pizzabirdimg.png';
import birdiesoupimg from '../images/birdiesoupimg.png';

export default function createMenu() {
    const content = document.getElementById('content');

    const pizzaBird = new MenuItem('PIZZA BIRD', '€ 4.95',
        'Our original pizza bird, with all the flavour of the bird, it is really just a plain white pizza with sunflower seeds on top.',
        pizzabirdimg);
    const birdieSoup = new MenuItem('BIRDIE SOUP', '€ 3.50',
        'Everyday the chef makes soup for us, everyday it is different, everyday it is good soup',
        birdiesoupimg);

    const menu = [pizzaBird, birdieSoup];

    createLogo("small");

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('menuitems');

    menu.forEach(item => {
        const itemDiv = document.createElement('div');
        itemDiv.classList.add('menuitem');
        const infoDiv = document.createElement('div');
        infoDiv.classList.add('plateinfo');
        const nameDiv = document.createElement('div');
        nameDiv.classList.add('platename');
        const nameP = document.createElement('p');
        nameP.textContent = item.name;
        const separatorDiv = document.createElement('div');
        separatorDiv.classList.add('separator');
        const circleDiv1 = document.createElement('div')
        circleDiv1.classList.add('circle');
        const lineDiv = document.createElement('div');
        lineDiv.classList.add('line');
        const circleDiv2 = document.createElement('div')
        circleDiv2.classList.add('circle');
        const priceP = document.createElement('p');
        priceP.textContent = item.price;
        const descriptionP = document.createElement('p');
        descriptionP.textContent = item.description;
        const plateImg = new Image();
        plateImg.src = item.image;

        separatorDiv.appendChild(circleDiv1);
        separatorDiv.appendChild(lineDiv);
        separatorDiv.appendChild(circleDiv2);

        nameDiv.appendChild(nameP);
        nameDiv.appendChild(separatorDiv);
        nameDiv.appendChild(priceP);

        infoDiv.appendChild(nameDiv);
        infoDiv.appendChild(descriptionP);

        itemDiv.appendChild(infoDiv);
        itemDiv.appendChild(plateImg);
        menuDiv.appendChild(itemDiv);

    });
    content.appendChild(menuDiv);
}


class MenuItem {
    constructor(name, price, description, image) {
        this.name = name;
        this.price = price;
        this.description = description;
        this.image = image; 
    }
}