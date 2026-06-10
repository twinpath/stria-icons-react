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
const BoxOpenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M228.254 216.129L320 64.029L69.76 32.133C62.885 31.258 56.26 34.76 53.26 41.014L1.762 143.832C-2.863 153.088 2.012 164.096 11.762 166.848L209.754 223.385C216.754 225.385 224.379 222.383 228.254 216.129ZM638.293 143.758L586.786 41.008C583.786 34.758 577.036 31.258 570.159 32.133L320 64.008L411.762 216.135C415.514 222.385 423.139 225.385 430.266 223.385L628.166 166.885C638.043 164.01 642.793 153.01 638.293 143.758ZM528 380.762L344 426.529V192C344 178.75 333.25 168 320 168S296 178.75 296 192V426.584L112 380.766V230.17L64 216.496V393.492C64 408.16 74 420.838 88.25 424.318L304.375 478.137C309.5 479.379 314.719 480 319.922 480S330.313 479.379 335.375 478.137L551.75 424.318C566 420.713 576 408.035 576 393.492V216.496L528 230.127V380.762Z" })
  }
));
BoxOpenRegular.displayName = "BoxOpenRegular";
var BoxOpen_default = BoxOpenRegular;
