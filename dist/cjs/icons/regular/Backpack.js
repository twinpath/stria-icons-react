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
const BackpackRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 80H312V56C312 25.125 286.875 0 256 0H192C161.125 0 136 25.125 136 56V80H128C57.25 80 0 137.25 0 208V448C0 483.375 28.625 512 64 512H384C419.375 512 448 483.375 448 448V208C448 137.25 390.75 80 320 80ZM184 56C184 51.625 187.625 48 192 48H256C260.375 48 264 51.625 264 56V80H184V56ZM320 464H128V400H320V464ZM320 352H128V320C128 302.375 142.375 288 160 288H288C305.625 288 320 302.375 320 320V352ZM400 448C400 456.875 392.875 464 384 464H368V320C368 275.875 332.125 240 288 240H160C115.875 240 80 275.875 80 320V464H64C55.125 464 48 456.875 48 448V208C48 163.875 83.875 128 128 128H320C364.125 128 400 163.875 400 208V448ZM304 160H144C135.125 160 128 167.125 128 176V192C128 200.875 135.125 208 144 208H304C312.875 208 320 200.875 320 192V176C320 167.125 312.875 160 304 160Z" })
  }
));
BackpackRegular.displayName = "BackpackRegular";
var Backpack_default = BackpackRegular;
