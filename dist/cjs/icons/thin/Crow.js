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
var Crow_exports = {};
__export(Crow_exports, {
  default: () => Crow_default
});
module.exports = __toCommonJS(Crow_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CrowThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M416 79.973C407.166 79.973 400 87.139 400 95.975C400 104.807 407.166 111.975 416 111.975S432 104.807 432 95.975C432 87.139 424.834 79.973 416 79.973ZM506.129 64.027C492.91 26.811 457.748 0 416 0C362.98 0 320 42.982 320 96.006V126.188L12.125 393.648C4.5 399.273 0 408.275 0 417.775C0 435.314 14.357 447.996 30.221 447.996C34.707 447.996 39.313 446.982 43.75 444.777L192 384.023H290.473L336.516 506.813C337.719 510.016 340.766 512 344 512C344.938 512 345.891 511.844 346.813 511.484C350.953 509.938 353.047 505.328 351.484 501.186L307.551 384.023H320C341.91 384.023 362.879 380.174 382.494 373.412L432.516 506.812C433.719 510.016 436.766 512 440 512C440.938 512 441.891 511.844 442.813 511.484C446.953 509.938 449.047 505.328 447.484 501.186L397.41 367.645C464.861 337.863 512 270.488 512 192.012V158.891L630.318 142.166C636.197 141.334 640.883 136.701 639.859 131.723C632.049 93.746 575.201 64.33 506.129 64.027ZM496 192.012C496 289.064 417.047 368.021 320 368.021H234.951L333.969 329.801C379.625 312.332 413.219 273.422 423.813 225.717C424.766 221.404 422.047 217.123 417.734 216.17C413.406 215.246 409.141 217.936 408.188 222.248C398.766 264.703 368.875 299.314 328.234 314.863L36.631 430.447C34.564 431.473 32.408 431.994 30.221 431.994C23.381 431.994 16 426.557 16 417.775C16 413.328 18.102 409.123 22.617 405.727L330.492 138.268L336 133.482V96.006C336 51.891 371.889 16 416 16S496 51.891 496 96.006V192.012ZM512 142.73V96.006C512 90.602 511.266 85.389 510.408 80.229C567.766 81.588 609.844 103.998 621.469 127.258L512 142.73Z" })
  }
));
CrowThin.displayName = "CrowThin";
var Crow_default = CrowThin;
