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
const HeartPulseSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320.364 243.812L270.539 343.312C264.53 355.312 247.128 354.937 241.62 342.688L184.658 216.312L154.613 288.062H56.519L232.939 470.195C245.6 483.266 266.319 483.266 278.981 470.195L455.401 288.062H342.398L320.364 243.812ZM463.286 62.859C408.928 15.883 325.749 24.359 275.724 75.922L256.007 96.25L236.289 75.922C186.264 24.359 103.082 15.883 48.722 62.859C-8.715 112.5 -15.131 197.609 28.214 256.062H133.205L169.135 169.812C174.643 156.938 192.796 156.688 198.68 169.438L256.893 298.813L305.967 200.813C311.851 189.063 328.752 189.063 334.636 200.813L362.303 256.063H483.725C527.147 197.609 520.727 112.5 463.286 62.859Z" })
  }
));
HeartPulseSolid.displayName = "HeartPulseSolid";
var HeartPulse_default = HeartPulseSolid;
