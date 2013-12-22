chrome.app.runtime.onLaunched.addListener(function() {
  chrome.app.window.create('index.html', {
    'bounds': {
      'width': 1400,
      'height': 1500
    }
  });
});

var tabidstore = {};
/*function newtab(name, url){
     var mytab=chrome.tabs.create({url: "https */
function replacetab(url) {
     console.log("This tab is being replaced to: "+url);
     window.location.replace(url);
     if (window.location.href==url){
     console.log("This tab SUCCESSFULLY replaced to: "+url);
     } else {
          console.log("This tab FAILED to replace to: "+url);
     }
}
                              
function thistab(url) {
     console.log("This tab is being replaced to: "+url);
     chrome.app.window.create(url, {
    'bounds': {
      'width': 1400,
      'height': 1500
    }
  });
     if (window.location.href==url){
     console.log("This tab SUCCESSFULLY replaced to: "+url);
     } else {
          console.log("This tab FAILED to replace to: "+url);
     }