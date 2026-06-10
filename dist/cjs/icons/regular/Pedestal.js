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
var Pedestal_exports = {};
__export(Pedestal_exports, {
  default: () => Pedestal_default
});
module.exports = __toCommonJS(Pedestal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PedestalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M144 88C130.746 88 120 98.744 120 112C120 125.254 130.746 136 144 136S168 125.254 168 112C168 98.744 157.254 88 144 88ZM304 88C290.746 88 280 98.744 280 112C280 125.254 290.746 136 304 136S328 125.254 328 112C328 98.744 317.254 88 304 88ZM424 464H416V64C416 28.654 387.346 0 352 0H96C60.654 0 32 28.654 32 64V464H24C10.746 464 0 474.744 0 488C0 501.254 10.746 512 24 512H424C437.254 512 448 501.254 448 488C448 474.744 437.254 464 424 464ZM368 464H80V64C80 55.178 87.178 48 96 48H352C360.822 48 368 55.178 368 64V464Z" })
  }
));
PedestalRegular.displayName = "PedestalRegular";
var Pedestal_default = PedestalRegular;
