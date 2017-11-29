'use strict';

/**
 * @ngdoc function
 * @name clientApp.controller:ManageCsc191TemplatesCtrl
 * @description
 * # ManageCsc191TemplatesCtrl
 * Controller of the clientApp
 */
 angular.module('clientApp')
   .controller('ManageCsc191TemplatesCtrl', ['$scope', '$http', '$mdDialog',
     function($scope, $http, $mdDialog) {

       $scope.initFirst = function() {

         $scope.currentNavItem = 'csc191TM'
         $scope.customFullscreen = false;
         $scope.allContent = null;
         $scope.category = null;
         $scope.contentTitle = null;
         $scope.linkText = null;
         $scope.contentDescription = null;
         $scope.contentUrl = null;
         $scope.content = null;
         $scope.selectedContentType = 'externalLink';
         $scope.submitCreateCategory = false;
         $scope.submitCreateContent = false;
         $scope.course = '191';
         $scope.page = 'Templates';

         var data = {
           course: $scope.course,
           page: $scope.page
         };
         var req = $http.post('/api/getcontent', data);
         req.then(function(data) {
           $scope.allContent = data.data.categories;
         }).catch(function() {
           console.log("Could not get page content");
         });

         $scope.showAddContent = function(ev) {
           $mdDialog.show({
               controller: AddContentDialogController,
               templateUrl: 'dialog1.addContent.html',
               parent: angular.element(document.body),
               targetEvent: ev,
               scope: $scope.$new(), // Uses prototypal inheritance to gain access to parent scope
               clickOutsideToClose: false,
               fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
             })
             .then(function() {}, function() {
               $scope.status = 'You cancelled the dialog.';
             });
         };

         function AddContentDialogController($scope, $mdDialog) {
           $scope.submitCreateContent = false;
           $scope.category = "";
           $scope.contentTitle = null;
           $scope.linkText = null;
           $scope.contentDescription = "";
           $scope.contentUrl = null;
           $scope.isUpload = false;

           $scope.hide = function() {
             $mdDialog.hide();
           };
           $scope.cancel = function() {
             $mdDialog.cancel();
           };
           $scope.createContent = function() {
             $scope.submitCreateContent = true;
             if ($scope.contentTitle != null &&
               $scope.linkText != null &&
               $scope.contentUrl != null || $scope.uploadedFile != null) {

               // Add content that is uploaded to the site.
               if ($scope.uploadedFile != null) {

                 // If this is a file upload, setup the FD.
                 var file = $scope.uploadedFile;
                 var fd = new FormData();
                 fd.append('file', file);

                 $http.post('/api/uploadcontent', fd, {
                     transformRequest: angular.identity,
                     headers: {
                       'Content-Type': undefined
                     }
                   })
                   .then(function(data) {
                     // Set url as the name of the file.
                     $scope.contentUrl = 'media/Download/' + file.name;
                     finalizeAddContent($scope, $mdDialog);
                   }).catch(function(err) {
                     console.log(err);
                   });

                 // There is no file to upload in this case.
               } else {
                 finalizeAddContent($scope, $mdDialog);
               }

             } else {
               console.log('You must complete all fields.')
             }
           };
         }

         // Inform the backend about the newly added content.
         var finalizeAddContent = function(scope, mdDialog) {
           var data = {
             course: scope.course,
             page: scope.page,
             title: scope.contentTitle,
             category: scope.category.ID,
             linkText: scope.linkText,
             description: scope.contentDescription,
             url: scope.contentUrl,
             isUpload: scope.isUpload
           };

           $http.post('/api/createcontent', data)
             .then(function(data) {
               scope.initFirst();
               mdDialog.hide();
             }).catch(function() {
               mdDialog.hide();
             });
         };

         $scope.showAddCategory = function(ev) {
           $mdDialog.show({
               controller: AddCategoryDialogController,
               templateUrl: 'dialog2.addCategory.html',
               parent: angular.element(document.body),
               targetEvent: ev,
               scope: $scope.$new(), // Uses prototypal inheritance to gain access to parent scope
               clickOutsideToClose: false,
               fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
             })
             .then(function() {}, function() {
               $scope.status = 'You cancelled the dialog.';
             });
         };

         function AddCategoryDialogController($scope, $mdDialog) {
           $scope.categoryName = null;
           $scope.submitCreateCategory = false;
           $scope.hide = function() {
             $mdDialog.hide();
           };
           $scope.cancel = function() {
             $mdDialog.cancel();
           };
           $scope.createCategory = function() {
             $scope.submitCreateCategory = true;
             if ($scope.categoryName != null) {
               var data = {
                 course: $scope.course,
                 page: $scope.page,
                 name: $scope.categoryName
               };
               var req = $http.post('/api/createcategory', data);
               req.then(function(data) {
                 $scope.initFirst();
                 $mdDialog.hide();
               }).catch(function() {
                 console.log("Could not add category");
                 $mdDialog.hide();
               });
             }
           };
         }

         $scope.showDeleteCategory = function(ev, category) {
           $scope.category = category;
           $mdDialog.show({
               controller: DeleteCategoryDialogController,
               templateUrl: 'dialog3.deleteCategory.html',
               parent: angular.element(document.body),
               targetEvent: ev,
               scope: $scope.$new(), // Uses prototypal inheritance to gain access to parent scope
               clickOutsideToClose: false,
               fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
             })
             .then(function() {}, function() {
               $scope.status = 'You cancelled the dialog.';
             });
         };

         function DeleteCategoryDialogController($scope, $mdDialog) {
           $scope.hide = function() {
             $mdDialog.hide();
           };
           $scope.cancel = function() {
             $mdDialog.cancel();
           };
           $scope.deleteCategory = function() {
             if ($scope.category != null) {
               var data = {
                 categoryID: $scope.category.ID
               };
               var req = $http.post('/api/deletecategory', data);
               req.then(function(data) {
                 $scope.initFirst();
                 $mdDialog.hide();
               }).catch(function() {
                 console.log("Could not add category");
                 $mdDialog.hide();
               });
             }
           };
         }

         $scope.showDeleteContent = function(ev, content) {
           $scope.content = content;
           $mdDialog.show({
               controller: DeleteContentDialogController,
               templateUrl: 'dialog4.deleteContent.html',
               parent: angular.element(document.body),
               targetEvent: ev,
               scope: $scope.$new(), // Uses prototypal inheritance to gain access to parent scope
               clickOutsideToClose: false,
               fullscreen: $scope.customFullscreen // Only for -xs, -sm breakpoints.
             })
             .then(function() {}, function() {
               $scope.status = 'You cancelled the dialog.';
             });
         };

         function DeleteContentDialogController($scope, $mdDialog) {
           $scope.hide = function() {
             $mdDialog.hide();
           };
           $scope.cancel = function() {
             $mdDialog.cancel();
           };
           $scope.deleteContent = function() {
             if ($scope.content != null) {
               var data = {
                 contentID: $scope.content.ID
               };
               var req = $http.post('/api/deletecontent', data);
               req.then(function(data) {
                 $scope.initFirst();
                 $mdDialog.hide();
               }).catch(function() {
                 console.log("Could not add category");
                 $mdDialog.hide();
               });
             }
           };
         }
       }
     }
   ]);
