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
var ChartBar_exports = {};
__export(ChartBar_exports, {
  default: () => ChartBar_default
});
module.exports = __toCommonJS(ChartBar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChartBarRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M152 256H296C309.25 256 320 245.25 320 232S309.25 208 296 208H152C138.75 208 128 218.75 128 232S138.75 256 152 256ZM152 160H360C373.25 160 384 149.25 384 136S373.25 112 360 112H152C138.75 112 128 122.75 128 136S138.75 160 152 160ZM152 352H424C437.25 352 448 341.25 448 328S437.25 304 424 304H152C138.75 304 128 314.75 128 328S138.75 352 152 352ZM488 432H48V56C48 42.75 37.25 32 24 32S0 42.75 0 56V448C0 465.594 14.406 480 32 480H488C501.25 480 512 469.25 512 456S501.25 432 488 432Z" })
  }
));
ChartBarRegular.displayName = "ChartBarRegular";
var ChartBar_default = ChartBarRegular;
