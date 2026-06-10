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
var TruckPlow_exports = {};
__export(TruckPlow_exports, {
  default: () => TruckPlow_default
});
module.exports = __toCommonJS(TruckPlow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TruckPlowDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M120 304C71.398 304 32 343.398 32 392C32 440.6 71.398 480 120 480S208 440.6 208 392C208 343.398 168.602 304 120 304ZM376 304C327.398 304 288 343.398 288 392C288 440.6 327.398 480 376 480S464 440.6 464 392C464 343.398 424.602 304 376 304Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M598.684 393.375C584.182 378.875 576.057 359.25 576.057 338.75V237.25C576.057 216.75 584.182 197.125 598.684 182.625L635.312 145.875C641.562 139.75 641.562 129.5 635.312 123.25L612.811 100.75C606.559 94.5 596.309 94.5 590.184 100.75L553.43 137.375C526.926 163.875 512.051 199.75 512.051 237.25V288H480.047V224C480.047 206.25 465.795 192 448.043 192H402.164L320.156 55.25C311.531 40.875 295.779 32 278.902 32H168.016C145.889 32 128.012 49.875 128.012 72V192H32.004C14.252 192 0 206.25 0 224V320C0 329.359 4.105 337.564 10.455 343.402C29.131 301.393 71.062 272 120 272C172.172 272 216.121 305.498 232.652 352H263.348C279.879 305.498 323.828 272 376 272S472.121 305.498 488.652 352H513.301C516.426 384.625 530.051 415.25 553.43 438.625L590.184 475.25C596.309 481.5 606.559 481.5 612.811 475.25L635.312 452.75C641.562 446.5 641.562 436.25 635.312 430.125L598.684 393.375ZM192.02 192V96H269.9L327.531 192H192.02Z" })
    ]
  }
));
TruckPlowDuotone.displayName = "TruckPlowDuotone";
var TruckPlow_default = TruckPlowDuotone;
