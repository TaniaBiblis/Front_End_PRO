let width, height, color, className, y, x;
let defaultClass = 'figure';

let setSize = function () {
    let sameSize = document.getElementById("strictFigure").checked;
    if (!sameSize) {
        width = newWidth.value;
        height = newHeight.value;
    }
    else {
        width = newWidth.value;
        height = width;
    }
}

let setColor = function () {
    color = newColor.value;
}

let setFigure = function () {
    let radios = document.getElementsByName("figure");
    for (var i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            className = defaultClass + ' ' + radios[i].value;
        }
    }
}


let setCoordinates = function (e) {
    let sameSize = document.getElementById("strictFigure").checked;
    if (!sameSize) {
        y = e.offsetY - ( height / 2 );
        x = e.offsetX - ( width / 2 );
    }
    else {
        y = e.offsetY - ( width / 2 );
        x = e.offsetX - ( width / 2 );
    }
}
let disableHeightInput = function () {
    let heightInput = document.getElementById("newHeight");
    let sameSize = document.getElementById("strictFigure").checked;
    if (sameSize) {
        heightInput.disabled = true;
    }
    else {
        heightInput.disabled = false;
    }
}

let make = function (e) {
    let target = e.target;
    if (target.className.indexOf("figure") == -1) {
        let element = document.createElement('div');
        setSize();
        setColor();
        setFigure();
        setCoordinates(e);
        element.className = className;
        element.style.width = width + 'px';
        element.style.height = height + 'px';
        element.style.backgroundColor = color;
        element.style.top = y + 'px';
        element.style.left = x + 'px';
        target.appendChild(element);
    }
    else {
        displayFigInfo(target);
    }
}
let displayFigInfo = function (target) {
    let infoDiv = document.getElementById("figureInfo");
    let figureType, figureSize, figureColor;
    figureWidth = target.style.width;
    figureHeight = target.style.height;
    figureSize = "Ширина " + figureWidth + ", высота " + figureHeight;
    figureColor = "Цвет фигуры " + target.style.backgroundColor;
    figureType = target.className;
    if (figureType.indexOf("square") !== -1) {
        figureType = "Квадрат";
    }
    else {
        figureType = "Круг";
    }

    infoDiv.innerHTML = "<p>" + figureType + "</p><p>" + figureSize + "</p><p>" + figureColor + "</p>";
    updateInput(figureWidth, figureHeight, figureType, target.style.backgroundColor);

}
let updateInput = function (width, height, type, color) {
    console.log(width);
    console.log(height);
    console.log(type);
    console.log(color);
    let widthInput = document.getElementById("newWidth");
    let heightInput = document.getElementById("newHeight");
    let squareInput = document.getElementById("newSquare");
    let circleInput = document.getElementById("newCircle");
    if (type == "Квадрат") {
        squareInput.checked = true;
        circleInput.checked = false;
    }
    else {
        squareInput.checked = false;
        circleInput.checked = true;
    }
    let colorInput = document.getElementById("newColor");

    width = width.substring(0, width.length - 2);
    height = height.substring(0, height.length - 2);
    if (width === height) {
        document.getElementById("strictFigure").checked = true;
    } else {
        document.getElementById("strictFigure").checked = false;
    }
    widthInput.value = width;
    heightInput.value = height;
    colorInput.value = rgbToHex(color);
}
function rgbToHex(color) {
    color = "" + color;
    if (!color || color.indexOf("rgb") < 0) {
        return;
    }

    if (color.charAt(0) == "#") {
        return color;
    }

    var nums = /(.*?)rgb\((\d+),\s*(\d+),\s*(\d+)\)/i.exec(color),
        r = parseInt(nums[2], 10).toString(16),
        g = parseInt(nums[3], 10).toString(16),
        b = parseInt(nums[4], 10).toString(16);

    return "#" + (
            (r.length == 1 ? "0" + r : r) +
            (g.length == 1 ? "0" + g : g) +
            (b.length == 1 ? "0" + b : b)
        );
}

area.addEventListener('click', make)

