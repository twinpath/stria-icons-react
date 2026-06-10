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
var EyeSlash_exports = {};
__export(EyeSlash_exports, {
  default: () => EyeSlash_default
});
module.exports = __toCommonJS(EyeSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EyeSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M149.057 91.539C198.68 53.85 257.287 32.004 320 32.004C442.938 32.004 550.281 115.529 604.531 238.975C606.438 243.405 608 251.026 608 256.002C608 260.959 606.438 268.598 604.531 273.028C585.115 317.213 558.791 356.166 527.471 388.132L446.041 324.31C457.127 303.914 464 280.899 464 256.065V256.002C464 176.519 399.5 112.004 320 112.004C282.705 112.004 249.035 126.57 223.453 149.851L149.057 91.539ZM320 160.003H319.781C317.48 160.033 314.426 160.445 311.539 160.767C316.77 170.04 320 180.597 320 192.003C320 202.169 317.414 211.651 313.195 220.188L407.885 294.404C413.043 282.629 416 269.676 416 256.002C416 203.007 372.996 160.003 320 160.003ZM320 352.001C273.043 352.001 234.082 318.189 225.779 273.629L325.113 351.486C323.385 351.578 321.752 352.001 320 352.001ZM373.568 389.464L448.076 447.862C408.771 468.508 365.463 480 320 480C197.062 480 89.719 396.474 35.469 273.028C33.562 268.598 32 260.979 32 256.002C32 251.043 33.562 243.405 35.469 238.975C48.014 210.425 63.516 184.126 81.287 160.38L178 236.182C177.09 242.721 176 249.213 176 256.002C176 335.486 240.5 400.001 320 400.001H320.062C339.006 400.001 356.998 396.122 373.568 389.464Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M615.984 512C610.796 512 605.593 510.344 601.187 506.875L9.187 42.879C-1.235 34.723 -3.063 19.63 5.109 9.192C13.296 -1.214 28.343 -3.089 38.812 5.13L630.812 469.125C641.234 477.282 643.062 492.375 634.89 502.813C630.156 508.844 623.109 512 615.984 512Z" })
    ]
  }
));
EyeSlashDuotone.displayName = "EyeSlashDuotone";
var EyeSlash_default = EyeSlashDuotone;
