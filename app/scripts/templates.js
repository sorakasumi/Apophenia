this["Handlebars"] = this["Handlebars"] || {};

this["Handlebars"]["entry"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"entry\" style=\"background: #"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ";\">\n\n    <div class=\"absolute\">\n\n        <h1>#"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n        <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.definition)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n\n    </div>\n    <div class=\"gradient\" style=\"background: linear-gradient(#"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ", #"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.nextEntry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\"></div>\n</div>\n";
  return buffer;
  });