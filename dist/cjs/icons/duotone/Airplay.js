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
var Airplay_exports = {};
__export(Airplay_exports, {
  default: () => Airplay_default
});
module.exports = __toCommonJS(Airplay_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AirplayDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 32H96C43.062 32 0 75.062 0 128V320C0 372.938 43.062 416 96 416H109.24C110.721 414.109 111.771 411.977 113.5 410.25L169.908 352H96C78.344 352 64 337.656 64 320V128C64 110.344 78.344 96 96 96H480C497.656 96 512 110.344 512 128V320C512 337.656 497.656 352 480 352H406.16L462.875 410.625C464.48 412.23 465.447 414.242 466.834 416H480C532.938 416 576 372.938 576 320V128C576 75.062 532.938 32 480 32Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M307.553 296.109C302.146 290.703 295.08 288 288.027 288C280.973 288 273.934 290.703 268.582 296.109L136.119 432.875C118.771 450.227 131.055 480 155.658 480H420.342C444.945 480 457.229 450.227 439.881 432.875L307.553 296.109Z" })
    ]
  }
));
AirplayDuotone.displayName = "AirplayDuotone";
var Airplay_default = AirplayDuotone;
