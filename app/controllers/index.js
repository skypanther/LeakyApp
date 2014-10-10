function doClick(e) {
    var childWindow = Alloy.createController('childwindow');
    childWindow.getView().open({modal: true});
}

$.index.open();
