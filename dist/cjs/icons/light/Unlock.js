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
var Unlock_exports = {};
__export(Unlock_exports, {
  default: () => Unlock_default
});
module.exports = __toCommonJS(Unlock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UnlockLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 224H128L128 131.339C128 82.553 162.98 39.02 211.37 32.812C269.913 25.302 320 70.908 320 128V144C320 152.837 327.163 160 336 160H336C344.837 160 352 152.837 352 144V132.502C352 68.195 306.527 10.502 242.873 1.358C163.932 -9.981 96 51.207 96 128V224H64C28.654 224 0 252.654 0 288V448C0 483.346 28.654 512 64 512H384C419.346 512 448 483.346 448 448V288C448 252.654 419.346 224 384 224ZM416 448C416 465.645 401.645 480 384 480H64C46.355 480 32 465.645 32 448V288C32 270.356 46.355 256 64 256H384C401.645 256 416 270.356 416 288V448Z" })
  }
));
UnlockLight.displayName = "UnlockLight";
var Unlock_default = UnlockLight;
