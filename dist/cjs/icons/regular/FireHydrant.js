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
const FireHydrantRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M56 176H328C341.254 176 352 165.254 352 152C352 138.744 341.254 128 328 128H315.475C303.865 83.174 268.826 48.135 224 36.525V32C224 14.328 209.672 0 192 0S160 14.328 160 32V36.525C115.174 48.135 80.135 83.174 68.525 128H56C42.746 128 32 138.744 32 152C32 165.254 42.746 176 56 176ZM320 240V208H272V272H304V368H272V464H112V368H80V272H112V208H64V240C46.326 240 32 254.326 32 272V368C32 385.672 46.326 400 64 400V464H56C42.746 464 32 474.744 32 488C32 501.254 42.746 512 56 512H328C341.254 512 352 501.254 352 488C352 474.744 341.254 464 328 464H320V400C337.674 400 352 385.672 352 368V272C352 254.326 337.674 240 320 240ZM128 320C128 355.346 156.654 384 192 384S256 355.346 256 320C256 284.652 227.346 256 192 256S128 284.652 128 320Z" })
  }
));
FireHydrantRegular.displayName = "FireHydrantRegular";
var FireHydrant_default = FireHydrantRegular;
