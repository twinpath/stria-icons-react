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
var Scissors_exports = {};
__export(Scissors_exports, {
  default: () => Scissors_default
});
module.exports = __toCommonJS(Scissors_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScissorsLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M354.309 291.766C351.309 289.223 347.647 287.981 344.003 287.981C337.269 287.981 327.992 293.313 327.992 303.982C327.992 308.542 329.929 313.07 333.684 316.234L485.683 444.234C488.683 446.766 492.339 448 495.995 448C502.751 448 512 442.686 512 432.018C512 427.458 510.063 422.93 506.308 419.766L354.309 291.766ZM506.308 92.234C510.063 89.07 512 84.542 512 79.982C512 69.257 502.811 64.016 495.979 64.016C492.338 64.016 488.681 65.247 485.683 67.766L286.997 235.082L208.109 168.65C217.961 151.977 223.998 132.77 223.998 112C223.998 50.145 173.854 0 111.999 0S0 50.145 0 112S50.144 224 111.999 224C141.514 224 168.159 212.352 188.166 193.691L262.158 256L188.166 318.309C168.159 299.648 141.514 288 111.999 288C50.144 288 0 338.145 0 400S50.144 512 111.999 512S223.998 461.855 223.998 400C223.998 379.23 217.961 360.023 208.109 343.35L506.308 92.234ZM111.999 192C67.888 192 32 156.111 32 112S67.888 32 111.999 32S191.998 67.889 191.998 112S156.11 192 111.999 192ZM111.999 480C67.888 480 32 444.111 32 400S67.888 320 111.999 320S191.998 355.889 191.998 400S156.11 480 111.999 480Z" })
  }
));
ScissorsLight.displayName = "ScissorsLight";
var Scissors_default = ScissorsLight;
