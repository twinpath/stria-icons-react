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
var SquareChevronUp_exports = {};
__export(SquareChevronUp_exports, {
  default: () => SquareChevronUp_default
});
module.exports = __toCommonJS(SquareChevronUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareChevronUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M117.844 309.344L224 195.609L330.156 309.344C331.719 311.031 333.875 311.891 336 311.891C337.969 311.891 339.906 311.172 341.469 309.734C344.687 306.719 344.875 301.656 341.844 298.438L229.844 178.438C226.844 175.188 221.156 175.188 218.156 178.438L106.156 298.438C103.125 301.656 103.312 306.719 106.531 309.734C109.781 312.734 114.812 312.594 117.844 309.344ZM64 480H384C419.344 480 448 451.346 448 416V96C448 60.654 419.344 32 384 32H64C28.652 32 0 60.654 0 96V416C0 451.346 28.652 480 64 480ZM16 96C16 69.533 37.531 48 64 48H384C410.469 48 432 69.533 432 96V416C432 442.467 410.469 464 384 464H64C37.531 464 16 442.467 16 416V96Z" })
  }
));
SquareChevronUpThin.displayName = "SquareChevronUpThin";
var SquareChevronUp_default = SquareChevronUpThin;
