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
var DiceD12_exports = {};
__export(DiceD12_exports, {
  default: () => DiceD12_default
});
module.exports = __toCommonJS(DiceD12_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DiceD12Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 176.906L131.625 300.531L240.469 246.125V139.25L59.437 74.062L8 176.906ZM333.969 6.75C326.531 3.031 313.719 0 305.375 0H207.562C197.625 0 187.844 2.312 178.937 6.75L90.187 51.125L256.469 111L422.75 51.125L333.969 6.75ZM453.5 74.062L272.469 139.25V246.125L381.312 300.531L504.937 176.906L453.5 74.062Z ", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M113.938 328.562L168.969 500.469L83.094 457.531C72.562 452.25 59.719 439.437 54.469 428.906L6.75 333.5C2.312 324.625 0 314.844 0 304.875V214.625L113.938 328.562ZM364.594 328.188L305.75 512H206.219L147.406 328.188L256 273.875L364.594 328.188ZM512 214.625V304.906C512 313.25 508.969 326.062 505.25 333.531L457.531 428.906C452.281 439.438 439.438 452.281 428.906 457.531L343.031 500.469L398.063 328.562L512 214.625Z " })
    ]
  }
));
DiceD12Duotone.displayName = "DiceD12Duotone";
var DiceD12_default = DiceD12Duotone;
