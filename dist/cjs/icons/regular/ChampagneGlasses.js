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
var ChampagneGlasses_exports = {};
__export(ChampagneGlasses_exports, {
  default: () => ChampagneGlasses_default
});
module.exports = __toCommonJS(ChampagneGlasses_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ChampagneGlassesRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M638.185 422.859C634.383 413.602 625.504 407.984 616.051 407.984C612.996 407.984 609.881 408.572 606.857 409.812L562.264 428.174L519.916 322.709C571.623 289.213 591.014 222.596 560.724 168.479L475.437 16.498C469.607 6.123 458.582 0 447.049 0C443.121 0 439.064 0.75 435.264 2.25L320 46.844L204.736 2.25C200.935 0.75 196.879 0 192.951 0C181.418 0 170.392 6.123 164.562 16.498L79.275 168.479C48.986 222.596 68.377 289.213 120.084 322.709L77.736 428.174L33.142 409.812C30.121 408.572 27.004 407.984 23.949 407.984C14.496 407.984 5.617 413.602 1.814 422.859C-3.233 435.125 2.611 449.141 14.861 454.188L150.861 510.188C153.859 511.422 156.953 512 159.984 512C169.422 512 178.375 506.406 182.187 497.141C187.234 484.875 181.39 470.859 169.14 465.812L122.549 446.627L165.068 340.957C173.18 342.582 181.291 343.457 189.148 343.457C242.504 343.457 291.422 309.211 304.982 256.092L319.937 196.475L320 196.725L320.062 196.475L335.017 256.092C348.578 309.211 397.496 343.457 450.851 343.457C458.709 343.457 466.82 342.582 474.931 340.957L517.451 446.627L470.859 465.812C458.609 470.859 452.765 484.875 457.812 497.141C461.625 506.406 470.578 512 480.015 512C483.047 512 486.14 511.422 489.139 510.188L625.139 454.188C637.389 449.141 643.232 435.125 638.185 422.859ZM121.135 191.969L147.346 145.26L270.101 197.871L258.474 244.219C232.736 345.037 70.545 282.355 121.135 191.969ZM281.93 150.713L170.973 103.158L199.791 51.803L297.281 89.521L281.93 150.713ZM342.709 89.525L440.209 51.803L469.027 103.158L358.049 150.723L349.615 117.186L342.709 89.525ZM381.576 244.412L369.9 197.871L492.654 145.26L518.84 191.922C569.537 282.506 407.191 344.754 381.576 244.412Z" })
  }
));
ChampagneGlassesRegular.displayName = "ChampagneGlassesRegular";
var ChampagneGlasses_default = ChampagneGlassesRegular;
