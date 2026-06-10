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
var Pager_exports = {};
__export(Pager_exports, {
  default: () => Pager_default
});
module.exports = __toCommonJS(Pager_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PagerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 352H272C280.844 352 288 344.844 288 336S280.844 320 272 320H208C199.156 320 192 327.156 192 336S199.156 352 208 352ZM80 352H144C152.844 352 160 344.844 160 336S152.844 320 144 320H80C71.156 320 64 327.156 64 336S71.156 352 80 352ZM448 64H64C28.625 64 0 92.625 0 128V384C0 419.375 28.625 448 64 448H448C483.375 448 512 419.375 512 384V128C512 92.625 483.375 64 448 64ZM480 384C480 401.625 465.625 416 448 416H64C46.375 416 32 401.625 32 384V256H480V384ZM480 224H32V128C32 110.375 46.375 96 64 96H448C465.625 96 480 110.375 480 128V224Z" })
  }
));
PagerLight.displayName = "PagerLight";
var Pager_default = PagerLight;
