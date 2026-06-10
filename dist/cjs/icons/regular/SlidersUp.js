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
var SlidersUp_exports = {};
__export(SlidersUp_exports, {
  default: () => SlidersUp_default
});
module.exports = __toCommonJS(SlidersUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SlidersUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M72 192V488C72 501.255 82.745 512 96 512H96C109.255 512 120 501.255 120 488V192H72ZM232 24V368H216C202.75 368 192 378.75 192 392S202.75 416 216 416H296C309.25 416 320 405.25 320 392S309.25 368 296 368H280V24C280 10.75 269.25 0 256 0S232 10.75 232 24ZM392 24V240H376C362.75 240 352 250.75 352 264S362.75 288 376 288H456C469.25 288 480 277.25 480 264S469.25 240 456 240H440V24C440 10.75 429.25 0 416 0S392 10.75 392 24ZM232 448V488C232 501.255 242.745 512 256 512H256C269.255 512 280 501.255 280 488V448H232ZM440 488V320H392V488C392 501.255 402.745 512 416 512H416C429.255 512 440 501.255 440 488ZM160 136C160 122.75 149.25 112 136 112H120V24C120 10.75 109.25 0 96 0S72 10.75 72 24V112H56C42.75 112 32 122.75 32 136S42.75 160 56 160H136C149.25 160 160 149.25 160 136Z" })
  }
));
SlidersUpRegular.displayName = "SlidersUpRegular";
var SlidersUp_default = SlidersUpRegular;
