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
var ValueAbsolute_exports = {};
__export(ValueAbsolute_exports, {
  default: () => ValueAbsolute_default
});
module.exports = __toCommonJS(ValueAbsolute_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ValueAbsoluteLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M16 32C7.199 32 0 39.199 0 48V464C0 472.799 7.199 480 16 480S32 472.799 32 464V48C32 39.199 24.801 32 16 32ZM496 32C487.199 32 480 39.199 480 48V464C480 472.799 487.199 480 496 480S512 472.799 512 464V48C512 39.199 504.801 32 496 32ZM363.312 148.688C357.062 142.438 346.937 142.438 340.688 148.688L256 233.375L171.312 148.688C165.062 142.438 154.937 142.438 148.688 148.688S142.438 165.063 148.688 171.312L233.375 256L148.688 340.688C142.438 346.938 142.438 357.063 148.688 363.312C151.812 366.438 155.906 368 160 368S168.188 366.438 171.312 363.312L256 278.625L340.688 363.312C343.812 366.438 347.906 368 352 368S360.188 366.438 363.312 363.312C369.562 357.062 369.562 346.937 363.312 340.688L278.625 256L363.312 171.312C369.562 165.062 369.562 154.938 363.312 148.688Z" })
  }
));
ValueAbsoluteLight.displayName = "ValueAbsoluteLight";
var ValueAbsolute_default = ValueAbsoluteLight;
