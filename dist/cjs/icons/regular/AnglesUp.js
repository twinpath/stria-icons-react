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
var AnglesUp_exports = {};
__export(AnglesUp_exports, {
  default: () => AnglesUp_default
});
module.exports = __toCommonJS(AnglesUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M55.995 241.881L192 120.231L328.005 241.881C332.567 245.974 338.286 248.006 344.005 248.006C350.599 248.006 357.162 245.318 361.881 240.006C370.725 230.132 369.881 214.945 360.006 206.133L208.001 70.14C198.875 61.953 185.125 61.953 175.999 70.14L23.994 206.133C14.119 214.945 13.275 230.132 22.119 240.006C30.932 249.912 46.151 250.724 55.995 241.881ZM208.001 262.13C198.875 253.943 185.125 253.943 175.999 262.13L23.994 398.122C14.119 406.934 13.275 422.121 22.119 431.996C30.932 441.901 46.151 442.714 55.995 433.87L192 312.221L328.005 433.87C332.567 437.964 338.286 439.995 344.005 439.995C350.599 439.995 357.162 437.308 361.881 431.996C370.725 422.121 369.881 406.934 360.006 398.122L208.001 262.13Z" })
  }
));
AnglesUpRegular.displayName = "AnglesUpRegular";
var AnglesUp_default = AnglesUpRegular;
