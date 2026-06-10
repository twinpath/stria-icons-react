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
var BadgerHoney_exports = {};
__export(BadgerHoney_exports, {
  default: () => BadgerHoney_default
});
module.exports = __toCommonJS(BadgerHoney_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BadgerHoneySolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M622.25 142.5C564.625 109.875 551.25 91.75 506.75 72.5C493.375 66.75 479.375 64 465.5 64C446.375 64 427.375 69.25 409.999 79.25C392.875 89 373.999 96 355 96H128C57.25 96 0 153.25 0 224V240C0 248.875 7.125 256 16 256H36C43.875 289.375 64.125 320.25 89.5 337.125L68.125 394.5C63.5 406.625 62.75 419.875 65.875 432.5L80 467.875C81.75 475 88.125 480 95.5 480H159.25C169.75 480 177.375 470.25 174.75 460.125L159.25 418.875L192.25 352H297.875L321 467.125C322.5 474.625 329 480 336.625 480H400C410.125 480 417.625 470.75 415.75 460.875L388.75 325.875C434.125 295.375 489.875 264.875 541.125 250.375L560 288L582.625 242.75C611.125 240.375 619.125 233.25 623.875 222.875C630.875 207.625 640 187.125 640 175.25C640 161.375 633.125 148.625 622.25 142.5ZM515.25 160C515.5 161.375 516 162.625 516 164C516 175 507 184 496 184S476 175 476 164C476 162.625 476.5 161.375 476.75 160H460C431 160 402.125 173 375.125 186L273.125 247.75C261.875 253.25 249.75 256 237.5 256H192C149.5 256 113.875 214.5 101.25 165.375C113.5 152.125 129.999 144 148.25 144H355C380.625 144 407.25 136.25 433.875 120.75C444 115 454.875 112 465.5 112C473.125 112 480.625 113.5 487.625 116.625C514.5 128.25 524.125 137 559.125 160H515.25Z" })
  }
));
BadgerHoneySolid.displayName = "BadgerHoneySolid";
var BadgerHoney_default = BadgerHoneySolid;
