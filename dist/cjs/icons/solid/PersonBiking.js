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
var PersonBiking_exports = {};
__export(PersonBiking_exports, {
  default: () => PersonBiking_default
});
module.exports = __toCommonJS(PersonBiking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonBikingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 256C441.25 256 384 313.25 384 384S441.25 512 512 512S640 454.75 640 384S582.75 256 512 256ZM512 456C472.203 456 440 423.797 440 384S472.203 312 512 312S584 344.203 584 384S551.797 456 512 456ZM400 96C426.5 96 448 74.5 448 48S426.5 0 400 0S352 21.5 352 48S373.5 96 400 96ZM128 256C57.25 256 0 313.25 0 384S57.25 512 128 512S256 454.75 256 384S198.75 256 128 256ZM128 456C88.203 456 56 423.797 56 384S88.203 312 128 312S200 344.203 200 384S167.797 456 128 456ZM396 217C401.625 221.5 408.75 224 416 224H480C497.625 224 512 209.625 512 192S497.625 160 480 160H427.25L356 103C344 93.375 326.875 93.625 315.25 103.625L203.25 199.625C195.625 206.25 191.5 215.875 192.125 225.875C192.625 235.875 197.875 245 206.25 250.625L288 305.125V416C288 433.625 302.375 448 320 448S352 433.625 352 416V288C352 277.25 346.625 267.375 337.75 261.375L296.375 233.75L354.625 183.875L396 217Z" })
  }
));
PersonBikingSolid.displayName = "PersonBikingSolid";
var PersonBiking_default = PersonBikingSolid;
