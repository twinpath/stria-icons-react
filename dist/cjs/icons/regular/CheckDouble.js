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
var CheckDouble_exports = {};
__export(CheckDouble_exports, {
  default: () => CheckDouble_default
});
module.exports = __toCommonJS(CheckDouble_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CheckDoubleRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480.969 158.888C471.594 149.513 456.406 149.513 447.031 158.888L192 413.919L64.969 286.888C55.594 277.513 40.406 277.513 31.031 286.888S21.656 311.45 31.031 320.825L175.031 464.825C179.719 469.513 185.844 471.856 192 471.856S204.281 469.513 208.969 464.825L480.969 192.825C490.344 183.45 490.344 168.263 480.969 158.888ZM175.031 240.825C179.719 245.513 185.844 247.856 192 247.856S204.281 245.513 208.969 240.825L384.969 64.825C394.344 55.45 394.344 40.263 384.969 30.888S360.406 21.513 351.031 30.888L192 189.919L112.969 110.888C103.594 101.513 88.406 101.513 79.031 110.888S69.656 135.45 79.031 144.825L175.031 240.825Z" })
  }
));
CheckDoubleRegular.displayName = "CheckDoubleRegular";
var CheckDouble_default = CheckDoubleRegular;
