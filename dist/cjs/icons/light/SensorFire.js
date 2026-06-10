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
var SensorFire_exports = {};
__export(SensorFire_exports, {
  default: () => SensorFire_default
});
module.exports = __toCommonJS(SensorFire_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SensorFireLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M544 154.5C531.25 166 522.125 174 508.625 188.5C482.25 156.25 457.625 134.625 444 122.5C325.625 229.5 320 304 320 320C320 408.25 391.75 480 480 480S640 408.25 640 320C640 243.125 551.75 161.375 544 154.5ZM480 448C409.375 447.875 352.125 390.625 352 320C352 281.75 390.875 217.25 444 165.875C462.5 183.5 479.625 202.625 495 223L507.125 239.25L520.125 223.75C527.625 214.75 535.625 206.25 543.875 198.125C583.375 239 608 295.75 608 320C607.875 390.625 550.625 447.875 480 448ZM160 144V272C160 280.875 167.125 288 176 288S192 280.875 192 272V144C192 135.125 184.875 128 176 128S160 135.125 160 144ZM64 448C46.375 448 32 433.625 32 416V96C32 78.375 46.375 64 64 64H384C401.625 64 416 78.375 416 96V104.625C424.5 97 418.375 101.75 446.125 81.25C439.25 52.375 413.625 32 384 32H64C28.625 32 0 60.625 0 96V416C0 451.375 28.625 480 64 480H374.125C360.5 470.875 348.125 460.125 337.25 448H64ZM224 144V272C224 280.875 231.125 288 240 288S256 280.875 256 272V144C256 135.125 248.875 128 240 128S224 135.125 224 144ZM96 144V272C96 280.875 103.125 288 112 288S128 280.875 128 272V144C128 135.125 120.875 128 112 128S96 135.125 96 144ZM524.125 257L498.125 285.75C481 264.5 486.75 271.5 458.25 239.375C417.375 287 398.625 305.875 398.625 337C398.625 382 434.125 416 481.125 416C498.125 416 514.75 411 528.875 401.375C560.75 379.75 570.75 337 552 302.25C548.75 296.25 548.625 296.375 524.125 257ZM481.125 384C453.25 384 430.625 366.125 430.625 337C430.625 322.5 440 309.75 458.75 288C461.375 291 496.875 335 496.875 335L519.5 309.875C546.25 353 514 384 481.125 384Z" })
  }
));
SensorFireLight.displayName = "SensorFireLight";
var SensorFire_default = SensorFireLight;
