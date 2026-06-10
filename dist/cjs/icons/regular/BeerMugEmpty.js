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
var BeerMugEmpty_exports = {};
__export(BeerMugEmpty_exports, {
  default: () => BeerMugEmpty_default
});
module.exports = __toCommonJS(BeerMugEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BeerMugEmptyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 96H384V64C384 46.327 369.673 32 352 32H64C46.327 32 32 46.327 32 64V400C32 444.183 67.817 480 112 480H304C348.183 480 384 444.183 384 400V383.695L459.26 350.775C491.298 336.761 512 305.109 512 270.141V184C512 135.399 472.601 96 424 96ZM336 400C336 417.673 321.673 432 304 432H112C94.327 432 80 417.673 80 400V80H336V400ZM464 270.141C464 286.031 454.594 300.422 440.031 306.797L384 331.307V144H424C446.062 144 464 161.938 464 184V270.141ZM128 368V144C128 135.156 135.156 128 144 128S160 135.156 160 144V368C160 376.844 152.844 384 144 384S128 376.844 128 368ZM192 368V144C192 135.156 199.156 128 208 128S224 135.156 224 144V368C224 376.844 216.844 384 208 384S192 376.844 192 368ZM256 368V144C256 135.156 263.156 128 272 128S288 135.156 288 144V368C288 376.844 280.844 384 272 384S256 376.844 256 368Z" })
  }
));
BeerMugEmptyRegular.displayName = "BeerMugEmptyRegular";
var BeerMugEmpty_default = BeerMugEmptyRegular;
