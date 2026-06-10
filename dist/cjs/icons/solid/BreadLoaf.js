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
var BreadLoaf_exports = {};
__export(BreadLoaf_exports, {
  default: () => BreadLoaf_default
});
module.exports = __toCommonJS(BreadLoaf_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BreadLoafSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 192C480 103.625 372.5 32 240 32S0 103.625 0 192C0 227.375 30.875 256 64 256V448C64 465.625 78.375 480 96 480H384C401.625 480 416 465.625 416 448V256C449.125 256 480 227.375 480 192ZM400 32C397.625 32 395.25 32.25 392.75 32.25C465.25 66.375 512 124.625 512 192C512 234.75 485.125 271 448 283.5V448C447.875 459.25 444.875 470.375 439.125 480H544C561.625 480 576 465.625 576 448V256H580C613.125 256 640 227.375 640 192C640 103.625 532.5 32 400 32Z" })
  }
));
BreadLoafSolid.displayName = "BreadLoafSolid";
var BreadLoaf_default = BreadLoafSolid;
