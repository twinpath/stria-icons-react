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
var DiceFour_exports = {};
__export(DiceFour_exports, {
  default: () => DiceFour_default
});
module.exports = __toCommonJS(DiceFour_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceFourDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H384C419.375 480 448 451.375 448 416V96C448 60.625 419.375 32 384 32ZM128 384C110.375 384 96 369.625 96 352S110.375 320 128 320S160 334.375 160 352S145.625 384 128 384ZM128 192C110.375 192 96 177.625 96 160S110.375 128 128 128S160 142.375 160 160S145.625 192 128 192ZM320 384C302.375 384 288 369.625 288 352S302.375 320 320 320S352 334.375 352 352S337.625 384 320 384ZM320 192C302.375 192 288 177.625 288 160S302.375 128 320 128S352 142.375 352 160S337.625 192 320 192Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 320C110.375 320 96 334.375 96 352S110.375 384 128 384S160 369.625 160 352S145.625 320 128 320ZM320 192C337.625 192 352 177.625 352 160S337.625 128 320 128S288 142.375 288 160S302.375 192 320 192ZM128 128C110.375 128 96 142.375 96 160S110.375 192 128 192S160 177.625 160 160S145.625 128 128 128ZM320 320C302.375 320 288 334.375 288 352S302.375 384 320 384S352 369.625 352 352S337.625 320 320 320Z " })
    ]
  }
));
DiceFourDuotone.displayName = "DiceFourDuotone";
var DiceFour_default = DiceFourDuotone;
