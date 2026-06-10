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
const HoodCloakDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.998 192C217.374 192 160 249.25 160 320V512H415.995V320C415.995 249.25 358.746 192 287.998 192Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M575.995 480C575.745 496.5 562.495 512 543.62 512H416.248V320C416.248 249.25 358.999 192 288.25 192C217.626 192 160.252 249.25 160.252 320V512H32.38C13.505 512 0.256 496.5 0.006 480C-0.119 473.5 1.88 466.75 6.38 460.875C64.004 383.875 64.004 320 64.004 320V256C64.004 109.5 192.002 0 287.625 0H436.747C454.247 0 462.997 21.125 450.622 33.5L410.873 73.25C465.622 133 511.996 172 511.996 256V320C511.996 320 511.996 383.875 569.62 460.875C574.12 466.75 576.12 473.5 575.995 480Z" })
    ]
  }
));
HoodCloakDuotone.displayName = "HoodCloakDuotone";
var HoodCloak_default = HoodCloakDuotone;
