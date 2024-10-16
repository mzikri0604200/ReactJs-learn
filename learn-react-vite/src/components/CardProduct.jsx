// eslint-disable-next-line react/prop-types
function Header({ title }) {
  return (
    <div className="card-header">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="d-block mb-0">{title}</h1>
        <small className="d-block">2 days ago</small>
      </div>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Body({ imgLink }) {
  return (
    <div className="card-body">
      <img src={imgLink} alt="images" className="w-100 mb-3" />
      <p className="card-text mb-0">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, sequi ab odit iste optio possimus ipsa magnam at! Asperiores fugiat nulla, molestias neque earum odit nobis nesciunt natus maxime voluptates facere saepe repellendus,
      </p>
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function Footer({ price }) {
  return (
    <div className="card-footer text-body-secondary">
      <div className="d-flex justify-content-between align-items-center">
        <a href="#" className="d-block btn btn-primary">
          Buy Now
        </a>
        <h3 className="d-block fw-bold mb-0 text-primary">IDR {price}</h3>
      </div>
    </div>
  );
}

CardProduct.Header = Header;
CardProduct.Body = Body;
CardProduct.Footer = Footer;

// eslint-disable-next-line react/prop-types
export default function CardProduct({ children }) {
  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-lg-4">
          <div className="card">{children}</div>
        </div>
      </div>
    </div>
  );
}
