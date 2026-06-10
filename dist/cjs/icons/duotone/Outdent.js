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
var Outdent_exports = {};
__export(Outdent_exports, {
  default: () => Outdent_default
});
module.exports = __toCommonJS(Outdent_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OutdentDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 416H32C14.326 416 0 430.326 0 448S14.326 480 32 480H416C433.674 480 448 465.674 448 448S433.674 416 416 416ZM32 96H416C433.674 96 448 81.674 448 64S433.674 32 416 32H32C14.326 32 0 46.326 0 64S14.326 96 32 96ZM416 288H224C206.326 288 192 302.326 192 320S206.326 352 224 352H416C433.674 352 448 337.674 448 320S433.674 288 416 288ZM416 160H224C206.326 160 192 174.326 192 192S206.326 224 224 224H416C433.674 224 448 209.674 448 192S433.674 160 416 160Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M101.75 348.301C106.531 352.301 113.156 353.082 118.781 350.52C124.406 347.863 128 342.238 128 336.02V176.02C128 169.801 124.406 164.176 118.781 161.52C116.625 160.52 114.312 160.02 112 160.02C108.312 160.02 104.688 161.27 101.75 163.738L5.75 243.738C2.094 246.77 0 251.27 0 256.02S2.094 265.27 5.75 268.301L101.75 348.301Z" })
    ]
  }
));
OutdentDuotone.displayName = "OutdentDuotone";
var Outdent_default = OutdentDuotone;
