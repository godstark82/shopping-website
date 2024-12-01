import Head from 'next/head';
import Script from 'next/script';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stylish - EyeWear</title>
        <meta charset="utf-8" />
        <meta http-equiv="X-UA-Compatible" content="IE=edge" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta name="format-detection" content="telephone=no" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="author" content="TemplatesJungle" />
        <meta name="keywords" content="Online Store" />
        <meta name="description" content="Stylish - EyeWear" />
        <link rel="stylesheet" href="css/vendor.css" />
        <link rel="stylesheet" href="/css/style.css" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,900;1,900&family=Source+Sans+Pro:wght@400;600;700;900&display=swap"
          rel="stylesheet" />
        <script src="/js/jquery-1.11.1.min.js"></script>
        <script src="/js/plugin.j"></script>
        <script src="/js/script.js"></script>
      </Head>

      
  <section id="intro" class="position-relative mt-4">
    <div class="container-lg">
      <div class="swiper main-swiper">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <div class="card d-flex flex-row align-items-end border-0 large jarallax-keep-img">
              <img src="images/card-image1.jpg" alt="shoes" class="img-fluid jarallax-img"/>
              <div class="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                <h2 class="card-title display-3 light">Stylish shoes for Women</h2>
                <a href="index.html"
                  class="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border">Shop Now</a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="row g-4">
              <div class="col-lg-12 mb-4">
                <div class="card d-flex flex-row align-items-end border-0 jarallax-keep-img">
                  <img src="images/card-image2.jpg" alt="shoes" class="img-fluid jarallax-img"/>
                  <div class="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                    <h2 class="card-title style-2 display-4 light">Sports Wear</h2>
                    <a href="index.html"
                      class="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border">Shop Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="card d-flex flex-row align-items-end border-0 jarallax-keep-img">
                  <img src="images/card-image3.jpg" alt="shoes" class="img-fluid jarallax-img"/>
                  <div class="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                    <h2 class="card-title style-2 display-4 light">Fashion Shoes</h2>
                    <a href="index.html"
                      class="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="card d-flex flex-row align-items-end border-0 large jarallax-keep-img">
              <img src="images/card-image4.jpg" alt="shoes" class="img-fluid jarallax-img"/>
              <div class="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                <h2 class="card-title display-3 light">Stylish shoes for men</h2>
                <a href="index.html"
                  class="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border">Shop Now</a>
              </div>
            </div>
          </div>
          <div class="swiper-slide">
            <div class="row g-4">
              <div class="col-lg-12 mb-4">
                <div class="card d-flex flex-row align-items-end border-0 jarallax-keep-img">
                  <img src="images/card-image5.jpg" alt="shoes" class="img-fluid jarallax-img"/>
                  <div class="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                    <h2 class="card-title style-2 display-4 light">Men Shoes</h2>
                    <a href="index.html"
                      class="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border">Shop Now</a>
                  </div>
                </div>
              </div>
              <div class="col-lg-12">
                <div class="card d-flex flex-row align-items-end border-0 jarallax-keep-img">
                  <img src="images/card-image6.jpg" alt="shoes" class="img-fluid jarallax-img"/>
                  <div class="cart-concern p-3 m-3 p-lg-5 m-lg-5">
                    <h2 class="card-title style-2 display-4 light">Women Shoes</h2>
                    <a href="index.html"
                      class="text-uppercase light mt-3 d-inline-block text-hover fw-bold light-border">Shop Now</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </section>


      <section className="discount-coupon py-2 my-2 py-md-5 my-md-5">
        <div className="container">
          <div className="bg-gray coupon position-relative p-5">
            <div className="bold-text position-absolute">10% OFF</div>
            <div className="row justify-content-between align-items-center">
              <div className="col-lg-7 col-md-12 mb-3">
                <div className="coupon-header">
                  <h2 className="display-7">10% OFF Discount Coupons</h2>
                  <p className="m-0">Subscribe us to get 10% OFF on all the purchases</p>
                </div>
              </div>
              <div className="col-lg-3 col-md-12">
                <div className="btn-wrap">
                  <a href="#" className="btn btn-black btn-medium text-uppercase hvr-sweep-to-right">Email me</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
  <section id="featured-products" class="product-store">
    <div class="container-md">
      <div class="display-header d-flex align-items-center justify-content-between">
        <h2 class="section-title text-uppercase">Featured Products</h2>
        <div class="btn-right">
          <a href="index.html" class="d-inline-block text-uppercase text-hover fw-bold">View all</a>
        </div>
      </div>
      <div class="product-content padding-small">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          <div class="col mb-4">
            <div class="product-card position-relative">
              <div class="card-img">
                <img src="images/card-item1.jpg" alt="product-item" class="product-image img-fluid"/>
                <div class="cart-concern position-absolute d-flex justify-content-center">
                  <div class="cart-button d-flex gap-2 justify-content-center align-items-center">
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modallong">
                      <svg class="shopping-carriage">
                        <use href="#shopping-carriage"></use>
                      </svg>
                    </button>
                    <button type="button" class="btn btn-light" data-bs-target="#modaltoggle" data-bs-toggle="modal">
                      <svg class="quick-view">
                        <use href="#quick-view"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-detail d-flex justify-content-between align-items-center mt-3">
                <h3 class="card-title fs-6 fw-normal m-0">
                  <a href="index.html">Running shoes for men</a>
                </h3>
                <span class="card-price fw-bold">$99</span>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="product-card position-relative">
              <div class="card-img">
                <img src="images/card-item2.jpg" alt="product-item" class="product-image img-fluid"/>
                <div class="cart-concern position-absolute d-flex justify-content-center">
                  <div class="cart-button d-flex gap-2 justify-content-center align-items-center">
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modallong">
                      <svg class="shopping-carriage">
                        <use href="#shopping-carriage"></use>
                      </svg>
                    </button>
                    <button type="button" class="btn btn-light" data-bs-target="#modaltoggle" data-bs-toggle="modal">
                      <svg class="quick-view">
                        <use href="#quick-view"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-detail d-flex justify-content-between align-items-center mt-3">
                <h3 class="card-title fs-6 fw-normal m-0">
                  <a href="index.html">Running shoes for men</a>
                </h3>
                <span class="card-price fw-bold">$99</span>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="product-card position-relative">
              <div class="card-img">
                <img src="images/card-item3.jpg" alt="product-item" class="product-image img-fluid"/>
                <div class="cart-concern position-absolute d-flex justify-content-center">
                  <div class="cart-button d-flex gap-2 justify-content-center align-items-center">
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modallong">
                      <svg class="shopping-carriage">
                        <use href="#shopping-carriage"></use>
                      </svg>
                    </button>
                    <button type="button" class="btn btn-light" data-bs-target="#modaltoggle" data-bs-toggle="modal">
                      <svg class="quick-view">
                        <use href="#quick-view"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-detail d-flex justify-content-between align-items-center mt-3">
                <h3 class="card-title fs-6 fw-normal m-0">
                  <a href="index.html">Running shoes for men</a>
                </h3>
                <span class="card-price fw-bold">$99</span>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="product-card position-relative">
              <div class="card-img">
                <img src="images/card-item4.jpg" alt="product-item" class="product-image img-fluid"/>
                <div class="cart-concern position-absolute d-flex justify-content-center">
                  <div class="cart-button d-flex gap-2 justify-content-center align-items-center">
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modallong">
                      <svg class="shopping-carriage">
                        <use href="#shopping-carriage"></use>
                      </svg>
                    </button>
                    <button type="button" class="btn btn-light" data-bs-target="#modaltoggle" data-bs-toggle="modal">
                      <svg class="quick-view">
                        <use href="#quick-view"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-detail d-flex justify-content-between align-items-center mt-3">
                <h3 class="card-title fs-6 fw-normal m-0">
                  <a href="index.html">Running shoes for men</a>
                </h3>
                <span class="card-price fw-bold">$99</span>
              </div>
            </div>
          </div>
          <div class="col mb-4">
            <div class="product-card position-relative">
              <div class="card-img">
                <img src="images/card-item5.jpg" alt="product-item" class="product-image img-fluid"/>
                <div class="cart-concern position-absolute d-flex justify-content-center">
                  <div class="cart-button d-flex gap-2 justify-content-center align-items-center">
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modallong">
                      <svg class="shopping-carriage">
                        <use href="#shopping-carriage"></use>
                      </svg>
                    </button>
                    <button type="button" class="btn btn-light" data-bs-target="#modaltoggle" data-bs-toggle="modal">
                      <svg class="quick-view">
                        <use href="#quick-view"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-detail d-flex justify-content-between align-items-center mt-3">
                <h3 class="card-title fs-6 fw-normal m-0">
                  <a href="index.html">Running shoes for men</a>
                </h3>
                <span class="card-price fw-bold">$99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  
  <section id="latest-products" class="product-store py-2 my-2 py-md-5 my-md-5 pt-0">
    <div class="container-md">
      <div class="display-header d-flex align-items-center justify-content-between">
        <h2 class="section-title text-uppercase">Latest Products</h2>
        <div class="btn-right">
          <a href="index.html" class="d-inline-block text-uppercase text-hover fw-bold">View all</a>
        </div>
      </div>
      <div class="product-content padding-small">
        <div class="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-5">
          <div class="col mb-4 mb-3">
            <div class="product-card position-relative">
              <div class="card-img">
                <img src="images/card-item6.jpg" alt="product-item" class="product-image img-fluid"/>
                <div class="cart-concern position-absolute d-flex justify-content-center">
                  <div class="cart-button d-flex gap-2 justify-content-center align-items-center">
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modallong">
                      <svg class="shopping-carriage">
                        <use href="#shopping-carriage"></use>
                      </svg>
                    </button>
                    <button type="button" class="btn btn-light" data-bs-target="#modaltoggle" data-bs-toggle="modal">
                      <svg class="quick-view">
                        <use href="#quick-view"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-detail d-flex justify-content-between align-items-center mt-3">
                <h3 class="card-title fs-6 fw-normal m-0">
                  <a href="index.html">Running shoes for men</a>
                </h3>
                <span class="card-price fw-bold">$99</span>
              </div>
            </div>
          </div>
          <div class="col mb-4 mb-3">
            <div class="product-card position-relative">
              <div class="card-img">
                <img src="images/card-item7.jpg" alt="product-item" class="product-image img-fluid"/>
                <div class="cart-concern position-absolute d-flex justify-content-center">
                  <div class="cart-button d-flex gap-2 justify-content-center align-items-center">
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modallong">
                      <svg class="shopping-carriage">
                        <use href="#shopping-carriage"></use>
                      </svg>
                    </button>
                    <button type="button" class="btn btn-light" data-bs-target="#modaltoggle" data-bs-toggle="modal">
                      <svg class="quick-view">
                        <use href="#quick-view"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-detail d-flex justify-content-between align-items-center mt-3">
                <h3 class="card-title fs-6 fw-normal m-0">
                  <a href="index.html">Running shoes for men</a>
                </h3>
                <span class="card-price fw-bold">$99</span>
              </div>
            </div>
          </div>
          <div class="col mb-4 mb-3">
            <div class="product-card position-relative">
              <div class="card-img">
                <img src="images/card-item8.jpg" alt="product-item" class="product-image img-fluid"/>
                <div class="cart-concern position-absolute d-flex justify-content-center">
                  <div class="cart-button d-flex gap-2 justify-content-center align-items-center">
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modallong">
                      <svg class="shopping-carriage">
                        <use href="#shopping-carriage"></use>
                      </svg>
                    </button>
                    <button type="button" class="btn btn-light" data-bs-target="#modaltoggle" data-bs-toggle="modal">
                      <svg class="quick-view">
                        <use href="#quick-view"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-detail d-flex justify-content-between align-items-center mt-3">
                <h3 class="card-title fs-6 fw-normal m-0">
                  <a href="index.html">Running shoes for men</a>
                </h3>
                <span class="card-price fw-bold">$99</span>
              </div>
            </div>
          </div>
          <div class="col mb-4 mb-3">
            <div class="product-card position-relative">
              <div class="card-img">
                <img src="images/card-item9.jpg" alt="product-item" class="product-image img-fluid"/>
                <div class="cart-concern position-absolute d-flex justify-content-center">
                  <div class="cart-button d-flex gap-2 justify-content-center align-items-center">
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modallong">
                      <svg class="shopping-carriage">
                        <use href="#shopping-carriage"></use>
                      </svg>
                    </button>
                    <button type="button" class="btn btn-light" data-bs-target="#modaltoggle" data-bs-toggle="modal">
                      <svg class="quick-view">
                        <use href="#quick-view"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-detail d-flex justify-content-between align-items-center mt-3">
                <h3 class="card-title fs-6 fw-normal m-0">
                  <a href="index.html">Running shoes for men</a>
                </h3>
                <span class="card-price fw-bold">$99</span>
              </div>
            </div>
          </div>
          <div class="col mb-4 mb-3">
            <div class="product-card position-relative">
              <div class="card-img">
                <img src="images/card-item10.jpg" alt="product-item" class="product-image img-fluid"/>
                <div class="cart-concern position-absolute d-flex justify-content-center">
                  <div class="cart-button d-flex gap-2 justify-content-center align-items-center">
                    <button type="button" class="btn btn-light" data-bs-toggle="modal" data-bs-target="#modallong">
                      <svg class="shopping-carriage">
                        <use href="#shopping-carriage"></use>
                      </svg>
                    </button>
                    <button type="button" class="btn btn-light" data-bs-target="#modaltoggle" data-bs-toggle="modal">
                      <svg class="quick-view">
                        <use href="#quick-view"></use>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div class="card-detail d-flex justify-content-between align-items-center mt-3">
                <h3 class="card-title fs-6 fw-normal m-0">
                  <a href="index.html">Running shoes for men</a>
                </h3>
                <span class="card-price fw-bold">$99</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
    </div>
  );
}
