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
var ArrowRightFromLine_exports = {};
__export(ArrowRightFromLine_exports, {
  default: () => ArrowRightFromLine_default
});
module.exports = __toCommonJS(ArrowRightFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightFromLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M443.312 244.688L299.312 100.688C293.062 94.438 282.937 94.438 276.688 100.688S270.438 117.063 276.688 123.312L393.375 240H96C87.156 240 80 247.156 80 256S87.156 272 96 272H393.375L276.688 388.688C270.438 394.938 270.438 405.063 276.688 411.312S293.063 417.562 299.312 411.312L443.312 267.312C446.438 264.188 448 260.094 448 256S446.438 247.812 443.312 244.688ZM16 64C7.156 64 0 71.156 0 80V432C0 440.844 7.156 448 16 448S32 440.844 32 432V80C32 71.156 24.844 64 16 64Z" })
  }
));
ArrowRightFromLineLight.displayName = "ArrowRightFromLineLight";
var ArrowRightFromLine_default = ArrowRightFromLineLight;
