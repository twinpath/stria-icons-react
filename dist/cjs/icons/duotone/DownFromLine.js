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
var DownFromLine_exports = {};
__export(DownFromLine_exports, {
  default: () => DownFromLine_default
});
module.exports = __toCommonJS(DownFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DownFromLineDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 32H32C14.327 32 0 46.327 0 64V64C0 81.673 14.327 96 32 96H352C369.673 96 384 81.673 384 64V64C384 46.327 369.673 32 352 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M350.048 302.693C353.83 311.496 352.033 321.723 345.455 328.695L209.455 472.799C200.392 482.4 183.611 482.4 174.548 472.799L38.548 328.695C31.97 321.723 30.173 311.496 33.955 302.693C37.751 293.891 46.423 288.182 56.001 288.182H128.001V160.092C128.001 142.404 142.328 128.068 160.001 128.068H224.001C241.673 128.068 256.001 142.404 256.001 160.092V288.182H328.001C337.58 288.182 346.251 293.891 350.048 302.693Z" })
    ]
  }
));
DownFromLineDuotone.displayName = "DownFromLineDuotone";
var DownFromLine_default = DownFromLineDuotone;
