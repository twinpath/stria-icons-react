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
var X_exports = {};
__export(X_exports, {
  default: () => X_default
});
module.exports = __toCommonJS(X_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const XLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M380.219 453.655C385.922 460.405 385.079 470.5 378.329 476.219C375.329 478.75 371.657 480 368.016 480C363.469 480 358.954 478.062 355.782 474.343L192 280.772L28.218 474.343C25.046 478.062 20.531 480 15.984 480C12.343 480 8.671 478.75 5.671 476.219C-1.079 470.5 -1.922 460.405 3.781 453.655L171.029 255.99L3.781 58.324C-1.922 51.574 -1.079 41.479 5.671 35.76C12.421 30.073 22.5 30.948 28.218 37.636L192 231.207L355.782 37.636C361.485 30.948 371.579 30.073 378.329 35.76C385.079 41.479 385.922 51.574 380.219 58.324L212.971 255.99L380.219 453.655Z" })
  }
));
XLight.displayName = "XLight";
var X_default = XLight;
