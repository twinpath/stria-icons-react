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
var PlaneArrival_exports = {};
__export(PlaneArrival_exports, {
  default: () => PlaneArrival_default
});
module.exports = __toCommonJS(PlaneArrival_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneArrivalThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M44.75 205.547L133.498 285.531C140.873 292.156 149.498 296.904 158.998 299.529L446.617 377.891C461.109 381.785 476.055 384 490.953 384C503.299 384 515.609 382.482 527.615 379.141C557.24 370.891 570.99 358.02 574.865 343.521S573.115 310.777 551.49 288.531C532.24 268.66 507.117 255.787 480.617 248.539L383.119 222.043L282.746 30.203C281.246 24.328 276.871 19.83 271.121 18.205L205.996 0.582C204.555 0.188 203.115 0 201.705 0L201.816 16.027L267.244 34.162L267.705 35.969L268.57 37.621L368.943 229.461L372.182 235.65L378.924 237.482L476.396 263.973C502.23 271.037 524.225 283.381 540.018 299.684C550.754 310.727 562.832 326.582 559.408 339.391C555.998 352.148 537.902 359.668 523.326 363.727C513.135 366.562 502.242 368 490.953 368C478.02 368 464.5 366.129 450.822 362.453L163.26 284.107C156.164 282.146 149.748 278.621 144.211 273.646L55.479 193.678C51.131 189.746 48.291 185.193 48.25 182.262L48.529 80.129L88.672 91.451L116.17 159.312L119.145 166.658L126.791 168.742L229.039 196.613L256.604 204.127L248.607 176.697L201.707 15.818L201.705 0H201.699C192.846 0 185.158 7.361 185.373 16.955L233.246 181.176L130.998 153.305L103.5 85.443C101.5 80.568 97.5 76.943 92.5 75.568L52.75 64.695C51.289 64.291 49.832 64.1 48.408 64.1C39.719 64.1 32.215 71.227 32 80.568L32.25 182.301C32.375 191.299 38.25 199.672 44.75 205.547ZM632 496H8C3.578 496 0 499.578 0 504S3.578 512 8 512H632C636.422 512 640 508.422 640 504S636.422 496 632 496Z" })
  }
));
PlaneArrivalThin.displayName = "PlaneArrivalThin";
var PlaneArrival_default = PlaneArrivalThin;
