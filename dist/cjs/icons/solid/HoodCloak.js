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
var HoodCloak_exports = {};
__export(HoodCloak_exports, {
  default: () => HoodCloak_default
});
module.exports = __toCommonJS(HoodCloak_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HoodCloakSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288.25 192C217.626 192 160.252 249.25 160.252 320V512H416.248V320C416.248 249.25 358.999 192 288.25 192ZM569.62 460.875C511.996 383.875 511.996 320 511.996 320V256C511.996 172 465.622 133 410.873 73.25L450.622 33.5C462.997 21.125 454.247 0 436.747 0H287.625C192.002 0 64.004 109.5 64.004 256V320C64.004 320 64.004 383.875 6.38 460.875C1.88 466.75 -0.119 473.5 0.006 480C0.256 496.5 13.505 512 32.38 512H128.253V320C128.253 231.75 200.002 160 288.25 160S448.247 231.75 448.247 320V512H543.62C562.495 512 575.745 496.5 575.995 480C576.12 473.5 574.12 466.75 569.62 460.875Z" })
  }
));
HoodCloakSolid.displayName = "HoodCloakSolid";
var HoodCloak_default = HoodCloakSolid;
