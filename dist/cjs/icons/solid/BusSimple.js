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
var BusSimple_exports = {};
__export(BusSimple_exports, {
  default: () => BusSimple_default
});
module.exports = __toCommonJS(BusSimple_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BusSimpleSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 80C448 35.203 348.812 0 224 0S0 35.203 0 80V416C0 433.672 14.344 448 32 448V480C32 497.672 46.344 512 64 512H96C113.656 512 128 497.672 128 480V448H320V480C320 497.672 334.344 512 352 512H384C401.656 512 416 497.672 416 480V448H422.406C438.406 448 448 435.203 448 422.406V80ZM80 400C62.344 400 48 385.672 48 368S62.344 336 80 336S112 350.328 112 368S97.656 400 80 400ZM96 288C78.344 288 64 273.672 64 256V128C64 110.328 78.344 96 96 96H352C369.656 96 384 110.328 384 128V256C384 273.672 369.656 288 352 288H96ZM368 400C350.344 400 336 385.672 336 368S350.344 336 368 336S400 350.328 400 368S385.656 400 368 400Z" })
  }
));
BusSimpleSolid.displayName = "BusSimpleSolid";
var BusSimple_default = BusSimpleSolid;
