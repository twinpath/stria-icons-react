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
var Backpack_exports = {};
__export(Backpack_exports, {
  default: () => Backpack_default
});
module.exports = __toCommonJS(Backpack_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BackpackSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 320H128C110.375 320 96 334.375 96 352V384H352V352C352 334.375 337.625 320 320 320ZM96 512H352V416H96V512ZM320 80H312V56C312 25.125 286.875 0 256 0H192C161.125 0 136 25.125 136 56V80H128C57.25 80 0 137.25 0 208V448C0 483.375 28.625 512 64 512V352C64 316.75 92.75 288 128 288H320C355.25 288 384 316.75 384 352V512C419.375 512 448 483.375 448 448V208C448 137.25 390.75 80 320 80ZM184 56C184 51.625 187.625 48 192 48H256C260.375 48 264 51.625 264 56V80H184V56ZM320 200C320 204.375 316.375 208 312 208H136C131.625 208 128 204.375 128 200V184C128 179.625 131.625 176 136 176H312C316.375 176 320 179.625 320 184V200Z" })
  }
));
BackpackSolid.displayName = "BackpackSolid";
var Backpack_default = BackpackSolid;
