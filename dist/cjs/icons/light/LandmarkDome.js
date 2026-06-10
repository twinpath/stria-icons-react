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
var LandmarkDome_exports = {};
__export(LandmarkDome_exports, {
  default: () => LandmarkDome_default
});
module.exports = __toCommonJS(LandmarkDome_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LandmarkDomeLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M496 480H16C7.164 480 0 487.162 0 496C0 504.836 7.164 512 16 512H496C504.836 512 512 504.836 512 496C512 487.162 504.836 480 496 480ZM40 448H472C480.836 448 488 440.836 488 432C488 423.162 480.836 416 472 416H40C31.164 416 24 423.162 24 432C24 440.836 31.164 448 40 448ZM48 256H80V352H64C55.164 352 48 359.162 48 368C48 376.836 55.164 384 64 384H448C456.836 384 464 376.836 464 368C464 359.162 456.836 352 448 352H432V256H464C472.836 256 480 248.836 480 240C480 231.162 472.836 224 464 224H448C448 123.525 370.398 40.984 272 32.811V16C272 7.156 264.844 0 256 0S240 7.156 240 16V32.811C141.602 40.984 64 123.525 64 224H48C39.164 224 32 231.162 32 240C32 248.836 39.164 256 48 256ZM240 352H112V256H240V352ZM400 352H272V256H400V352ZM256 64C344.219 64 416 135.781 416 224H96C96 135.781 167.781 64 256 64Z" })
  }
));
LandmarkDomeLight.displayName = "LandmarkDomeLight";
var LandmarkDome_default = LandmarkDomeLight;
