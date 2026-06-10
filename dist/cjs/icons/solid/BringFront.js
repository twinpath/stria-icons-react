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
var BringFront_exports = {};
__export(BringFront_exports, {
  default: () => BringFront_default
});
module.exports = __toCommonJS(BringFront_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BringFrontSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 176V80C64 71.162 71.164 64 80 64H256V48C256 21.6 234.4 0 208 0H48C21.6 0 0 21.6 0 48V208C0 234.4 21.6 256 48 256H128V192H80C71.164 192 64 184.836 64 176ZM480 352V160C480 124.652 451.346 96 416 96H224C188.654 96 160 124.652 160 160V352C160 387.346 188.654 416 224 416H416C451.346 416 480 387.346 480 352ZM592 256H512V320H560C568.836 320 576 327.162 576 336V432C576 440.836 568.836 448 560 448H384V464C384 490.4 405.6 512 432 512H592C618.4 512 640 490.4 640 464V304C640 277.6 618.4 256 592 256Z" })
  }
));
BringFrontSolid.displayName = "BringFrontSolid";
var BringFront_default = BringFrontSolid;
