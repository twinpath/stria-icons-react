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
var Drum_exports = {};
__export(Drum_exports, {
  default: () => Drum_default
});
module.exports = __toCommonJS(Drum_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrumRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M431.625 121.875L431.365 121.809L501.152 76.088C512.246 68.824 515.34 53.949 508.059 42.857C500.84 31.795 485.965 28.639 474.84 35.936L368.611 105.529L368.5 105.5C320 97 273.5 96 256 96C213.25 96 0 101.375 0 208V368C0 429.875 114.625 480 256 480S512 429.875 512 368V208C512 164.625 476.5 138.125 431.625 121.875ZM88 400.25C62 387.875 48 375.125 48 368V279.5C60.75 286.625 74.125 292.5 88 297V400.25ZM232 431C194.5 429.375 162.25 424.375 136 417.5V309.25C172 316.125 207.625 318.625 232 319.5V431ZM376 417.5C349.75 424.5 317.5 429.375 280 431V319.5C304.375 318.625 340 316.125 376 309.25V417.5ZM464 368C464 375.125 450 387.875 424 400.25V297C437.875 292.5 451.25 286.625 464 279.5V368ZM256.008 271.992C141.133 271.992 48.008 243.338 48.008 207.992C48.008 172.645 141.133 143.992 256.008 143.992C273.578 143.992 290.543 144.736 306.84 145.998L242.844 187.924C231.75 195.189 228.656 210.064 235.938 221.156C240.531 228.188 248.188 232 256.031 232C260.531 232 265.094 230.734 269.156 228.078L378.607 156.373C430.299 168.016 464.008 186.77 464.008 207.992C464.008 243.338 370.883 271.992 256.008 271.992Z" })
  }
));
DrumRegular.displayName = "DrumRegular";
var Drum_default = DrumRegular;
