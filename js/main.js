// 모달 on/off 기능
let modal;
function modalOpen() {
    modal = document.getElementsByClassName("logo--modal")[0];
    modal.classList.toggle("invisible");
}

function modalClose() {
    modal = document.getElementsByClassName("logo--modal")[0];
    modal.classList.toggle("invisible");
}

// 모달 이미지 업로드
let fileName;
function uploadImage(input) {
    // 확장자 유효성 검사
    fileName = input.files[0].name + "";
    console.log(fileName);
    
    if (fileName.indexOf('.jpg') !== -1) {
        console.log('.jpg 파일입니다.');
    } else if (fileName.indexOf('.png') !== -1) {
        console.log('.png 파일입니다.');
    } else {
        console.warn('다른 확장자 파일입니다....');
        alert('jpg, png 파일만 허용됩니다.');
        return fileName;
    }
    document.getElementsByClassName('banner--img--info')[0].innerHTML = `<p id="attach--file--name">${fileName}</p>`;
    document.getElementsByClassName('banner--img--clear')[0].classList.toggle('invisible');
}

function deleteImage() {
    document.getElementsByClassName('banner--img--info')[0].innerHTML = `<p id="attach--file--name">샘플 이미지.png</p>`;
    document.getElementsByClassName('banner--img--clear')[0].classList.toggle('invisible');
    fileName = null;
}