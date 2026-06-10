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
var Eraser_exports = {};
__export(Eraser_exports, {
  default: () => Eraser_default
});
module.exports = __toCommonJS(Eraser_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EraserDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 467.998C512 474.627 506.627 480 500 480H143.777C131.1 480 118.939 474.963 109.975 465.998L13.969 369.992C4.656 360.616 0 348.303 0 335.989S4.656 311.362 13.969 301.986L149.977 165.977L195.355 211.355L70.598 335.99L150.604 415.994H265.359L332.613 348.615L195.355 211.355L377.939 393.939L355.865 415.994H459.996C488.717 415.994 512 439.277 512 467.998Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M377.963 393.939L150 165.977L270.008 45.969C279.384 36.656 291.697 32 304.011 32S328.638 36.656 338.014 45.969L498.023 205.98C507.336 215.356 511.992 227.67 511.992 239.983S507.336 264.609 498.023 273.984L377.963 393.939Z" })
    ]
  }
));
EraserDuotone.displayName = "EraserDuotone";
var Eraser_default = EraserDuotone;
