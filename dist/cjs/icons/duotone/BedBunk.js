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
var BedBunk_exports = {};
__export(BedBunk_exports, {
  default: () => BedBunk_default
});
module.exports = __toCommonJS(BedBunk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BedBunkDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 0C117.5 0 96 21.5 96 48S117.5 96 144 96S192 74.5 192 48S170.5 0 144 0ZM464 0H240C231.125 0 224 7.125 224 16V128H576V112C576 50.125 525.875 0 464 0ZM240 256C231.125 256 224 263.125 224 272V384H512V267.25C497 259.875 480.625 256.125 464 256H240ZM144 256C117.5 256 96 277.5 96 304S117.5 352 144 352S192 330.5 192 304S170.5 256 144 256Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 128V16C64 7.125 56.875 0 48 0H16C7.125 0 0 7.125 0 16V496C0 504.875 7.125 512 16 512H48C56.875 512 64 504.875 64 496V448H512V496C512 504.875 519.125 512 528 512H560C568.875 512 576 504.875 576 496V128H64ZM512 384H64V192H512V384Z" })
    ]
  }
));
BedBunkDuotone.displayName = "BedBunkDuotone";
var BedBunk_default = BedBunkDuotone;
