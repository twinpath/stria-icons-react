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
const EggplantDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M465.32 199.838C441.822 246.641 415.859 293.062 385.808 339.088C284.031 493.77 234.736 512.035 172.565 512.035C130.281 512.035 0 478.158 0 337.355C0 275.95 31.934 214.647 100.763 186.076C187.574 152.091 293.686 59.081 312.759 47.775C323.816 66.947 344.285 80 368.005 80C368.005 115.346 396.66 144 432.005 144C432.005 168.162 445.554 188.945 465.32 199.838Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.994 24C511.994 30.141 509.65 36.281 504.963 40.969L490.926 55.006C494.188 62.686 496 71.129 496 80V208C460.654 208 432 179.346 432 144C396.654 144 368 115.346 368 80C332.654 80 304 51.346 304 16H432C440.867 16 449.309 17.811 456.986 21.07L471.025 7.031C475.713 2.344 481.854 0 487.994 0C501.703 0 511.994 11.21 511.994 24Z" })
    ]
  }
));
EggplantDuotone.displayName = "EggplantDuotone";
var Eggplant_default = EggplantDuotone;
