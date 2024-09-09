const items_img_title = document.getElementById('items-title-img');

function left_item_title_img (){
    if (items_img_title.classList.contains('items-right')) {
        items_img_title.classList.remove('items-right');
    } else if (!items_img_title.classList.contains('items-left')) {
        items_img_title.classList.add('items-left');
    }
}

function right_item_title_img (){
    if (items_img_title.classList.contains('items-left')) {
        items_img_title.classList.remove('items-left');
    } else if (!items_img_title.classList.contains('items-right')) {
        items_img_title.classList.add('items-right');
    }
}


