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
var SdCards_exports = {};
__export(SdCards_exports, {
  default: () => SdCards_default
});
module.exports = __toCommonJS(SdCards_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SdCardsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M240 64C231.164 64 224 71.162 224 80V144C224 152.836 231.164 160 240 160S256 152.836 256 144V80C256 71.162 248.836 64 240 64ZM304 64C295.164 64 288 71.162 288 80V144C288 152.836 295.164 160 304 160S320 152.836 320 144V80C320 71.162 312.836 64 304 64ZM368 64C359.164 64 352 71.162 352 80V144C352 152.836 359.164 160 368 160S384 152.836 384 144V80C384 71.162 376.836 64 368 64ZM336 480H96C60.654 480 32 451.346 32 416V112C32 103.164 24.836 96 16 96S0 103.164 0 112V416C0 469.02 42.98 512 96 512H336C344.836 512 352 504.836 352 496S344.836 480 336 480ZM384 0H234.51C217.535 0 201.258 6.742 189.254 18.744L98.746 109.254C86.742 121.256 80 137.535 80 154.51V368C80 403.199 108.801 432 144 432H384C419.199 432 448 403.199 448 368V64C448 28.799 419.199 0 384 0ZM416 368C416 385.6 401.6 400 384 400H144C126.4 400 112 385.6 112 368V154.504C112 146.018 115.371 137.879 121.373 131.877L211.877 41.373C217.879 35.371 226.018 32 234.504 32H384C401.6 32 416 46.4 416 64V368Z" })
  }
));
SdCardsLight.displayName = "SdCardsLight";
var SdCards_default = SdCardsLight;
