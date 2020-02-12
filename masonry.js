const masonryLayout = (containerElem, itemsElems, columns) => {
    containerElem.classList.add('masonry-layout', `columns-${columns}`);
    let columnsElements = [];

    for (let i = 1; i <= columns; i++) {
        let column = document.createElement('div');
        column.classList.add('masonry-column', `column-${i}`);
        containerElem.appendChild(column);
        columnsElements.push(column);   
    }

    for (let m = 0; m < Math.ceil(itemsElems.length / columns); m++) {
      for (let n = 0; n < columns; n++) {
          let item = itemsElems[m * columns + n];
          columnsElements[n].appendChild(item);
          item.classList.add('masonry-item')
      }
    }
};


// Define our viewportWidth variable
var viewportWidth;

// Set/update the viewportWidth value
var setViewportWidth = function () {
	viewportWidth = window.innerWidth || document.documentElement.clientWidth;
}

// Log the viewport width into the console
var logWidth = function () {
	if (viewportWidth > 640) {
		masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'), 3)
	} else {
		masonryLayout(document.getElementById('gallery'), document.querySelectorAll('.gallery-item'), 2)
	}
}

// Set our initial width and log it
setViewportWidth();
logWidth();

// On resize events, recalculate and log
window.addEventListener('resize', function () {
	setViewportWidth();
	logWidth();
}, false);

