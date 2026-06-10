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
var Eggplant_exports = {};
__export(Eggplant_exports, {
  default: () => Eggplant_default
});
module.exports = __toCommonJS(Eggplant_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EggplantSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M404.132 171.875C373.572 162.586 349.421 138.434 340.132 107.875C317.718 101.061 298.994 86.084 286.808 66.615C190.277 144.531 124.654 176.723 100.763 186.076C31.934 214.647 0 275.95 0 337.355C0 478.463 129.158 512 172.562 512C234.84 512 284.672 492.796 385.808 339.088C409.75 302.422 430.611 265.438 450.224 228.279C428.32 216.33 411.513 196.156 404.132 171.875ZM512 24C512 10.291 500.79 0 488 0C481.859 0 475.718 2.344 471.031 7.031L456.992 21.07C449.314 17.811 440.873 16 432.005 16H304.005C304.005 51.346 332.66 80 368.005 80C368.005 115.346 396.66 144 432.005 144C432.005 179.346 460.66 208 496.005 208V80C496.005 71.129 494.193 62.686 490.931 55.006L504.968 40.969C509.656 36.281 512 30.141 512 24Z" })
  }
));
EggplantSolid.displayName = "EggplantSolid";
var Eggplant_default = EggplantSolid;
