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
const MicrophoneStandSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M289.509 60.472C265.757 84.349 255.005 116.101 256.506 147.228L364.766 255.484C395.895 256.984 427.648 246.234 451.525 222.482L453.65 220.232L291.759 58.347L289.509 60.472ZM6.73 423.12C-2.646 433.745 -2.146 449.746 7.73 459.747L52.235 504.125C62.111 514.125 78.238 514.625 88.864 505.25L224.002 385.867V495.999C224.002 504.875 231.128 512 240.004 512H272.007C280.883 512 288.009 504.875 288.009 495.999V329.489L344.014 279.986L232.003 167.979L6.73 423.12ZM478.528 33.471C433.773 -11.157 361.266 -11.157 316.512 33.471L314.386 35.721L476.278 197.606L478.528 195.481C523.157 150.728 523.157 78.224 478.528 33.471Z" })
  }
));
MicrophoneStandSolid.displayName = "MicrophoneStandSolid";
var MicrophoneStand_default = MicrophoneStandSolid;
