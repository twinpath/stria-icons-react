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
var Transporter2_exports = {};
__export(Transporter2_exports, {
  default: () => Transporter2_default
});
module.exports = __toCommonJS(Transporter2_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const Transporter2Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M94 44L64 32L52 2C51 1 50 0 48 0S45 1 44 2L32 32L2 44C1 45 0 46 0 48S1 51 2 52L32 64L44 94C45 95 46 96 48 96S51 95 52 94L64 64L94 52C95 51 96 50 96 48S95 45 94 44ZM510 364L480 352L468 322C467 321 466 320 464 320S461 321 460 322L448 352L418 364C417 365 416 366 416 368S417 371 418 372L448 384L460 414C461 415 462 416 464 416S467 415 468 414L480 384L510 372C511 371 512 370 512 368S511 365 510 364ZM400 256H112C103 256 96 263 96 272S103 288 112 288H400C409 288 416 281 416 272S409 256 400 256ZM176 352H336C345 352 352 345 352 336S345 320 336 320H176C167 320 160 327 160 336S167 352 176 352ZM176 416H336C345 416 352 409 352 400S345 384 336 384H176C167 384 160 391 160 400S167 416 176 416Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 448H128C110 448 96 462 96 480V512H416V480C416 462 402 448 384 448ZM338 151C326 136 308 128 289 128H223C204 128 186 136 174 151L113 224H399L338 151ZM256 96C282 96 304 74 304 48S282 0 256 0S208 22 208 48S230 96 256 96Z" })
    ]
  }
));
Transporter2Duotone.displayName = "Transporter2Duotone";
var Transporter2_default = Transporter2Duotone;
