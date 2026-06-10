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
var MagnifyingGlassLocation_exports = {};
__export(MagnifyingGlassLocation_exports, {
  default: () => MagnifyingGlassLocation_default
});
module.exports = __toCommonJS(MagnifyingGlassLocation_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MagnifyingGlassLocationLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 96C158.5 96 118.25 136.25 118.25 185.875C118.25 220.5 156.5 273 188.75 311C193.5 316.75 200.5 320 208 320S222.5 316.75 227.25 311C259.5 273 297.75 220.5 297.75 185.875C297.75 136.25 257.5 96 208 96ZM208 284.25C172.75 241.5 150.25 203.375 150.25 185.875C150.25 153.875 176.125 128 208 128S265.75 153.875 265.75 185.875C265.75 203.375 243.25 241.5 208 284.25ZM208 160C194.75 160 184 170.75 184 184S194.75 208 208 208S232 197.25 232 184S221.25 160 208 160ZM507.312 484.688L365.85 343.227C397.041 306.848 416 259.676 416 208C416 93.125 322.875 0 208 0S0 93.125 0 208S93.125 416 208 416C259.676 416 306.848 397.039 343.225 365.852L484.687 507.312C487.812 510.438 491.906 512 496 512S504.188 510.438 507.312 507.312C513.562 501.062 513.562 490.938 507.312 484.688ZM208 384C110.953 384 32 305.047 32 208S110.953 32 208 32S384 110.953 384 208S305.047 384 208 384Z" })
  }
));
MagnifyingGlassLocationLight.displayName = "MagnifyingGlassLocationLight";
var MagnifyingGlassLocation_default = MagnifyingGlassLocationLight;
