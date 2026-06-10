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
var ArrowUpAZ_exports = {};
__export(ArrowUpAZ_exports, {
  default: () => ArrowUpAZ_default
});
module.exports = __toCommonJS(ArrowUpAZ_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUpAZLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M478.307 200.383L398.309 40.125C392.871 29.289 375.121 29.289 369.684 40.125L289.686 200.383C285.732 208.305 288.936 217.914 296.842 221.891C304.748 225.895 314.357 222.609 318.311 214.719L329.889 191.527H438.104L449.682 214.719C452.777 220.887 461.76 226.625 471.15 221.891C479.057 217.914 482.26 208.305 478.307 200.383ZM345.887 159.477L383.996 83.133L422.105 159.477H345.887ZM447.994 447.945H353.293L460.494 313.727C464.338 308.906 465.072 302.336 462.416 296.762C459.744 291.219 454.15 287.684 447.994 287.684H319.998C311.154 287.684 303.998 294.852 303.998 303.711S311.154 319.734 319.998 319.734H414.699L307.498 453.957C303.654 458.777 302.92 465.352 305.576 470.922C308.248 476.461 313.842 480 319.998 480H447.994C456.838 480 463.994 472.832 463.994 463.973C463.994 455.117 456.838 447.945 447.994 447.945ZM139.312 36.688C133.062 30.438 122.937 30.438 116.688 36.688L20.688 132.688C14.438 138.938 14.438 149.063 20.688 155.312S37.063 161.562 43.312 155.312L112 86.625V464C112 472.844 119.156 480 128 480S144 472.844 144 464V86.625L212.688 155.312C215.812 158.438 219.906 160 224 160S232.188 158.438 235.312 155.312C241.562 149.062 241.562 138.937 235.312 132.688L139.312 36.688Z" })
  }
));
ArrowUpAZLight.displayName = "ArrowUpAZLight";
var ArrowUpAZ_default = ArrowUpAZLight;
