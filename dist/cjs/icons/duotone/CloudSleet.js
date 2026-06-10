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
var CloudSleet_exports = {};
__export(CloudSleet_exports, {
  default: () => CloudSleet_default
});
module.exports = __toCommonJS(CloudSleet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CloudSleetDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M113.46 353.938C101.273 348.719 87.163 354.344 81.945 366.531L33.946 478.531C28.727 490.719 34.367 504.844 46.555 510.063C49.633 511.375 52.836 512 55.992 512C65.304 512 74.164 506.562 78.07 497.469L126.069 385.469C131.288 373.281 125.647 359.156 113.46 353.938ZM385.456 353.938C373.237 348.719 359.175 354.344 353.94 366.531L305.941 478.531C300.723 490.719 306.363 504.844 318.55 510.063C321.629 511.375 324.832 512 327.988 512C337.3 512 346.159 506.562 350.066 497.469L398.065 385.469C403.283 373.281 397.643 359.156 385.456 353.938ZM520 392H504.001V376C504.001 362.75 493.251 352 480.001 352C466.751 352 456.001 362.75 456.001 376V392H440.002C426.752 392 416.002 402.75 416.002 416S426.752 440 440.002 440H456.001V456C456.001 469.25 466.751 480 480.001 480C493.251 480 504.001 469.25 504.001 456V440H520C533.25 440 544 429.25 544 416S533.25 392 520 392ZM264.004 392H248.005V376C248.005 362.75 237.255 352 224.005 352C210.755 352 200.005 362.75 200.005 376V392H184.006C170.756 392 160.006 402.75 160.006 416S170.756 440 184.006 440H200.005V456C200.005 469.25 210.755 480 224.005 480C237.255 480 248.005 469.25 248.005 456V440H264.004C277.254 440 288.004 429.25 288.004 416S277.254 392 264.004 392Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M127.998 320H447.993C500.993 320 543.992 277 543.992 224S500.993 128 447.993 128C447.368 128 446.868 128.25 446.368 128.25C447.493 123 447.993 117.625 447.993 112C447.993 67.75 412.244 32 367.995 32C343.37 32 321.745 43.25 306.996 60.75C288.371 24.75 251.247 0 207.997 0C146.123 0 95.999 50.125 95.999 112C95.999 119.25 96.749 126.25 98.124 133.25C59.75 145.75 32 181.5 32 224C32 277 74.999 320 127.998 320Z" })
    ]
  }
));
CloudSleetDuotone.displayName = "CloudSleetDuotone";
var CloudSleet_default = CloudSleetDuotone;
