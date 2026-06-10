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
var ArrowRightToBracket_exports = {};
__export(ArrowRightToBracket_exports, {
  default: () => ArrowRightToBracket_default
});
module.exports = __toCommonJS(ArrowRightToBracket_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowRightToBracketLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 256C352 251.906 350.438 247.812 347.312 244.688L203.312 100.688C197.062 94.438 186.937 94.438 180.688 100.688S174.438 117.063 180.688 123.312L297.375 240H16C7.156 240 0 247.156 0 256S7.156 272 16 272H297.375L180.688 388.688C174.438 394.938 174.438 405.063 180.688 411.312S197.063 417.562 203.312 411.312L347.312 267.312C350.438 264.188 352 260.094 352 256ZM432 32H336C327.156 32 320 39.156 320 48S327.156 64 336 64H432C458.469 64 480 85.531 480 112V400C480 426.469 458.469 448 432 448H336C327.156 448 320 455.156 320 464S327.156 480 336 480H432C476.125 480 512 444.125 512 400V112C512 67.875 476.125 32 432 32Z" })
  }
));
ArrowRightToBracketLight.displayName = "ArrowRightToBracketLight";
var ArrowRightToBracket_default = ArrowRightToBracketLight;
