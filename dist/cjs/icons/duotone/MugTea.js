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
const MugTeaDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 64H416V128H448C483.375 128 512 156.625 512 192S483.375 256 448 256H416V320H448C518.75 320 576 262.75 576 192S518.75 64 448 64ZM176.002 128V64H144.002V128L105.375 166.625C99.375 172.625 96 180.75 96 189.25V256C96 273.625 110.375 288 128 288H192.002C209.627 288 224.002 273.625 224.002 256V189.25C224.002 180.75 220.627 172.625 214.627 166.625L176.002 128Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 64V352C416 405 373 448 320 448H128C75 448 32 405 32 352V88C32 72.977 44.418 64 56 64H144.002V128L105.375 166.625C99.375 172.625 96 180.75 96 189.25V256C96 273.625 110.375 288 128 288H192.002C209.627 288 224.002 273.625 224.002 256V189.25C224.002 180.75 220.627 172.625 214.627 166.625L176.002 128V64H416Z" })
    ]
  }
));
MugTeaDuotone.displayName = "MugTeaDuotone";
var MugTea_default = MugTeaDuotone;
