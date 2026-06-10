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
var SlidersUp_exports = {};
__export(SlidersUp_exports, {
  default: () => SlidersUp_default
});
module.exports = __toCommonJS(SlidersUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SlidersUpDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 0H96C78.4 0 64 14.4 64 32V96H128V32C128 14.4 113.6 0 96 0ZM64 480C64 497.6 78.4 512 96 512H96C113.6 512 128 497.6 128 480V192H64V480ZM224 480C224 497.6 238.4 512 256 512H256C273.6 512 288 497.6 288 480V448H224V480ZM384 480C384 497.6 398.4 512 416 512H416C433.6 512 448 497.6 448 480V320H384V480ZM416 0H416C398.4 0 384 14.4 384 32V224H448V32C448 14.4 433.6 0 416 0ZM256 0H256C238.4 0 224 14.4 224 32V352H288V32C288 14.4 273.6 0 256 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 96H48C30.326 96 16 110.326 16 128C16 145.672 30.326 160 48 160H144C161.674 160 176 145.672 176 128C176 110.326 161.674 96 144 96ZM464 224H368C350.326 224 336 238.326 336 256C336 273.672 350.326 288 368 288H464C481.674 288 496 273.672 496 256C496 238.326 481.674 224 464 224ZM304 352H208C190.326 352 176 366.326 176 384C176 401.672 190.326 416 208 416H304C321.674 416 336 401.672 336 384C336 366.326 321.674 352 304 352Z" })
    ]
  }
));
SlidersUpDuotone.displayName = "SlidersUpDuotone";
var SlidersUp_default = SlidersUpDuotone;
