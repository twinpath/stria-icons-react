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
var DialMedLow_exports = {};
__export(DialMedLow_exports, {
  default: () => DialMedLow_default
});
module.exports = __toCommonJS(DialMedLow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DialMedLowLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M32 256C14.326 256 0 270.326 0 288C0 305.672 14.326 320 32 320S64 305.672 64 288C64 270.326 49.674 256 32 256ZM84.352 446.393C71.855 458.889 71.855 479.15 84.352 491.648C96.848 504.145 117.109 504.145 129.607 491.648C142.104 479.15 142.104 458.889 129.607 446.393C117.109 433.896 96.848 433.896 84.352 446.393ZM129.607 129.607C142.104 117.111 142.104 96.85 129.607 84.354C117.109 71.855 96.848 71.855 84.352 84.354C71.855 96.85 71.855 117.111 84.352 129.607C96.848 142.105 117.109 142.105 129.607 129.607ZM288 64C305.672 64 320 49.672 320 32C320 14.326 305.672 0 288 0C270.326 0 256 14.326 256 32C256 49.672 270.326 64 288 64ZM446.391 446.393C433.895 458.889 433.895 479.15 446.391 491.648C458.889 504.145 479.15 504.145 491.646 491.648C504.143 479.15 504.143 458.889 491.646 446.393S458.889 433.896 446.391 446.393ZM401.138 401.138C463.621 338.654 463.621 237.347 401.136 174.863S237.345 112.379 174.863 174.863C112.377 237.347 112.377 338.654 174.861 401.138S338.652 463.623 401.138 401.138ZM197.488 378.51C151.455 332.476 148.433 260.115 187.32 209.947L276.685 299.312C282.939 305.566 293.06 305.566 299.312 299.312C305.566 293.06 305.566 282.939 299.312 276.685L209.947 187.32C260.115 148.433 332.474 151.457 378.51 197.49C428.416 247.398 428.418 328.603 378.51 378.51C328.603 428.418 247.396 428.418 197.488 378.51ZM544 256C526.326 256 512 270.328 512 288C512 305.674 526.326 320 544 320S576 305.674 576 288C576 270.328 561.674 256 544 256ZM446.391 84.354C433.895 96.85 433.895 117.111 446.391 129.607C458.889 142.105 479.15 142.105 491.646 129.607C504.143 117.111 504.143 96.85 491.646 84.354C479.15 71.855 458.889 71.855 446.391 84.354Z" })
  }
));
DialMedLowLight.displayName = "DialMedLowLight";
var DialMedLow_default = DialMedLowLight;
