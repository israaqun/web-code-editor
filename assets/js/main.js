const htmlEditor = document.getElementById("html-editor");
const cssEditor = document.getElementById("css-editor");
const jsEditor = document.getElementById("js-editor");
const result = document.getElementById("result");

let updateTimeout;

function clearResult() {
    result.innerHTML = '';
}

function updateHTML(htmlCode) {
    const htmlElement = document.createElement('div');
    htmlElement.innerHTML = htmlCode;
    result.appendChild(htmlElement);
}

function updateCSS(cssCode) {
    const styleElement = document.createElement('style');
    styleElement.innerHTML = cssCode;
    result.appendChild(styleElement);
}

function updateJS(jsCode) {
    const scriptElement = document.createElement('script');
    scriptElement.innerHTML = jsCode;
    result.appendChild(scriptElement);
}

function getCodeFromEditors() {
    const htmlCode = htmlEditor.value;
    const cssCode = cssEditor.value;
    const jsCode = jsEditor.value;
    return { htmlCode, cssCode, jsCode };
}

function updatePreview() {
    clearTimeout(updateTimeout);
    updateTimeout = setTimeout(() => {
        const { htmlCode, cssCode, jsCode } = getCodeFromEditors();

        clearResult();
        updateHTML(htmlCode);
        updateCSS(cssCode);
        updateJS(jsCode);
    }, 700); 
}

htmlEditor.addEventListener("input", updatePreview);
cssEditor.addEventListener("input", updatePreview);
jsEditor.addEventListener("input", updatePreview);

updatePreview();