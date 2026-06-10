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
var FireHydrant_exports = {};
__export(FireHydrant_exports, {
  default: () => FireHydrant_default
});
module.exports = __toCommonJS(FireHydrant_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FireHydrantSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 272H320V208H64V272H48C39.164 272 32 279.162 32 288V384C32 392.836 39.164 400 48 400H64V464H48C39.164 464 32 471.162 32 480V496C32 504.836 39.164 512 48 512H336C344.836 512 352 504.836 352 496V480C352 471.162 344.836 464 336 464H320V400H336C344.836 400 352 392.836 352 384V288C352 279.162 344.836 272 336 272ZM192 400C156.654 400 128 371.346 128 336C128 300.652 156.654 272 192 272S256 300.652 256 336C256 371.346 227.346 400 192 400ZM56 176H328C341.254 176 352 165.254 352 152C352 138.744 341.254 128 328 128H315.475C303.865 83.174 268.826 48.135 224 36.525V32C224 14.312 209.688 0 192 0S160 14.312 160 32V36.525C115.174 48.135 80.135 83.174 68.525 128H56C42.746 128 32 138.744 32 152C32 165.254 42.746 176 56 176Z" })
  }
));
FireHydrantSolid.displayName = "FireHydrantSolid";
var FireHydrant_default = FireHydrantSolid;
