const renderBookShop = () => {


    const renderHtml = (tag, className, parentNode, index = 0) => {
        const element = document.createElement(tag);
        element.classList.add(className);
        document.querySelectorAll(parentNode)[index].append(element);
    }
    
    const renderBook = (book, data, parentNode) => {
        renderHtml('article', 'book', parentNode); //'.book-list'
        renderHtml('img', 'book__image', '.book', book);
        renderHtml('h3', 'book__title', '.book', book);
        renderHtml('h4', 'book__author', '.book', book);
        renderHtml('div', 'book__price-block', '.book', book);
        renderHtml('div', 'book__price-text', '.book__price-block', book);
        renderHtml('div', 'book__price', '.book__price-block', book);
        renderHtml('button', 'book__add-cart', '.book', book);
        renderHtml('button', 'book__show-more', '.book', book);
        renderHtml('div', 'book__modal', '.book', book);
        renderHtml('p', 'book__show-more-text', '.book__modal', book);
        renderHtml('button', 'modal-close', '.book__modal', book);
        
        document.querySelectorAll('.book__image')[book].src = data[book].imageLink;
        document.querySelectorAll('.book__image')[book].alt = data[book].title;
        document.querySelectorAll('.book__title')[book].innerHTML = data[book].title;
        document.querySelectorAll('.book__author')[book].innerHTML = data[book].author;
        document.querySelectorAll('.book__price-text')[book].innerHTML = 'Book price: ';
        document.querySelectorAll('.book__price')[book].innerHTML = data[book].price;
        document.querySelectorAll('.book__show-more-text')[book].innerHTML = data[book].description;
        document.querySelectorAll('.book__show-more')[book].innerHTML = 'Show More';
        document.querySelectorAll('.book__add-cart')[book].innerHTML = 'Add to cart';
        document.querySelectorAll('.modal-close')[book].innerHTML = 'close';

        return this;
    }

    const bookActions = () => {

        document.querySelectorAll('.book__show-more').forEach((btn, index) => {
            btn.addEventListener('click', () => {
                deleteActiveClassFromModale();
                document.querySelectorAll('.book__modal')[index].classList.add('active');
            });
        });
            
        document.querySelectorAll('.modal-close').forEach((btn) => {
            btn.addEventListener('click', () => {
                deleteActiveClassFromModale();
            });
        });

        const deleteActiveClassFromModale = () => {
            document.querySelectorAll('.book__modal').forEach((elem) => {
                elem.classList.remove('active');
            })
        }
    
    }

    renderHtml('div', 'wrapper', 'body');
    renderHtml('header', 'header', '.wrapper');
    renderHtml('h1', 'logo', '.header');
    renderHtml('h2', 'cart-title', '.header');
    document.querySelector('.logo').innerHTML = 'JS Book Shop';
    document.querySelector('.cart-title').innerHTML = 'Your Cart';
    renderHtml('main', 'main', '.wrapper');
    renderHtml('section', 'book-catalog', '.main');
    renderHtml('aside', 'cart', '.main');
    renderHtml('footer', 'footer', '.wrapper');
    renderHtml('div', 'book-list', '.book-catalog');

    renderHtml('div', 'cart-sum', '.cart');
    const cart = document.querySelector('.cart');
    //cart.innerHTML = 'Your cart:';

    let cartSum = 0;
    fetch('./data/books.json')
            .then(response => {
                return response.json();
            })
            .then(data => {

                for (let book in data) {
                    renderBook(book, data, '.book-list');
                }
                bookActions();          
                

                let addToCartButtons =  document.querySelectorAll('.book__add-cart');
                
                addToCartButtons.forEach((btn, index) => {

                    btn.addEventListener('click', () => {
                        renderHtml('article', 'book-cart', '.cart'); 
                        let cartBooksArray = cart.querySelectorAll('.book-cart');
                        
                        renderHtml('h3', 'book-cart__title', '.book-cart', cartBooksArray.length - 1);
                        renderHtml('h4', 'book-cart__author', '.book-cart', cartBooksArray.length - 1);
                        renderHtml('div', 'book-cart__price', '.book-cart', cartBooksArray.length - 1);
                        renderHtml('button', 'book-cart__remove', '.book-cart', cartBooksArray.length - 1);

                        document.querySelectorAll('.book-cart__title')[cartBooksArray.length - 1].innerHTML = data[index].title;
                        document.querySelectorAll('.book-cart__author')[cartBooksArray.length - 1].innerHTML = data[index].author;
                        document.querySelectorAll('.book-cart__price')[cartBooksArray.length - 1].innerHTML = data[index].price;
                        document.querySelectorAll('.book-cart__remove')[cartBooksArray.length - 1].innerHTML = 'Remove';
                        cartSum = cartSum + data[index].price;
                        document.querySelector('.cart-sum').innerHTML = cartSum;
                    })
                
                }) 
                
                const cartSumElem = document.querySelector('.cart-sum');
                let removeButtons = document.querySelectorAll('.book-cart__remove');
                cartSumElem.addEventListener('DOMNodeInserted', () => {
    
                    removeButtons = document.querySelectorAll('.book-cart__remove');
                    removeButtons.forEach((btnRemove, indexRemove) => {
                        console.log(indexRemove)
                        btnRemove.addEventListener('click', () => {
                            cartSum = cartSum - +document.querySelectorAll('.book-cart__price')[indexRemove].innerHTML;
                            document.querySelector('.cart-sum').innerHTML = cartSum;
                            document.querySelectorAll('.book-cart')[indexRemove].remove();
                        })
                    });
    
                })


            })

            
    // end fetch  
        

    





            
            
            

}

renderBookShop();



