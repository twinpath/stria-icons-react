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
var Mosque_exports = {};
__export(Mosque_exports, {
  default: () => Mosque_default
});
module.exports = __toCommonJS(Mosque_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MosqueDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M520.125 106.25C478.125 79.75 439.5 48.375 408.125 10L400 0L391.875 10C360.5 48.375 321.875 79.75 279.875 106.25C233.75 135.25 192 176.25 192 229.125C192 250.625 203 270.625 220.875 288H579.125C597 270.625 608 250.625 608 229.125C608 176.25 566.25 135.25 520.125 106.25ZM64 0C64 0 0 32 0 96V128H128V96C128 32 64 0 64 0Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 480C0 497.625 14.375 512 32 512H96C113.625 512 128 497.625 128 480V128H0V480ZM608 288H192C174.4 288 160 302.4 160 320V512H224V448C224 430.375 238.375 416 256 416S288 430.375 288 448V512H352V440C352 392 400 368 400 368S448 392 448 440V512H512V448C512 430.375 526.375 416 544 416S576 430.375 576 448V512H640V320C640 302.4 625.6 288 608 288Z" })
    ]
  }
));
MosqueDuotone.displayName = "MosqueDuotone";
var Mosque_default = MosqueDuotone;
