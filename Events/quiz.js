let jsondata;
fetch("https://eclectika.org/api/news.php/GetEventByCategory?category=3")
  .then(function(u) {
    return u.json();
  })
  .then(function(json) {
    jsondata = json;
    console.log(jsondata[0]);
  });

function showQuestion(event, $modal) {
  var button = $(event.relatedTarget); // Button that triggered the modal
  var num = parseInt(button.data("num"));
  var question = jsondata[num];

  $modal.find(".modal-title").text(question.Name);
  $modal.find(".eventdescmodal").text(question.Description);
  $modal.find(".eventrules").text(question.Rules);
  $modal.find(".eventjuding").text(question.Judging);
  $modal.find(".eventregister").text(question.Register);
}

$(function() {
  $("#myModal").on("show.bs.modal", function(event) {
    showQuestion(event, $(this));
  });
});
