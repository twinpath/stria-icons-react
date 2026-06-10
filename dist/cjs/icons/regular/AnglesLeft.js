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
var AnglesLeft_exports = {};
__export(AnglesLeft_exports, {
  default: () => AnglesLeft_default
});
module.exports = __toCommonJS(AnglesLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesLeftRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M213.881 388.005L92.231 252L213.881 115.995C217.974 111.433 220.006 105.714 220.006 99.995C220.006 93.401 217.318 86.838 212.006 82.119C202.132 73.275 186.945 74.119 178.133 83.994L42.14 235.999C33.953 245.125 33.953 258.875 42.14 268.001L178.133 420.006C186.945 429.881 202.132 430.725 212.006 421.881C221.912 413.068 222.724 397.849 213.881 388.005ZM234.13 235.999C225.943 245.125 225.943 258.875 234.13 268.001L370.122 420.006C378.934 429.881 394.121 430.725 403.996 421.881C413.901 413.068 414.714 397.849 405.87 388.005L284.221 252L405.87 115.995C409.964 111.433 411.995 105.714 411.995 99.995C411.995 93.401 409.308 86.838 403.996 82.119C394.121 73.275 378.934 74.119 370.122 83.994L234.13 235.999Z" })
  }
));
AnglesLeftRegular.displayName = "AnglesLeftRegular";
var AnglesLeft_default = AnglesLeftRegular;
