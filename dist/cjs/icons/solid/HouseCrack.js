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
var HouseCrack_exports = {};
__export(HouseCrack_exports, {
  default: () => HouseCrack_default
});
module.exports = __toCommonJS(HouseCrack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HouseCrackSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.997 256C575.997 273.602 561.733 288 543.997 288H511.991V448C511.991 483.346 483.339 512 447.992 512H319.75L279.877 456.75L383.998 392.75L236.005 256L296.127 375.25L192.007 439.25L229.255 512H128.023C92.677 512 64.023 483.346 64.023 448V288H32C14.223 288 0.002 273.557 0 256C0 246.947 3.842 238.104 10.922 231.906L266.92 7.922C273.853 1.852 281.801 0 288 0C295.522 0 303.046 2.639 309.076 7.922L415.998 101.473V47.984C415.998 39.156 423.154 31.984 431.996 31.984H495.991C504.835 31.984 511.991 39.156 511.991 47.984V185.461L565.075 231.906C572.155 238.104 575.997 246.947 575.997 256Z " })
  }
));
HouseCrackSolid.displayName = "HouseCrackSolid";
var HouseCrack_default = HouseCrackSolid;
