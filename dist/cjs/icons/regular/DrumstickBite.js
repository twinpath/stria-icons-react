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
var DrumstickBite_exports = {};
__export(DrumstickBite_exports, {
  default: () => DrumstickBite_default
});
module.exports = __toCommonJS(DrumstickBite_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const DrumstickBiteRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M471.117 57.578C422.814 2.695 361.067 -0.001 342.771 -0.001C297.588 -0.001 254.17 17.864 221.961 49.705C195.432 76.102 160.262 119.16 160 188.936V277.928L119.463 318.328C113.359 324.431 105.491 327.253 97.332 327.253C83.587 327.253 79.144 320.032 60.397 320.032C27.106 320.032 0 347.014 0 380.387C0 402.701 16.739 439.877 59.122 439.877C64.047 439.877 68.988 439.307 73.83 438.197C72.71 443.048 72.132 448.007 72.132 452.955C72.132 467.898 77.405 482.74 88.957 494.195C100.565 505.945 116.04 512 131.666 512C164.616 512 192.046 485.393 192.046 451.668C192.046 432.347 184.802 428.742 184.802 414.63C184.802 406.467 187.625 398.553 193.728 392.451L234.312 352H261.752L261.84 351.912H322.973C340.1 351.912 357.226 349.537 373.73 344.912C381.637 342.832 391.454 334.992 391.454 321.871C391.454 307.818 376.421 299.124 376.421 265.82C376.421 234.702 399.057 184.224 457.463 184.224C474.839 184.224 480.592 188.426 488.002 188.426C505.554 188.426 511.999 172.698 511.999 164.576C511.999 117.409 492.014 81.046 471.117 57.578ZM457.014 136.276C422.918 136.276 390.219 149.699 365.978 173.813C341.289 198.496 328.483 231.744 328.483 265.717C328.483 275.43 329.53 285.202 331.644 294.85C328.723 298.627 327.551 300.141 324.627 303.918H246.986C222.33 303.918 207.959 289.518 207.959 271.918V189.684C207.959 148.689 222.211 117.07 255.715 83.699C281.235 58.352 311.538 47.84 340.823 47.84C377.818 47.84 413.187 64.615 435.236 89.449C447.238 102.822 455.74 118.945 460.24 136.316C459.164 136.29 458.088 136.276 457.014 136.276Z " })
  }
));
DrumstickBiteRegular.displayName = "DrumstickBiteRegular";
var DrumstickBite_default = DrumstickBiteRegular;
