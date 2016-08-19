function GabriellyFactory () {

  this.renderTemplate = function (url, data, element) {
    var html = new EJS ({ 'url' : url})
      .render(data);

    element.innerHTML = html;

  };
}

Gabrielly = new GabriellyFactory();
