// BEGIN-SNIPPET cross-fade-definition
import { animate, stop, Promise } from "liquid-fire";
export default function flyIn(oldView, insertNewView, opts) {
  stop(oldView);
  return insertNewView().then(function(newView) {
    return Promise.all([
      animate(oldView, {opacity: 0}, opts),
      animate(newView, {opacity: [0.8, 0]}, opts)
    ]);
  });
}
// END-SNIPPET

//$("button").click(function(){
//  var div = $("div");
//  div.animate({height: '300px', opacity: '0.4'}, "slow");
//  div.animate({width: '300px', opacity: '0.8'}, "slow");
//  div.animate({height: '100px', opacity: '0.4'}, "slow");
//  div.animate({width: '100px', opacity: '0.8'}, "slow");
//});
