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
var FlaskRoundPotion_exports = {};
__export(FlaskRoundPotion_exports, {
  default: () => FlaskRoundPotion_default
});
module.exports = __toCommonJS(FlaskRoundPotion_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const FlaskRoundPotionDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M319.965 169V64H327.961C341.219 64 351.961 53.254 351.961 40V24C351.961 10.742 341.219 0 327.961 0H119.992C106.734 0 95.992 10.742 95.992 24V40C95.992 53.254 106.734 64 119.992 64H127.984V168.125C61.617 202.875 16 271.875 16 352C16 405.75 36.375 454.75 69.992 491.75C81.867 504.875 99.117 512 116.988 512H330.961C348.961 512 366.461 504.5 378.461 491.125C410.703 455.375 430.703 408.375 431.953 356.625C433.703 276.75 387.207 205.125 319.965 169ZM330.961 448L117.359 448.711C93.27 422.195 80 387.848 80 352C80 266.026 140.643 233.742 191.984 206.855V64H255.965V207.27C293.043 227.188 370.018 261.811 367.973 355.078C367.137 389.613 353.984 422.703 330.961 448Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M367.879 352C367.875 353.055 367.996 354.012 367.973 355.078C367.137 389.613 353.984 422.703 330.961 448L117.359 448.711C93.27 422.195 80 387.848 80 352C80 345.762 80.961 340.383 81.57 334.691C147.164 302.625 208.672 304.594 262.742 331.5C307.891 353.961 344.258 352.008 367.879 352Z" })
    ]
  }
));
FlaskRoundPotionDuotone.displayName = "FlaskRoundPotionDuotone";
var FlaskRoundPotion_default = FlaskRoundPotionDuotone;
