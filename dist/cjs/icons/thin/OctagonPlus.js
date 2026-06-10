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
var OctagonPlus_exports = {};
__export(OctagonPlus_exports, {
  default: () => OctagonPlus_default
});
module.exports = __toCommonJS(OctagonPlus_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OctagonPlusThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376.002 248H264.002V136C264.002 131.578 260.424 128 256.002 128S248.002 131.578 248.002 136V248H136.002C131.58 248 128.002 251.578 128.002 256S131.58 264 136.002 264H248.002V376C248.002 380.422 251.58 384 256.002 384S264.002 380.422 264.002 376V264H376.002C380.424 264 384.002 260.422 384.002 256S380.424 248 376.002 248ZM482.758 157.094L354.789 29.242C346.352 20.805 334.984 16 323.031 16H188.852C177.016 16 165.531 20.805 157.094 29.242L29.242 157.211C20.805 165.648 16 177.016 16 188.969V323.148C16 334.984 20.805 346.469 29.242 354.906L157.211 482.758C165.648 491.195 177.016 496 188.969 496H323.148C334.984 496 346.469 491.195 354.906 482.758L482.758 354.789C491.195 346.352 496 334.984 496 323.031V188.852C496 177.016 491.195 165.531 482.758 157.094ZM480 323.031C480 330.697 476.961 337.959 471.439 343.48L343.594 471.443C338.156 476.881 330.705 480 323.148 480H188.969C181.303 480 174.043 476.961 168.52 471.439L40.557 343.592C35.119 338.154 32 330.703 32 323.148V188.969C32 181.303 35.039 174.041 40.562 168.52L168.408 40.557C173.846 35.119 181.297 32 188.852 32H323.031C330.697 32 337.959 35.039 343.48 40.561L471.445 168.408C476.883 173.846 480 181.297 480 188.852V323.031Z" })
  }
));
OctagonPlusThin.displayName = "OctagonPlusThin";
var OctagonPlus_default = OctagonPlusThin;
