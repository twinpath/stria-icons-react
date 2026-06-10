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
var ArrowDownZA_exports = {};
__export(ArrowDownZA_exports, {
  default: () => ArrowDownZA_default
});
module.exports = __toCommonJS(ArrowDownZA_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDownZALight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M478.307 456.789L398.312 296.812C392.875 286 375.125 286 369.687 296.812L289.693 456.789C285.74 464.695 288.943 474.289 296.85 478.258C304.756 482.258 314.363 478.977 318.316 471.102L329.895 447.945H438.105L449.684 471.102C452.777 477.258 461.76 482.984 471.15 478.258C479.057 474.289 482.26 464.695 478.307 456.789ZM345.893 415.953L384 339.742L422.107 415.953H345.893ZM320.004 63.996H414.701L307.504 197.977C303.662 202.789 302.928 209.352 305.584 214.914C308.254 220.445 313.848 223.977 320.004 223.977H447.996C456.84 223.977 463.994 216.82 463.994 207.977S456.84 191.98 447.996 191.98H353.299L460.496 57.996C464.338 53.184 465.072 46.625 462.416 41.062C459.746 35.531 454.152 32 447.996 32H320.004C311.16 32 304.006 39.156 304.006 48C304.006 56.84 311.16 63.996 320.004 63.996ZM224 352C219.906 352 215.812 353.562 212.687 356.688L144 425.375V48C144 39.156 136.844 32 128 32S112 39.156 112 48V425.375L43.312 356.688C37.062 350.438 26.937 350.438 20.687 356.688S14.437 373.063 20.687 379.312L116.687 475.312C122.937 481.562 133.063 481.562 139.312 475.312L235.312 379.312C241.562 373.062 241.562 362.937 235.312 356.688C232.187 353.562 228.094 352 224 352Z" })
  }
));
ArrowDownZALight.displayName = "ArrowDownZALight";
var ArrowDownZA_default = ArrowDownZALight;
