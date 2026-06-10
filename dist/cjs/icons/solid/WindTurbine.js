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
var WindTurbine_exports = {};
__export(WindTurbine_exports, {
  default: () => WindTurbine_default
});
module.exports = __toCommonJS(WindTurbine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const WindTurbineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M398.688 425.793L310.339 243.479C304.411 229.881 304.147 214.481 309.608 200.69L382.887 21.626C386.104 13.514 382.137 4.331 374.025 1.114C367.301 -1.554 359.621 0.688 355.388 6.557L241.269 163.221C232.578 175.242 219.452 183.305 204.8 185.619L13.322 215.949C5.521 217.191 -0.164 224.002 0.004 231.898V232.129C0.183 240.059 6.217 246.627 14.103 247.479L203.829 268.008C218.583 269.602 232.091 277.008 241.369 288.586L371.678 442.082C376.641 448.271 385.422 449.824 392.207 445.711L392.397 445.591C399.151 441.494 401.838 433.037 398.688 425.793ZM256 248.008C242.744 248.008 232 237.264 232 224.01C232 210.754 242.744 200.01 256 200.01C269.254 200.01 279.998 210.754 279.998 224.01C279.998 237.264 269.254 248.008 256 248.008ZM350.097 479.999H301.778L296.778 403.343L220.999 314.006L210.22 479.999H161.901C147.924 480.015 135.152 487.917 128.902 500.419C126.924 504.371 128.523 509.175 132.475 511.154C133.57 511.701 134.777 511.992 136.002 511.999H375.998C380.416 511.997 383.996 508.413 383.992 503.996C383.992 502.753 383.703 501.529 383.147 500.419C376.891 487.9 364.093 479.994 350.097 479.999Z" })
  }
));
WindTurbineSolid.displayName = "WindTurbineSolid";
var WindTurbine_default = WindTurbineSolid;
