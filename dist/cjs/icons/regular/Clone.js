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
var Clone_exports = {};
__export(Clone_exports, {
  default: () => Clone_default
});
module.exports = __toCommonJS(Clone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloneRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M448 0H224C188.654 0 160 28.652 160 64V288C160 323.346 188.654 352 224 352H448C483.348 352 512 323.346 512 288V64C512 28.652 483.348 0 448 0ZM464 288C464 296.822 456.822 304 448 304H224C215.178 304 208 296.822 208 288V64C208 55.178 215.178 48 224 48H448C456.822 48 464 55.178 464 64V288ZM304 448C304 456.822 296.822 464 288 464H64C55.178 464 48 456.822 48 448V224C48 215.178 55.178 208 64 208H128V160H64C28.654 160 0 188.652 0 224V448C0 483.346 28.654 512 64 512H288C323.348 512 352 483.346 352 448V384H304V448Z" })
  }
));
CloneRegular.displayName = "CloneRegular";
var Clone_default = CloneRegular;
