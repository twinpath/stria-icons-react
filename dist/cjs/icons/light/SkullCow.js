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
var SkullCow_exports = {};
__export(SkullCow_exports, {
  default: () => SkullCow_default
});
module.exports = __toCommonJS(SkullCow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SkullCowLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 96H224C188.654 96 160 124.654 160 160V288C160 309.225 170.305 328.02 186.191 339.66C210.627 357.566 229.916 381.545 235.861 411.25L250.875 486.25C253.75 501.25 267 512 282.25 512H357.709C372.98 512 386.129 501.223 389.125 486.25L404.139 411.25C410.086 381.545 429.375 357.566 453.811 339.66C469.695 328.02 480 309.225 480 288V160C480 124.654 451.348 96 416 96ZM448 288C448 298.324 443.225 307.746 434.896 313.848C401.246 338.508 379.76 370.016 372.762 404.969L357.709 480L282.254 479.969L267.24 404.969C260.244 370.018 238.76 338.508 205.105 313.848C196.777 307.744 192 298.324 192 288V160C192 142.355 206.355 128 224 128H416C433.645 128 448 142.355 448 160V288ZM112 160H83.078C54.906 160 32 137.094 32 108.906C32 102.375 33.234 96 35.656 89.938L62.859 21.938C66.141 13.75 62.141 4.438 53.938 1.156C45.781 -2.125 36.422 1.844 33.141 10.062L5.937 78.062C2 87.938 0 98.312 0 108.906C0 154.719 37.266 192 83.078 192H112C120.844 192 128 184.844 128 176S120.844 160 112 160ZM634.062 78.062L606.859 10.062C603.578 1.844 594.219 -2.094 586.062 1.156C577.859 4.438 573.859 13.75 577.141 21.938L604.344 89.938C606.766 96 608 102.375 608 108.906C608 137.094 585.094 160 556.922 160H528C519.156 160 512 167.156 512 176S519.156 192 528 192H556.922C602.734 192 640 154.719 640 108.906C640 98.312 638 87.938 634.062 78.062ZM256 232C242.746 232 232 242.744 232 256C232 269.254 242.746 280 256 280S280 269.254 280 256C280 242.744 269.254 232 256 232ZM384 232C370.746 232 360 242.744 360 256C360 269.254 370.746 280 384 280S408 269.254 408 256C408 242.744 397.254 232 384 232Z" })
  }
));
SkullCowLight.displayName = "SkullCowLight";
var SkullCow_default = SkullCowLight;
