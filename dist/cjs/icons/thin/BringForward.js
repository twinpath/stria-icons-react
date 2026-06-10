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
var BringForward_exports = {};
__export(BringForward_exports, {
  default: () => BringForward_default
});
module.exports = __toCommonJS(BringForward_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BringForwardThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 160H392C387.582 160 384 163.582 384 168S387.582 176 392 176H448C474.51 176 496 197.49 496 224V448C496 474.51 474.51 496 448 496H224C197.49 496 176 474.51 176 448V392C176 387.582 172.418 384 168 384S160 387.582 160 392V448C160 483.346 188.654 512 224 512H448C483.346 512 512 483.346 512 448V224C512 188.652 483.346 160 448 160ZM232 384C227.594 384 224 387.578 224 392V424C224 437.234 234.781 448 248 448H424C437.219 448 448 437.234 448 424V248C448 234.766 437.219 224 424 224H392C387.594 224 384 227.578 384 232S387.594 240 392 240H424C428.406 240 432 243.594 432 248V424C432 428.406 428.406 432 424 432H248C243.594 432 240 428.406 240 424V392C240 387.578 236.406 384 232 384ZM352 288V64C352 28.654 323.346 0 288 0H64C28.654 0 0 28.654 0 64V288C0 323.346 28.654 352 64 352H288C323.346 352 352 323.346 352 288ZM16 288V64C16 37.533 37.533 16 64 16H288C314.467 16 336 37.533 336 64V288C336 314.467 314.467 336 288 336H64C37.533 336 16 314.467 16 288Z" })
  }
));
BringForwardThin.displayName = "BringForwardThin";
var BringForward_default = BringForwardThin;
