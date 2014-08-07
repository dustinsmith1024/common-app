'use strict';

angular.module('commonApp')
  .controller('NotesCtrl', function ($scope, $http) {

    $scope.note = 'Lead by example by taking greate notes.';
    $scope.labels = ['books', 'reading'];
    $scope.addingNote = false; //keeps add note hidden

    $http.get('/api/notes').success(function(notes){
        $scope.cards = notes;
    });

    $scope.toggleAdd = function(){
      $scope.addingNote = !$scope.addingNote;
    };

    $scope.addCard = function() {
      // assign to object for mongo'ing - could do on backend
      var labels = [];
      $scope.labels.forEach(function(val){
        labels.push({label: val});
      });

      $scope.cards.push({
        note: $scope.note,
        labels: labels
      });

      $http.post('/api/notes', {
        note: $scope.note,
        labels: labels
      });

      $scope.note = 'add another sweet note...';
      $scope.labels = ['new-label'];
    };

    $scope.stuff = function(card){
      var labels = '';
      angular.forEach(card.labels, function(value){
        labels = labels + ', ' + value;
      });
      return labels;
    };
  });


