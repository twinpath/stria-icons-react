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
var RampLoading_exports = {};
__export(RampLoading_exports, {
  default: () => RampLoading_default
});
module.exports = __toCommonJS(RampLoading_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const RampLoadingLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M292.422 328.844C289.713 323.424 284.172 320 278.111 320H105.889C99.828 320 94.287 323.424 91.578 328.844L11.578 488.844C6.258 499.482 13.994 512 25.889 512H358.111C370.006 512 377.742 499.482 372.422 488.844L292.422 328.844ZM51.777 480L115.777 352H268.223L332.223 480H51.777ZM336 0H48C21.531 0 0 21.531 0 48V336C0 353.078 9.188 369.016 24 377.562C31.594 382 41.406 379.422 45.844 371.734C50.281 364.078 47.656 354.297 40 349.875C35.062 347.016 32 341.703 32 336V48C32 39.172 39.188 32 48 32H336C344.812 32 352 39.172 352 48V336C352 341.703 348.938 347.016 344 349.875C336.344 354.297 333.719 364.078 338.156 371.734C341.125 376.859 346.5 379.719 352 379.719C354.719 379.719 357.5 379.031 360 377.562C374.812 369.016 384 353.078 384 336V48C384 21.531 362.469 0 336 0Z" })
  }
));
RampLoadingLight.displayName = "RampLoadingLight";
var RampLoading_default = RampLoadingLight;
