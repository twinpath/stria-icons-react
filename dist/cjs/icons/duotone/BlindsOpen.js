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
var BlindsOpen_exports = {};
__export(BlindsOpen_exports, {
  default: () => BlindsOpen_default
});
module.exports = __toCommonJS(BlindsOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlindsOpenDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 64H16L0 112H96V64ZM496 64H128V112H512L496 64ZM96 210.938V192H16L0 240H66.939C71.793 226.494 82.439 215.758 96 210.938ZM128 192V210.938C141.561 215.758 152.207 226.494 157.061 240H512L496 192H128ZM16 320L0 368H512L496 320H16ZM16 464L0 512H512L496 464H16Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 16V48C512 56.836 504.836 64 496 64H128V210.938C146.6 217.549 160 235.131 160 256C160 282.51 138.51 304 112 304S64 282.51 64 256C64 235.131 77.4 217.549 96 210.938V64H16C7.164 64 0 56.836 0 48V16C0 7.162 7.164 0 16 0H496C504.836 0 512 7.162 512 16Z" })
    ]
  }
));
BlindsOpenDuotone.displayName = "BlindsOpenDuotone";
var BlindsOpen_default = BlindsOpenDuotone;
