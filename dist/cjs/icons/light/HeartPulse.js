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
var HeartPulse_exports = {};
__export(HeartPulse_exports, {
  default: () => HeartPulse_default
});
module.exports = __toCommonJS(HeartPulse_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HeartPulseLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M468.863 76.492C423.729 32.25 375.092 32 362.338 32C349.709 32 300.822 32.25 256.062 76.367C211.301 32.25 162.539 32 149.787 32C137.033 32 88.271 32.25 43.26 76.492C15.379 103.986 0 140.73 0 179.85C0 211.396 10.398 240.928 28.852 265.709C31.836 269.717 36.693 271.957 41.691 271.957H154.662L184.545 200.221L241.434 326.572C246.969 338.865 264.303 339.219 270.334 327.162L320.078 227.715L342.209 271.957H470.309C475.307 271.957 480.164 269.717 483.148 265.709C501.6 240.928 512 211.396 512 179.85C512.125 140.73 496.746 103.986 468.863 76.492ZM462.611 239.963H361.963L334.332 184.723C328.455 172.975 311.701 172.975 305.824 184.723L256.813 282.705L198.674 153.354C192.797 140.605 174.668 140.855 169.291 153.729L133.283 239.963H49.512C40.26 225.34 6.877 157.229 67.766 97.238C90.396 75.117 120.029 63.994 149.787 63.994C183.67 63.994 204.299 70.242 256.063 121.234C311.076 67.119 330.58 63.994 362.338 63.994C392.096 63.994 421.727 75.117 444.232 97.238C505.248 157.354 471.74 225.465 462.611 239.963ZM410.436 303.951H410.377C406.045 303.951 401.896 305.711 398.885 308.824L268.814 443.303C262.564 449.426 252.561 449.426 246.311 443.303L113.598 308.715C110.594 305.668 106.492 303.951 102.211 303.951C88.025 303.951 80.867 321.047 90.824 331.148L223.93 466.174C242.684 484.67 272.566 484.545 291.32 466.174L421.932 331.035C431.736 320.891 424.545 303.951 410.436 303.951Z" })
  }
));
HeartPulseLight.displayName = "HeartPulseLight";
var HeartPulse_default = HeartPulseLight;
