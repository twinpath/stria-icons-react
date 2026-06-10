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
var ArrowUpFromLine_exports = {};
__export(ArrowUpFromLine_exports, {
  default: () => ArrowUpFromLine_default
});
module.exports = __toCommonJS(ArrowUpFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpFromLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M59.312 203.312L176 86.625V384C176 392.844 183.156 400 192 400S208 392.844 208 384V86.625L324.688 203.312C330.938 209.562 341.063 209.562 347.312 203.312S353.562 186.937 347.312 180.688L203.312 36.688C200.188 33.562 196.094 32 192 32S183.812 33.562 180.688 36.688L36.688 180.688C30.438 186.938 30.438 197.063 36.688 203.312S53.062 209.562 59.312 203.312ZM368 448H16C7.156 448 0 455.156 0 464S7.156 480 16 480H368C376.844 480 384 472.844 384 464S376.844 448 368 448Z" })
  }
));
ArrowUpFromLineLight.displayName = "ArrowUpFromLineLight";
var ArrowUpFromLine_default = ArrowUpFromLineLight;
