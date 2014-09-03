'use strict';

angular.module('commonApp')
  .controller('NotesCtrl', function ($scope, $http) {

    $scope.note = 'Lead by example by taking greate notes.';
    $scope.labels = ['business idea'];
    $scope.addingNote = false; //keeps add note hidden

    $scope.added = 0;

    $http.get('/api/notes').success(function(notes){
        $scope.cards = notes;
    });

    $scope.toggleAdd = function(){
      $scope.addingNote = !$scope.addingNote;
    };

    // This doesn't appear to be needed, but as is now it could be a performance issue
    // $scope.$watch('note', function(noteText){
    //   console.log(noteText);
    //   $scope.noteLength = noteText.length;
    // });

    $scope.addCard = function() {
      // assign to object for mongo'ing - could do on backend
      var labels = [];
      $scope.labels.forEach(function(val){
        labels.push({label: val});
      });

      // move to promise of the .post
      $scope.cards.push({
        note: $scope.note,
        labels: labels
      });


      $http.post('/api/notes', {
        note: $scope.note,
        labels: labels
      }).success(function(){
        $scope.added++;
      });

      $scope.note = '';
      // don't set it because if your putting in alot they might be the same
      //$scope.labels = ['reading'];
    };

    $scope.stuff = function(card){
      var labels = '';
      angular.forEach(card.labels, function(value){
        labels = labels + ', ' + value;
      });
      return labels;
    };
  });


