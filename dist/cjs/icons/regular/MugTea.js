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
var MugTea_exports = {};
__export(MugTea_exports, {
  default: () => MugTea_default
});
module.exports = __toCommonJS(MugTea_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MugTeaRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 320H442.381C509.209 320 568.955 271.219 575.385 204.701C582.762 128.385 522.814 64 448 64H48C39.199 64 32 71.199 32 80V352C32 405.02 74.98 448 128 448H320C373.02 448 416 405.02 416 352V320ZM416 112H448C492.125 112 528 147.875 528 192S492.125 272 448 272H416V112ZM368 352C368 378.4 346.4 400 320 400H128C101.6 400 80 378.4 80 352V112H152V152L121.373 182.627C115.371 188.629 112 196.768 112 205.254V256C112 273.672 126.326 288 144 288H192C209.674 288 224 273.672 224 256V205.254C224 196.768 220.629 188.629 214.627 182.627L184 152V112H368V352Z" })
  }
));
MugTeaRegular.displayName = "MugTeaRegular";
var MugTea_default = MugTeaRegular;
