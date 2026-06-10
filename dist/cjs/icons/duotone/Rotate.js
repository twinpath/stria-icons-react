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
var Rotate_exports = {};
__export(Rotate_exports, {
  default: () => Rotate_default
});
module.exports = __toCommonJS(Rotate_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RotateDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M430.299 288H430.299C410.78 288 394.167 300.24 385.859 317.903C378.977 332.535 369.598 346.034 357.806 357.812C330.618 385.031 294.46 400 255.989 400C222.818 400 191.742 388.285 166.276 367.77L200.028 333.998C216.863 317.152 205.176 288.576 181.601 288H34.661C24.323 288.289 16 296.662 16 307.07V452.965C16 477.009 45.074 489.046 62.07 472.039L97.883 436.205C141.668 474.738 197.147 496 255.989 496C320.086 496 380.37 471.031 425.684 425.688C445.859 405.527 461.926 382.387 473.561 357.267C488.501 325.014 465.845 288 430.299 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496.23 59.036V204.93C496.23 215.338 487.907 223.711 477.569 224H330.629C307.054 223.424 295.367 194.848 312.202 178.002L345.954 144.23C320.488 123.715 289.412 112 256.241 112C217.77 112 181.612 126.969 154.424 154.188C142.632 165.965 133.253 179.463 126.371 194.096C118.063 211.76 101.45 224 81.93 224H81.93C46.385 224 23.729 186.986 38.668 154.732C50.303 129.613 66.371 106.472 86.546 86.313C131.86 40.969 192.144 16 256.241 16C315.083 16 370.562 37.262 414.347 75.795L450.16 39.961C467.156 22.954 496.23 34.992 496.23 59.036Z" })
    ]
  }
));
RotateDuotone.displayName = "RotateDuotone";
var Rotate_default = RotateDuotone;
