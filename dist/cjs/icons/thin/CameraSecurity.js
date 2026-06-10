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
var CameraSecurity_exports = {};
__export(CameraSecurity_exports, {
  default: () => CameraSecurity_default
});
module.exports = __toCommonJS(CameraSecurity_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CameraSecurityThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 0H64C28.654 0 0 28.654 0 64V352C0 387.346 28.654 416 64 416H116.793L69.594 472.625C63.562 479.859 62.297 489.641 66.297 498.172C70.281 506.703 78.609 512 88.031 512H359.969C369.391 512 377.719 506.703 381.703 498.172C385.703 489.641 384.437 479.859 378.406 472.625L331.207 416H384C419.348 416 448 387.346 448 352V64C448 28.654 419.348 0 384 0ZM366.125 482.875C369.141 486.5 367.719 490.313 367.219 491.391S364.687 496 359.969 496H88.031C83.312 496 81.281 492.469 80.781 491.391S78.859 486.5 81.875 482.875L137.619 416H310.381L366.125 482.875ZM432 352C432 378.467 410.467 400 384 400H64C37.533 400 16 378.467 16 352V64C16 37.533 37.533 16 64 16H384C410.467 16 432 37.533 432 64V352ZM224 80C153.309 80 96 137.307 96 208C96 278.691 153.309 336 224 336C294.693 336 352 278.691 352 208C352 137.307 294.693 80 224 80ZM224 320C162.244 320 112 269.758 112 208S162.244 96 224 96C285.758 96 336 146.242 336 208S285.758 320 224 320Z" })
  }
));
CameraSecurityThin.displayName = "CameraSecurityThin";
var CameraSecurity_default = CameraSecurityThin;
