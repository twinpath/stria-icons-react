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
var BookArrowRight_exports = {};
__export(BookArrowRight_exports, {
  default: () => BookArrowRight_default
});
module.exports = __toCommonJS(BookArrowRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BookArrowRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M440 272C435.582 272 432 275.582 432 280V384.006C432 392.842 424.836 400.006 416 400.006L56 399.994C40.324 399.994 26.176 406.51 16 416.928V64C16 37.49 37.492 16 64 16H416C424.836 16 432 23.162 432 32V136C432 140.418 435.582 144 440 144S448 140.418 448 136V32C448 14.326 433.672 0 416 0H64C28.656 0 0 28.652 0 64V455.99C0 486.918 25.07 511.99 56 511.992L439.992 512C444.414 512.004 448 508.418 448 504C448 499.578 444.414 495.992 439.992 495.992H416V416.006C433.672 416.006 448 401.678 448 384.006V280C448 275.582 444.418 272 440 272ZM400 495.992H56C32.625 495.992 13.875 475.85 16.195 452.006C18.211 431.225 36.891 415.99 57.77 415.99L400 416.006V495.992ZM637.656 202.93L529.656 94.93C528.094 93.367 526.062 92.586 524 92.586S519.906 93.367 518.344 94.93C515.219 98.055 515.219 103.117 518.344 106.242L612.688 200.586H264C259.594 200.586 256 204.164 256 208.586S259.594 216.586 264 216.586H612.688L519.516 309.758C516.391 312.883 516.391 317.945 519.516 321.07S527.703 324.195 530.828 321.07L637.656 214.242C640.781 211.117 640.781 206.055 637.656 202.93Z" })
  }
));
BookArrowRightThin.displayName = "BookArrowRightThin";
var BookArrowRight_default = BookArrowRightThin;
