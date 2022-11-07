import { Tab, Tabs } from "react-bootstrap";


const AllProduct = () => {
    return (
        <>
            <section id="all_product">
        <div className="container">
          <div className="row">
            <div className="col-12 m-auto">
              <div className="all_product_header d-flex align-items-center">
                <div className="left_text">
                  <h2>All Products</h2>
                </div>
                <div className="right_text">
                  <div className="catogory d-flex align-items-center">
                    <div className="item">
                      <a href>
                        <h2>Fruits &amp; Vegetables</h2>
                      </a>
                    </div>
                    <div className="item1">
                      <a href="#">
                        <h2>Dairy Goods</h2>
                      </a>
                    </div>
                    <div className="item1">
                      <a href="#">
                        <h2>Meats</h2>
                      </a>
                    </div>
                    <div className="item1">
                      <a href="#">
                        <h2>Fish &amp; Seafoods</h2>
                      </a>
                    </div>
                    <div className="item1">
                      <a href="#">
                        <h2>Fruits</h2>
                      </a>
                    </div>
                    <div className="item1">
                      <a href="#">
                        <h2>Tea &amp; Coffee</h2>
                      </a>
                    </div>
                  </div>

{/* <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
  <Tab eventKey="Dairy Good" title="Dairy Good">
  <div className="item1">
                      <a href="#">
                        <h2>Dairy Goods</h2>
                      </a>
                    </div>
  </Tab>
  <Tab eventKey="profile" title="Profile">
  <div>Homefgvfd</div>
  </Tab>
  <Tab eventKey="contact" title="Contact" >
  <div>Home</div>
  </Tab>
</Tabs> */}
                </div>
              </div>
            </div>
          </div>
          {/* all product card  */}
          <div className="all_product_card">
            <div className="row">
              <div className="col-lg-3 col-md-4 col-6">
                <div className="product_single_card">
                  <div className="icon d-flex flex-row-reverse">
                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="#ABABAB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="img text-center">
                    <img className="img-fluid" src="frontend_asset/img/product/product-1-1.png" alt="" />
                  </div>
                  <div className="price d-flex align-items-center justify-content-center">
                    <h4>BDT 1200</h4>
                    <del>BDT 1900</del>
                  </div>
                  <div className="text">
                    <p>Seeds of Change Organic
                      Quinoa, Brown, &amp; Red Rice</p>
                  </div>
                  <div className="buy_button text-center">
                    <button className="add_button">Add To Cart</button>
                    <button className="buy_button">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="product_single_card">
                  <div className="icon d-flex flex-row-reverse">
                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="#ABABAB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="img text-center">
                    <img className="img-fluid" src="frontend_asset/img/product/product-1-1.png" alt="" />
                  </div>
                  <div className="price d-flex align-items-center justify-content-center">
                    <h4>BDT 1200</h4>
                    <del>BDT 1900</del>
                  </div>
                  <div className="text">
                    <p>Seeds of Change Organic
                      Quinoa, Brown, &amp; Red Rice</p>
                  </div>
                  <div className="buy_button text-center">
                    <button className="add_button">Add To Cart</button>
                    <button className="buy_button">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="product_single_card">
                  <div className="icon d-flex flex-row-reverse">
                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="#ABABAB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="img text-center">
                    <img className="img-fluid" src="frontend_asset/img/product/product-1-1.png" alt="" />
                  </div>
                  <div className="price d-flex align-items-center justify-content-center">
                    <h4>BDT 1200</h4>
                    <del>BDT 1900</del>
                  </div>
                  <div className="text">
                    <p>Seeds of Change Organic
                      Quinoa, Brown, &amp; Red Rice</p>
                  </div>
                  <div className="buy_button text-center">
                    <button className="add_button">Add To Cart</button>
                    <button className="buy_button">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="product_single_card">
                  <div className="icon d-flex flex-row-reverse">
                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="#ABABAB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="img text-center">
                    <img className="img-fluid" src="frontend_asset/img/product/product-1-1.png" alt="" />
                  </div>
                  <div className="price d-flex align-items-center justify-content-center">
                    <h4>BDT 1200</h4>
                    <del>BDT 1900</del>
                  </div>
                  <div className="text">
                    <p>Seeds of Change Organic
                      Quinoa, Brown, &amp; Red Rice</p>
                  </div>
                  <div className="buy_button text-center">
                    <button className="add_button">Add To Cart</button>
                    <button className="buy_button">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="product_single_card">
                  <div className="icon d-flex flex-row-reverse">
                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="#ABABAB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="img text-center">
                    <img className="img-fluid" src="frontend_asset/img/product/product-1-1.png" alt="" />
                  </div>
                  <div className="price d-flex align-items-center justify-content-center">
                    <h4>BDT 1200</h4>
                    <del>BDT 1900</del>
                  </div>
                  <div className="text">
                    <p>Seeds of Change Organic
                      Quinoa, Brown, &amp; Red Rice</p>
                  </div>
                  <div className="buy_button text-center">
                    <button className="add_button">Add To Cart</button>
                    <button className="buy_button">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="product_single_card">
                  <div className="icon d-flex flex-row-reverse">
                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="#ABABAB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="img text-center">
                    <img className="img-fluid" src="frontend_asset/img/product/product-1-1.png" alt="" />
                  </div>
                  <div className="price d-flex align-items-center justify-content-center">
                    <h4>BDT 1200</h4>
                    <del>BDT 1900</del>
                  </div>
                  <div className="text">
                    <p>Seeds of Change Organic
                      Quinoa, Brown, &amp; Red Rice</p>
                  </div>
                  <div className="buy_button text-center">
                    <button className="add_button">Add To Cart</button>
                    <button className="buy_button">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="product_single_card">
                  <div className="icon d-flex flex-row-reverse">
                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="#ABABAB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="img text-center">
                    <img className="img-fluid" src="frontend_asset/img/product/product-1-1.png" alt="" />
                  </div>
                  <div className="price d-flex align-items-center justify-content-center">
                    <h4>BDT 1200</h4>
                    <del>BDT 1900</del>
                  </div>
                  <div className="text">
                    <p>Seeds of Change Organic
                      Quinoa, Brown, &amp; Red Rice</p>
                  </div>
                  <div className="buy_button text-center">
                    <button className="add_button">Add To Cart</button>
                    <button className="buy_button">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="product_single_card">
                  <div className="icon d-flex flex-row-reverse">
                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="#ABABAB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="img text-center">
                    <img className="img-fluid" src="frontend_asset/img/product/product-1-1.png" alt="" />
                  </div>
                  <div className="price d-flex align-items-center justify-content-center">
                    <h4>BDT 1200</h4>
                    <del>BDT 1900</del>
                  </div>
                  <div className="text">
                    <p>Seeds of Change Organic
                      Quinoa, Brown, &amp; Red Rice</p>
                  </div>
                  <div className="buy_button text-center">
                    <button className="add_button">Add To Cart</button>
                    <button className="buy_button">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="product_single_card">
                  <div className="icon d-flex flex-row-reverse">
                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="#ABABAB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="img text-center">
                    <img className="img-fluid" src="frontend_asset/img/product/product-1-1.png" alt="" />
                  </div>
                  <div className="price d-flex align-items-center justify-content-center">
                    <h4>BDT 1200</h4>
                    <del>BDT 1900</del>
                  </div>
                  <div className="text">
                    <p>Seeds of Change Organic
                      Quinoa, Brown, &amp; Red Rice</p>
                  </div>
                  <div className="buy_button text-center">
                    <button className="add_button">Add To Cart</button>
                    <button className="buy_button">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="product_single_card">
                  <div className="icon d-flex flex-row-reverse">
                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="#ABABAB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="img text-center">
                    <img className="img-fluid" src="frontend_asset/img/product/product-1-1.png" alt="" />
                  </div>
                  <div className="price d-flex align-items-center justify-content-center">
                    <h4>BDT 1200</h4>
                    <del>BDT 1900</del>
                  </div>
                  <div className="text">
                    <p>Seeds of Change Organic
                      Quinoa, Brown, &amp; Red Rice</p>
                  </div>
                  <div className="buy_button text-center">
                    <button className="add_button">Add To Cart</button>
                    <button className="buy_button">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="product_single_card">
                  <div className="icon d-flex flex-row-reverse">
                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="#ABABAB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="img text-center">
                    <img className="img-fluid" src="frontend_asset/img/product/product-1-1.png" alt="" />
                  </div>
                  <div className="price d-flex align-items-center justify-content-center">
                    <h4>BDT 1200</h4>
                    <del>BDT 1900</del>
                  </div>
                  <div className="text">
                    <p>Seeds of Change Organic
                      Quinoa, Brown, &amp; Red Rice</p>
                  </div>
                  <div className="buy_button text-center">
                    <button className="add_button">Add To Cart</button>
                    <button className="buy_button">Buy Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-4 col-6">
                <div className="product_single_card">
                  <div className="icon d-flex flex-row-reverse">
                    <svg width={22} height={20} viewBox="0 0 22 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M6 1C3.239 1 1 3.216 1 5.95C1 8.157 1.875 13.395 10.488 18.69C10.6423 18.7839 10.8194 18.8335 11 18.8335C11.1806 18.8335 11.3577 18.7839 11.512 18.69C20.125 13.395 21 8.157 21 5.95C21 3.216 18.761 1 16 1C13.239 1 11 4 11 4C11 4 8.761 1 6 1Z" stroke="#ABABAB" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </div>
                  <div className="img text-center">
                    <img className="img-fluid" src="frontend_asset/img/product/product-1-1.png" alt="" />
                  </div>
                  <div className="price d-flex align-items-center justify-content-center">
                    <h4>BDT 1200</h4>
                    <del>BDT 1900</del>
                  </div>
                  <div className="text">
                    <p>Seeds of Change Organic
                      Quinoa, Brown, &amp; Red Rice</p>
                  </div>
                  <div className="buy_button text-center">
                    <button className="add_button">Add To Cart</button>
                    <button className="buy_button">Buy Now</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
        </>
    );
};

export default AllProduct;