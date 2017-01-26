<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Поиск гостиницы</title>
  </head>
  <body>
    <header class="main-header">
        <div class="container">
            <div class="logo">
                <img src="#" alt="Логотип">
            </div>    
            <nav class="main-nav">
                <ul>
                    <a href="#"><li class="left-column">Информация</li></a>
                    <a href="#"><li class="left-column">Фото и видео</li></a>
                    <a href="#"><li class="right-column">Карта штата</li></a>
                    <a href="#"><li class="right-column active">Гостиницы</li></a>
                </ul>
            </nav>
        </div>
    </header>
    <main>
            <div class="filter-form">
                <form action="echo" method="post">
                    <faildset class="col-1">
                        <legend>Инфраструктура:</legend>
                        
                            <input type="checkbox" id="one" checked> 
                            <label for="one">Бассейн</label>
                
                            <input type="checkbox" id="two"> 
                            <label for="two">Парковка</label>
                
                            <input type="checkbox" id="three"> 
                            <label for="three">Wi-Fi</label>
                    </faildset>
                    <faildset class="col-2">
                        <legend>Тип жилья:</legend>
                        
                            <input type="checkbox" id="four" checked> 
                            <label for="four">Гостиница</label>
                        
                            <input type="checkbox" id="five" checked> 
                            <label for="five">Мотель</label>
                        
                            <input type="checkbox" id="six" checked> 
                            <label for="six">Апартаменты</label>
                    </faildset>  
                    <faildset class="col-3">
                            <legend>Стоимость в сутки (Р):</legend>
                                <div class="range">
                                    <label for="range-1">От</label>
                                    <input type="text" id="range-1">
                                </div> 
                                <div class="range">
                                    <label for="range-2">До</label>
                                    <input type="text" id="range-2">
                                </div> 
                                <div class="range-scale">
                                    <button class="range-btn btn-from" type="button">От</button>
                                    <button class="range-btn btn-to" type="button">До</button>
                                </div>
                        <button class="btn-show" type="submit">Показать</button>
                    </faildset>  
        </form>    
        </div>
        <div class="hotel-shop">
            <h2>Найдено: 3</h2>
                <ul>
                    <li>Сортировка:</li>
                    <a href="#" class="active"><li>По цене</li></a>
                    <a href="#"><li>По типу</li></a>
                    <a href="#"><li>По рейтингу</li></a>
                </ul>    
        </div> 
        <article>
            <img src="#" alt="Amara">
            <h2 class="shop-title">Amara Resort &amp; spa</h2>
            <span class="host">Гостиница</span>
            <span class="price">От 3500 р.</span>
            <button type="button" >Подробнее</button>
            <button type="button">Забронировать</button>
            <span class="stars">Рейтинг: 8,5</span>
        </article> 
        <article>
            <img src="#" alt="Desert">
            <h2 class="shop-title">Desert quail inn</h2>
            <span class="host">Мотель</span>
            <span class="price">)т 2000 р.</span>
            <button type="button" >Подробнее</button>
            <button type="button">Забронировать</button>
            <span class="stars">Рейтинг: 8,9</span>
        </article> 
        <article>
            <img src="#" alt="Diablo">
            <h2 class="shop-title">Villas at Poco Diablo</h2>
            <span class="host">Апартаменты</span>
            <span class="price">От 4000 р.</span>
            <button type="button" >Подробнее</button>
            <button type="button">Забронировать</button>
            <span class="stars">Рейтинг: 9,2</span>
        </article> 
    </main>    
    <footer class="main-footer">
        <div class="container">
            <section class="footer-hashtag">
                <a href="#"><p>#visitsedona</p></a>
            </section>
            <section class="footer-social">
                <a class="social-btn social-btn-tw" href="#">Twitter</a>
                <a class="social-btn social-btn-fb" href="#">Facebook</a>
                <a class="social-btn social-btn-tb" href="#">YouTube</a>
            </section>
            <section class="footer-copyright">
                Website by 
            <a class="btn" href="https://htmlacademy.ru">HTML Academy</a>
            </section>
        </div>
    </footer>
  </body>
</html>