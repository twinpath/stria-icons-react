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
var Dagger_exports = {};
__export(Dagger_exports, {
  default: () => Dagger_default
});
module.exports = __toCommonJS(Dagger_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DaggerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 128H208V16C208 7.156 200.844 0 192 0S176 7.156 176 16V128H64C28.703 128 0 156.719 0 192V208C0 216.844 7.156 224 16 224S32 216.844 32 208V192C32 174.344 46.359 160 64 160H112V400C112 403.156 112.938 406.25 114.688 408.875L178.688 504.875C181.656 509.312 186.656 512 192 512S202.344 509.312 205.312 504.875L269.312 408.875C271.062 406.25 272 403.156 272 400V160H320C337.641 160 352 174.344 352 192V208C352 216.844 359.156 224 368 224S384 216.844 384 208V192C384 156.719 355.297 128 320 128ZM240 395.156L192 467.156L144 395.156V160H240V395.156Z" })
  }
));
DaggerLight.displayName = "DaggerLight";
var Dagger_default = DaggerLight;
