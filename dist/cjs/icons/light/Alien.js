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
var Alien_exports = {};
__export(Alien_exports, {
  default: () => Alien_default
});
module.exports = __toCommonJS(Alien_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AlienLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M224 0C100.25 0 0 87.995 0 232.486C0 344.229 134.25 456.972 194.875 502.344C212.125 515.219 235.875 515.219 253.125 502.344C313.75 456.972 448 344.229 448 232.486C448 87.995 347.75 0 224 0ZM233.999 476.596C228.125 481.096 219.875 481.096 213.999 476.596C171.25 444.723 32 332.98 32 232.486C32 114.368 111 31.998 224 31.998S416 114.368 416 232.486C416 332.98 276.75 444.723 233.999 476.596ZM368 211.987H320C275.875 211.987 240 247.86 240 291.982V303.981C240 312.856 247.125 319.98 256 319.98H304C348.125 319.98 384 284.108 384 239.985V227.986C384 219.112 376.875 211.987 368 211.987ZM304 287.982H272.125C274.25 263.109 295 243.985 320 243.985H351.875C349.75 268.859 329 287.982 304 287.982ZM128 211.987H80C71.125 211.987 64 219.112 64 227.986V239.985C64 284.108 99.875 319.98 144 319.98H192C200.875 319.98 208 312.856 208 303.981V291.982C208 247.86 172.125 211.987 128 211.987ZM144 287.982C119 287.982 98.25 268.859 96.125 243.985H128C153 243.985 173.75 263.109 175.875 287.982H144Z" })
  }
));
AlienLight.displayName = "AlienLight";
var Alien_default = AlienLight;
