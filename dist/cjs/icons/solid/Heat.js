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
const HeatSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M64 152.25V128C64 110.327 49.673 96 32 96H32C14.327 96 0 110.327 0 128L0 152.25C0 206.111 19.493 258.391 55.775 298.199C81.732 326.679 96.126 363.89 96 402.375V448C96 465.673 110.327 480 128 480H128C145.673 480 160 465.673 160 448L160 402.375C160 348.476 140.491 296.152 104.16 256.339C78.196 227.887 63.874 190.765 64 152.25ZM391.687 255.82C366.06 227.43 352 190.496 352 152.25L352 128C352 110.327 337.673 96 320 96H320C302.327 96 288 110.327 288 128L288 152.25C288 206.111 307.494 258.391 343.775 298.199C369.732 326.679 384.126 363.89 384 402.375V448C384 465.673 398.327 480 416 480H416C433.673 480 448 465.673 448 448V402.375C448 348.281 427.898 295.935 391.687 255.82ZM208 152.25V64C208 46.327 193.673 32 176 32H176C158.327 32 144 46.327 144 64L144 152.25C144 206.111 163.494 258.391 199.775 298.199C225.732 326.679 240.126 363.89 240 402.375V448C240 465.673 254.327 480 272 480H272C289.673 480 304 465.673 304 448L304 402.375C304 348.476 284.491 296.152 248.16 256.339C222.196 227.887 207.874 190.765 208 152.25Z" })
  }
));
HeatSolid.displayName = "HeatSolid";
var Heat_default = HeatSolid;
