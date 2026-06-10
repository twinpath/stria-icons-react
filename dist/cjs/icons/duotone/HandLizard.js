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
var HandLizard_exports = {};
__export(HandLizard_exports, {
  default: () => HandLizard_default
});
module.exports = __toCommonJS(HandLizard_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandLizardDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M511.999 330V432C511.999 440.836 504.835 448 495.999 448H367.999C359.163 448 351.999 440.836 351.999 432V416L266.665 352H95.999C79.528 352 64.561 338.562 64.034 322.102C62.87 285.793 91.956 256 127.999 256H232.934C246.708 256 258.936 247.188 263.292 234.117L273.96 202.117C280.866 181.398 265.444 160 243.602 160H63.999C27.954 160 -1.13 130.199 0.034 93.898C0.561 77.438 15.53 64 31.999 64H303.21C329.465 64 354.051 76.883 368.999 98.469L497.77 284.453C507.036 297.836 511.999 313.723 511.999 330Z", className: "stria-secondary", style: { opacity: 0.4 } })
  }
));
HandLizardDuotone.displayName = "HandLizardDuotone";
var HandLizard_default = HandLizardDuotone;
