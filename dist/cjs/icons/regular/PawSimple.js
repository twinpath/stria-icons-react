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
var PawSimple_exports = {};
__export(PawSimple_exports, {
  default: () => PawSimple_default
});
module.exports = __toCommonJS(PawSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PawSimpleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M400 144C373.5 144 352 165.5 352 192S373.5 240 400 240S448 218.5 448 192S426.5 144 400 144ZM144 128C170.5 128 192 106.5 192 80S170.5 32 144 32S96 53.5 96 80S117.5 128 144 128ZM304 128C330.5 128 352 106.5 352 80S330.5 32 304 32S256 53.5 256 80S277.5 128 304 128ZM367.25 300.75C341 286.001 320.125 239.375 300.125 203C284.375 174.25 254.25 160 224 160S163.625 174.25 147.875 203C127.5 239.875 107.75 285.5 80.625 300.75C51.625 317.125 32 348.125 32 384C32 437 75 479.875 128 479.875C129.25 480 130.625 480 131.875 480C180.75 480 200.75 448 224 448S267.25 480 316.125 480C317.375 480 318.75 480 320 479.875C373 479.875 416 437 416 384C416 348.125 396.375 317.125 367.25 300.75ZM320 431.875H319.25L318.375 432H316.125C300.375 432 290.875 426.25 277.625 418.375C263.875 410.125 246.75 400 224 400S184.125 410.125 170.375 418.375C157.125 426.25 147.625 432 131.875 432H129.625L128.875 431.875H128C101.5 431.875 80 410.375 80 384C80 366.625 89.125 351.125 104.25 342.625C138.875 323 159.5 283.625 179.5 245.5C183 238.875 186.5 232.375 189.875 226.125C199.125 209.25 218.375 208 224 208S248.875 209.25 258.125 226.125C261.375 232 264.625 238.25 268 244.5C288.5 283.25 309.625 323.375 343.75 342.625C358.875 351.125 368 366.625 368 384C368 410.375 346.5 431.875 320 431.875ZM96 192C96 165.5 74.5 144 48 144S0 165.5 0 192S21.5 240 48 240S96 218.5 96 192Z" })
  }
));
PawSimpleRegular.displayName = "PawSimpleRegular";
var PawSimple_default = PawSimpleRegular;
