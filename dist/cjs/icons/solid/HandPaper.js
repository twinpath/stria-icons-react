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
var HandPaper_exports = {};
__export(HandPaper_exports, {
  default: () => HandPaper_default
});
module.exports = __toCommonJS(HandPaper_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandPaperSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 96C430.328 96 416 110.328 416 128V240C416 248.836 408.836 256 400 256S384 248.836 384 240V64C384 46.328 369.672 32 352 32S320 46.328 320 64V240C320 248.836 312.836 256 304 256S288 248.836 288 240V32C288 14.328 273.672 0 256 0S224 14.328 224 32V240C224 248.836 216.836 256 208 256S192 248.836 192 240V64C192 46.328 177.672 32 160 32S128 46.328 128 64V343.438L68.281 283.719C60.469 275.906 50.234 272 40 272C17.151 272 0 290.683 0 312C0 322.234 3.906 332.469 11.719 340.281L124.859 453.422C162.625 491.203 212.859 512 266.281 512H304C401.047 512 480 433.047 480 336V128C480 110.328 465.672 96 448 96Z" })
  }
));
HandPaperSolid.displayName = "HandPaperSolid";
var HandPaper_default = HandPaperSolid;
