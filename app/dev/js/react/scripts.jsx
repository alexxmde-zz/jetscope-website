
var NavbarHeader = React.createClass({
  render: function () {
    return React.createElement(
      "div",
      { className: "navbar-header" },
      React.createElement(
        "button",
        { type: "button", className: "navbar-toggle collapsed",
          "data-toggle": "collapse", "data-target": "#navs-container", "aria-expanded": "false" },
        React.createElement(
          "span",
          { className: "sr-only" },
          "Toggle navigation"
        ),
        React.createElement("span", { className: "icon-bar" }),
        React.createElement("span", { className: "icon-bar" }),
        React.createElement("span", { className: "icon-bar" })
      ),
      React.createElement(
        "a",
        { className: "navbar-brand", id: "navbar-brand", href: "#" },
        React.createElement("img", { id: "logo-brand", src: "/img/header/jetscope.png" }),
        React.createElement(
          "h1",
          { id: "brand-title" },
          "JetScope"
        )
      )
    );
  }
});

var Nav = React.createClass({
  render: function () {
    return React.createElement(
      "nav",
      { id: "navbar", className: "navbar navbar-default" },
      React.createElement(NavbarHeader, null),
      React.createElement(
        "div",
        { id: "navs-container", className: "collapse navbar-collapse" },
        React.createElement(
          "ul",
          { className: "nav navbar-nav text-center", id: "nav" },
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "Soluções Comerciais"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "Websites"
            )
          ),
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "A Empresa"
            )
          )
        ),
        React.createElement(
          "ul",
          { id: "nav", className: "text-center nav navbar-nav navbar-right" },
          React.createElement(
            "li",
            null,
            React.createElement(
              "a",
              { href: "#" },
              "Contato"
            )
          )
        )
      )
    );
  }
});

var CarouselControls = React.createClass({
  render: function () {
    return React.createElement(
      "div",
      { id: "carouselControls", className: "hidden-xs" },
      React.createElement(
        "a",
        { id: "left-arrow", className: "left carousel-control",
          href: "#mainCarousel", role: "button", "data-slide": "prev" },
        React.createElement("span", { className: "glyphicon glyphicon-chevron-left",
          "aria-hidden": "true" }),
        React.createElement(
          "span",
          { className: "sr-only" },
          "Previous"
        )
      ),
      React.createElement(
        "a",
        { id: "right-arrow", className: "right carousel-control",
          href: "#mainCarousel", role: "button", "data-slide": "next" },
        React.createElement("span", { className: "glyphicon glyphicon-chevron-right",
          "aria-hidden": "true" }),
        React.createElement(
          "span",
          { className: "sr-only" },
          "Next"
        )
      )
    );
  }
});

var CarouselIndicators = React.createClass({
  render: function () {
    return React.createElement(
      "ol",
      { className: "carousel-indicators" },
      React.createElement("li", { "data-target": "#mainCarousel", "data-slide-to": "0", className: "active" }),
      React.createElement("li", { "data-target": "#mainCarousel", "data-slide-to": "1" }),
      React.createElement("li", { "data-target": "#mainCarousel", "data-slide-to": "2" })
    );
  }
});
var CarouselSolutions = React.createClass({
  render: function () {

    return React.createElement(
      "div",
      { id: "solutions", className: "item active carousel-image-container" },
      React.createElement(
        "div",
        { className: "text-center carousel-title", id: "solutions-title" },
        React.createElement(
          "h1",
          null,
          "Solução Comercial Completa"
        ),
        React.createElement(
          "h3",
          null,
          "Emissor de NFe, Controle de Vendas, Controle de Estoque, Relatórios Detalhados, Folha de Pagamento"
        )
      )
    );
  }
});

var CarouselWebsites = React.createClass({
  render: function () {

    return React.createElement(
      "div",
      { id: "websites", className: "item carousel-image-container" },
      React.createElement(
        "div",
        { className: "text-center carousel-title", id: "websites-title" },
        React.createElement(
          "h1",
          null,
          "Websites Personalizados"
        ),
        React.createElement(
          "h3",
          null,
          "Painel de Admin, logo, responsividade em todos os dispositivos e hospedagem"
        )
      )
    );
  }
});

var Carousel = React.createClass({
  render: function () {
    return React.createElement(
      "div",
      { id: "mainCarousel", className: "no-padding container-fluid carousel slide", "data-ride": "carousel" },
      React.createElement(CarouselIndicators, null),
      React.createElement(
        "div",
        { className: "carousel-inner", role: "listbox" },
        React.createElement(CarouselSolutions, { id: "solutions", active: "active" }),
        React.createElement(CarouselWebsites, null)
      )
    );
  }
});

var HomePage = React.createClass({
  render: function () {
    return React.createElement(
      "div",
      null,
      React.createElement(
        "div",
        { className: "container" },
        React.createElement(
          "div",
          { className: "row" },
          React.createElement(Nav, null)
        )
      ),
      React.createElement(
        "div",
        { className: "no-padding container-fluid" },
        React.createElement(Carousel, null)
      )
    );
  }
});
ReactDOM.render(React.createElement(HomePage, null), document.getElementById("nav"));

var Service = React.createClass({
  getInitialState: function () {
    return { title: 'Hello' };
  },
  'render': function () {
    return React.createElement(
      "div",
      { className: "service-box col-sm-4" },
      React.createElement(
        "h3",
        null,
        this.props.title
      ),
      React.createElement("img", { src: "{this.props.image}" }),
      React.createElement(
        "div",
        { className: "text-center" },
        React.createElement(
          "p",
          null,
          this.props.text
        )
      )
    );
  }
});

var ServicesBox = React.createClass({
  'render': function () {
    return React.createElement(
      "div",
      { className: "services-box" },
      React.createElement(Service, { title: "Suporte Exclusivo",
        image: "/img/homepage/services/support.png" }),
      React.createElement(Service, { title: "Integração de Sistemas" }),
      React.createElement(Service, { title: "Websites personalizados" })
    );
  }
});

ReactDOM.render(React.createElement(ServicesBox, null), document.getElementById("services"));
//# sourceMappingURL=scripts.jsx.map
