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
const TowerControlRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M415.98 128H319.999C319.999 110.326 305.673 96 287.999 96H247.999V48H263.999C277.255 48 287.999 37.254 287.999 24C287.999 10.744 277.255 0 263.999 0H183.999C170.745 0 159.999 10.744 159.999 24C159.999 37.254 170.745 48 183.999 48H199.999V96H159.999C142.327 96 127.999 110.326 127.999 128H32.019C10.759 128 -4.591 148.348 1.251 168.791L41.427 309.412C35.827 313.805 31.999 320.33 31.999 328C31.999 341.254 42.745 352 55.999 352H79.999V488C79.999 501.254 90.745 512 103.999 512C117.255 512 127.999 501.254 127.999 488V352H319.999V488C319.999 501.254 330.745 512 343.999 512C357.255 512 367.999 501.254 367.999 488V352H391.999C405.255 352 415.999 341.254 415.999 328C415.999 320.33 412.169 313.805 406.571 309.412L446.749 168.791C452.589 148.348 437.239 128 415.98 128ZM394.769 176L358.196 304H319.999V176H394.769ZM271.999 176V304H175.999V176H271.999ZM127.999 176V304H89.802L53.232 176H127.999Z" })
  }
));
TowerControlRegular.displayName = "TowerControlRegular";
var TowerControl_default = TowerControlRegular;
