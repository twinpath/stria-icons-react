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
var LockKeyhole_exports = {};
__export(LockKeyhole_exports, {
  default: () => LockKeyhole_default
});
module.exports = __toCommonJS(LockKeyhole_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LockKeyholeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 224H384V128C384 57.406 326.594 0 256 0S128 57.406 128 128V224H96C60.654 224 32 252.652 32 288V448C32 483.346 60.654 512 96 512H416C451.348 512 480 483.346 480 448V288C480 252.652 451.348 224 416 224ZM160 128C160 75.062 203.062 32 256 32S352 75.062 352 128V224H160V128ZM448 448C448 465.645 433.645 480 416 480H96C78.355 480 64 465.645 64 448V288C64 270.355 78.355 256 96 256H416C433.645 256 448 270.355 448 288V448ZM256 320C247.156 320 240 327.156 240 336V400C240 408.844 247.156 416 256 416S272 408.844 272 400V336C272 327.156 264.844 320 256 320Z" })
  }
));
LockKeyholeLight.displayName = "LockKeyholeLight";
var LockKeyhole_default = LockKeyholeLight;
