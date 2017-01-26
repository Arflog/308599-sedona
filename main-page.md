<!DOCTYPE html>
<html lang="ru">
  <head>
    <meta charset="utf-8">
    <title>Welcome to the Sedona</title>
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
                    <a href="#"><li class="right-column">Гостиницы</li></a>
                </ul>
            </nav>
        </div>
    </header>
    <main>
<!--  растрированный текст в изображениях (welcome to the gorgeous Sedona... etc)-->
        <div class="promo">
            <img src="#" alt="Добро пожаловать!">
            <img src="#">
            <img src="#">
            <img src="#">
          <article class="main-slogan">
            <h1 class="main-title">Седона &#8211; небольшой городок в Аризоне, заслуживающий большего!</h1>
            <p>Рассмотрим 5 причин, по которым Седона круче, чем каньон!</p>
          </article>
        </div>
        <section>
            <div class="reason">
                <h2 class="sub-title">Настоящий городок</h2>
                <p>&#8211;№1&#8211;</p>
                <p>Седона – не аттракцион для туристов, там течет своя жизнь</p>
            </div>
            <div class="photo-item">
                <img src="#" class="photo" alt="Мотель">
            </div>    
        </section>
        <article class="facilities">
            <span>Жилье</span>
            <p>Рекомендуем пожить в настоящем мотеле, все как в кино!</p>
        </article>
        <article class="facilities">
            <span>Еда</span>
            <p>Всегда заказывайте фирменный бургер, Вы не разочаруетесь!</p>
        </article>
        <article class="facilities">
            <span>Сувениры</span>
            <p>Не только китайского, но и местного производства!</p>
        </article>
         <section>
            <div class="photo-item">
                <img src="#" class="photo" alt="Скалы">
            </div>    
            <div class="reason">
                <h2 class="sub-title">Там есть мост дьявола</h2>
                <p>&#8211;№2&#8211;</p> 
                <p>Да, по нему можно пройти! Если конечно Вы осмелитесь</p>
            </div>    
        </section>
        <section>
            <div class="reason">
                <h2 class="sub-title">Небольшая площадь</h2>
                <p>&#8211;№3&#8211;</p>
                <p>Все достопримечательности находятся очень близко</p>
            </div>
            <div class="reason">
                <h2 class="sub-title">Красивая дорога</h2>
                <p>&#8211;№4&#8211;</p>
                <p>Ехать из Лас-Вегаса в Седону совсем не скучно!</p>
            </div>
            <div class="reason">
                <h2 class="sub-title">Мало туристов</h2>
                <p>&#8211;№5&#8211;</p>
                <p>Большинство едет в Гранд Каньон и толпится там</p>
            </div>
            <div class="search">
                <h2 class="search-title">Заинтересовались?</h2>
                <p>Укажите предполагаемые даты поездки, 
                и мы покажем Вам лучшие предложения гостиниц в Седоне</p>    
                <button type="button" class="btn-search">Поиск гостиницы в Седоне</button>
            </div>
            <div class="form">
            <form>
                <label for="from">Дата заезда:</label>   
                <input type="text" id="from">
                <button type="button" class="plan">Календарь</button>
                
                    <label for="to">Дата выезда:</label>   
                    <input type="text" id="to">
                    <button type="button" class="plan">Календарь</button>
                    
                <label for="adult">Взрослые</label>
                <button type="button" class="btn-minus">Минус</button>
                <input type="text" id="adult">
                <button type="button" class="btn-plus">Плюс</button>
                <input type="text" id="adult">
                
                <label for="child">Дети</label>
                <button type="button" class="btn-minus">Минус</button>
                <input type="text" id="child">
                <button type="button" class="btn-plus">Плюс</button>
                <input type="text" id="child">
                
                <button type="button" class="find">Найти</button>
            </form>
                <div class="container">
                    <img src="#" alt="Карта">
                </div>     
            </div>    
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