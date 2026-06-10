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
var PersonDotsFromLine_exports = {};
__export(PersonDotsFromLine_exports, {
  default: () => PersonDotsFromLine_default
});
module.exports = __toCommonJS(PersonDotsFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonDotsFromLineLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M560 480H16C7.156 480 0 487.156 0 496S7.156 512 16 512H560C568.844 512 576 504.844 576 496S568.844 480 560 480ZM288 176C336.602 176 376 136.602 376 88S336.602 0 288 0S200 39.398 200 88S239.398 176 288 176ZM288 32C318.879 32 344 57.121 344 88S318.879 144 288 144S232 118.879 232 88S257.121 32 288 32ZM48 352C51.219 352 54.469 351.031 57.312 349.016C58.025 348.502 107.117 314.016 176 291.371V432C176 440.844 183.156 448 192 448S208 440.844 208 432V282.252C233.254 276.096 260.234 272 288 272C315.74 272 342.727 276.107 368 282.281V432C368 440.844 375.156 448 384 448S400 440.844 400 432V291.418C468.811 314.064 517.984 348.508 518.719 349.031C525.937 354.156 535.906 352.437 541.031 345.281C546.156 338.094 544.5 328.109 537.312 322.984C532.562 319.594 419.625 240 288 240S43.438 319.594 38.688 322.984C31.5 328.109 29.844 338.109 34.969 345.297C38.094 349.672 43.031 352 48 352ZM304 368C304 376.836 311.164 384 320 384S336 376.836 336 368C336 359.162 328.836 352 320 352S304 359.162 304 368ZM80 256C88.836 256 96 248.836 96 240C96 231.162 88.836 224 80 224S64 231.162 64 240C64 248.836 71.164 256 80 256ZM464 256C472.836 256 480 248.836 480 240C480 231.162 472.836 224 464 224S448 231.162 448 240C448 248.836 455.164 256 464 256Z" })
  }
));
PersonDotsFromLineLight.displayName = "PersonDotsFromLineLight";
var PersonDotsFromLine_default = PersonDotsFromLineLight;
