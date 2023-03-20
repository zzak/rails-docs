function toggleSource(id)
{
  var src = $('#' + id).toggle();
  var isVisible = src.is(':visible');
  $('#l_' + id).html(isVisible ? 'hide' : 'show');
}

window.highlight = function(url) {
  var hash = url.match(/#([^#]+)$/)
  if(hash) {
    $("a[name]").each ( function() {
      if ($(this).attr("name") == hash[1]) {
	$(this).parent().effect('highlight', {}, 'slow')
      }
    })
  }
}

$(function() {
  highlight('#' + location.hash);
  $('.description pre').each(function() {
    hljs.highlightBlock(this);
  });
});
