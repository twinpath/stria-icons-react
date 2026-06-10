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
const FaceLaughWinkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.461 16 16 123.418 16 256C16 388.578 123.461 496 256 496S496 388.578 496 256C496 123.418 388.539 16 256 16ZM336.061 168C361.732 168 391.885 184.875 395.881 210.125C397.576 221.25 384.498 228.375 376.143 220.875L366.576 212.375C351.803 199.25 320.439 199.25 305.666 212.375L295.979 221C287.623 228.375 274.424 221.25 276.119 210.125C280.115 184.875 310.268 168 336.061 168ZM159.939 160C177.725 160 192 174.25 192 192S177.725 224 159.939 224C142.275 224 128 209.75 128 192S142.275 160 159.939 160ZM264.045 432H247.955C174.092 432 113.027 377 104.129 306C102.91 296.5 110.467 288 120.096 288H391.904C401.533 288 409.09 296.375 407.871 306C398.973 377 337.908 432 264.045 432Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336.061 168C310.268 168 280.115 184.875 276.119 210.125C274.424 221.25 287.623 228.375 295.979 221L305.666 212.375C320.439 199.25 351.803 199.25 366.576 212.375L376.143 220.875C384.498 228.375 397.576 221.25 395.881 210.125C391.885 184.875 361.732 168 336.061 168ZM159.939 160C142.275 160 128 174.25 128 192S142.275 224 159.939 224C177.725 224 192 209.75 192 192S177.725 160 159.939 160Z" })
    ]
  }
));
FaceLaughWinkDuotone.displayName = "FaceLaughWinkDuotone";
var FaceLaughWink_default = FaceLaughWinkDuotone;
