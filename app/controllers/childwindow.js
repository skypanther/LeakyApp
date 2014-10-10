var args = arguments[0] || {};

var data = [
    { title: 'Row 1' },
    { title: 'Row 2' },
    { title: 'Row 3' },
    { title: 'Row 4' },
    { title: 'Row 5' },
];

$.table.setData(data);

if(OS_IOS) {
	$.close.addEventListener('click', function() {
	    $.navWin.close();
	});
}

function changeTable(e) {
	if (e.source.isLandscape()) {
		data = [
		    { title: 'Landscape 1' },
		    { title: 'Landscape 2' },
		    { title: 'Landscape 3' },
		    { title: 'Landscape 4' },
		    { title: 'Landscape 5' },
		];
		$.table.setData(data);
	} else if(e.source.isPortrait()) {
		data = [
		    { title: 'Portrait 1' },
		    { title: 'Portrait 2' },
		    { title: 'Portrait 3' },
		    { title: 'Portrait 4' },
		    { title: 'Portrait 5' },
		];
		$.table.setData(data);
	}
}
Ti.Gesture.addEventListener('orientationchange', changeTable);

