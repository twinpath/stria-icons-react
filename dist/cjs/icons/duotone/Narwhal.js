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
var Narwhal_exports = {};
__export(Narwhal_exports, {
  default: () => Narwhal_default
});
module.exports = __toCommonJS(Narwhal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const NarwhalDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M464 160C391.723 160 321.826 185.836 266.926 232.844L154.406 329.188C144.025 338.074 128 330.699 128 317.033V282.115L177.75 251.617C186.623 245.742 192 235.744 192 224.994V143.992C192 131.244 177.795 123.637 167.184 130.705L96.018 178.107H95.984L24.877 130.742C14.24 123.658 0 131.283 0 144.062V224.992C0.002 235.744 5.375 245.742 14.252 251.617L64 282.117V352C64 440.365 135.635 512 224 512H464C561.201 512 640 433.201 640 336S561.201 160 464 160ZM504 320C490.746 320 480 309.254 480 296C480 282.744 490.746 272 504 272S528 282.744 528 296C528 309.254 517.254 320 504 320Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M504 272C490.746 272 480 282.744 480 296C480 309.254 490.746 320 504 320S528 309.254 528 296C528 282.744 517.254 272 504 272ZM622.609 0C616.598 -0.02 610.998 3.059 607.795 8.148L508.484 165.893C508.479 165.891 508.475 165.891 508.469 165.889C540.289 174.189 568.588 191.057 590.713 214.037L590.711 214.035L639.457 21.723C642.244 10.727 633.955 0.037 622.609 0Z" })
    ]
  }
));
NarwhalDuotone.displayName = "NarwhalDuotone";
var Narwhal_default = NarwhalDuotone;
