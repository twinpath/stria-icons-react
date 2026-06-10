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
var FaceLaughWink_exports = {};
__export(FaceLaughWink_exports, {
  default: () => FaceLaughWink_default
});
module.exports = __toCommonJS(FaceLaughWink_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaceLaughWinkSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 512 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.419 16 256S123.461 496 256 496S496 388.581 496 256S388.539 16 256 16ZM276.119 210.125C280.115 184.875 310.267 168 336.06 168C361.732 168 391.884 184.875 395.88 210.125C397.576 221.25 384.497 228.375 376.142 220.875L366.576 212.375C351.802 199.25 320.439 199.25 305.665 212.375L295.978 221C287.622 228.375 274.423 221.25 276.119 210.125ZM159.94 160C177.724 160 192 174.25 192 192S177.724 224 159.94 224C142.276 224 128 209.75 128 192S142.276 160 159.94 160ZM407.871 306C398.973 377 337.908 432 264.044 432H247.956C174.092 432 113.027 377 104.129 306C102.91 296.5 110.467 288 120.096 288H391.904C401.533 288 409.09 296.375 407.871 306Z" })
  }
));
FaceLaughWinkSolid.displayName = "FaceLaughWinkSolid";
var FaceLaughWink_default = FaceLaughWinkSolid;
