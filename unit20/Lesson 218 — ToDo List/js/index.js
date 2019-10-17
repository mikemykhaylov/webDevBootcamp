function assignColors() {
  $('.toDoItemWrap').each(function colorsForEach(i) {
    if (i % 2 !== 0) {
      $(this).removeClass('odd');
      $(this).addClass('even');
    } else {
      $(this).removeClass('even');
      $(this).addClass('odd');
    }
  });
}

function makeRoundCorners() {
  $('.toDoItemWrap');
  $('.toDoItemWrap').css({
    'border-bottom-left-radius': '0px',
    'border-bottom-right-radius': '0px',
  });
  $('.toDoItemWrap')
    .last()
    .css({
      'border-bottom-left-radius': '15px',
      'border-bottom-right-radius': '15px',
    });
}

function makeToDoDone() {
  $('.toDoItem').unbind('click');
  $('.toDoItem').on('click', function doneForEach() {
    $(this)
      .children()
      .first()
      .toggleClass('done');
  });
}

function deleteToDo() {
  $('.delBtn').unbind('click');
  $('.delBtn').on('click', function deleteForEach() {
    $(this)
      .parent()
      .fadeOut('200ms', function afterDel() {
        $(this).remove();
        assignColors();
        makeRoundCorners();
      });
  });
}

function addToDo() {
  $('#addToDo').keypress(key => {
    const toDoMarkup = `<div class="toDoItemWrap">
      <div class="delBtn"><i class="fas fa-trash"></i></div>
      <div class="toDoItem">
        <h3>${$('#addToDo').val()}</h3>
    </div>
  </div>`;
    if (key.which === 13) {
      $('.toDoWrap').append(toDoMarkup);
      $('#addToDo').val('');
      assignColors();
      makeRoundCorners();
      makeToDoDone();
      deleteToDo();
    }
  });
}

function hideInput() {
  $('nav')
    .children()
    .last()
    .on('click', () => {
      if ($('input').css('display') === 'none') {
        $('input').fadeIn('200ms');
      } else {
        $('input').fadeOut('200ms');
      }
    });
}

addToDo();
hideInput();
