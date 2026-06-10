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
var ConveyorBeltBoxes_exports = {};
__export(ConveyorBeltBoxes_exports, {
  default: () => ConveyorBeltBoxes_default
});
module.exports = __toCommonJS(ConveyorBeltBoxes_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ConveyorBeltBoxesLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 288H288C323.346 288 352 259.346 352 224V64C352 28.652 323.346 0 288 0H128C92.654 0 64 28.652 64 64V224C64 259.346 92.654 288 128 288ZM96 64C96 46.355 110.355 32 128 32H288C305.645 32 320 46.355 320 64V224C320 241.645 305.645 256 288 256H128C110.355 256 96 241.645 96 224V64ZM448 288H512C547.346 288 576 259.346 576 224V128C576 92.652 547.346 64 512 64H448C412.654 64 384 92.652 384 128V224C384 259.346 412.654 288 448 288ZM416 128C416 110.355 430.355 96 448 96H512C529.645 96 544 110.355 544 128V224C544 241.645 529.645 256 512 256H448C430.355 256 416 241.645 416 224V128ZM544 320H96C43 320 0 363 0 416S43 512 96 512H544C597 512 640 469 640 416S597 320 544 320ZM544 480H96C60.75 480 32 451.25 32 416S60.75 352 96 352H544C579.25 352 608 380.75 608 416S579.25 480 544 480ZM128 392C114.746 392 104 402.744 104 416C104 429.254 114.746 440 128 440S152 429.254 152 416C152 402.744 141.254 392 128 392ZM320 392C306.746 392 296 402.744 296 416C296 429.254 306.746 440 320 440S344 429.254 344 416C344 402.744 333.254 392 320 392ZM512 392C498.746 392 488 402.744 488 416C488 429.254 498.746 440 512 440S536 429.254 536 416C536 402.744 525.254 392 512 392Z" })
  }
));
ConveyorBeltBoxesLight.displayName = "ConveyorBeltBoxesLight";
var ConveyorBeltBoxes_default = ConveyorBeltBoxesLight;
