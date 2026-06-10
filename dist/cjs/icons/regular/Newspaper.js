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
var Newspaper_exports = {};
__export(Newspaper_exports, {
  default: () => Newspaper_default
});
module.exports = __toCommonJS(Newspaper_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NewspaperRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M456 32H152C121.125 32 96 57.125 96 88V408C96 421.219 85.234 432 72 432S48 421.219 48 408V112C48 98.75 37.25 88 24 88S0 98.75 0 112V408C0 447.688 32.297 480 72 480H424C472.531 480 512 440.531 512 392V88C512 57.125 486.875 32 456 32ZM464 392C464 414.062 446.062 432 424 432H139.891C142.547 424.5 144 416.406 144 408V88C144 83.594 147.594 80 152 80H456C460.406 80 464 83.594 464 88V392ZM264 272H200C186.75 272 176 282.75 176 296S186.75 320 200 320H264C277.25 320 288 309.25 288 296S277.25 272 264 272ZM408 272H344C330.75 272 320 282.75 320 296S330.75 320 344 320H408C421.25 320 432 309.25 432 296S421.25 272 408 272ZM264 352H200C186.75 352 176 362.75 176 376S186.75 400 200 400H264C277.25 400 288 389.25 288 376S277.25 352 264 352ZM408 352H344C330.75 352 320 362.75 320 376S330.75 400 344 400H408C421.25 400 432 389.25 432 376S421.25 352 408 352ZM400 112H208C190.326 112 176 126.328 176 144V208C176 225.672 190.326 240 208 240H400C417.674 240 432 225.672 432 208V144C432 126.328 417.674 112 400 112Z" })
  }
));
NewspaperRegular.displayName = "NewspaperRegular";
var Newspaper_default = NewspaperRegular;
