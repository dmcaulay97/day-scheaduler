var timeDisplay = $(".timeDisplay");
var container = $(".container");
var Time = moment();
var currentHour = parseInt(Time.format("HH"));
var keysArray = Object.keys(localStorage);

for (var i = 9; i < 18; i++) {
    var row = $("<div></div>").attr("class", "row");
    var hour = $("<div></div>").attr("class", "hour col-2 text-center");

    if (i < 13) {
        hour.text(i + "AM");
    } else {
        hour.text((i - 12) + "PM");
    }

    row.append(hour);
    var text = $("<div></div>");
    if (i < currentHour) {
        text.attr("class", "text past col-8");
    } else if (i == currentHour) {
        text.attr("class", " text present col-8");
    } else {
        text.attr("class", " text future col-8");
    }

    if (keysArray.includes(hour.text())) {
        text.text(localStorage[hour.text()]);
    }

    text.attr("contenteditable", "true");
    row.append(text);
    row.append($("<div>🔒</div>").attr("class", "saveBtn col-2"));
    container.append(row);
}

container.on("click", function (event) {
    var target = event.target;
    if ($(target).attr("class") == "saveBtn col-2") {
        var keyLabel = $(target).prev().prev().text();
        var value = $(target).prev().text();
        localStorage.setItem(keyLabel, value);
    }
});

var currentTime = moment();
currentTime = currentTime.format("MMMM Do, YYYY, hh:mm:ss");
timeDisplay.text(currentTime);
var inter = setInterval(function () {
    currentTime = moment();
    currentTime = currentTime.format("MMMM Do, YYYY, hh:mm:ss");
    timeDisplay.text(currentTime);
}, 1000);