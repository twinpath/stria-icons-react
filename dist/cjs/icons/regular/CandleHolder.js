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
var CandleHolder_exports = {};
__export(CandleHolder_exports, {
  default: () => CandleHolder_default
});
module.exports = __toCommonJS(CandleHolder_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CandleHolderRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M372.016 368.107C348.475 369.377 327.213 384.172 314.84 404.24C300.926 426.812 302.332 446.73 308.375 464H272V272C272 245.6 250.4 224 224 224H96C69.6 224 48 245.6 48 272V464C42.682 464.004 29.471 464 24 464C10.746 464 0 474.744 0 488C0 501.254 10.746 512 24 512C24 512 293.662 512 372.748 512C407.533 512 439.816 488.779 446.553 454.65C455.932 407.121 418.418 365.605 372.016 368.107ZM224 464H96V272H128V328C128 341.25 138.75 352 152 352S176 341.25 176 328V272H224V464ZM376 464C362.75 464 352 453.25 352 440S362.75 416 376 416S400 426.75 400 440S389.25 464 376 464ZM160 192C205.875 192 238 159.375 238 112.75C238 82.75 205.375 37.875 160 0C114.375 38 82 82.875 82 112.75C82 159.375 114.125 192 160 192ZM160 66.125C180 88.25 189.75 106.111 190 112.75C190.438 124.367 186.125 144 160 144S130 124.375 130 113C130.5 106.25 140 88.25 160 66.125Z" })
  }
));
CandleHolderRegular.displayName = "CandleHolderRegular";
var CandleHolder_default = CandleHolderRegular;
