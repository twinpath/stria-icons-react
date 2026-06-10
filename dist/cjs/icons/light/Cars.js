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
var Cars_exports = {};
__export(Cars_exports, {
  default: () => Cars_default
});
module.exports = __toCommonJS(Cars_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CarsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M72 200C72 213.199 82.801 224 96 224S120 213.199 120 200C120 186.799 109.199 176 96 176S72 186.799 72 200ZM241.875 256H46.25C38.375 256 32 249.625 32 241.75V186.625C32 163.125 51.125 144 74.625 144H341.375C341.625 144 341.875 144.125 342.125 144.125C342.75 144.125 343.375 144 344.125 144H402.25C394.5 132.875 383.75 124 371.375 118.5L355.5 49.625C348.875 20.5 323 -0.125 293.125 0H120.125C90.25 -0.125 64.25 20.5 57.75 49.625L41.375 120.125C17 132.5 0 157.5 0 186.625V241.75C0.125 261.75 13 279.375 32 285.5V320C32 328.875 39.125 336 48 336S64 328.875 64 320V288H223.625C228 283.75 232.25 279.375 237.25 275.75L241.875 256ZM88.875 56.75C92.25 42.25 105.125 32 120.125 32H293.125C308 32 321 42.25 324.375 56.75L337.125 112H76.125L88.875 56.75ZM544 352C530.801 352 520 362.799 520 376C520 389.199 530.801 400 544 400S568 389.199 568 376C568 362.799 557.199 352 544 352ZM320 352C306.801 352 296 362.799 296 376C296 389.199 306.801 400 320 400S344 389.199 344 376C344 362.799 333.199 352 320 352ZM595.375 294.5L579.5 225.625C572.875 196.5 547 175.875 517.125 176H344.125C314.25 175.875 288.25 196.5 281.75 225.625L265.375 296.125C241 308.5 224 333.5 224 362.625V417.75C224.125 437.75 237 455.375 256 461.5V496C256 504.875 263.125 512 272 512S288 504.875 288 496V464H576V496C576 504.875 583.125 512 592 512S608 504.875 608 496V461.5C627 455.375 639.875 437.75 640 417.75V362.625C640 333.125 622.5 306.375 595.375 294.5ZM312.875 232.75C316.25 218.25 329.125 208 344.125 208H517.125C532 208 545 218.25 548.375 232.75L561.125 288H300.125L312.875 232.75ZM608 417.75C608 425.625 601.625 432 593.75 432H270.25C262.375 432 256 425.625 256 417.75V362.625C256 339.125 275.125 320 298.625 320H565.375C588.875 320 608 339.125 608 362.625V417.75Z" })
  }
));
CarsLight.displayName = "CarsLight";
var Cars_default = CarsLight;
