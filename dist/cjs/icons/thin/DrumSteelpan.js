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
var DrumSteelpan_exports = {};
__export(DrumSteelpan_exports, {
  default: () => DrumSteelpan_default
});
module.exports = __toCommonJS(DrumSteelpan_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrumSteelpanThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 32C128.941 32 0 82.145 0 144V368C0 429.855 128.941 480 288 480S576 429.855 576 368V144C576 82.145 447.059 32 288 32ZM560 144C560 178.357 495.975 215.641 395.41 231.773C378.145 206.189 368 176.189 368 144S378.145 81.811 395.41 56.227C495.975 72.359 560 109.643 560 144ZM223.938 142.855C238.488 163.342 261.969 176 288 176S337.512 163.342 352.062 142.855C352.061 143.24 352 143.613 352 144C352 176.811 361.492 207.574 377.916 234.275C350.195 237.893 320.133 240 288 240S225.805 237.893 198.084 234.275C214.508 207.574 224 176.811 224 144C224 143.613 223.939 143.24 223.938 142.855ZM373.346 53.072L346.375 120.469C336.781 144.469 313.875 160 288 160S239.219 144.469 229.625 120.469L202.654 53.072C199.709 53.434 254.281 48 288 48S376.291 53.434 373.346 53.072ZM180.59 56.227C197.855 81.811 208 111.811 208 144S197.855 206.189 180.59 231.773C80.025 215.641 16 178.357 16 144S80.025 72.359 180.59 56.227ZM560 368C560 413.406 448.293 464 288 464S16 413.406 16 368V260.549C54.998 304.432 161.898 336 288 336S521.002 304.432 560 260.549V368ZM560 224C560 269.406 448.293 320 288 320S16 269.406 16 224V180.549C54.998 224.432 161.898 256 288 256S521.002 224.432 560 180.549V224Z" })
  }
));
DrumSteelpanThin.displayName = "DrumSteelpanThin";
var DrumSteelpan_default = DrumSteelpanThin;
