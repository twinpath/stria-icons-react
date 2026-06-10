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
var Shelves_exports = {};
__export(Shelves_exports, {
  default: () => Shelves_default
});
module.exports = __toCommonJS(Shelves_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShelvesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M624 0C615.164 0 608 7.162 608 16V160H32V16C32 7.162 24.836 0 16 0S0 7.162 0 16V496C0 504.836 7.164 512 16 512S32 504.836 32 496V448H608V496C608 504.836 615.164 512 624 512S640 504.836 640 496V16C640 7.162 632.836 0 624 0ZM608 416H32V192H608V416ZM384 128H448C465.674 128 480 113.672 480 96V32C480 14.326 465.674 0 448 0H384C366.326 0 352 14.326 352 32V96C352 113.672 366.326 128 384 128ZM384 32H448V96H384V32ZM288 384H352C369.674 384 384 369.672 384 352V288C384 270.326 369.674 256 352 256H288C270.326 256 256 270.326 256 288V352C256 369.672 270.326 384 288 384ZM288 288H352V352H288V288ZM128 384H192C209.674 384 224 369.672 224 352V288C224 270.326 209.674 256 192 256H128C110.326 256 96 270.326 96 288V352C96 369.672 110.326 384 128 384ZM128 288H192V352H128V288Z" })
  }
));
ShelvesLight.displayName = "ShelvesLight";
var Shelves_default = ShelvesLight;
