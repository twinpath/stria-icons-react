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
var SignalStreamSlash_exports = {};
__export(SignalStreamSlash_exports, {
  default: () => SignalStreamSlash_default
});
module.exports = __toCommonJS(SignalStreamSlash_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignalStreamSlashDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M96 256C96 230.254 100.246 205.281 108.506 181.738L56.209 140.75C40.447 176.896 32 216.178 32 256C32 321.281 54.438 385.219 95.188 436.031C101.516 443.906 110.797 448 120.172 448C127.203 448 134.266 445.688 140.172 440.969C153.969 429.906 156.172 409.75 145.125 395.969C112.984 355.906 96 307.5 96 256ZM192.426 247.512L150.01 214.27C137.012 264.258 147.23 320.471 181.844 359.844C186.582 365.25 193.229 368 199.906 368C205.521 368 211.182 366.031 215.748 362.031C225.711 353.281 226.697 338.125 217.939 328.156C198.551 306.102 190.314 276.406 192.426 247.512ZM424.252 149.971C414.289 158.721 413.303 173.877 422.061 183.846C453.066 219.117 456.443 273.934 432.469 313.652L470.125 343.166C507.602 285.717 503.926 204.221 458.156 152.158C449.43 142.191 434.26 141.223 424.252 149.971ZM544.812 75.965C533.719 62.184 513.578 59.996 499.828 71.027C486.031 82.09 483.828 102.246 494.875 116.027C527.016 156.09 544 204.496 544 256C544 298.572 531.779 338.729 509.6 374.105L560.623 414.096C591.27 367.393 608 312.221 608 256C608 190.715 585.562 126.777 544.812 75.965ZM320 200C311.051 200 302.703 202.307 295.191 206.057L374.553 268.258C375.443 264.301 376 260.223 376 256C376 225.125 350.875 200 320 200Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M630.813 469.11L38.812 5.114C28.343 -3.058 13.312 -1.246 5.109 9.192C-3.063 19.629 -1.235 34.723 9.187 42.894L601.188 506.891C605.594 510.328 610.797 512 615.985 512C623.11 512 630.157 508.844 634.891 502.813C643.063 492.375 641.235 477.282 630.813 469.11Z" })
    ]
  }
));
SignalStreamSlashDuotone.displayName = "SignalStreamSlashDuotone";
var SignalStreamSlash_default = SignalStreamSlashDuotone;
