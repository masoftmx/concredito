
// angular.module('interCeramic').directive('valida', validador);
//  function validador () {
//  return {
//   restrict: 'A',
//   link: function(scope, element, attrs) {
//     element[0].carga = false;
//     input = element.find('.form-control');
//     var formName = element.parents('form').attr('name');
//     scope.$watch(formName + '.' + input[0].name + '.$invalid', function (val) {
//       if(element[0].carga){
//         if(val)
//           element.addClass('has-error');
//         else
//           element.removeClass('has-error');
//       }else{
//         element[0].carga = true
//       }
//     });
//   }
// };
// }

// angular.module('interCeramic').directive('validaForm', validaForm);
//   function validaForm () {
//   return {
//     restrict: 'A',
//       scope:{
//           formulario:"="
//       },
//      link: function(scope, element, attrs) {
//       element.on("click", function () {
//         errorsType = scope.formulario.$error;
//         if(!_.isEmpty(errorsType)){
//           angular.forEach(errorsType, function(errors){
//             errors.forEach(function(error){
//               if(error.$invalid == true){
//                 var elem = document.getElementsByName(error.$name)[0].parentElement;
//                 elem.className += " has-error";
//               }
//             })
//           });
//         }else{
//           _.each($("div").find("[valida]"), function(elem){
//             elem.carga = false;
//           }); 
//         }
//       });
//     }
//   }
// }

// angular.module('interCeramic').filter('cut', function () {
//   return function (value, wordwise, max, tail) {
//     if (!value) return '';

//     max = parseInt(max, 20);
//     if (!max) return value;
//     if (value.length <= max) return value;

//     value = value.substr(0, max);
//     if (wordwise) {
//       var lastspace = value.lastIndexOf(' ');
//       if (lastspace !== -1) {
//         if (value.charAt(lastspace-1) === '.' || value.charAt(lastspace-1) === ',') {
//           lastspace = lastspace - 1;
//         }
//         value = value.substr(0, lastspace);
//       }
//     }

//     return value + (tail || ' …');
//   };
//});

