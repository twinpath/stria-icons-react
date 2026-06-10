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
var ListCheck_exports = {};
__export(ListCheck_exports, {
  default: () => ListCheck_default
});
module.exports = __toCommonJS(ListCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ListCheckThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 367.998C21.492 367.998 0 389.49 0 415.998S21.492 463.998 48 463.998S96 442.506 96 415.998S74.508 367.998 48 367.998ZM48 447.998C30.355 447.998 16 433.642 16 415.998S30.355 383.998 48 383.998S80 398.353 80 415.998S65.645 447.998 48 447.998ZM58.781 134.076C60.312 135.357 62.156 135.998 64 135.998C66.062 135.998 68.094 135.217 69.656 133.654L157.656 45.654C160.781 42.529 160.781 37.467 157.656 34.342S149.469 31.217 146.344 34.342L63.594 117.107L13.219 73.92C9.844 71.076 4.781 71.435 1.938 74.795C-0.938 78.138 -0.562 83.201 2.781 86.076L58.781 134.076ZM200 103.998H504C508.406 103.998 512 100.404 512 95.998S508.406 87.998 504 87.998H200C195.594 87.998 192 91.592 192 95.998S195.594 103.998 200 103.998ZM504 247.998H200C195.594 247.998 192 251.592 192 255.998S195.594 263.998 200 263.998H504C508.406 263.998 512 260.404 512 255.998S508.406 247.998 504 247.998ZM504 407.998H168C163.594 407.998 160 411.592 160 415.998S163.594 423.998 168 423.998H504C508.406 423.998 512 420.404 512 415.998S508.406 407.998 504 407.998ZM157.656 194.342C154.531 191.217 149.469 191.217 146.344 194.342L63.594 277.107L13.219 233.92C9.844 231.045 4.781 231.467 1.938 234.795C-0.938 238.138 -0.562 243.201 2.781 246.076L58.781 294.076C60.312 295.357 62.156 295.998 64 295.998C66.062 295.998 68.094 295.217 69.656 293.654L157.656 205.654C160.781 202.529 160.781 197.467 157.656 194.342Z" })
  }
));
ListCheckThin.displayName = "ListCheckThin";
var ListCheck_default = ListCheckThin;
