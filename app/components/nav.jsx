var NavbarHeader  = React.createClass({
  render: function () {
    return (
      <div className="navbar-header">
        <button type="button" className="navbar-toggle collapsed"
          data-toggle="collapse" data-target="#navs-container" aria-expanded="false">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
          <span className="icon-bar"></span>
        </button>
        <a className="navbar-brand" id="navbar-brand" href="#">
          <img id="logo-brand" src="/resources/images/jetscope.png" />
          <h1 id="brand-title">JetScope</h1>
        </a>
      </div>
    );
  }
});

var Nav = React.createClass({
  render : function () {
    return (
      <nav id="navbar" className="navbar navbar-default" > 
        <NavbarHeader />
        <div id="navs-container" className="collapse navbar-collapse">
          <ul className="nav navbar-nav text-center" id="nav" >
            <li><a href="#">Soluções Comerciais</a></li>
            <li><a href="#">Websites</a></li>
            <li><a href="#">A Empresa</a></li>
          </ul>
          <ul id="nav" className="text-center nav navbar-nav navbar-right">
            <li><a href="#">Contato</a></li>
          </ul>
        </div>
      </nav>);
  }
});

var CarouselControls = React.createClass({
  render : function () {
    return (
      <div id="carouselControls" className="hidden-xs">
        <a id="left-arrow" className="left carousel-control" 
          href="#mainCarousel" role="button" data-slide="prev">
          <span className="glyphicon glyphicon-chevron-left"
            aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a  id="right-arrow" className="right carousel-control"
          href="#mainCarousel" role="button" data-slide="next">
          <span className="glyphicon glyphicon-chevron-right"
            aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
    );
  }
});

var CarouselIndicators = React.createClass({
  render : function () {
    return (
      <ol className="carousel-indicators">
        <li data-target="#mainCarousel" data-slide-to="0" className="active"></li>
        <li data-target="#mainCarousel" data-slide-to="1"></li>
        <li data-target="#mainCarousel" data-slide-to="2"></li>
      </ol>
    );
  }
});
var CarouselSolutions = React.createClass({
  render: function () {

    return (
      <div id="solutions" className="item active carousel-image-container">
        <div className="text-center carousel-title" id="solutions-title">
          <h1>Solução Comercial Completa</h1>
          <h3>Emissor de NFe, Controle de Vendas, Controle de Estoque,
          Relatórios Detalhados, Folha de Pagamento</h3>
        </div>

      </div>
    );
  }
});

var CarouselWebsites = React.createClass({
  render: function () {

    return (
      <div id="websites" className="item carousel-image-container">
        <div className="text-center carousel-title" id="websites-title">
          <h1>Websites Personalizados</h1>
          <h3>Painel de Admin, logo, responsividade em todos
           os dispositivos e hospedagem</h3>
        </div>
      </div>
    );
  }
});

var Carousel = React.createClass({
  render : function () {
    return (
      <div id="mainCarousel" className="no-padding container-fluid carousel slide" data-ride="carousel">
        <CarouselIndicators />
        <div className="carousel-inner" role="listbox">
          <CarouselSolutions id="solutions" active="active" />
          <CarouselWebsites />
        </div>
      </div>
    );
  }
});

var HomePage = React.createClass({
  render : function () {
    return (
      <div>
        <div className="container">
          <div className="row">
            <Nav />
          </div>
        </div>
        <div className="no-padding container-fluid">
          <Carousel />
        </div>
      </div>
    );
  }        
});
ReactDOM.render(<HomePage />, document.getElementById("homepage"));
