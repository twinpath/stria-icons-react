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
var Shuttlecock_exports = {};
__export(Shuttlecock_exports, {
  default: () => Shuttlecock_default
});
module.exports = __toCommonJS(Shuttlecock_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ShuttlecockRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M471.877 191.988H431.88V119.993C431.88 97.869 414.006 79.995 391.882 79.995H319.887V39.998C319.887 17.874 302.013 0 279.889 0H245.016C229.517 0 215.143 9.124 208.644 23.124L95.4 266.484L31.029 330.98C-10.343 372.352 -10.343 439.598 31.029 480.971C72.277 522.218 139.398 522.468 181.02 480.971L245.516 416.475L488.751 303.231C502.876 296.732 512 282.358 512 266.859V231.986C511.875 209.862 494.001 191.988 471.877 191.988ZM383.883 127.992V190.363L292.638 219.237L321.512 127.992H383.883ZM85.026 344.729L105.9 323.855L188.02 405.975L167.146 426.849L85.026 344.729ZM250.141 47.997H271.89V98.244L209.893 134.242L250.141 47.997ZM261.015 159.99L234.642 243.11L163.896 313.981L138.148 288.232L174.521 210.362L261.015 159.99ZM64.902 446.973C43.154 425.224 42.529 390.351 62.652 367.603L144.272 449.223C120.524 470.221 86.151 468.221 64.902 446.973ZM223.643 373.727L197.894 347.854L268.64 277.108L351.76 250.735L301.513 337.229L223.643 373.727ZM463.878 261.734L377.633 301.857L413.631 239.985H463.878V261.734Z" })
  }
));
ShuttlecockRegular.displayName = "ShuttlecockRegular";
var Shuttlecock_default = ShuttlecockRegular;
