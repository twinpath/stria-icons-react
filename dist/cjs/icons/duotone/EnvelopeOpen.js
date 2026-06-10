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
var EnvelopeOpen_exports = {};
__export(EnvelopeOpen_exports, {
  default: () => EnvelopeOpen_default
});
module.exports = __toCommonJS(EnvelopeOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EnvelopeOpenDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 208.539V254.859L303.156 367.532C289.062 378.517 272.531 384.001 256 384.001S222.938 378.517 208.844 367.532L64 254.859V208.539C85.16 191.952 110.477 172.88 220.406 93.038C223.586 90.71 227.297 87.851 231.383 84.685C236.863 80.441 247.793 71.974 256 66.843C264.207 71.974 275.137 80.439 280.613 84.683C284.703 87.849 288.414 90.71 291.766 93.161C400.945 172.46 426.562 191.743 448 208.539Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M493.625 163.003C468.75 143.378 448.125 127.628 329.375 41.379C312.73 29.207 279.672 0 256.441 0C256.293 0 256.145 0.002 256 0.004C255.852 0.002 255.707 0 255.559 0C232.328 0 199.27 29.207 182.625 41.379C63.875 127.628 43.25 143.378 18.375 163.003C6.75 172.003 0 186.003 0 200.752V464C0 490.51 21.492 512 48 512H464C490.508 512 512 490.51 512 464V200.752C512 186.003 505.25 172.003 493.625 163.003ZM303.156 367.532C289.062 378.517 272.531 384.001 256 384.001S222.938 378.517 208.844 367.532L64 254.859V208.539C85.16 191.952 110.477 172.88 220.406 93.038C223.586 90.71 227.297 87.851 231.383 84.685C236.863 80.441 247.793 71.974 256 66.843C264.207 71.974 275.137 80.439 280.613 84.683C284.703 87.849 288.414 90.71 291.766 93.161C400.945 172.46 426.562 191.743 448 208.539V254.859L303.156 367.532Z" })
    ]
  }
));
EnvelopeOpenDuotone.displayName = "EnvelopeOpenDuotone";
var EnvelopeOpen_default = EnvelopeOpenDuotone;
