/* eslint-disable no-var */
// eslint-disable-next-line no-var
// eslint-disable-next-line prefer-destructuring
var hash = document.location.hash;
var $tabBtn = document.querySelectorAll('.js_buttom');
var $tabCnt = document.querySelectorAll('.js_content');

if(hash){
    // eslint-disable-next-line no-use-before-define
    activateTab(hash);
}

// eslint-disable-next-line no-unused-vars
$tabBtn.forEach((item, i) => {
    item.addEventListener('click', () => {
        var currentItem = item.getAttribute('data-tab');
        document.location.hash = currentItem;
        if(currentItem){
            // eslint-disable-next-line no-use-before-define
            activateTab(currentItem);
        }

    });
});

// eslint-disable-next-line no-shadow
function activateTab(hash){
    // eslint-disable-next-line no-unused-vars
    $tabBtn.forEach((item, i) => {
        var currentItem = item.getAttribute('data-tab');
        if(currentItem === hash){
            item.classList.add('active');

        }else{
            item.classList.remove('active');
        }
    });

    // eslint-disable-next-line no-unused-vars
    $tabCnt.forEach((item, i) => {
        var currentItem = item.getAttribute('data-tab');
        if(currentItem === hash){
            item.classList.add('active');

        }else{
            item.classList.remove('active');
        }
    });

}