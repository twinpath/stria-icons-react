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
var Ornament_exports = {};
__export(Ornament_exports, {
  default: () => Ornament_default
});
module.exports = __toCommonJS(Ornament_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const OrnamentLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 154.168V96C288 78.328 273.674 64 256 64H237.062C238.85 58.973 240 53.641 240 48C240 21.492 218.51 0 192 0S144 21.492 144 48C144 53.641 145.15 58.973 146.938 64H128C110.326 64 96 78.328 96 96V154.168C38.725 187.391 0 249.023 0 320C0 426.039 85.961 512 192 512S384 426.039 384 320C384 249.023 345.275 187.391 288 154.168ZM192 32C200.822 32 208 39.176 208 48S200.822 64 192 64S176 56.824 176 48S183.178 32 192 32ZM128 96H256V144H128V96ZM123.512 176H260.488C283.709 187.098 303.607 203.781 319.076 224H64.924C80.393 203.781 100.291 187.098 123.512 176ZM192 480C139.936 480 94.053 454.625 64.814 416H319.186C289.947 454.625 244.064 480 192 480ZM338.438 384H45.562C36.945 364.367 32 342.781 32 320C32 297.172 37.002 275.59 45.699 256H338.301C346.998 275.59 352 297.172 352 320C352 342.781 347.055 364.367 338.438 384Z" })
  }
));
OrnamentLight.displayName = "OrnamentLight";
var Ornament_default = OrnamentLight;
