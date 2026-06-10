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
var Starship_exports = {};
__export(Starship_exports, {
  default: () => Starship_default
});
module.exports = __toCommonJS(Starship_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarshipDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208 352H24C10.746 352 0 362.744 0 376V392C0 405.254 10.746 416 24 416H208C225.674 416 240 401.674 240 384S225.674 352 208 352ZM448 64C341.961 64 256 149.961 256 256S341.961 448 448 448S640 362.039 640 256S554.039 64 448 64ZM448 320C412.654 320 384 291.346 384 256S412.654 192 448 192S512 220.654 512 256C511.959 291.33 483.33 319.959 448 320ZM208 96H24C10.746 96 0 106.744 0 120V136C0 149.254 10.746 160 24 160H208C225.674 160 240 145.674 240 128S225.674 96 208 96Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M447.664 192C412.318 192 383.664 220.654 383.664 256S412.318 320 447.664 320S511.664 291.346 511.664 256C511.623 220.67 482.994 192.041 447.664 192ZM447.664 288C429.99 288 415.664 273.674 415.664 256S429.99 224 447.664 224S479.664 238.326 479.664 256C479.664 273.672 465.336 288 447.664 288ZM204.133 211.217L141.098 160H65L135.648 217.402L130.414 217.875C110.789 219.75 95.664 236.25 95.664 256S110.789 292.25 130.414 294.125L135.648 294.598L65 352H141.098L204.133 300.783L228.664 303C225.352 287.5 223.695 271.75 223.695 256S225.352 224.5 228.664 209L204.133 211.217Z" })
    ]
  }
));
StarshipDuotone.displayName = "StarshipDuotone";
var Starship_default = StarshipDuotone;
