var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);
var UserInjured_exports = {};
__export(UserInjured_exports, {
  default: () => UserInjured_default
});
module.exports = __toCommonJS(UserInjured_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserInjuredThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 256C294.695 256 352 198.691 352 128S294.695 0 224 0C153.312 0 96 57.309 96 128S153.312 256 224 256ZM328.291 88H218.422L291.543 39.252C307.928 51.756 320.769 68.465 328.291 88ZM224 16C243.195 16 261.004 21.301 276.811 29.846L189.578 88H119.709C135.879 46.004 176.375 16 224 16ZM114.732 104H333.268C334.971 111.75 336 119.744 336 128C336 189.758 285.758 240 224 240S112 189.758 112 128C112 119.744 113.029 111.75 114.732 104ZM274.666 304H173.334C77.419 304 -0.312 381.913 0.001 477.908C0.062 496.819 15.754 512 34.666 512H294.05C322.508 512 347.903 491.597 351.526 463.37C355.909 429.221 329.303 400 296 400H216.437L166.848 320.656C169.047 320.564 171.113 320 173.334 320H274.666C361.298 320 431.802 390.38 431.999 476.968C432.023 487.413 423.779 496 413.334 496H376C371.582 496 368 499.582 368 504C368 508.418 371.582 512 376 512H413.334C432.246 512 447.937 496.819 447.999 477.908C448.311 381.913 370.59 304 274.666 304ZM80 496H34.666C24.373 496 16 487.625 16 477.332C16 425.639 41.391 380.084 80 351.387V496ZM296 416C318.092 416 336 433.908 336 456S318.092 496 296 496H276.437L226.437 416H296ZM257.562 496H96V341.16C112.195 331.924 129.978 325.441 149.094 322.451L257.562 496Z" })
  }
));
UserInjuredThin.displayName = "UserInjuredThin";
var UserInjured_default = UserInjuredThin;
