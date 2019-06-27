// Parent Obj
function HtmlElement() {
  this.click = function() {
    console.log("clicked");
  };
}

HtmlElement.prototype.focus = function() {
  console.log("focued");
};

// Child Obj
function HtmlSelectElement(items = []) {
  this.items = items;

  this.addItem = function(item) {
    this.items.push(item);
  };

  this.removeItem = function(item) {
    this.items.splice(this.items.indexOf(item), 1);
  };
}

// HtmlSelectElement.prototype = Object.create(HtmlElement.prototype);
// this doesn't work,
// because Object.create() will create new obj and set its prototype as HtmlElement.prototype
// so HtmlElement.prototype only has one method, focus()

// set prototype to instance of HtmlElement, we have two method
HtmlSelectElement.prototype = new HtmlElement();
HtmlSelectElement.prototype.constructor = HtmlSelectElement; // reset constructor

const s = new HtmlSelectElement();
