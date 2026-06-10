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
var HandMiddleFinger_exports = {};
__export(HandMiddleFinger_exports, {
  default: () => HandMiddleFinger_default
});
module.exports = __toCommonJS(HandMiddleFinger_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandMiddleFingerRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M364 192C358.605 192 353.275 192.537 348.078 193.578C337.549 185.615 325.244 180.025 312 177.506V80C312 35.889 276.113 0 232 0C187.889 0 152 35.889 152 80V177.457C119.592 183.434 93.35 207.223 83.84 238.262L66.016 252.52L48.566 266.479C27.871 283.035 16 307.732 16 334.236V373.025C16 391.674 22.164 410.156 33.355 425.072L45.006 440.602C78.303 484.977 131.299 511.467 186.771 511.467H296.615C378.057 511.467 444.684 446.822 447.881 366.15L447.996 365.664L448 276C448 229.682 410.318 192 364 192ZM400 360C400 360.033 399.982 360.047 399.982 360.08L400 360.082C400 417.18 353.713 463.467 296.615 463.467H186.771C146.104 463.467 107.809 444.324 83.4 411.795L71.748 396.264C66.719 389.561 64 381.406 64 373.025V334.236C64 322.459 69.354 311.318 78.551 303.961L96 290.002V320C96 328.836 103.164 336 112 336S128 328.836 128 320V264C128 241.908 145.908 224 168 224C181.439 224 192.746 231.059 200 241.225V80C200 62.326 214.326 48 232 48S264 62.326 264 80V241.225C271.254 231.059 282.561 224 296 224C315.449 224 330.896 238.152 334.496 256.547C340.939 246.811 351.451 240 364 240C383.883 240 400 256.117 400 276V360Z" })
  }
));
HandMiddleFingerRegular.displayName = "HandMiddleFingerRegular";
var HandMiddleFinger_default = HandMiddleFingerRegular;
