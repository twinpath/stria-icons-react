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
var UnlockKeyhole_exports = {};
__export(UnlockKeyhole_exports, {
  default: () => UnlockKeyhole_default
});
module.exports = __toCommonJS(UnlockKeyhole_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UnlockKeyholeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 336V400C240 408.844 232.844 416 224 416S208 408.844 208 400V336C208 327.156 215.156 320 224 320S240 327.156 240 336ZM448 288V448C448 483.346 419.346 512 384 512H64C28.654 512 0 483.346 0 448V288C0 252.654 28.654 224 64 224H96V128C96 51.207 163.932 -9.981 242.873 1.358C306.527 10.502 352 68.195 352 132.502V144C352 152.837 344.837 160 336 160H336C327.163 160 320 152.837 320 144V128C320 70.908 269.913 25.302 211.37 32.812C162.98 39.02 128 82.553 128 131.339L128 224H384C419.346 224 448 252.654 448 288ZM416 288C416 270.356 401.645 256 384 256H64C46.355 256 32 270.356 32 288V448C32 465.645 46.355 480 64 480H384C401.645 480 416 465.645 416 448V288Z" })
  }
));
UnlockKeyholeLight.displayName = "UnlockKeyholeLight";
var UnlockKeyhole_default = UnlockKeyholeLight;
