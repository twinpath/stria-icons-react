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
var MarsStroke_exports = {};
__export(MarsStroke_exports, {
  default: () => MarsStroke_default
});
module.exports = __toCommonJS(MarsStroke_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MarsStrokeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M510.77 9.891C509.148 5.973 506.027 2.852 502.109 1.23C500.154 0.422 498.082 0 496 0H368C359.156 0 352 7.156 352 16S359.156 32 368 32H457.375L384 105.375L347.312 68.688C341.062 62.438 330.937 62.438 324.688 68.688S318.438 85.063 324.688 91.312L361.375 128L320.6 168.775C290.08 143.334 250.84 128 208 128C110.797 128 32 206.799 32 304S110.797 480 208 480S384 401.201 384 304C384 261.16 368.664 221.922 343.223 191.402L384 150.625L420.688 187.312C423.812 190.438 427.906 192 432 192S440.188 190.438 443.312 187.312C449.562 181.062 449.562 170.937 443.312 164.688L406.625 128L480 54.625V144C480 152.844 487.156 160 496 160S512 152.844 512 144V16C512 13.918 511.578 11.846 510.77 9.891ZM352 304C352 383.402 287.402 448 208 448S64 383.402 64 304S128.598 160 208 160S352 224.598 352 304Z" })
  }
));
MarsStrokeLight.displayName = "MarsStrokeLight";
var MarsStroke_default = MarsStrokeLight;
