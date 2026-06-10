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
var Heat_exports = {};
__export(Heat_exports, {
  default: () => Heat_default
});
module.exports = __toCommonJS(Heat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeatRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M48.001 156.125V120C48.001 106.744 37.255 96 24.001 96C10.745 96 0.001 106.744 0.001 120V156.125C-0.124 205.75 19.501 253.5 54.626 288.625C81.001 314.875 95.876 350.625 96.001 387.875V456C96.001 469.254 106.745 480 120.001 480C133.255 480 144.001 469.254 144.001 456V387.875C144.126 338.25 124.501 290.5 89.376 255.375C63.001 229.125 48.126 193.375 48.001 156.125ZM393.376 255.375C367.001 229.125 352.126 193.375 352.001 156.125V120C352.001 106.744 341.255 96 328.001 96C314.745 96 304.001 106.744 304.001 120V156.125C303.876 205.75 323.501 253.5 358.626 288.625C385.001 314.875 399.876 350.625 400.001 387.875V456C400.001 469.254 410.745 480 424.001 480C437.255 480 448.001 469.254 448.001 456V387.875C448.126 338.25 428.501 290.5 393.376 255.375ZM200.001 156.125V56C200.001 42.744 189.255 32 176.001 32C162.745 32 152.001 42.744 152.001 56V156.125C151.876 205.75 171.501 253.5 206.626 288.625C233.001 314.875 247.876 350.625 248.001 387.875V456C248.001 469.254 258.745 480 272.001 480C285.255 480 296.001 469.254 296.001 456V387.875C296.126 338.25 276.501 290.5 241.376 255.375C215.001 229.125 200.126 193.375 200.001 156.125Z" })
  }
));
HeatRegular.displayName = "HeatRegular";
var Heat_default = HeatRegular;
