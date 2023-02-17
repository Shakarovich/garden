import SwiperCore, {Autoplay,Pagination,Navigation} from 'swiper/core';
import { Swiper, SwiperSlide } from 'swiper/react';
import {motion} from 'framer-motion';
import 'swiper/css';
import logo from './assets/photo_2023-02-17 01.31.00.jpeg';
import cr from './assets/cr.jpg';
import corn from './assets/corn-husk.webp';
import carb from './assets/carbage.jpg';
import cherry from './assets/cherries.webp';
import earl from './assets/earl.webp';
import pot from './assets/potatoes.webp';
import g1 from './assets/g1.webp';
import gr from './assets/garden.jpeg';
import phone from './assets/phone.svg';
import calen from './assets/calendar.svg';
import pin from './assets/pin.svg';
import ins from './assets/instagram.svg';
import fac from './assets/facebook.svg';



function App() {

  SwiperCore.use([Autoplay,Pagination,Navigation]);
  const transition = {duration: 2, type: "spring"}

  return (
     <div>
      <motion.header
          initial={{top: "3rem"}}
          whileInView={{top:"1.5rem"}}
          transition={transition}
          className="header">
        <div className="container">
          <div className="header__wrapper">
            <div className="header__block">
              <a href="/" className="header__logo">
                <img src={logo} alt="photo"
                     style={{borderRadius:'5px'}}
                />
              </a>
            </div>

            <nav className="nav">
              <a href="#" className="nav__link active">Главная</a>
              <a href="#pr" className="nav__link">Наши продукты</a>
              <a href="#ab" className="nav__link">О нас</a>
              <a href="#op" className="nav__link">О продуктах</a>
            </nav>
          </div>
        </div>
      </motion.header>
      <section className="intro"
        style={{backgroundImage: `url(${gr})`}}
      >
        <div className="container">
          <div className="intro__content">
            <div
                className="intro__block">
              <Swiper
                  centeredSlides={true} autoplay={{
                "delay": 3500,
                "disableOnInteraction": false
              }} pagination={{
                "clickable": true
              }} navigation={true}
                  slidesPerView={1}
                  spaceBetween={50}
                  scrollbar={{ draggable: true }}
              >
                <SwiperSlide>
                  <h1 className="intro__title" style={{letterSpacing:'8px'}}>
                    Высококачественный посадочный материал
                  </h1>
                  <p className='intro__text'>Для выращивания овощей и фруктов, овощей салатов мы закупаем только высококачественный посадочный материал у ведущи мировых производителей.</p>
                </SwiperSlide>
                <SwiperSlide>
                  <h1 className="intro__title" style={{letterSpacing:'8px'}}>
                    Экологически чистые продукты
                  </h1>
                  <p className='intro__text'>Люди, серьезно относящиеся к своему здоровью, выбирают экологически чистые продукты.
                    Речь идет о продуктах, выращенных на полях без использования пестицидов, инсектицидов и химических удобрений.
                    Для улучшения их роста используются исключительно натуральные вещества. Это могут быть такие давно известные человечеству удобрения, как костная мука, навоз, морские водоросли.</p>
                </SwiperSlide>
              </Swiper>
            </div>
          </div>
        </div>
      </section>
      <motion.section
          initial={{y: "1rem"}}
          whileInView={{y:"-3rem"}}
          transition={transition}
          className="info">
        <div className="container">
          <div className="wrapper">
            <div className="block">
              <div className="info__item">
                <div className="info__img">
                  <img src={phone} alt=""/>
                </div>
                <h4 className="info__title">
                  <a href='tel:+998909202408'>Позвоните нам сейчас</a>
                </h4>
                <p className="info__text">
                Свяжитесь с нами прямо сейчас, и мы предоставим вам нащи отборные продукты
                </p>
              </div>
            </div>
            <div className="block">
              <div className="info__item">
                <div className="info__img">
                  <img src={calen} alt=""/>
                </div>
                <h4 className="info__title">
                  ПОЛУЧИТЬ ЗАЯВКУ
                </h4>
                <p className="info__text">
                  Свяжитесь с нами по нашему номеру телефона и вы можете получить заявку
                </p>
              </div>
            </div>
            <div className="block">
              <div className="info__item">
                <div className="info__img">
                  <img src={pin} alt=""/>
                </div>
                <h4 className="info__title">
                  <a href='https://goo.gl/maps/tvpM4tSNXpZ6Nk1dA' >Найти нас на карте</a>
                </h4>
                <p className="info__text">
                Республика Узбекистан, Ташкентская область, Куйичирчикский р-н
                </p>
              </div>
            </div>
          </div>
        </div>
      </motion.section>


      <motion.section
          initial={{y: "4rem"}}
          whileInView={{y:"1rem"}}
          transition={transition}
          className="section" id='pr'>
        <div className="container">
          <h2 className="block__title">
            Наши продукты
          </h2>
          <a href="#" className="block__link">
            ИЗБРАННЫЕ СТАТЬИ
          </a>

          <div className="wrapper">
            <div className="block">
              <a href="#" className="services__item">
                <div className="services__content"
                    // style={{backgroundImage:url('img/diagnostic.jpg')}}
                >
                  <div className="services__content-item">
                    <div className="services__img">
                      <img src={corn} alt="" />
                    </div>
                    <p className="services__text">
                      Самый лучший сорт кукурузы
                    </p>
                  </div>
                </div>
                <h3 className="services__title">

                </h3>
              </a>
            </div>
            <div className="block">
              <a href="#" className="services__item">
                <div className="services__content"
                    // style="background-image:url('img/tires.jpg');"
                >
                  <div className="services__content-item">
                    <div className="services__img">
                      <img src={cr} alt="" />
                    </div>
                    <p className="services__text">
                      Самый лучший сорт морковьи
                    </p>
                  </div>
                </div>
                <h3 className="services__title">

                </h3>
              </a>
            </div>
            <div className="block">
              <a href="#" className="services__item">
                <div className="services__content"
                    // style="background-image:url('img/engine.jpg');"
                >
                  <div className="services__content-item">
                    <div className="services__img">
                      <img src={carb} alt=""/>
                    </div>
                    <p className="services__text">
                      Самый лучший сорт капусты
                    </p>
                  </div>
                </div>
                <h3 className="services__title">

                </h3>
              </a>
            </div>
          </div>
        </div>
      </motion.section>

      <section className="section about" id='ab'>
        <div className="container">
          <div className="about__wrapper">
            <div className="about__block">
              <h2 className="block__title text-white">
                Немного о садоводстве
              </h2>
              <p className="about__text">
                Нет ничего лучше, чем выращивать съедобные огороды и наслаждаться «плодами» своего труда. Здесь вы найдете ряд съедобных растений, от классических трав до ваших любимых фруктов и овощей. Если вы только начинаете или уже являетесь опытным садоводом, вы обязательно найдете именно то, что ищете, когда дело доходит до съедобного садоводства. Узнайте,  информацию о садоводстве, которая охватывает все основы, включая проектирование, подготовку, посадку, уход, сбор урожая и многое другое.И еще мы сможем предоставить все услуги
              </p>
              <a href="#" className="about__link">
                {/*MORE ABOUT US*/}
              </a>
            </div>


            <img src={cherry} alt="" className="about__img" style={{borderRadius:'10px'}}/>
          </div>

        </div>

      </section>

      <section className="section process" id='op'>
        <div className="container">
          <motion.h2
              initial={{y: "4rem"}}
              whileInView={{y:"1rem"}}
              transition={transition}
              className="process__title">Только самые высококачественные сорты</motion.h2>
          <motion.h3
              initial={{y: "4rem"}}
              whileInView={{y:"1rem"}}
              transition={transition}
              className="process__subtitle">Наши продукты</motion.h3>
          <motion.div
              initial={{y: "4rem"}}
              whileInView={{y:"1rem"}}
              transition={transition}
              className="wrapper">
            <div className="block">
              <div className="process__item">
                <h4 className="info__title">1.Фрукты высщих сортов</h4>
                <img src={earl} alt='ph' width={'85%'} style={{borderRadius:'10px'}}/>
                <p className="info__text">
                  Внешний вид — комплексный показатель свежих плодов, включающий единичные показатели: свежесть, целостность, окраску, форму, состояние поверхности, зрелость.

                  Свежесть — один из наиболее важных показателей качества, который зависит от плотности тканей кожицы и мякоти, степени зрелости плодов. Исключение — орехи, у которых этот показатель не нормируется стандартами. Свежие плоды должны быть не увядшими.

                  Размер свежих плодов определяют по их наибольшему поперечному диаметру, а фундука — по массе.
                </p>
              </div>
            </div>
            <div
                className="block">
              <div className="process__item">
                <h4 className="info__title">2.Овощи высщих сортов</h4>
                <img src={pot} alt='ph' width={'80%'} style={{borderRadius:'10px'}}/>
                <p className="info__text">
                  На огороде выделяют группу основных овощей, к которым относят:
                  корнеплоды (морковь, свекла);
                  группу пасленовых (томат, перец, баклажан);
                  тыквенные культуры (кабачок, огурец);
                  разные капустные (кочанная капуста, цветная, брокколи, пекинская).
                  Объем выращиваемых овощей складывается из тех, что предназначены для употребления в свежем виде, и тех, которые пойдут на домашние заготовки и хранение. Урожайность культур зависит от плодородия участка, климатических особенностей зоны, умений и навыков самих огородников.

                </p>
              </div>
            </div>
            <div className="block">
              <div className="process__item">
                <h4 className="info__title">03.Лучшее орощение</h4>
                <img src={g1} alt='ph' width={'85%'} style={{borderRadius:'10px'}}/>
                <p className="info__text">
                  Капельное орошение — метод полива, при котором вода подаётся непосредственно в прикорневую зону выращиваемых растений регулируемыми малыми порциями с помощью дозаторов-капельниц. Позволяет получить значительную экономию воды и других ресурсов (удобрений, трудовых затрат, энергии и трубопроводов). Капельное орошение также даёт другие преимущества (более ранний урожай, предотвращение эрозии почвы, уменьшение вероятности распространения болезней и сорняков).
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
      <footer className="footer">
        <div className="container">
          <div className="footer__wrapper">
            <p className="copyright">
              © 2021 Все права зашищены
            </p>
            <div className="footer__soc">
              <a href="#" className="footer__soc-link">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12.5 0C5.5975 0 0 5.5975 0 12.5C0 19.4025 5.5975 25 12.5 25C19.4025 25 25 19.4025 25 12.5C25 5.5975 19.4025 0 12.5 0ZM8.86765 18.8965H5.82333V9.73759H8.86765V18.8965ZM7.34558 8.48694H7.32574C6.30417 8.48694 5.64346 7.7837 5.64346 6.90479C5.64346 6.00605 6.32439 5.32227 7.3658 5.32227C8.40721 5.32227 9.04808 6.00605 9.06792 6.90479C9.06792 7.7837 8.40721 8.48694 7.34558 8.48694ZM19.8448 18.8965H16.8009V13.9967C16.8009 12.7653 16.3601 11.9255 15.2586 11.9255C14.4176 11.9255 13.9168 12.492 13.6967 13.0388C13.6162 13.2345 13.5965 13.508 13.5965 13.7817V18.8965H10.5524C10.5524 18.8965 10.5923 10.5968 10.5524 9.73759H13.5965V11.0344C14.0011 10.4103 14.7249 9.52263 16.3401 9.52263C18.343 9.52263 19.8448 10.8316 19.8448 13.6448V18.8965Z" fill="black"/>
</svg>
              </a>
              <a href="#" className="footer__soc-link">
                <img src={fac} alt=""/>
              </a>
              <a href="https://instagram.com" target="_blank" className="footer__soc-link">
                <img src={ins} alt=""/>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
