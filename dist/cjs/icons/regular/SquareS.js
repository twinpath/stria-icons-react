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
var SquareS_exports = {};
__export(SquareS_exports, {
  default: () => SquareS_default
});
module.exports = __toCommonJS(SquareS_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SquareSRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.654 32 0 60.654 0 96V416C0 451.346 28.654 480 64 480H384C419.346 480 448 451.346 448 416V96C448 60.654 419.346 32 384 32ZM400 416C400 424.822 392.822 432 384 432H64C55.178 432 48 424.822 48 416V96C48 87.178 55.178 80 64 80H384C392.822 80 400 87.178 400 96V416ZM230.406 232.938C180.469 219.078 173.719 212.406 176.531 196.625C177.563 190.937 180.688 186.359 185.875 183.016C194.469 177.469 216.719 170.141 269.5 183.594C282.312 186.891 295.438 179.125 298.688 166.281C301.969 153.437 294.219 140.359 281.375 137.094C227.719 123.406 186.906 125.281 159.875 142.656C143.5 153.203 132.656 169.375 129.281 188.203C118 251.578 177.938 268.203 217.594 279.203C267.531 293.063 274.281 299.734 271.469 315.516C270.156 322.828 267.125 327.328 261.344 330.578C243.25 340.672 202.844 336.422 160.781 319.875C148.563 315.125 134.5 321.062 129.656 333.453C124.813 345.781 130.875 359.719 143.219 364.562C161.531 371.734 198.094 384.047 233.844 384.047C251.844 384.047 269.625 380.937 284.781 372.469C303.156 362.187 314.875 345.406 318.719 323.937C330 260.562 270.062 243.938 230.406 232.938Z" })
  }
));
SquareSRegular.displayName = "SquareSRegular";
var SquareS_default = SquareSRegular;
