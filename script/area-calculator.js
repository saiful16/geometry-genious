function calculateTriangleArea() {
    // get the base value of the triangle 
    const baseField = document.getElementById('triangle-base');
    const baseFieldValue = baseField.value;
    const base = parseFloat(baseFieldValue)
    // console.log(base);

    // get the height of the triangle
    const heightField = document.getElementById('triangle-height');
    const hightFieldValue = heightField.value;
    const height = parseFloat(hightFieldValue);
    // console.log(height);

    // calculate the values 
    const area = 0.5 * base * height;
    // console.log(area)

    // set the value of area 
    const areaField = document.getElementById('area-field')
    areaField.innerText = area;
}

function calculateRectangleArea() {
    // get the length of rectangle
    const lengthField = document.getElementById('rectangle-length');
    const lengthFieldText = lengthField.value;
    const length = parseFloat(lengthFieldText);
    // console.log(length);

    // get the width of rectangle
    const widthField = document.getElementById('rectangle-height');
    const widthFieldText = widthField.value;
    const width = parseFloat(widthFieldText);
    // console.log(width);

    // calculate the values of the rectangle 
    const areaRectangle = length * width;
    
    // set the value
    const rectangleArea = document.getElementById('rectangle-area');
    rectangleArea.innerText= areaRectangle;
    console.log(rectangleArea)
    


}

function calculateParallelogramArea(){
    // get the base value of the parallelogram 
    const ParallelogramBaseField = document.getElementById('Parallelogram-base');
    const ParallelogramBaseText = ParallelogramBaseField.value;
    const ParallelogramBase = parseFloat(ParallelogramBaseText)
    console.log(ParallelogramBase);

    // get the height of the parallelogram 
    const ParallelogramHeightField = document.getElementById('Parallelogram-height');
    const ParallelogramHeightText = ParallelogramHeightField.value;
    const ParallelogramHeight = parseFloat(ParallelogramHeightText);
    console.log(ParallelogramHeight);
    // calculate the value 
    const ParallelogramArea = ParallelogramBase * ParallelogramHeight;
    // set the value 
    const ParaArea = document.getElementById('Parallelogram-area');
    ParaArea.innerText = ParallelogramArea;
}

function calculateRhombusArea(){
    // get the value of d1 
    const rhombnusD1 = getElementValueById('rhombus-d1')
    // get the value of d2
    const rhombnusD2 = getElementValueById('rhombus-d2')
    console.log(rhombnusD1);
    console.log(rhombnusD2);
    // calculate the result 
    const areaValue = 0.5 * rhombnusD1 * rhombnusD2;
    setElementValueById('rhombus-area',areaValue)
}

// get the value of the element
function getElementValueById(element){
    const elementField = document.getElementById(element);
    const elementFieldText = elementField.value;
    const elementValue = parseFloat(elementFieldText);
    return elementValue;
}

// set the calculated value 
function setElementValueById(areaId, areaValue){
    const result = document.getElementById(areaId);
    result.innerText = areaValue;
}