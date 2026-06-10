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
var Fax_exports = {};
__export(Fax_exports, {
  default: () => Fax_default
});
module.exports = __toCommonJS(Fax_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FaxSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 64H389.49L416 90.51V160H480V77.25C480 68.766 476.625 60.625 470.625 54.625L425.375 9.375C419.375 3.375 411.219 0 402.75 0H160C142.344 0 128 14.328 128 32V160H192V64ZM64 128H32C14.375 128 0 142.375 0 160V480C0 497.625 14.375 512 32 512H64C81.625 512 96 497.625 96 480V160C96 142.375 81.625 128 64 128ZM480 192H128V480C128 497.6 142.4 512 160 512H480C497.6 512 512 497.6 512 480V224C512 206.4 497.6 192 480 192ZM288 432C288 440.875 280.875 448 272 448H240C231.125 448 224 440.875 224 432V400C224 391.125 231.125 384 240 384H272C280.875 384 288 391.125 288 400V432ZM288 304C288 312.875 280.875 320 272 320H240C231.125 320 224 312.875 224 304V272C224 263.125 231.125 256 240 256H272C280.875 256 288 263.125 288 272V304ZM416 432C416 440.875 408.875 448 400 448H368C359.125 448 352 440.875 352 432V400C352 391.125 359.125 384 368 384H400C408.875 384 416 391.125 416 400V432ZM416 304C416 312.875 408.875 320 400 320H368C359.125 320 352 312.875 352 304V272C352 263.125 359.125 256 368 256H400C408.875 256 416 263.125 416 272V304Z" })
  }
));
FaxSolid.displayName = "FaxSolid";
var Fax_default = FaxSolid;
