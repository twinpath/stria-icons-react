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
var FlaskRoundPoison_exports = {};
__export(FlaskRoundPoison_exports, {
  default: () => FlaskRoundPoison_default
});
module.exports = __toCommonJS(FlaskRoundPoison_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlaskRoundPoisonDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.965 169V64H327.961C341.219 64 351.961 53.254 351.961 40V24C351.961 10.742 341.219 0 327.961 0H119.992C106.734 0 95.992 10.742 95.992 24V40C95.992 53.254 106.734 64 119.992 64H127.984V168.125C61.617 202.875 16 271.875 16 352C16 405.75 36.375 454.75 69.992 491.75C81.867 504.875 99.117 512 116.988 512H330.961C348.961 512 366.461 504.5 378.461 491.125C410.703 455.375 430.703 408.375 431.953 356.625C433.703 276.75 387.207 205.125 319.965 169ZM287.969 384.125V416C287.969 424.875 280.844 432 271.969 432H175.984C167.109 432 159.984 424.875 159.984 416V384.125C130.984 368.125 111.988 341.875 111.988 312C111.988 263.375 162.109 224 223.977 224S335.961 263.375 335.961 312C335.961 341.875 316.965 368.125 287.969 384.125Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M183.992 288C170.746 288 159.996 298.75 159.996 312S170.746 336 183.992 336S207.988 325.25 207.988 312S197.238 288 183.992 288ZM287.98 384.125V416C287.98 424.875 280.855 432 271.98 432H175.996C167.121 432 159.996 424.875 159.996 416V384.125C130.996 368.125 112 341.875 112 312C112 263.375 162.121 224 223.988 224S335.973 263.375 335.973 312C335.973 341.875 316.977 368.125 287.98 384.125ZM263.98 288C250.734 288 239.988 298.75 239.988 312S250.734 336 263.98 336C277.23 336 287.98 325.25 287.98 312S277.23 288 263.98 288Z" })
    ]
  }
));
FlaskRoundPoisonDuotone.displayName = "FlaskRoundPoisonDuotone";
var FlaskRoundPoison_default = FlaskRoundPoisonDuotone;
