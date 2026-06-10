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
var DialMax_exports = {};
__export(DialMax_exports, {
  default: () => DialMax_default
});
module.exports = __toCommonJS(DialMax_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DialMaxSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 64C305.674 64 320 49.672 320 32C320 14.326 305.674 0 288 0S256 14.326 256 32C256 49.672 270.326 64 288 64ZM32 256C14.326 256 0 270.328 0 288C0 305.674 14.326 320 32 320S64 305.674 64 288C64 270.328 49.674 256 32 256ZM544 256C526.326 256 512 270.328 512 288C512 305.674 526.326 320 544 320S576 305.674 576 288C576 270.328 561.674 256 544 256ZM129.607 129.607C142.105 117.111 142.105 96.85 129.607 84.354C117.111 71.855 96.85 71.855 84.354 84.354C71.857 96.85 71.857 117.111 84.354 129.607C96.85 142.105 117.111 142.105 129.607 129.607ZM446.393 446.393C433.895 458.889 433.895 479.15 446.393 491.648C458.889 504.145 479.15 504.145 491.646 491.648C504.143 479.15 504.143 458.889 491.646 446.393S458.889 433.896 446.393 446.393ZM84.354 446.393C71.857 458.889 71.857 479.15 84.354 491.648C96.85 504.145 117.111 504.145 129.607 491.648C142.105 479.15 142.105 458.889 129.607 446.393C117.111 433.896 96.85 433.896 84.354 446.393ZM446.393 84.354C433.895 96.85 433.895 117.111 446.393 129.607C458.889 142.105 479.15 142.105 491.646 129.607C504.143 117.111 504.143 96.85 491.646 84.354C479.15 71.855 458.889 71.855 446.393 84.354ZM299.312 276.688L411.365 388.74C433.914 361.166 448 326.4 448 288C448 199.635 376.365 128 288 128S128 199.635 128 288S199.635 448 288 448C326.4 448 361.166 433.914 388.74 411.365L276.688 299.312C270.438 293.062 270.438 282.937 276.688 276.688S293.062 270.438 299.312 276.688Z" })
  }
));
DialMaxSolid.displayName = "DialMaxSolid";
var DialMax_default = DialMaxSolid;
