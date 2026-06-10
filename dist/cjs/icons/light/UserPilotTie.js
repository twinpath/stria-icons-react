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
var UserPilotTie_exports = {};
__export(UserPilotTie_exports, {
  default: () => UserPilotTie_default
});
module.exports = __toCommonJS(UserPilotTie_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UserPilotTieLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M78.545 102.408V146.453C119.143 164.918 169.381 176 224 176S328.857 164.918 369.455 146.453V102.408L391.416 80.104C395.98 75.469 398.545 69.178 398.545 62.623C398.545 51.275 390.943 41.387 380.105 38.637L231.762 0.971C229.215 0.322 226.607 0 224 0C221.395 0 218.787 0.322 216.238 0.971L67.895 38.637C57.057 41.387 49.455 51.275 49.455 62.623C49.455 69.178 52.02 75.469 56.584 80.104L78.545 102.408ZM224.002 32.016L359.885 66.518L346.652 79.957L337.455 89.299V124.988C303.305 137.465 264.506 144 224 144C183.496 144 144.695 137.465 110.545 124.988V89.299L101.348 79.957L88.115 66.518L224.002 32.016ZM168.844 94.312L216.844 118.312C219.094 119.438 221.562 120 224 120S228.906 119.438 231.156 118.312L279.156 94.312C287.062 90.344 290.25 80.75 286.312 72.844C282.344 64.938 272.781 61.719 264.844 65.688L224 86.125L183.156 65.688C175.25 61.75 165.656 64.969 161.688 72.844C157.75 80.75 160.938 90.344 168.844 94.312ZM320 352L268.334 420.887L249.891 384H256C264.836 384 272 376.836 272 368C272 359.162 264.836 352 256 352H192C183.164 352 176 359.162 176 368C176 376.836 183.164 384 192 384H198.109L179.666 420.887L128 352C57.309 352 0 409.307 0 480C0 497.674 14.328 512 32 512H416C433.674 512 448 497.674 448 480C448 409.307 390.693 352 320 352ZM32 480C32 432.205 67.109 392.457 112.891 385.188L184 480H32ZM224 480L201.135 449.512L224 403.781L246.865 449.512L224 480ZM264 480L335.109 385.188C380.891 392.457 416 432.205 416 480H264ZM319.871 205.617C313.18 252.129 272.727 288 223.984 288C175.271 288 134.82 252.129 128.129 205.617C127.004 197.793 120.256 192 112.283 192H112.281C102.502 192 94.777 200.598 96.16 210.195C105.096 272.199 158.996 320 223.984 320S342.9 272.199 351.84 210.195C353.223 200.6 345.5 192 335.719 192C327.744 192 320.998 197.793 319.871 205.617Z" })
  }
));
UserPilotTieLight.displayName = "UserPilotTieLight";
var UserPilotTie_default = UserPilotTieLight;
