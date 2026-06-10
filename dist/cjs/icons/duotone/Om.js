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
var Om_exports = {};
__export(Om_exports, {
  default: () => Om_default
});
module.exports = __toCommonJS(Om_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OmDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M360.676 61C362.551 62.875 365.301 64 368.051 64S373.426 62.875 375.426 61L396.926 39.375C398.926 37.375 400.051 34.75 400.051 32S398.926 26.625 396.926 24.625L375.426 3C371.301 -1 364.676 -1 360.676 3L339.051 24.625C337.051 26.625 336.051 29.25 336.051 32S337.051 37.375 339.051 39.375L360.676 61ZM454.301 67.25C368.801 132.375 285.301 70.001 281.801 67.375C275.801 62.75 267.301 63 261.676 67.875C255.926 72.75 254.301 81 257.926 87.625C259.551 90.625 298.301 160 376.801 160C456.676 160 475.551 128.625 478.551 122.375C479.551 120.25 480.051 117.875 480.051 115.5V80C480.051 66.75 464.926 59.25 454.301 67.25Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M412.125 192C385.375 192 360.375 202.375 341.5 221.25L317.25 245.5C310.5 252.25 301.5 256 291.875 256H245C255.5 233.875 259.125 207.875 252.75 180.75C242.625 138.25 206.375 104.625 163.25 97.625C127 91.625 92.25 102.625 67.25 126.375C59.875 133.375 60.25 145.25 68.375 151.25L94.5 170.875C100.25 175.25 108.125 175.25 113.625 170.75C122.125 163.75 132.75 160 144 160C170.375 160 192 181.5 192 208S170.375 256 144 256H112C100.125 256 92.25 268.625 97.625 279.25L113.75 311.5C116.25 316.5 121.375 319.5 126.875 320H160C195.25 320 224 348.75 224 384S195.25 448 160 448C63.875 448 37.625 394.001 14.75 356C10.25 348.375 0 352.375 0 361.25C-0.125 416 41.125 512 160 512C230.5 512 288 454.625 288 384C288 360.625 281.125 338.875 270.125 320H291.875C318.5 320 343.625 309.625 362.5 290.75L386.75 266.5C393.5 259.75 402.5 256 412.125 256C431.875 256 448 272.125 448 291.875V392C448 405.25 429.25 416 416 416C376.625 416 349.25 391.75 334.125 373.125C329.375 367.25 320 370.625 320 378.125V416C320 416 320 480 416 480C464.5 480 512 440.5 512 392V291.875C512 236.75 467.25 192 412.125 192Z" })
    ]
  }
));
OmDuotone.displayName = "OmDuotone";
var Om_default = OmDuotone;
