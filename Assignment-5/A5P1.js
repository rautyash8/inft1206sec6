// functionality for showing/hiding the comments section

var showHideBtn = document.querySelector('.show-hide');
var commentWrapper = document.querySelector('.comment-wrapper');

commentWrapper.style.display = 'none';

showHideBtn.onclick = function() {
    var showHideText = showHideBtn.textContent;
    if(showHideText === 'Show comments') {
      showHideBtn.textContent = 'Hide comments';
      commentWrapper.style.display = 'block';
    } else {
      showHideBtn.textContent = 'Show comments';
      commentWrapper.style.display = 'none';
    }
};

