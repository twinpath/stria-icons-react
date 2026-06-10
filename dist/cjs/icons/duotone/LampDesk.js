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
var LampDesk_exports = {};
__export(LampDesk_exports, {
  default: () => LampDesk_default
});
module.exports = __toCommonJS(LampDesk_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LampDeskDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M221.791 119.76L103.032 238.659C98.481 243.216 96 249.362 96 255.66C96 257.838 96.297 260.034 96.907 262.188L149.911 447.92H199.915L147.036 262.689L255.794 153.803L221.791 119.76ZM471.978 223.855C471.978 210.851 467.462 197.824 458.364 187.345L379.733 266.068C390.199 275.177 403.212 279.698 416.2 279.698C430.515 279.698 444.799 274.207 455.614 263.315C466.493 252.488 471.978 238.186 471.978 223.855Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.984 447.92H63.965C18.937 447.92 0 486.756 0 496.494C0 504.748 7.381 512 16.212 512H367.738C376.568 512 383.949 504.748 383.949 496.494C383.949 486.671 364.621 447.92 319.984 447.92ZM512 81.196C512 72.129 504.968 63.44 494.372 63.44H346.486L301.233 18.133C288.781 6.039 272.677 0 256.585 0C222.051 0 192.614 27.889 192.614 64.046C192.614 80.157 198.646 96.28 210.726 108.747L255.979 154.053V302.113C255.979 312.721 264.658 319.761 273.715 319.761C278.015 319.761 282.4 318.174 285.982 314.629L506.873 93.478C510.415 89.892 512 85.501 512 81.196Z " })
    ]
  }
));
LampDeskDuotone.displayName = "LampDeskDuotone";
var LampDesk_default = LampDeskDuotone;
