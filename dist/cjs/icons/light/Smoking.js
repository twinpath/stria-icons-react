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
var Smoking_exports = {};
__export(Smoking_exports, {
  default: () => Smoking_default
});
module.exports = __toCommonJS(Smoking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SmokingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 352H48C21.5 352 0 373.5 0 400V464C0 490.5 21.5 512 48 512H488C501.25 512 512 501.25 512 488V376C512 362.75 501.25 352 488 352ZM192 480H48C39.25 480 32 472.75 32 464V400C32 391.25 39.25 384 48 384H192V480ZM480 480H224V384H480V480ZM560 352C551.199 352 544 359.199 544 368V496C544 504.799 551.199 512 560 512S576 504.799 576 496V368C576 359.199 568.801 352 560 352ZM624 352C615.199 352 608 359.199 608 368V496C608 504.799 615.199 512 624 512S640 504.799 640 496V368C640 359.199 632.801 352 624 352ZM473.609 131.188C437.531 104.156 416 61.062 416 16C416 7.156 408.844 0 400 0S384 7.156 384 16C384 71.094 410.312 123.719 454.391 156.812C490.469 183.844 512 226.938 512 272C512 280.844 519.156 288 528 288S544 280.844 544 272C544 216.906 517.688 164.281 473.609 131.188ZM550.391 156.812C586.469 183.844 608 226.938 608 272C608 280.844 615.156 288 624 288S640 280.844 640 272C640 216.906 613.688 164.281 569.609 131.188C533.531 104.156 512 61.062 512 16C512 7.156 504.844 0 496 0S480 7.156 480 16C480 71.094 506.312 123.719 550.391 156.812Z" })
  }
));
SmokingLight.displayName = "SmokingLight";
var Smoking_default = SmokingLight;
