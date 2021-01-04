// let input, search, pr, result, result_arr, locale_HTML, result_store;
//
// locale_HTML = document.body.innerHTML;
//
//
// function FindOnPage(name, status) {
//
//   input = document.getElementById(name).value;
//
//   if (input.length < 3 && status == true) {
//     alert('Para buscar nesecitas escribir mas que 3 simbolos');
//
//     function FindOnPageBack() {
//       document.body.innnerHTML = locale_HTML;
//     }
//   }
//
//   if (input.length >= 3) {
//     function FindOnPageGo(){
//       search = '/'+input+'/g';
//       pr = document.body.innerHTML;
//       result = pr.match(/>(.*?)</g);
//       result_arr =[];
//
//       for (var i=0; i<result.length;i++){
//         result_arr[i] = result[i].replace(eval(search), '<span style="background-color: yellow;">'+input+'</span>');
//       }
//       for(var i=0; i<result.length; i++){
//         pr=pr.replace(result[i], result_arr[i])
//       }
//       document.body.innerHTML = pr;
//     }
//
//   }
//
//   function FindOnPageBack() {
//     document.body.innerHTML = locale_HTML;
//   }
//
//   if (status) {
//     FindOnPageBack();
//     FindOnPageGo();
//   }
//   if (!status) {
//     FindOnPageBack();
//   }
// }


$(document).ready(function(){
  $('#search').hideseek();
});
