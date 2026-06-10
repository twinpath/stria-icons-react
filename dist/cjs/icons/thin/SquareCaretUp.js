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
var SquareCaretUp_exports = {};
__export(SquareCaretUp_exports, {
  default: () => SquareCaretUp_default
});
module.exports = __toCommonJS(SquareCaretUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareCaretUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H384C419.344 480 448 451.346 448 416V96C448 60.654 419.344 32 384 32ZM432 416C432 442.467 410.469 464 384 464H64C37.531 464 16 442.467 16 416V96C16 69.533 37.531 48 64 48H384C410.469 48 432 69.533 432 96V416ZM245.664 169.838C240.203 163.588 232.305 160 224 160S207.797 163.588 202.328 169.846L112.734 272.238C105.305 280.666 103.508 292.799 108.18 303.105C112.828 313.369 123.125 320 134.398 320H313.602C324.875 320 335.172 313.369 339.82 303.105C344.492 292.799 342.695 280.666 335.227 272.197L245.664 169.838ZM325.25 296.5C323.176 301.074 318.625 304 313.602 304H134.398C129.375 304 124.824 301.074 122.75 296.5C120.676 291.924 121.449 286.549 124.773 282.775L214.375 180.375C216.801 177.6 220.301 176 224 176S231.199 177.6 233.625 180.375L323.227 282.775C326.551 286.549 327.324 291.924 325.25 296.5Z" })
  }
));
SquareCaretUpThin.displayName = "SquareCaretUpThin";
var SquareCaretUp_default = SquareCaretUpThin;
