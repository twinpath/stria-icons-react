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
var PersonSkiLift_exports = {};
__export(PersonSkiLift_exports, {
  default: () => PersonSkiLift_default
});
module.exports = __toCommonJS(PersonSkiLift_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PersonSkiLiftLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M103.999 144C134.874 144 159.999 118.875 159.999 88S134.874 32 103.999 32S47.999 57.125 47.999 88S73.124 144 103.999 144ZM103.999 64C117.218 64 127.999 74.766 127.999 88S117.218 112 103.999 112S79.999 101.234 79.999 88S90.78 64 103.999 64ZM161.968 373.516C168.499 373.516 175.093 372.719 181.687 371.062L195.874 367.516C204.468 365.375 209.655 356.688 207.53 348.125C205.374 339.531 196.53 334.219 188.124 336.484L173.937 340.031C151.843 345.531 129.53 335.188 119.343 314.922L30.312 136.844C26.343 128.938 16.78 125.781 8.843 129.688C0.937 133.641 -2.251 143.25 1.687 151.156L90.718 329.25C104.593 356.969 132.28 373.516 161.968 373.516ZM255.999 208C264.843 208 271.999 200.844 271.999 192V16C271.999 7.156 264.843 0 255.999 0S239.999 7.156 239.999 16V192C239.999 200.844 247.155 208 255.999 208ZM495.999 288C487.155 288 479.999 295.156 479.999 304C479.999 324.406 466.905 342.625 446.624 350.406L303.999 405.154V256C303.999 251.078 301.718 246.422 297.843 243.391S288.905 239.234 284.124 240.484L168.562 269.359L126.312 184.844C122.343 176.938 112.78 173.781 104.843 177.688C96.937 181.641 93.749 191.25 97.687 199.156L145.687 295.156C149.03 301.844 156.624 305.328 163.874 303.516L271.999 276.5V416C271.999 416.473 272.228 416.871 272.269 417.334L106.249 481.062C98.03 484.234 93.905 493.484 97.062 501.734C99.499 508.094 105.562 512 111.999 512C113.905 512 115.843 511.656 117.749 510.938L458.062 380.281C490.843 367.703 511.999 337.766 511.999 304C511.999 295.156 504.843 288 495.999 288Z" })
  }
));
PersonSkiLiftLight.displayName = "PersonSkiLiftLight";
var PersonSkiLift_default = PersonSkiLiftLight;
