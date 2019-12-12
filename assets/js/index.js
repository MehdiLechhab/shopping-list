

$("#js-shopping-list-form").submit(function(e) {
  let currentWord = $("input").val()
  console.log(currentWord)
  let addList = `<li>
        <span class="shopping-item">${currentWord}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`

  $('.shopping-list').append(addList)
  event.preventDefault();
});

$("#js-shopping-list-form").keypress(function(e) {
	let currentWord = $("input").val()
	let addList = `<li>
        <span class="shopping-item">${currentWord}</span>
        <div class="shopping-item-controls">
          <button class="shopping-item-toggle">
            <span class="button-label">check</span>
          </button>
          <button class="shopping-item-delete">
            <span class="button-label">delete</span>
          </button>
        </div>
      </li>`
	if(e.which == 13){
		$('.shopping-list').append(addList)
		event.preventDefault();
	}
});

// $(".shopping-item-toggle").on("click", function(e) {
// 	$(".shopping-item").toggleClass("shopping-item__checked")
// });


$('.shopping-list').on('click', '.shopping-item-toggle', function(e) {
	console.log($(this));
	console.log($(this).closest("li").find('.shopping-item'))
    $(this).closest('li').find('.shopping-item').toggleClass('shopping-item__checked');
  });
$('.shopping-list').on('click', '.shopping-item-delete', function(e) {
    $(this).closest('li').remove();
  });



