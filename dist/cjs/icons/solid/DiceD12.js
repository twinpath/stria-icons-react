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
const DiceD12Solid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M113.938 328.562L168.969 500.469L83.094 457.531C72.562 452.25 59.719 439.437 54.469 428.906L6.75 333.5C2.312 324.625 0 314.844 0 304.875V214.625L113.938 328.562ZM131.156 300.531L7.531 176.906L58.969 74.062L240 139.25V246.125L131.156 300.531ZM256 111L89.719 51.125L178.469 6.75C187.375 2.312 197.156 0 207.094 0H304.875H304.906C313.25 0 326.063 3.031 333.5 6.75L422.281 51.125L256 111ZM364.594 328.188L305.75 512H206.219L147.406 328.188L256 273.875L364.594 328.188ZM272 139.25L453.031 74.062L504.469 176.906L380.844 300.531L272 246.125V139.25ZM512 214.625V304.906C512 313.25 508.969 326.062 505.25 333.531L457.531 428.906C452.281 439.438 439.438 452.281 428.906 457.531L343.031 500.469L398.063 328.562L512 214.625Z " })
  }
));
DiceD12Solid.displayName = "DiceD12Solid";
var DiceD12_default = DiceD12Solid;
