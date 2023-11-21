function singLeft() {
    changeBackgroundImage("content_foto_two", "fotos/image_left.jpg");
}

function singRight() {
    changeBackgroundImage("content_foto_two", "fotos/image_right.jpg");
}

function singLeftMobile() {
    changeBackgroundImage("content_foto_two", "fotos/image_left_mob.jpg");
}

function singRightMobile() {
    changeBackgroundImage("content_foto_two", "fotos/image_right_mob.jpg");
}

function arrowFotoLeftMobile() {
    changeBackgroundImage("content_foto_two_mob", "fotos/image_left_mob.jpg");
}

function arrowFotoRightMobile() {
    changeBackgroundImage("content_foto_two_mob", "fotos/image_right_mob.jpg");
}

function changeBackgroundImage(elementId, imageUrl) {
    document.getElementById(elementId).style.backgroundImage = "url('" + imageUrl + "')";
}

