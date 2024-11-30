



export default function Home() {
  return (
    <>
  <div className="search-box bg-dark position-relative">
    <div className="search-wrap">
      <div className="close-button">
        <svg className="close" style="fill: white;">
          <use xlink:href="#close"></use>
        </svg>
      </div>
      <form id="search-form" className="text-lg-center text-md-left pt-3" action="index.html" method="get">
        <input type="text" className="search-input" placeholder="Search..." />
        <svg className="search">
          <use xlink:href="#search"></use>
        </svg>
      </form>
    </div>
  </div>
    </>
  );
}
