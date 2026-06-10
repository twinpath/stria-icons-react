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
const TowerControlSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M415.98 128H319.999C319.999 110.326 305.673 96 287.999 96H247.999V48H263.999C277.255 48 287.999 37.254 287.999 24C287.999 10.744 277.255 0 263.999 0H183.999C170.745 0 159.999 10.744 159.999 24C159.999 37.254 170.745 48 183.999 48H199.999V96H159.999C142.327 96 127.999 110.326 127.999 128H32.019C10.759 128 -4.591 148.348 1.251 168.791L38.995 300.898C34.874 306.285 31.999 312.695 31.999 320C31.999 337.672 46.327 352 63.999 352H77.734H95.999V480C95.999 497.672 110.327 512 127.999 512H319.999C337.673 512 351.999 497.672 351.999 480V352H370.267H383.999C401.673 352 415.999 337.672 415.999 320C415.999 312.695 413.124 306.285 409.003 300.898L446.749 168.791C452.589 148.348 437.239 128 415.98 128ZM394.769 176L362.769 288H319.999V176H394.769ZM159.999 176H287.999V288H159.999V176ZM127.999 176V288H85.232L53.232 176H127.999Z" })
  }
));
TowerControlSolid.displayName = "TowerControlSolid";
var TowerControl_default = TowerControlSolid;
