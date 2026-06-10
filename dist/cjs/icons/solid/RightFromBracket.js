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
var RightFromBracket_exports = {};
__export(RightFromBracket_exports, {
  default: () => RightFromBracket_default
});
module.exports = __toCommonJS(RightFromBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RightFromBracketSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 480H160C177.673 480 192 465.673 192 448V448C192 430.327 177.673 416 160 416H96C78.327 416 64 401.673 64 384V128C64 110.327 78.327 96 96 96H160C177.673 96 192 81.673 192 64V64C192 46.327 177.673 32 160 32H96C42.981 32 0 74.981 0 128V384C0 437.019 42.981 480 96 480ZM504.799 238.545L360.697 102.545C353.723 95.967 343.496 94.17 334.693 97.951C325.891 101.748 320.184 110.42 320.184 119.998V191.998H192.092C174.404 191.998 160.068 206.326 160.068 223.998V287.998C160.068 305.672 174.404 319.998 192.092 319.998H320.184V391.998C320.184 401.576 325.891 410.248 334.693 414.045C343.496 417.826 353.723 416.029 360.697 409.451L504.799 273.451C514.4 264.389 514.4 247.607 504.799 238.545Z" })
  }
));
RightFromBracketSolid.displayName = "RightFromBracketSolid";
var RightFromBracket_default = RightFromBracketSolid;
