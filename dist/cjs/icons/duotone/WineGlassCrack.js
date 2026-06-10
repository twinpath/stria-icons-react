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
var WineGlassCrack_exports = {};
__export(WineGlassCrack_exports, {
  default: () => WineGlassCrack_default
});
module.exports = __toCommonJS(WineGlassCrack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WineGlassCrackDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272.024 504C272.024 508.375 268.399 512 264.022 512H55.979C51.602 512 47.977 508.375 47.977 504C47.977 481.875 65.856 464 87.985 464H127.995V346.875C59.479 330.875 9.969 266.875 16.594 192.625L32.473 14.5C33.223 6.25 40.1 0 48.227 0H133.827L166.71 48.25L81.19 104.25L202.717 224L153.206 119.75L238.725 63.75L208.217 0H271.774C279.901 0 286.778 6.25 287.528 14.5L303.407 192.625C310.032 266.875 260.522 330.875 192.006 346.75V464H232.016C254.145 464 272.024 481.875 272.024 504Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208.027 0L238.533 63.75L153.015 119.75L202.526 224L81 104.25L166.518 48.25L133.636 0H208.027Z" })
    ]
  }
));
WineGlassCrackDuotone.displayName = "WineGlassCrackDuotone";
var WineGlassCrack_default = WineGlassCrackDuotone;
