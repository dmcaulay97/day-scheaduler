var container = $(".container");
var currentTime = moment();
var currentHour = parseInt(currentTime.format("HH"));
console.log(currentHour);

for (var i = 9; i < 18; i++) {
    var row = $("<div></div>").attr("class", "row");
    var hour = $("<div></div>").attr("class", "hour col-2 text-center");

    if (i < 13) {
        var timeLabel = i + "AM";
    } else {
        var timeLabel = (i - 12) + "PM";
    }

    hour.append($("<div></div>").text(timeLabel));
    row.append(hour);
    var text = $("<div></div>");
    console.log("Hello!!");
    text.attr("class", "past col-8");
    // if (i < currentHour) {
    //     text.attr("class", "past col-8");
    // } else if (i = currentHour) {
    //     text.attr("class", "present col-8");
    // } else {
    //     text.attr("class", "future col-8");
    // }

    var textArea = $("<div></div>").attr("class", "text");
    textArea.attr("contenteditable", "true");
    text.append(textArea);
    row.append(text);
    row.append($("<div></div>").attr("class", "saveBtn col-2"));
    container.append(row);


}
