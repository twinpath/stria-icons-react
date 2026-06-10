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
var PalletBoxes_exports = {};
__export(PalletBoxes_exports, {
  default: () => PalletBoxes_default
});
module.exports = __toCommonJS(PalletBoxes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PalletBoxesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 288H512C547 288 576 259 576 224V128C576 93 547 64 512 64H448C413 64 384 93 384 128V224C384 259 413 288 448 288ZM416 128C416 110 430 96 448 96H512C530 96 544 110 544 128V224C544 242 530 256 512 256H448C430 256 416 242 416 224V128ZM128 288H288C323 288 352 259 352 224V64C352 29 323 0 288 0H128C93 0 64 29 64 64V224C64 259 93 288 128 288ZM96 64C96 46 110 32 128 32H288C306 32 320 46 320 64V224C320 242 306 256 288 256H128C110 256 96 242 96 224V64ZM624 480H560V384H624C633 384 640 377 640 368S633 352 624 352H16C7 352 0 359 0 368S7 384 16 384H80V480H16C7 480 0 487 0 496S7 512 16 512H624C633 512 640 505 640 496S633 480 624 480ZM304 480H112V384H304V480ZM528 480H336V384H528V480Z" })
  }
));
PalletBoxesLight.displayName = "PalletBoxesLight";
var PalletBoxes_default = PalletBoxesLight;
