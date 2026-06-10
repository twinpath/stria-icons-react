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
var Capsules_exports = {};
__export(Capsules_exports, {
  default: () => Capsules_default
});
module.exports = __toCommonJS(Capsules_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CapsulesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M553.75 301.004L419.793 121.473C382.789 71.883 312.639 61.684 263.049 98.686C244.102 112.824 231.012 131.828 224 152.648V144C224 82.125 173.875 32 112 32S0 82.125 0 144V368C0 429.875 50.125 480 112 480S224 429.875 224 368V223.027C227.688 234.34 232.75 245.365 240.262 255.432L374.219 434.963C411.221 484.553 481.371 494.752 530.963 457.748C580.555 420.746 590.752 350.596 553.75 301.004ZM176 256H48V144C48 59.25 176 59.25 176 144V256ZM345.711 316.49L278.732 226.725C228.049 158.801 330.639 82.254 381.32 150.178L448.301 239.943L345.711 316.49Z" })
  }
));
CapsulesRegular.displayName = "CapsulesRegular";
var Capsules_default = CapsulesRegular;
