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
const ConveyorBeltBoxesDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 0H96C78.327 0 64 14.327 64 32V224C64 241.673 78.327 256 96 256H288C305.673 256 320 241.673 320 224V32C320 14.327 305.673 0 288 0ZM544 64H416C398.327 64 384 78.327 384 96V224C384 241.673 398.327 256 416 256H544C561.673 256 576 241.673 576 224V96C576 78.327 561.673 64 544 64Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 320H96C41.6 320 0 361.6 0 416S41.6 512 96 512H544C598.4 512 640 470.4 640 416S598.4 320 544 320ZM128 448C108.8 448 96 435.2 96 416S108.8 384 128 384S160 396.8 160 416S147.2 448 128 448ZM320 448C300.8 448 288 435.2 288 416S300.8 384 320 384S352 396.8 352 416S339.2 448 320 448ZM512 448C492.8 448 480 435.2 480 416S492.8 384 512 384S544 396.8 544 416S531.2 448 512 448Z" })
    ]
  }
));
ConveyorBeltBoxesDuotone.displayName = "ConveyorBeltBoxesDuotone";
var ConveyorBeltBoxes_default = ConveyorBeltBoxesDuotone;
