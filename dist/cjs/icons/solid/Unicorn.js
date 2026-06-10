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
var Unicorn_exports = {};
__export(Unicorn_exports, {
  default: () => Unicorn_default
});
module.exports = __toCommonJS(Unicorn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UnicornSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M632.021 32H531.768C537.643 25.875 542.143 18.375 543.893 9.625C544.893 4.625 541.018 0 536.018 0H416.014C345.262 0 288.01 57.25 288.01 128H160.005C131.129 128 105.629 141 88.003 161.125V160C39.501 160 0 199.5 0 248V304C0 312.875 7.125 320 16.001 320H32.001C40.876 320 48.002 312.875 48.002 304V248C48.002 234.75 54.877 223.625 64.752 216.375C64.627 218.875 64.002 221.375 64.002 224C64.002 251.625 75.878 276.375 94.503 293.875L68.739 362.872C64.243 374.912 63.506 388.033 66.627 400.5L88.473 487.771C92.038 502.011 104.835 512 119.515 512H152.502C173.313 512 188.587 492.448 183.551 472.256L162.255 386.875L186.006 323.25L288.135 345.625V480C288.135 497.673 302.462 512 320.135 512H352.138C369.738 512 384.138 497.6 384.138 480V318.25C403.764 298 416.139 270.5 416.139 240C416.139 239.75 416.014 239.625 416.014 239.375V136.875L432.014 144L450.89 181.75C458.345 196.659 476.003 203.339 491.459 197.098L523.893 184C536.055 179.088 544.018 167.285 544.018 154.168V83.25L636.396 46.625C643.022 42.25 639.896 32 632.021 32ZM480.016 96C471.141 96 464.016 88.875 464.016 80S471.141 64 480.016 64C488.891 64 496.017 71.125 496.017 80S488.891 96 480.016 96Z" })
  }
));
UnicornSolid.displayName = "UnicornSolid";
var Unicorn_default = UnicornSolid;
