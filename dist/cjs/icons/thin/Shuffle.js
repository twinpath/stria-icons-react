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
var Shuffle_exports = {};
__export(Shuffle_exports, {
  default: () => Shuffle_default
});
module.exports = __toCommonJS(Shuffle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShuffleThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M429.656 298.344C426.531 295.219 421.469 295.219 418.344 298.344S415.219 306.531 418.344 309.656L484.688 376H336C328.469 376 321.312 372.406 316.812 366.375L278.406 315.188C275.75 311.656 270.719 311.031 267.188 313.594C263.656 316.25 262.938 321.281 265.594 324.812L304 375.969C311.5 386 323.469 392 336 392H484.688L418.344 458.344C415.219 461.469 415.219 466.531 418.344 469.656C419.906 471.219 421.938 472 424 472S428.094 471.219 429.656 469.656L509.656 389.656C512.781 386.531 512.781 381.469 509.656 378.344L429.656 298.344ZM336 136H484.688L418.344 202.344C415.219 205.469 415.219 210.531 418.344 213.656C419.906 215.219 421.938 216 424 216S428.094 215.219 429.656 213.656L509.656 133.656C512.781 130.531 512.781 125.469 509.656 122.344L429.656 42.344C426.531 39.219 421.469 39.219 418.344 42.344S415.219 50.531 418.344 53.656L484.688 120H336C323.469 120 311.5 126 304 136L131.188 366.406C126.688 372.406 119.531 376 112 376H8C3.594 376 0 379.594 0 384S3.594 392 8 392H112C124.531 392 136.5 386 144 376L316.812 145.594C321.312 139.594 328.469 136 336 136ZM8 136H112C119.531 136 126.688 139.594 131.188 145.625L169.594 196.812C171.188 198.906 173.562 200 176 200C177.688 200 179.375 199.469 180.812 198.406C184.344 195.75 185.062 190.719 182.406 187.188L144 136.031C136.5 126 124.531 120 112 120H8C3.594 120 0 123.594 0 128S3.594 136 8 136Z" })
  }
));
ShuffleThin.displayName = "ShuffleThin";
var Shuffle_default = ShuffleThin;
