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
var BoxOpen_exports = {};
__export(BoxOpen_exports, {
  default: () => BoxOpen_default
});
module.exports = __toCommonJS(BoxOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BoxOpenDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M53.26 41.014L1.762 143.832C-2.863 153.088 2.012 164.096 11.762 166.848L209.754 223.385C216.754 225.385 224.379 222.383 228.254 216.129L320 64.029L69.76 32.133C62.885 31.258 56.26 34.76 53.26 41.014ZM638.293 143.758L586.786 41.008C583.786 34.758 577.036 31.258 570.159 32.133L320 64.008L411.762 216.135C415.514 222.385 423.139 225.385 430.266 223.385L628.166 166.885C638.043 164.01 642.793 153.01 638.293 143.758Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M576 181.777V393.49C576 408.033 566 420.711 551.75 424.316L335.375 478.135C325.25 480.621 314.625 480.621 304.375 478.135L88.25 424.316C74 420.836 64 408.158 64 393.49V181.764L209.754 223.385C216.754 225.385 224.379 222.383 228.254 216.129L320 64.029L320.014 64.031L411.762 216.135C415.514 222.385 423.139 225.385 430.266 223.385L576 181.777Z" })
    ]
  }
));
BoxOpenDuotone.displayName = "BoxOpenDuotone";
var BoxOpen_default = BoxOpenDuotone;
