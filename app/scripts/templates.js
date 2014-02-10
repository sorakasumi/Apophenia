this["Handlebars"] = this["Handlebars"] || {};

this["Handlebars"]["entry"] = Handlebars.template(function (Handlebars,depth0,helpers,partials,data) {
  this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Handlebars.helpers); data = data || {};
  var buffer = "", stack1, stack2, functionType="function", escapeExpression=this.escapeExpression;


  buffer += "<div class=\"entry\" style=\"background: #"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ";\" id=>\n<!-- <div class=\"entry\" style=\"background: #"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "; z-index: ";
  if (stack2 = helpers.iter) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.iter); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "\"> -->\n    <!-- <div class=\"before\" style=\"background: linear-gradient(transparent, #F5E2D6);\"></div> -->\n    <!-- <div class=\"after\" style=\"background: linear-gradient(#F5E2D6, transparent);\"></div> -->\n    <div class=\"absolute\">\n    <!-- <div class=\"absolute\" style=\"background:#"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "; -webkit-transform: translate(";
  if (stack2 = helpers.iter) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.iter); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "px,";
  if (stack2 = helpers.iter) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.iter); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "px);\"> -->\n    <!-- <div class=\"absolute\" style=\"background:#"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "; z-index: ";
  if (stack2 = helpers.iter2) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.iter2); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "; -webkit-transform: translate(";
  if (stack2 = helpers.iter) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.iter); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "px,";
  if (stack2 = helpers.iter) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.iter); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "px);\"> -->\n    <!-- <div class=\"absolute\" style=\"background:#"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "; z-index: 5; -webkit-transform: translate(";
  if (stack2 = helpers.iter) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.iter); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "px,";
  if (stack2 = helpers.iter) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.iter); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "px);\"> -->\n    <!-- <div class=\"absolute\" style=\"background:#"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "; -webkit-transform: translate(";
  if (stack2 = helpers.iter) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.iter); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "px,";
  if (stack2 = helpers.iter) { stack2 = stack2.call(depth0, {hash:{},data:data}); }
  else { stack2 = (depth0 && depth0.iter); stack2 = typeof stack2 === functionType ? stack2.call(depth0, {hash:{},data:data}) : stack2; }
  buffer += escapeExpression(stack2)
    + "px);\"> -->\n        <h1>#"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</h1>\n        <p>"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.definition)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + "</p>\n    </div>\n    <div class=\"gradient\" style=\"background: linear-gradient(#"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ", #"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.nextEntry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\"></div>\n    <!-- <div class=\"gradient\" style=\"background: linear-gradient(#"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.nextEntry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ", #"
    + escapeExpression(((stack1 = ((stack1 = (depth0 && depth0.entry)),stack1 == null || stack1 === false ? stack1 : stack1.hex)),typeof stack1 === functionType ? stack1.apply(depth0) : stack1))
    + ");\"></div> -->\n</div>\n";
  return buffer;
  });