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
var CircleUp_exports = {};
__export(CircleUp_exports, {
  default: () => CircleUp_default
});
module.exports = __toCommonJS(CircleUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CircleUpThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M272.971 122.346C268.283 117.66 262.143 115.316 256 115.316S243.717 117.66 239.029 122.346L146.346 215.029C131.227 230.148 141.934 256 163.316 256H208V360C208 373.256 218.746 384 232 384H280C293.254 384 304 373.256 304 360V256H348.684C370.066 256 380.773 230.148 365.654 215.029L272.971 122.346ZM356.076 235.062C355.461 236.547 353.508 240 348.684 240H288V360C288 364.412 284.412 368 280 368H232C227.588 368 224 364.412 224 360V240H163.316C158.492 240 156.539 236.547 155.924 235.062C155.311 233.576 154.248 229.756 157.66 226.344L250.344 133.66C252.383 131.621 254.762 131.316 256 131.316S259.617 131.621 261.656 133.66L354.34 226.344C357.752 229.756 356.689 233.576 356.076 235.062ZM256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480Z" })
  }
));
CircleUpThin.displayName = "CircleUpThin";
var CircleUp_default = CircleUpThin;
