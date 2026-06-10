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
var CabinetFiling_exports = {};
__export(CabinetFiling_exports, {
  default: () => CabinetFiling_default
});
module.exports = __toCommonJS(CabinetFiling_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CabinetFilingSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M0 464C0 490.4 21.6 512 48 512H400C426.4 512 448 490.4 448 464V272H0V464ZM128 368C128 359.125 135.125 352 144 352H304C312.875 352 320 359.125 320 368V408C320 412.375 316.375 416 312 416H296C291.625 416 288 412.375 288 408V384H160V408C160 412.375 156.375 416 152 416H136C131.625 416 128 412.375 128 408V368ZM400 0H48C21.6 0 0 21.6 0 48V240H448V48C448 21.6 426.4 0 400 0ZM320 152C320 156.375 316.375 160 312 160H296C291.625 160 288 156.375 288 152V128H160V152C160 156.375 156.375 160 152 160H136C131.625 160 128 156.375 128 152V112C128 103.125 135.125 96 144 96H304C312.875 96 320 103.125 320 112V152Z" })
  }
));
CabinetFilingSolid.displayName = "CabinetFilingSolid";
var CabinetFiling_default = CabinetFilingSolid;
