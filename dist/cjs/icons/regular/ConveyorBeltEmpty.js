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
var ConveyorBeltEmpty_exports = {};
__export(ConveyorBeltEmpty_exports, {
  default: () => ConveyorBeltEmpty_default
});
module.exports = __toCommonJS(ConveyorBeltEmpty_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ConveyorBeltEmptyRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 368C110.25 368 96 382.25 96 400S110.25 432 128 432S160 417.75 160 400S145.75 368 128 368ZM512 368C494.25 368 480 382.25 480 400S494.25 432 512 432S544 417.75 544 400S529.75 368 512 368ZM320 368C302.25 368 288 382.25 288 400S302.25 432 320 432S352 417.75 352 400S337.75 368 320 368ZM528 288H112C50.145 288 0 338.145 0 400S50.145 512 112 512H528C589.855 512 640 461.855 640 400S589.855 288 528 288ZM528 464H112C76.711 464 48 435.289 48 400C48 364.709 76.711 336 112 336H528C563.289 336 592 364.709 592 400C592 435.289 563.289 464 528 464Z" })
  }
));
ConveyorBeltEmptyRegular.displayName = "ConveyorBeltEmptyRegular";
var ConveyorBeltEmpty_default = ConveyorBeltEmptyRegular;
