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
var PlanetRinged_exports = {};
__export(PlanetRinged_exports, {
  default: () => PlanetRinged_default
});
module.exports = __toCommonJS(PlanetRinged_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlanetRingedSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M502.89 9.077C479.387 -14.426 414.629 9.077 335.744 63.834C260.234 32.58 170.222 47.582 108.84 108.84C47.582 170.222 32.58 260.234 63.834 335.744C9.077 414.629 -14.426 479.387 9.077 502.89C46.206 540.145 186.975 459.76 323.367 323.367S540.145 46.206 502.89 9.077ZM346.495 346.495C308.365 384.625 262.359 425.38 215.728 460.135C283.862 473.511 354.121 452.134 403.127 403.002C452.134 353.996 473.511 283.612 460.01 215.603C423.88 264.234 382.125 310.865 346.495 346.495Z" })
  }
));
PlanetRingedSolid.displayName = "PlanetRingedSolid";
var PlanetRinged_default = PlanetRingedSolid;
