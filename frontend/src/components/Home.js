import { useEffect } from "react";
import TERETANA from "../images/teretana.jpg";
import TERETANA2 from "../images/teretana2.jpg";
import TERETANA3 from "../images/teretana3.jpg";
import BENCH from "../images/bench.jpg";
import klupa from "../images/klupa.jpg"
import ProductModal from "./ProductModal"
import SingleProductCarousel from "./SingleProductCarousel";

const product_list = [
  {
    id: 1,
    name: 'Benč',
    price: 199.99,
    currency: 'KM',
    src: 'https://m.media-amazon.com/images/I/51bRZ5ueqYL._AC_SL1001_.jpg',
    modal_id: 'modal1',
    description: "Benč brate",
    stars: 3,
    reviews: 15,
  },
  {
    id: 2,
    name: 'Mali Benč',
    price: 59.99,
    currency: 'KM',
    src: 'https://sc04.alicdn.com/kf/HTB1MOlzXACy2eVjSZSyq6xukVXah.jpg',
    modal_id: 'modal2',
    description: "Mali Benč brate",
    stars: 4,
    reviews: 15,
  },
  {
    id: 3,
    name: 'Veliki Benč',
    price: 299.99,
    currency: 'KM',
    src: klupa,
    modal_id: 'modal3',
    description: "VelikiBenč brate",
    stars: 5,
    reviews: 15,
  },
  {
    id: 4,
    name: 'Benč',
    price: 199.99,
    currency: 'KM',
    src: 'https://m.media-amazon.com/images/I/51bRZ5ueqYL._AC_SL1001_.jpg',
    modal_id: 'modal4',
    description: "Benč brate",
    stars: 3,
    reviews: 15,
  },
  {
    id: 5,
    name: 'Benč za klošare',
    price: 0.99,
    currency: 'KM',
    src: 'https://64.media.tumblr.com/f90a16b017022ebdbfcb90ff00210bd0/29ab9c9f820c7c54-9e/s400x600/a6ba8150128990d8d7bd848e6c5b6b6fac13de05.jpg',
    modal_id: 'modal5',
    description: "Benč brale",
    stars: 3,
    reviews: 15,
  },
];

const Home = () => {

  useEffect(() => {
    console.log(1);
    window.addEventListener("beforeunload", (ev) => {
      console.log(2);
      if (JSON.parse(localStorage.getItem("user")).keepLogin === false) {
        console.log(3);
        localStorage.removeItem("user");
      }
    });

    return () => {
      console.log(4);
      window.removeEventListener("beforeunload", () => { });
    };
  }, []);

  return (
    <div>
      <div className="js">
        <div
          id="carouselExampleIndicators"
          className="carousel slide"
          data-ride="carousel"
        >
          <ol className="carousel-indicators">
            <li
              data-target="#carouselExampleIndicators"
              data-slide-to="0"
              className="active"
            ></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
          </ol>
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={TERETANA} alt="First slide" />
              <div className="carousel-caption">
                <h1 className="display-2">MARINAC FITNESS</h1>
                <h3>Najbolji u onome sto radimo</h3>
              </div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={TERETANA2}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100"
                src={TERETANA3}
                alt="Third slide"
              />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleIndicators"
            role="button"
            data-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="sr-only">Next</span>
          </a>
        </div>

        <div className="product-area most-popular section">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="section-title">
                  <h2>NAJPRODAVANIJI ARTIKLI</h2>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="owl-carousel popular-slider">
                  {product_list.map((product, key) => <SingleProductCarousel key={key} {...product} />)}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="shop-services section home">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-service">
                <i className="ti-rocket"></i>
                <h4>besplatna dostava</h4>
                <p>za narudžbe preko 100KM</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-service">
                <i className="ti-reload"></i>
                <h4>povrat robe u slučaju nezadovoljstva</h4>
                <p>kroz 30 dana</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-service">
                <i className="ti-lock"></i>
                <h4>siguran način plaćanja</h4>
                <p>100% siguran način plaćanja</p>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-12">
              <div className="single-service">
                <i className="ti-tag"></i>
                <h4>odličan kvalitet</h4>
                <p>zagarantirano dobar kvalitet</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {product_list.map((product, key) => <ProductModal key={key} {...product} />)}
    </div>
  );
};

export default Home;
