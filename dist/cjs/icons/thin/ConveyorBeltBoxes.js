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
const ConveyorBeltBoxesThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 288H304C321.6 288 336 273.602 336 256V32C336 14.398 321.6 0 304 0H96C78.4 0 64 14.398 64 32V256C64 273.602 78.4 288 96 288ZM80 32C80 23.176 87.178 16 96 16H304C312.822 16 320 23.176 320 32V256C320 264.824 312.822 272 304 272H96C87.178 272 80 264.824 80 256V32ZM400 288H544C561.6 288 576 273.602 576 256V96C576 78.398 561.6 64 544 64H400C382.4 64 368 78.398 368 96V256C368 273.602 382.4 288 400 288ZM384 96C384 87.176 391.178 80 400 80H544C552.822 80 560 87.176 560 96V256C560 264.824 552.822 272 544 272H400C391.178 272 384 264.824 384 256V96ZM528 368C501.375 368 480 389.375 480 416S501.375 464 528 464S576 442.625 576 416S554.625 368 528 368ZM528 448C510.355 448 496 433.645 496 416S510.355 384 528 384S560 398.355 560 416S545.645 448 528 448ZM320 368C293.375 368 272 389.375 272 416S293.375 464 320 464S368 442.625 368 416S346.625 368 320 368ZM320 448C302.355 448 288 433.645 288 416S302.355 384 320 384S352 398.355 352 416S337.645 448 320 448ZM544 320H96C42.98 320 0 362.98 0 416S42.98 512 96 512H544C597.02 512 640 469.02 640 416S597.02 320 544 320ZM544 496H96C51.889 496 16 460.111 16 416S51.889 336 96 336H544C588.111 336 624 371.889 624 416S588.111 496 544 496ZM112 368C85.375 368 64 389.375 64 416S85.375 464 112 464S160 442.625 160 416S138.625 368 112 368ZM112 448C94.355 448 80 433.645 80 416S94.355 384 112 384S144 398.355 144 416S129.645 448 112 448Z" })
  }
));
ConveyorBeltBoxesThin.displayName = "ConveyorBeltBoxesThin";
var ConveyorBeltBoxes_default = ConveyorBeltBoxesThin;
