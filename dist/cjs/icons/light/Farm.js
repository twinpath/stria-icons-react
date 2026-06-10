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
var Farm_exports = {};
__export(Farm_exports, {
  default: () => Farm_default
});
module.exports = __toCommonJS(Farm_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FarmLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 160V116.75C32 74.875 62 36.75 103.625 32.375C138.854 28.852 174.082 48.617 187.721 85.914C190.764 94.236 192 103.164 192 112.025V118.5C198.5 106.75 208.5 97.375 220.75 91.625C209.75 42.625 169.5 2.875 118 0.125C87.375 -1.5 57.25 9.5 35 30.75C12.625 51.875 0 81.25 0 112V496C0 504.836 7.164 512 16 512S32 504.836 32 496V192H154.75L170.75 160H32ZM416 384H320C302.326 384 288 398.326 288 416V496C288 504.836 295.164 512 304 512S320 504.836 320 496V416H416V496C416 504.836 423.164 512 432 512S448 504.836 448 496V416C448 398.326 433.674 384 416 384ZM400 304C417.6 304 432 289.6 432 272V208C432 190.4 417.6 176 400 176H336C318.4 176 304 190.4 304 208V272C304 289.6 318.4 304 336 304H400ZM336 208H400V272H336V208ZM572.625 246.25L517.125 135.25C513.75 128.625 508.25 123.25 501.5 120.25L381 66.75C372.75 63.125 363.25 63.125 355 66.75L234.5 120.375C227.75 123.375 221 131 218.875 135.25L163.354 246.291C161.148 250.703 160 255.566 160 260.5V496C160 504.836 167.164 512 176 512S192 504.836 192 496V260.5L247.5 149.5L368 96L488.5 149.5L544 260.5V496C544 504.836 551.164 512 560 512S576 504.836 576 496V260.5C576 255.625 574.875 250.625 572.625 246.25Z" })
  }
));
FarmLight.displayName = "FarmLight";
var Farm_default = FarmLight;
