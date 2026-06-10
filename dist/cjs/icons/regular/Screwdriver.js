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
var Screwdriver_exports = {};
__export(Screwdriver_exports, {
  default: () => Screwdriver_default
});
module.exports = __toCommonJS(Screwdriver_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScrewdriverRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M507.314 59.688L452.311 4.688C446.682 -0.945 437.768 -1.578 431.398 3.199L305.928 97.273C297.869 103.32 293.125 112.805 293.125 122.875V184.875L212.125 265.875C167.25 242.125 129.5 266.375 115.75 280.125L12 383.75C-4 399.875 -4 425.875 12 441.875L70.125 500C78.125 508 88.625 512 99.125 512C109.75 512 120.25 508 128.25 500L232 396.25C258.125 370.125 262.5 330.875 246.125 299.875L290 256L327.123 218.875H389.121C399.195 218.875 408.682 214.133 414.725 206.07L508.801 80.602C513.578 74.23 512.943 65.32 507.314 59.688ZM198 362.375L99.125 461.125L50.875 412.875L149.625 314C163 300.625 184.625 300.625 198 314C211.25 327.375 211.25 349 198 362.375ZM381.125 170.875H341.125V130.875L438 58.25L453.75 74L381.125 170.875Z" })
  }
));
ScrewdriverRegular.displayName = "ScrewdriverRegular";
var Screwdriver_default = ScrewdriverRegular;
