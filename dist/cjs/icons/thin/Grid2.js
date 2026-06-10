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
var Grid2_exports = {};
__export(Grid2_exports, {
  default: () => Grid2_default
});
module.exports = __toCommonJS(Grid2_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Grid2Thin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 288H48C21.49 288 0 309.49 0 336V464C0 490.51 21.49 512 48 512H176C202.51 512 224 490.51 224 464V336C224 309.49 202.51 288 176 288ZM208 464C208 481.645 193.645 496 176 496H48C30.355 496 16 481.645 16 464V336C16 318.355 30.355 304 48 304H176C193.645 304 208 318.355 208 336V464ZM176 0H48C21.49 0 0 21.49 0 48V176C0 202.51 21.49 224 48 224H176C202.51 224 224 202.51 224 176V48C224 21.49 202.51 0 176 0ZM208 176C208 193.645 193.645 208 176 208H48C30.355 208 16 193.645 16 176V48C16 30.355 30.355 16 48 16H176C193.645 16 208 30.355 208 48V176ZM464 0H336C309.49 0 288 21.49 288 48V176C288 202.51 309.49 224 336 224H464C490.51 224 512 202.51 512 176V48C512 21.49 490.51 0 464 0ZM496 176C496 193.645 481.645 208 464 208H336C318.355 208 304 193.645 304 176V48C304 30.355 318.355 16 336 16H464C481.645 16 496 30.355 496 48V176ZM464 288H336C309.49 288 288 309.49 288 336V464C288 490.51 309.49 512 336 512H464C490.51 512 512 490.51 512 464V336C512 309.49 490.51 288 464 288ZM496 464C496 481.645 481.645 496 464 496H336C318.355 496 304 481.645 304 464V336C304 318.355 318.355 304 336 304H464C481.645 304 496 318.355 496 336V464Z" })
  }
));
Grid2Thin.displayName = "Grid2Thin";
var Grid2_default = Grid2Thin;
