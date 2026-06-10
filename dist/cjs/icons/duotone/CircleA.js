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
var CircleA_exports = {};
__export(CircleA_exports, {
  default: () => CircleA_default
});
module.exports = __toCommonJS(CircleA_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleADuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M215.979 279.59H296.023L256 192.451L215.979 279.59ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM362.057 365.77C358.791 367.275 355.369 367.998 352.01 367.998C342.932 367.998 334.262 362.818 330.199 353.996L318.172 327.813H193.828L181.803 353.996C176.225 366.084 162.037 371.357 149.945 365.77C137.914 360.213 132.664 345.865 138.211 333.777L234.205 124.809C242.049 107.73 269.953 107.73 277.797 124.809L373.789 333.777C379.336 345.865 374.086 360.213 362.057 365.77Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M277.796 124.809C269.952 107.73 242.048 107.73 234.204 124.809L138.211 333.777C132.664 345.865 137.914 360.212 149.944 365.769C162.037 371.358 176.224 366.083 181.802 353.996L193.828 327.812H318.172L330.198 353.996C334.261 362.818 342.932 367.998 352.01 367.998C355.369 367.998 358.79 367.276 362.056 365.769C374.086 360.212 379.336 345.865 373.789 333.777L277.796 124.809ZM215.977 279.589L256 192.451L296.023 279.589H215.977Z" })
    ]
  }
));
CircleADuotone.displayName = "CircleADuotone";
var CircleA_default = CircleADuotone;
