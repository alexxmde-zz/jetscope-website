var React = require('../vendor/react/react.js');
var ReactDOM = require('../vendor/react/react-dom.js');

var Service = React.createClass({
  getInitialState : function () {
  },
  'render' : function () {
    return (
      <div className="service-box col-sm-4" >
        <h3>{this.props.title}</h3>
        <img src="{this.props.image}" />
        <div className="text-center">
          <p>{this.props.text}</p>
        </div>
      </div>
    );
  }
});

var ServicesBox = React.createClass({
  'render' : function () {
    return (
      <div className="services-box">
        <Service title="Suporte Exclusivo" />
        <Service title="Integração de Sistemas" />
        <Service title="Websites personalizados" />
      </div>
    );
  }
});

ReactDOM.render(<ServicesBox />, document.getElementById("services"));
