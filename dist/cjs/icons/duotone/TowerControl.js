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
var TowerControl_exports = {};
__export(TowerControl_exports, {
  default: () => TowerControl_default
});
module.exports = __toCommonJS(TowerControl_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TowerControlDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M415.98 128H32.019C10.759 128 -4.591 148.348 1.251 168.791L38.995 300.898C34.874 306.285 31.999 312.695 31.999 320C31.999 337.672 46.327 352 63.999 352H383.999C401.673 352 415.999 337.672 415.999 320C415.999 312.695 413.124 306.285 409.003 300.898L446.749 168.791C452.589 148.348 437.239 128 415.98 128ZM127.999 288H85.232L53.232 176H127.999V288ZM287.999 288H159.999V176H287.999V288ZM362.769 288H319.999V176H394.769L362.769 288Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 352V480C96 497.672 110.328 512 128 512H320C337.674 512 352 497.672 352 480V352H96ZM288 96H248V48H264C277.256 48 288 37.254 288 24C288 10.744 277.256 0 264 0H184C170.746 0 160 10.744 160 24C160 37.254 170.746 48 184 48H200V96H160C142.328 96 128 110.326 128 128H320C320 110.326 305.674 96 288 96Z" })
    ]
  }
));
TowerControlDuotone.displayName = "TowerControlDuotone";
var TowerControl_default = TowerControlDuotone;
