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
var Spinner_exports = {};
__export(Spinner_exports, {
  default: () => Spinner_default
});
module.exports = __toCommonJS(Spinner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SpinnerSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 256C96 229.5 74.5 208 48 208S0 229.5 0 256S21.5 304 48 304S96 282.5 96 256ZM108.875 60.875C82.375 60.875 60.875 82.375 60.875 108.875S82.375 156.875 108.875 156.875S156.875 135.375 156.875 108.875S135.375 60.875 108.875 60.875ZM108.875 355.125C82.375 355.125 60.875 376.625 60.875 403.125S82.375 451.125 108.875 451.125S156.875 429.625 156.875 403.125S135.375 355.125 108.875 355.125ZM256 416C229.5 416 208 437.5 208 464S229.5 512 256 512S304 490.5 304 464S282.5 416 256 416ZM464 208C437.5 208 416 229.5 416 256S437.5 304 464 304S512 282.5 512 256S490.5 208 464 208ZM403.125 355.125C376.625 355.125 355.125 376.625 355.125 403.125S376.625 451.125 403.125 451.125S451.125 429.625 451.125 403.125S429.625 355.125 403.125 355.125ZM256 0C229.5 0 208 21.5 208 48S229.5 96 256 96S304 74.5 304 48S282.5 0 256 0Z" })
  }
));
SpinnerSolid.displayName = "SpinnerSolid";
var Spinner_default = SpinnerSolid;
