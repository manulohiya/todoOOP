$(function() {

  // form to create new todo
  var $newToDo = $('#new-toDo');
  
  // element to hold our list of todos
  var $toDoList = $('#toDo-list');

  // todo template
  var toDoTemplate = _.template($('#toDo-template').html());

  // submit form to create new todo
  $newToDo.on('submit', function(event) {
    event.preventDefault();

    // create new todo object from form data
    var toDoName = $('#toDo-name').val();
    var toDoDesc = $('#toDo-desc').val();
    var toDoData = {name: toDoName, desc: toDoDesc};

    function ToDo(toDoName, toDoDesc) {
      // set name, desc, and all array
      this.toDoName = toDoName;
      this.toDoDesc = toDoDesc;
      this.toDoData = toDoData; 
      
    }

    ToDo.all = [];
    ToDo.prototype.save = function() {
    // add todo to todo array
    ToDo.all.push(this); 
    };

    var toDo1 = new ToDo(toDoName, toDoDesc);
    toDo1.save()



  // append new todo to `$toDoList`
    var render = function() {
      var $toDo1 = $(toDoTemplate(toDoData));
      $toDoList.append($toDo1);
    }

   render();
    
    // reset the form
    $newToDo[0].reset();
    $('#toDo-name').focus();
    });

 
    // add class to todo on click to mark it as done
    $toDoList.on('click', '.toDo', function() {
      console.log("clicked");
      $(this).addClass('done');
    });

  

});