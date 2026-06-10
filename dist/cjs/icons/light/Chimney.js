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
var Chimney_exports = {};
__export(Chimney_exports, {
  default: () => Chimney_default
});
module.exports = __toCommonJS(Chimney_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChimneyLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 32H32C14.327 32 0 46.327 0 64V128C0 145.674 14.328 160 32 160L32 463.146C32 471.117 37.448 478.503 45.316 479.781C55.341 481.41 64 473.716 64 464V416H288V464C288 472.837 295.163 480 304 480H304C312.837 480 320 472.837 320 464V416H384V463.146C384 471.117 389.448 478.503 397.316 479.781C407.341 481.41 416 473.716 416 464V160C433.674 160 448 145.674 448 128V64C448 46.327 433.673 32 416 32ZM128 256H64V160H128V256ZM64 384V288H192V384H64ZM384 384H224V288H384V384ZM384 256H160V160H384V256ZM416 128H32V64H416V128Z" })
  }
));
ChimneyLight.displayName = "ChimneyLight";
var Chimney_default = ChimneyLight;
