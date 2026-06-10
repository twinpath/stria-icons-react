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
var Tombstone_exports = {};
__export(Tombstone_exports, {
  default: () => Tombstone_default
});
module.exports = __toCommonJS(Tombstone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TombstoneLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M432 480H16C7.164 480 0 487.162 0 496C0 504.836 7.164 512 16 512H432C440.836 512 448 504.836 448 496C448 487.162 440.836 480 432 480ZM48 448C56.844 448 64 440.844 64 432V192C64 103.781 135.781 32 224 32S384 103.781 384 192V432C384 440.844 391.156 448 400 448S416 440.844 416 432V192C416 86.125 329.875 0 224 0S32 86.125 32 192V432C32 440.844 39.156 448 48 448ZM224 352C232.844 352 240 344.844 240 336V208H304C312.844 208 320 200.844 320 192S312.844 176 304 176H240V112C240 103.156 232.844 96 224 96S208 103.156 208 112V176H144C135.156 176 128 183.156 128 192S135.156 208 144 208H208V336C208 344.844 215.156 352 224 352Z" })
  }
));
TombstoneLight.displayName = "TombstoneLight";
var Tombstone_default = TombstoneLight;
