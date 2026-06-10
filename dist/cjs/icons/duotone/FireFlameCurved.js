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
var FireFlameCurved_exports = {};
__export(FireFlameCurved_exports, {
  default: () => FireFlameCurved_default
});
module.exports = __toCommonJS(FireFlameCurved_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireFlameCurvedDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216 23.859C216 23.857 215.998 23.854 215.998 23.852C215.998 23.848 215.996 23.848 215.996 23.844C215.988 9.082 204.184 0.029 192 0C189.076 -0.008 186.209 0.959 183.398 2.037C183.393 2.039 183.385 2.039 183.379 2.041H183.375H183.373H183.371C183.143 2.133 182.9 2.162 182.67 2.215C182.904 2.17 183.145 2.135 183.369 2.041C179.029 3.711 174.949 6.275 171.844 10.813C48 191.844 224 200 224 288C224 323.625 194.875 352.453 159.156 351.984C123.969 351.547 96 322.219 96 287.047V201.547C96 179.844 69.531 169.313 54.562 185.047C27.812 213.156 0 261.328 0 320C0 425.875 86.125 512 192 512S384 425.875 384 320C384 149.703 216 127 216 23.859ZM54.586 185.033C54.578 185.041 54.57 185.043 54.562 185.051C54.572 185.041 54.582 185.037 54.592 185.027L54.586 185.033ZM192 448.012C148.307 448.012 109.654 426.004 86.549 392.49C107.936 407.699 133.316 416 160.016 416C230.586 416 288 358.584 288 288.008C288 230.084 251.104 194.232 224.164 168.057C238.865 177.807 320 230.459 320 320.008C320 390.59 262.58 448.012 192 448.012Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192.451 448.012C148.758 448.012 110.105 426.004 87 392.49C108.386 407.699 133.768 416 160.467 416C231.037 416 288.451 358.584 288.451 288.008C288.451 230.084 251.555 194.232 224.615 168.057C239.316 177.807 320.451 230.459 320.451 320.008C320.451 390.59 263.031 448.012 192.451 448.012Z" })
    ]
  }
));
FireFlameCurvedDuotone.displayName = "FireFlameCurvedDuotone";
var FireFlameCurved_default = FireFlameCurvedDuotone;
