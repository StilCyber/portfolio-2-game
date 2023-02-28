// Импорт функционала ==============================================================================================================================================================================================================================================================================================================================
// import { isMobile } from "./functions.js";
// import { formsModules } from "./forms/forms.js";

let videoMod = document.querySelector('.video-module');
videoMod.addEventListener('click', function (e) {
   let videoEl = document.querySelector('.video-module').querySelector('video');
   if (videoEl.paused) {  // если видео остановлено, запускаем
      videoEl.play();
      videoMod.classList.add('_pause');
  } else {
      videoEl.pause();
      videoMod.classList.remove('_pause');
  }
});