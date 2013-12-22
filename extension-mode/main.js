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
                              