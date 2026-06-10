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
var Stretcher_exports = {};
__export(Stretcher_exports, {
  default: () => Stretcher_default
});
module.exports = __toCommonJS(Stretcher_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StretcherDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 384C467.389 384 455.707 387.773 445.797 394.072L409.297 368L518.795 288H436.559L368 338.502L299.441 288H217.205L326.703 368L290.203 394.072C280.293 387.773 268.611 384 256 384C220.654 384 192 412.652 192 448C192 483.346 220.654 512 256 512S320 483.346 320 448C320 442.863 319.234 437.934 318.092 433.146L368 397.498L417.908 433.146C416.766 437.934 416 442.863 416 448C416 483.346 444.654 512 480 512S544 483.346 544 448C544 412.652 515.346 384 480 384ZM256 464C247.178 464 240 456.822 240 448S247.178 432 256 432S272 439.178 272 448S264.822 464 256 464ZM480 464C471.178 464 464 456.822 464 448S471.178 432 480 432S496 439.178 496 448S488.822 464 480 464Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M640 223.996V255.998C640 273.623 625.625 288 608 288H177.617C159.367 288 141.867 280.125 129.742 266.498L8.115 138.492C-3.635 125.242 -2.51 105.117 10.74 93.365L34.615 72.115C47.867 60.365 68.117 61.49 79.867 74.74L191.992 191.996H608C625.625 191.996 640 206.371 640 223.996Z" })
    ]
  }
));
StretcherDuotone.displayName = "StretcherDuotone";
var Stretcher_default = StretcherDuotone;
