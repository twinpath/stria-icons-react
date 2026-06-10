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
var Club_exports = {};
__export(Club_exports, {
  default: () => Club_default
});
module.exports = __toCommonJS(Club_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ClubLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M374.459 176.156C380.518 161.273 384 145.061 384 128C384 57.307 326.693 0 256 0S128 57.307 128 128C128 145.061 131.482 161.273 137.541 176.156C60.014 175.295 0 237.852 0 312C0 387.109 60.889 448 136 448C178.125 448 215.211 428.467 240 398.297V480H176C167.164 480 160 487.162 160 496C160 504.836 167.164 512 176 512H336C344.836 512 352 504.836 352 496C352 487.162 344.836 480 336 480H272V398.297C296.789 428.467 333.875 448 376 448C451.111 448 512 387.109 512 312C512 237.783 451.912 175.295 374.459 176.156ZM376 416C337.611 416 302.49 394.49 284.344 359.865C278.799 349.291 267.939 342.723 256 342.723S233.199 349.293 227.656 359.867C209.51 394.49 174.389 415.998 136.002 415.998C75.326 415.998 35.607 366.977 32.266 319.518C27.881 257.279 77.953 208.385 134.162 208.006C135.455 208.172 161.377 208.418 161.436 208.418C172.834 208.418 180.516 196.854 176.256 186.385C169.281 169.252 160 151.4 160 128C160 75.064 203.066 32 256 32C308.936 32 352 75.064 352 128C352 151.971 343.146 168.203 335.746 186.385C331.455 196.922 339.246 208.418 350.564 208.418C350.623 208.418 350.682 208.418 350.74 208.416C378.738 208.094 377.568 208.018 377.621 208.014C428.969 208.816 484.486 252.318 479.734 319.549C476.367 367.135 436.402 416 376 416Z" })
  }
));
ClubLight.displayName = "ClubLight";
var Club_default = ClubLight;
