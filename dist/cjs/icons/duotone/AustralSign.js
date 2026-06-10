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
var AustralSign_exports = {};
__export(AustralSign_exports, {
  default: () => AustralSign_default
});
module.exports = __toCommonJS(AustralSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AustralSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 352C0 369.672 14.328 384 32 384H51.854L78.289 320H32C14.328 320 0 334.328 0 352ZM0 256C0 273.672 14.328 288 32 288H91.508L117.943 224H32C14.328 224 0 238.328 0 256ZM243.51 224H204.49L178.055 288H269.945L243.51 224ZM448 256C448 238.328 433.672 224 416 224H330.057L356.492 288H416C433.672 288 448 273.672 448 256ZM416 320H369.711L396.146 384H416C433.672 384 448 369.672 448 352S433.672 320 416 320ZM164.836 320L138.398 384H309.602L283.164 320H164.836Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M376.007 479.983C360.289 479.983 345.4 470.656 339.025 455.235L224 176.771L108.975 455.235C100.538 475.671 77.117 485.421 56.743 476.937C36.323 468.5 26.604 445.111 35.042 424.706L187.033 56.733C193.22 41.765 207.813 32 224 32S254.78 41.765 260.967 56.733L412.958 424.706C421.396 445.111 411.677 468.5 391.257 476.937C386.272 478.999 381.101 479.983 376.007 479.983Z" })
    ]
  }
));
AustralSignDuotone.displayName = "AustralSignDuotone";
var AustralSign_default = AustralSignDuotone;
