const createMainLayout = () => {
    const header = document.createElement('header');
    header.classList.add('header');
    const main = document.createElement('main');
    main.classList.add('main');
    const footer = document.createElement('footer');
    footer.classList.add('footer');

    document.body.appendChild(header);
    document.body.appendChild(main);
    document.body.appendChild(footer);
}

createMainLayout();

