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
var Thermometer_exports = {};
__export(Thermometer_exports, {
  default: () => Thermometer_default
});
module.exports = __toCommonJS(Thermometer_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ThermometerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M476.738 20.35C439.24 -10.283 381.246 -5.906 344.875 30.602L105.318 271.803C99.363 277.799 96.021 285.904 96.021 294.354V382.063L7.031 471.084C-2.344 480.461 -2.344 495.715 7.031 504.967C16.404 514.344 31.654 514.344 40.902 504.967L129.895 415.945H216.539C225.006 415.945 233.129 412.59 239.125 406.613L483.986 162.635C518.859 127.75 526.232 61.109 476.738 20.35ZM450.115 128.625L210.012 368.059H144.018V300.918L179.02 265.645L212.687 299.312C215.812 302.438 219.906 304 224 304S232.188 302.438 235.312 299.312C241.562 293.062 241.562 282.937 235.312 276.688L201.557 242.932L242.77 201.395L276.687 235.312C279.812 238.438 283.906 240 288 240S296.188 238.438 299.312 235.312C305.562 229.062 305.562 218.937 299.312 212.688L265.307 178.682L306.521 137.146L340.688 171.313C343.812 174.438 347.906 176 352 176S360.188 174.438 363.312 171.312C369.562 165.062 369.562 154.937 363.312 148.688L329.059 114.434L378.746 64.359C397.869 45.23 427.492 42.23 446.115 57.359C471.613 78.363 467.238 111.496 450.115 128.625Z" })
  }
));
ThermometerRegular.displayName = "ThermometerRegular";
var Thermometer_default = ThermometerRegular;
