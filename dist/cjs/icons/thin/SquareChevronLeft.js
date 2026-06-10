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
var SquareChevronLeft_exports = {};
__export(SquareChevronLeft_exports, {
  default: () => SquareChevronLeft_default
});
module.exports = __toCommonJS(SquareChevronLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareChevronLeftThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M277.344 362.156L163.609 256L277.344 149.844C279.031 148.281 279.891 146.125 279.891 144C279.891 142.031 279.172 140.094 277.734 138.531C274.719 135.313 269.656 135.125 266.438 138.156L146.438 250.156C143.188 253.156 143.188 258.844 146.438 261.844L266.438 373.844C269.656 376.875 274.719 376.688 277.734 373.469C280.734 370.219 280.594 365.188 277.344 362.156ZM448 416V96C448 60.656 419.346 32 384 32H64C28.654 32 0 60.656 0 96V416C0 451.348 28.654 480 64 480H384C419.346 480 448 451.348 448 416ZM64 464C37.533 464 16 442.469 16 416V96C16 69.531 37.533 48 64 48H384C410.467 48 432 69.531 432 96V416C432 442.469 410.467 464 384 464H64Z" })
  }
));
SquareChevronLeftThin.displayName = "SquareChevronLeftThin";
var SquareChevronLeft_default = SquareChevronLeftThin;
