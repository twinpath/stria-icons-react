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
var Sigma_exports = {};
__export(Sigma_exports, {
  default: () => Sigma_default
});
module.exports = __toCommonJS(Sigma_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SigmaDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M343.993 480H39.993C23.961 480 9.493 470.438 3.211 455.719S0.024 423.937 11.086 412.344L160.649 256L11.086 99.656C0.024 88.062 -3.07 71 3.211 56.281S23.961 32 39.993 32H343.993C366.086 32 383.993 49.906 383.993 72V120C383.993 142.094 366.086 160 343.993 160S303.993 142.094 303.993 120V112H133.618L244.899 228.344C259.68 243.812 259.68 268.188 244.899 283.656L133.618 400H303.993V392C303.993 369.906 321.899 352 343.993 352S383.993 369.906 383.993 392V440C383.993 462.094 366.086 480 343.993 480Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
SigmaDuotone.displayName = "SigmaDuotone";
var Sigma_default = SigmaDuotone;
