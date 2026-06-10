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
var Knife_exports = {};
__export(Knife_exports, {
  default: () => Knife_default
});
module.exports = __toCommonJS(Knife_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KnifeThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480.567 16.096C466.719 2.221 444.134 2.221 430.255 16.096L9.366 434.721C3.52 440.284 0.112 448.065 0.003 456.128C-0.107 464.159 3.114 472.065 8.803 477.721L39.985 508.909C45.596 514.503 53.286 517.69 61.149 517.69H61.618C69.651 517.565 77.434 514.159 82.983 508.378L259.432 325.69H288.098C419.501 325.69 473.471 262.003 495.604 208.596C527.333 131.971 507.889 43.409 480.567 16.096ZM480.817 202.471C460.546 251.378 410.671 309.69 288.239 309.69L256.229 309.128C253.68 309.128 251.868 309.971 250.321 311.565L71.432 497.284C65.196 503.815 55.88 502.161 51.286 497.596L20.104 466.409C14.596 460.903 14.557 451.897 20.526 446.159L441.555 27.409C449.155 19.811 461.596 19.757 469.251 27.409C490.212 48.346 510.53 130.721 480.817 202.471Z" })
  }
));
KnifeThin.displayName = "KnifeThin";
var Knife_default = KnifeThin;
