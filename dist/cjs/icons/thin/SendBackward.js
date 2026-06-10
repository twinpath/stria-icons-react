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
var SendBackward_exports = {};
__export(SendBackward_exports, {
  default: () => SendBackward_default
});
module.exports = __toCommonJS(SendBackward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SendBackwardThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 336H64C37.49 336 16 314.51 16 288V64C16 37.49 37.49 16 64 16H288C314.51 16 336 37.49 336 64V120C336 124.418 339.582 128 344 128S352 124.418 352 120V64C352 28.654 323.346 0 288 0H64C28.654 0 0 28.654 0 64V288C0 323.348 28.654 352 64 352H120C124.418 352 128 348.418 128 344S124.418 336 120 336ZM448 160H224C188.654 160 160 188.654 160 224V448C160 483.346 188.654 512 224 512H448C483.346 512 512 483.346 512 448V224C512 188.654 483.346 160 448 160ZM496 448C496 474.467 474.467 496 448 496H224C197.533 496 176 474.467 176 448V224C176 197.533 197.533 176 224 176H448C474.467 176 496 197.533 496 224V448ZM424 224H248C234.781 224 224 234.766 224 248V424C224 437.234 234.781 448 248 448H424C437.219 448 448 437.234 448 424V248C448 234.766 437.219 224 424 224ZM432 424C432 428.406 428.406 432 424 432H248C243.594 432 240 428.406 240 424V248C240 243.594 243.594 240 248 240H424C428.406 240 432 243.594 432 248V424Z" })
  }
));
SendBackwardThin.displayName = "SendBackwardThin";
var SendBackward_default = SendBackwardThin;
