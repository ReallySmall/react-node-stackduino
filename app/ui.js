import cssua from 'cssuseragent';

const ui = (() => {

  	if(typeof window != 'undefined' && window.document){ // check we're on the client side - none of the following will get very far on the server
  		
  		var stickyFooter = ()=> { // get the height of the absolutely positioned footer and set the padding bottom of app to the same value

  			var $app = $('#app');
  			var $footer = $('.js-ui-sticky-footer');
  			var footerHeight = $footer.outerHeight();

  			$app.css('padding-bottom', footerHeight);

  		};

  		$(document).ready(function(){
  			stickyFooter();
  		});

  		$(window).on('resize', function(){
  			stickyFooter();
  		});

  	}

})();

export default ui;
