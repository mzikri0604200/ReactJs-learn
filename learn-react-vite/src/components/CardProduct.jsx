function Header() {
  return (
    <div className="card-header">
      <div className="d-flex justify-content-between align-items-center">
        <h1 className="d-block mb-0">Title Header</h1>
        <small className="d-block">Budi Arrie</small>
      </div>
    </div>
  );
}

function Body() {
  return (
    <div className="card-body">
      <img src="https://picsum.photos/500/180?r=1" alt="images" className="w-100 mb-3" />
      <p className="card-text mb-0">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis, sequi ab odit iste optio possimus ipsa magnam at! Asperiores fugiat nulla, molestias neque earum odit nobis nesciunt natus maxime voluptates facere saepe repellendus,
        culpa nihil deserunt eveniet. Commodi adipisci cumque veniam suscipit aliquam reiciendis nemo perspiciatis quibusdam, quos sapiente dignissimos tempore magni natus. Doloremque aliquid corporis distinctio, similique eveniet ducimus.
      </p>
    </div>
  );
}

function Footer() {
  return (
    <div className="card-footer text-body-secondary">
      <div className="d-flex justify-content-between align-items-center">
        <a href="#" className="d-block btn btn-primary">
          Lihat Detail
        </a>
        <small className="d-block">2 days ago</small>
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
        <div className="col-lg-6">
          <div className="card">{children}</div>
        </div>
      </div>
    </div>
  );
}
