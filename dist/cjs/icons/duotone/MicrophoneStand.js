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
var MicrophoneStand_exports = {};
__export(MicrophoneStand_exports, {
  default: () => MicrophoneStand_default
});
module.exports = __toCommonJS(MicrophoneStand_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MicrophoneStandDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M6.73 423.117C-2.645 433.746 -2.145 449.746 7.73 459.746L52.236 504.125C62.111 514.125 78.238 514.625 88.863 505.25L364.767 255.484L256.505 147.227L6.73 423.117ZM314.386 35.719L291.759 58.348L453.65 220.234L476.277 197.605L314.386 35.719Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M289.508 60.473C265.756 84.352 255.004 116.102 256.504 147.227L364.766 255.484C395.893 256.984 427.646 246.234 451.523 222.484L453.648 220.234L291.758 58.348L289.508 60.473ZM478.527 33.469C433.771 -11.156 361.264 -11.156 316.51 33.469L314.385 35.719L476.275 197.605L478.527 195.48C523.156 150.727 523.156 78.223 478.527 33.469ZM224 496C224 504.875 231.127 512 240.002 512H272.006C280.881 512 288.008 504.875 288.008 496V324.969L224 382.914V496Z" })
    ]
  }
));
MicrophoneStandDuotone.displayName = "MicrophoneStandDuotone";
var MicrophoneStand_default = MicrophoneStandDuotone;
