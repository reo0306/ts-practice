"use strict";
function echo(message) {
    let hello = 'hello';
    return message;
}
let implicitAny;
implicitAny = 'implicitAny';
let nullableMessage = echo('h1');
let undefinedableMessage = undefined;
let onlyNull = null;
let onlyUndefined = undefined;
if (nullableMessage) {
    nullableMessage.toUpperCase();
}
echo.call(null, 'h1');
