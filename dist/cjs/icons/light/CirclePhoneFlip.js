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
var CirclePhoneFlip_exports = {};
__export(CirclePhoneFlip_exports, {
  default: () => CirclePhoneFlip_default
});
module.exports = __toCommonJS(CirclePhoneFlip_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CirclePhoneFlipLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 464C141.309 464 48 370.691 48 256S141.309 48 256 48S464 141.309 464 256S370.691 464 256 464ZM363.062 131.203L318.875 120.953C301.359 116.969 283.437 125.953 276.297 142.469L255.828 190.25C249.266 205.594 253.516 223.031 266.375 233.656L274.641 240.438C265.453 253.906 253.859 265.5 240.375 274.688L233.656 266.5C223.375 253.891 205.578 249.422 190.406 255.75L142.547 276.266C142.531 276.281 142.469 276.281 142.437 276.297C125.969 283.469 116.937 301.344 120.953 318.844L131.156 363.125C135.078 380.125 150.016 392 167.469 392C291.281 392 392 291.281 392 167.469C392 149.984 380.094 135.078 363.062 131.203ZM167.469 360C164.969 360 162.906 358.375 162.344 355.938L152.141 311.656C151.578 309.219 152.859 306.688 155.187 305.656L202.844 285.219C204.875 284.406 207.453 285 208.859 286.734L224.438 305.75C229.297 311.656 237.688 313.344 244.469 309.656C272.063 294.625 294.594 272.109 309.594 244.531C313.266 237.781 311.625 229.375 305.688 224.5L286.703 208.938C284.859 207.422 284.297 205.062 285.25 202.828L305.688 155.125C306.516 153.234 308.469 152 310.531 152C310.906 152 311.281 152.047 311.656 152.141L355.906 162.406C358.375 162.969 360 165 360 167.469C360 273.625 273.625 360 167.469 360Z" })
  }
));
CirclePhoneFlipLight.displayName = "CirclePhoneFlipLight";
var CirclePhoneFlip_default = CirclePhoneFlipLight;
