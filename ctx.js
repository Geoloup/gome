

//  -  -  -  -  -  -  -  -  //
//     Example Menu One     //
//  -  -  -  -  -  -  -  -  //


// Initialize a context menu for the entire page
var contextMenu = CtxMenu();

// Add our custom function to the menu
contextMenu.addItem("New tab", newt);

// Add a separator
contextMenu.addSeparator();

// Add a second item to the menu, this time with an icon
contextMenu.addItem("Reload Page",
    function(){
        refreshTab()
    },
    Icon = "icon.png",
    index = undefined,
    bInvertIconDarkMode = true
);


//  -  -  -  -  -  -  -  -  //
//      Example Menu Two    //
//  -  -  -  -  -  -  -  -  //


function closectxtab(element){
    closetab(element.dataset.uuid)
}