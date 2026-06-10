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
var GraduationCap_exports = {};
__export(GraduationCap_exports, {
  default: () => GraduationCap_default
});
module.exports = __toCommonJS(GraduationCap_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GraduationCapLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M617.781 136.676L331.484 33.953C324.047 31.328 315.922 31.359 308.453 33.985L22.219 136.676C8.719 141.52 0 153.801 0 167.989S8.719 194.459 22.219 199.303L48 208.553V321.682L16.406 460.437C15.312 465.187 16.453 470.156 19.484 473.969S27.125 480 32 480H96C100.859 480 105.453 477.781 108.484 474C111.531 470.218 112.672 465.249 111.609 460.499L80 319.588V220.034L308.516 302.025C312.219 303.338 316.094 303.963 319.984 303.963C323.891 303.963 327.797 303.306 331.547 301.994L617.781 199.303C631.281 194.459 640 182.177 640 167.989S631.281 141.52 617.781 136.676ZM52.078 447.999L64.172 395.247L76.016 447.999H52.078ZM319.266 271.868L129.482 203.779L324.734 143.27C333.172 140.644 337.906 131.707 335.281 123.238C332.672 114.831 323.781 110.018 315.266 112.706L79.4 185.812L32 168L320.734 64.111L608 168L319.266 271.868ZM482.281 288.118C473.516 289.275 467.344 297.306 468.5 306.088L479.859 392.716C481.016 401.622 475.203 410.373 465.063 415.06C421.156 435.373 371.5 446.78 321.875 447.999H318.516C268.5 446.78 218.844 435.373 174.938 415.06C164.797 410.373 158.984 401.622 160.141 392.747L171.5 306.088C172.656 297.306 166.484 289.275 157.719 288.118C148.844 286.931 140.906 293.181 139.781 301.9L128.422 388.591C125.406 411.623 138.391 433.436 161.5 444.124C209.359 466.25 263.375 478.656 318.125 480H322.266C376.625 478.656 430.641 466.25 478.5 444.124C501.609 433.436 514.594 411.623 511.578 388.559L500.219 301.9C499.078 293.181 491.062 286.931 482.281 288.118Z" })
  }
));
GraduationCapLight.displayName = "GraduationCapLight";
var GraduationCap_default = GraduationCapLight;
