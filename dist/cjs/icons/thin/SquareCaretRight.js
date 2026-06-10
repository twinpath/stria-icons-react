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
var SquareCaretRight_exports = {};
__export(SquareCaretRight_exports, {
  default: () => SquareCaretRight_default
});
module.exports = __toCommonJS(SquareCaretRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareCaretRightThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480H384C419.344 480 448 451.346 448 416V96C448 60.654 419.344 32 384 32ZM432 416C432 442.467 410.469 464 384 464H64C37.531 464 16 442.467 16 416V96C16 69.533 37.531 48 64 48H384C410.469 48 432 69.533 432 96V416ZM207.758 144.734C202.551 140.146 195.805 137.602 188.805 137.602C184.668 137.602 180.656 138.469 176.891 140.18C166.629 144.834 160 155.125 160 166.4V345.6C160 356.873 166.629 367.166 176.891 371.82C180.66 373.531 184.668 374.398 188.805 374.398C195.805 374.398 202.555 371.854 207.797 367.232L310.16 277.666C316.41 272.207 320 264.307 320 256S316.41 239.793 310.152 234.326L207.758 144.734ZM299.625 265.625L197.227 355.225C194.852 357.314 191.844 358.398 188.805 358.398C187.008 358.398 185.199 358.02 183.5 357.25C178.926 355.174 176 350.625 176 345.6V166.4C176 161.375 178.926 156.824 183.5 154.75C185.199 153.979 187.008 153.602 188.805 153.602C191.844 153.602 194.852 154.684 197.227 156.775L299.625 246.375C302.398 248.799 304 252.299 304 256C304 259.699 302.398 263.199 299.625 265.625Z" })
  }
));
SquareCaretRightThin.displayName = "SquareCaretRightThin";
var SquareCaretRight_default = SquareCaretRightThin;
