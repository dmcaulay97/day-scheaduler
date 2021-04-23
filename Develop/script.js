var timeDisplay = $(".timeDisplay");
var container = $(".container");
var Time = moment();
var currentHour = parseInt(Time.format("HH"));

for (var i = 9; i < 18; i++) {
    var row = $("<div></div>").attr("class", "row");
    var hour = $("<div></div>").attr("class", "hour col-2 text-center");

    if (i < 13) {
        var timeLabel = i + "AM";
    } else {
        var timeLabel = (i - 12) + "PM";
    }

    hour.append($("<div class = 'margin'></div>").text(timeLabel));
    row.append(hour);
    var text = $("<div></div>");
    if (i < currentHour) {
        text.attr("class", "past col-8");
    } else if (i == currentHour) {
        text.attr("class", "present col-8");
    } else {
        text.attr("class", "future col-8");
    }

    var textArea = $("<div></div>").attr("class", "text margin");
    textArea.attr("contenteditable", "true");
    text.append(textArea);
    row.append(text);
    row.append($("<div><div class = 'margin'>🔒</div></div>").attr("class", "saveBtn col-2"));
    container.append(row);

    var save = $(".saveBtn");
    save.on("click", function (e) {
        var btn = e.target;
    });
}

var inter = setInterval(function () {
    var currentTime = moment();
    currentTime = currentTime.format("MMMM Do, YYYY, hh:mm:ss");
    timeDisplay.text(currentTime);
}, 1000);


