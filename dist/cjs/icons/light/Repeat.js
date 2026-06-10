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
var Repeat_exports = {};
__export(Repeat_exports, {
  default: () => Repeat_default
});
module.exports = __toCommonJS(Repeat_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RepeatLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 240C487.156 240 480 247.156 480 256C480 335.406 415.406 400 336 400H192V336C192 329.781 188.406 324.156 182.781 321.5C180.625 320.5 178.312 320 176 320C172.328 320 168.688 321.25 165.75 323.719L69.75 403.719C66.109 406.75 64 411.25 64 416S66.109 425.254 69.75 428.285L165.75 508.289C170.531 512.289 177.203 513.102 182.781 510.508C188.406 507.852 192 502.227 192 496.008V432H336C433.047 432 512 353.031 512 256C512 247.156 504.844 240 496 240ZM160 461.848L105 416L160 370.156V461.848ZM176 112H320V176C320 182.219 323.594 187.844 329.219 190.5C331.375 191.5 333.688 192 336 192C339.672 192 343.312 190.75 346.25 188.281L442.25 108.277C445.891 105.246 448 100.746 448 95.996S445.891 86.746 442.25 83.715L346.25 3.711C341.469 -0.289 334.797 -1.102 329.219 1.492C323.594 4.148 320 9.773 320 15.992V80H176C78.953 80 0 158.969 0 256C0 264.844 7.156 272 16 272S32 264.844 32 256C32 176.594 96.594 112 176 112ZM352 50.148L407 95.996L352 141.844V50.148Z" })
  }
));
RepeatLight.displayName = "RepeatLight";
var Repeat_default = RepeatLight;
