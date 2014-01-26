function Editor() {
    var self = this;

    // TODO Level controller should remove all children of #editorPane during initialization
    var formBox = $('<div class="editor"><span class="equation">y = <span class="card">2</span>x + <span class="card">12</span></span></div>');
    $('#editorPane').append(formBox);

    self.setPicked = function (picked) {
        if (picked) {
            formBox.show();
        } else {
            formBox.hide();
        }
    };

    self.getYIntercept = function () {
        return parseFloat(formBox.find("span.card:eq(1)").text());
    };

    self.getSlope = function () {
        return parseFloat(formBox.find("span.card:eq(0)").text());
    };

    self.move = function (y, slope) {
        var canvasOffset = $("#geoworld-canvas").offset();
        var formBoxHeight = formBox.height();

        if (slope < 0) {
            // Position box above: Move top up by height of form box
            y = y - formBoxHeight;
        }

        // Clamp formBox to screen
        if (y < 0) {
            y = 0;
        } else if (y > canvas.height - formBoxHeight) {
            y = canvas.height - formBoxHeight;
        }

        formBox.css({ position: "absolute", left: canvasOffset.left, top: canvasOffset.top + y });
    };
}
