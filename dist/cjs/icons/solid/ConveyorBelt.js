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
var ConveyorBelt_exports = {};
__export(ConveyorBelt_exports, {
  default: () => ConveyorBelt_default
});
module.exports = __toCommonJS(ConveyorBelt_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ConveyorBeltSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M160 256H480C497.6 256 512 241.6 512 224V32C512 14.4 497.6 0 480 0H384V128L320 96L256 128V0H160C142.4 0 128 14.4 128 32V224C128 241.6 142.4 256 160 256ZM544 320H96C43 320 0 363 0 416S43 512 96 512H544C597 512 640 469 640 416S597 320 544 320ZM128 448C110.25 448 96 433.75 96 416S110.25 384 128 384S160 398.25 160 416S145.75 448 128 448ZM320 448C302.25 448 288 433.75 288 416S302.25 384 320 384S352 398.25 352 416S337.75 448 320 448ZM512 448C494.25 448 480 433.75 480 416S494.25 384 512 384C529.75 384 544 398.25 544 416S529.75 448 512 448Z" })
  }
));
ConveyorBeltSolid.displayName = "ConveyorBeltSolid";
var ConveyorBelt_default = ConveyorBeltSolid;
