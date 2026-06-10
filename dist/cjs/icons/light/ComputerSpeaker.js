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
var ComputerSpeaker_exports = {};
__export(ComputerSpeaker_exports, {
  default: () => ComputerSpeaker_default
});
module.exports = __toCommonJS(ComputerSpeaker_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ComputerSpeakerLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M480 192C506.5 192 528 170.5 528 144S506.5 96 480 96S432 117.5 432 144S453.5 192 480 192ZM480 128C488.875 128 496 135.125 496 144S488.875 160 480 160S464 152.875 464 144S471.125 128 480 128ZM480 224C427 224 384 267 384 320S427 416 480 416S576 373 576 320S533 224 480 224ZM480 384C444.625 384 416 355.375 416 320S444.625 256 480 256S544 284.625 544 320S515.375 384 480 384ZM480 296C466.75 296 456 306.75 456 320S466.75 344 480 344S504 333.25 504 320S493.25 296 480 296ZM576 32H384C348.654 32 320 60.652 320 96V416C320 451.346 348.654 480 384 480H576C611.346 480 640 451.346 640 416V96C640 60.652 611.346 32 576 32ZM608 416C608 433.672 593.674 448 576 448H384C366.326 448 352 433.672 352 416V96C352 78.326 366.326 64 384 64H576C593.674 64 608 78.326 608 96V416ZM48 64H272C280.844 64 288 56.844 288 48S280.844 32 272 32H48C21.531 32 0 53.531 0 80V336C0 362.469 21.531 384 48 384H272C280.844 384 288 376.844 288 368S280.844 352 272 352H48C39.172 352 32 344.812 32 336V80C32 71.188 39.172 64 48 64ZM272 448H112C103.156 448 96 455.156 96 464S103.156 480 112 480H272C280.844 480 288 472.844 288 464S280.844 448 272 448Z" })
  }
));
ComputerSpeakerLight.displayName = "ComputerSpeakerLight";
var ComputerSpeaker_default = ComputerSpeakerLight;
