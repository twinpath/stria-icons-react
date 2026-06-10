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
var CloudRainbow_exports = {};
__export(CloudRainbow_exports, {
  default: () => CloudRainbow_default
});
module.exports = __toCommonJS(CloudRainbow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudRainbowLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M414.688 304.219C407.156 258.75 367.562 224 320 224C301.031 224 282.906 229.469 267.406 239.688C246.688 210.219 212.594 192 176 192C114.25 192 64 242.25 64 304C64 306.719 64.094 309.438 64.312 312.188C25.844 328.062 0 365.656 0 408C0 465.344 46.656 512 104 512H408C465.344 512 512 465.344 512 408C512 352.906 468.938 307.688 414.688 304.219ZM408 480H104C64.312 480 32 447.688 32 408C32 375.406 54.188 346.875 85.969 338.625C94.187 336.469 99.312 328.281 97.625 319.969C96.562 314.781 96 309.469 96 304C96 259.875 131.875 224 176 224C206.969 224 235.406 242.312 248.469 270.625C250.656 275.406 255.062 278.812 260.25 279.687C265.438 280.781 270.719 278.937 274.406 275.156C286.562 262.812 302.75 256 320 256C355.281 256 384 284.719 384 320C384 328.844 391.156 336 400 336H408C447.688 336 480 368.312 480 408S447.688 480 408 480ZM256 172.031C260.5 172.031 265 170.125 268.156 166.438C341.25 81 447.625 32 560 32C568.844 32 576 24.844 576 16S568.844 0 560 0C438.281 0 323.031 53.094 243.844 145.625C238.094 152.344 238.875 162.438 245.594 168.188C248.625 170.781 252.312 172.031 256 172.031ZM560 96C479.625 96 402.812 125.906 343.688 180.219C337.156 186.187 336.75 196.312 342.719 202.812C345.875 206.25 350.188 208 354.5 208C358.375 208 362.25 206.594 365.312 203.781C418.531 154.906 487.656 128 560 128C568.844 128 576 120.844 576 112S568.844 96 560 96ZM560 192C517.094 192 475.406 204.188 439.375 227.219C431.938 231.969 429.75 241.875 434.531 249.312C437.562 254.094 442.75 256.688 448 256.688C450.969 256.688 453.938 255.875 456.625 254.156C487.469 234.438 523.219 224 560 224C568.844 224 576 216.844 576 208S568.844 192 560 192Z" })
  }
));
CloudRainbowLight.displayName = "CloudRainbowLight";
var CloudRainbow_default = CloudRainbowLight;
