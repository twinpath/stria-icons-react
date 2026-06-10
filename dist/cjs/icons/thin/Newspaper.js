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
const NewspaperThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 272H168C163.594 272 160 275.594 160 280S163.594 288 168 288H280C284.406 288 288 284.406 288 280S284.406 272 280 272ZM480 32H128C110.328 32 96 46.326 96 64V424C96 446.062 78.062 464 56 464S16 446.062 16 424V136C16 131.594 12.406 128 8 128S0 131.594 0 136V424C0 454.875 25.125 480 56 480H448C483.344 480 512 451.346 512 416V64C512 46.326 497.672 32 480 32ZM496 416C496 442.467 474.469 464 448 464H95.066C105.484 453.824 112 439.676 112 424V64C112 55.178 119.176 48 128 48H480C488.824 48 496 55.178 496 64V416ZM280 336H168C163.594 336 160 339.594 160 344S163.594 352 168 352H280C284.406 352 288 348.406 288 344S284.406 336 280 336ZM440 336H328C323.594 336 320 339.594 320 344S323.594 352 328 352H440C444.406 352 448 348.406 448 344S444.406 336 440 336ZM432 96H176C167.164 96 160 103.162 160 112V208C160 216.836 167.164 224 176 224H432C440.836 224 448 216.836 448 208V112C448 103.162 440.836 96 432 96ZM432 208H176V112H432V208ZM440 272H328C323.594 272 320 275.594 320 280S323.594 288 328 288H440C444.406 288 448 284.406 448 280S444.406 272 440 272Z" })
  }
));
NewspaperThin.displayName = "NewspaperThin";
var Newspaper_default = NewspaperThin;
