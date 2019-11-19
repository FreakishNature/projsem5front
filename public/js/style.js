const logoImagesPath = './../img/';


logoImage = {
    imgArr : ['header1.jpg', 'header2.jpg', 'header3.jpg'],
    currentIndex : 0
}



var logoImageDom = document.getElementById('MainLogo');
function changeLogoSource(){
    logoImageDom.src = logoImagesPath + logoImage.imgArr[logoImage.currentIndex++];
    if(logoImage.currentIndex >= logoImage.imgArr.length ){
        logoImage.currentIndex = 0;
    }
    
}

setInterval(function(){
  $('#MainLogo').fadeOut(500,()=>{
    changeLogoSource();
    $('#MainLogo').fadeIn(500);
  });
},5000);
