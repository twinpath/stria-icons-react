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
const MugTeaSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448.01 64H176.004V128L214.629 166.625C220.629 172.625 224.004 180.75 224.004 189.25V256C224.004 273.625 209.629 288 192.004 288H128.002C110.377 288 96.002 273.625 96.002 256V189.25C96.002 180.75 99.377 172.625 105.377 166.625L144.002 128V64H56C49.625 64 43.5 66.5 39 71S32 81.625 32 88V352C32 405 75.002 448 128.002 448H320.006C373.008 448 416.008 405 416.008 352L416.012 351.996V320H448.01C518.76 320 576.012 262.75 576.012 192S518.76 64 448.01 64ZM448.01 256H416.008V128H448.01C483.385 128 512.01 156.625 512.01 192S483.385 256 448.01 256Z" })
  }
));
MugTeaSolid.displayName = "MugTeaSolid";
var MugTea_default = MugTeaSolid;
