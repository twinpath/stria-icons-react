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
var BlindsOpen_exports = {};
__export(BlindsOpen_exports, {
  default: () => BlindsOpen_default
});
module.exports = __toCommonJS(BlindsOpen_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BlindsOpenRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M488 464H24C10.75 464 0 474.75 0 488S10.75 512 24 512H488C501.25 512 512 501.25 512 488S501.25 464 488 464ZM488 160H224V208H488C501.25 208 512 197.25 512 184S501.25 160 488 160ZM24 160C10.75 160 0 170.75 0 184S10.75 208 24 208H144V240C144 241.471 144.584 242.75 144.838 244.148C116.506 253.83 96 280.389 96 312C96 351.764 128.236 384 168 384S240 351.764 240 312C240 280.389 219.494 253.83 191.162 244.148C191.416 242.75 192 241.471 192 240V48H488C501.25 48 512 37.25 512 24S501.25 0 488 0H24C10.75 0 0 10.75 0 24S10.75 48 24 48H144V160H24ZM168 288C181.234 288 192 298.766 192 312S181.234 336 168 336S144 325.234 144 312S154.766 288 168 288ZM488 320H271.193C269.834 337.576 264.42 353.959 255.404 368H488C501.25 368 512 357.25 512 344S501.25 320 488 320ZM24 368H80.598C71.582 353.959 66.166 337.576 64.807 320H24C10.75 320 0 330.75 0 344S10.75 368 24 368Z" })
  }
));
BlindsOpenRegular.displayName = "BlindsOpenRegular";
var BlindsOpen_default = BlindsOpenRegular;
