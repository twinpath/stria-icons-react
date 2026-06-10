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
var LockOpen_exports = {};
__export(LockOpen_exports, {
  default: () => LockOpen_default
});
module.exports = __toCommonJS(LockOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LockOpenLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0C377.406 0 320 57.406 320 128V224H64C28.654 224 0 252.652 0 288V448C0 483.346 28.654 512 64 512H384C419.348 512 448 483.346 448 448V288C448 252.652 419.348 224 384 224H352V128C352 75.062 395.062 32 448 32S544 75.062 544 128V208C544 216.844 551.156 224 560 224S576 216.844 576 208V128C576 57.406 518.594 0 448 0ZM384 256C401.645 256 416 270.355 416 288V448C416 465.645 401.645 480 384 480H64C46.355 480 32 465.645 32 448V288C32 270.355 46.355 256 64 256H384Z" })
  }
));
LockOpenLight.displayName = "LockOpenLight";
var LockOpen_default = LockOpenLight;
