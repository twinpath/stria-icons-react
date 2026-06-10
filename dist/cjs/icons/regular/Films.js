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
var Films_exports = {};
__export(Films_exports, {
  default: () => Films_default
});
module.exports = __toCommonJS(Films_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FilmsRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48 400V96C21.49 96 0 117.492 0 144V416C0 451.344 28.654 480 64 480H432C458.51 480 480 458.508 480 432H80C62.326 432 48 417.672 48 400ZM512 32H160C124.654 32 96 60.654 96 96V320C96 355.346 124.654 384 160 384H512C547.346 384 576 355.346 576 320V96C576 60.654 547.346 32 512 32ZM208 336H160C151.178 336 144 328.822 144 320V280H208V336ZM208 232H144V184H208V232ZM208 136H144V96C144 87.178 151.178 80 160 80H208V136ZM416 336H256V232H416V336ZM416 184H256V80H416V184ZM528 320C528 328.822 520.822 336 512 336H464V280H528V320ZM528 232H464V184H528V232ZM528 136H464V80H512C520.822 80 528 87.178 528 96V136Z" })
  }
));
FilmsRegular.displayName = "FilmsRegular";
var Films_default = FilmsRegular;
