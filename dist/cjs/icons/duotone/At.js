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
var At_exports = {};
__export(At_exports, {
  default: () => At_default
});
module.exports = __toCommonJS(At_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AtDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M495.999 256.274V277.112C495.999 323.847 466.727 367.455 421.774 380.238C408.821 383.922 396.132 384.973 383.999 384.033V318.726C386.671 319.291 389.163 320.347 391.999 320.347C414.062 320.347 431.999 302.389 431.999 280.301L431.999 264.138C431.999 172.171 364.975 89.788 273.437 80.92C168.609 70.764 79.999 153.356 79.999 256.274C79.999 344.157 144.612 417.22 228.761 430.367C244.382 432.808 255.999 445.992 255.999 461.802V461.802C255.999 481.318 238.581 496.717 219.293 493.742C89.137 473.663 -6.847 348.524 20.757 207.841C39.093 114.392 114.33 39.047 207.782 20.731C361.162 -9.332 495.999 107.993 495.999 256.274Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 318.726C365.896 314.901 352 299.55 352 280.301V160.164C352 151.318 344.836 144.146 336 144.146H304C296.701 144.146 290.797 149.138 288.875 155.827C274.051 148.577 257.609 144.146 240 144.146C178.145 144.146 128 194.348 128 256.274S178.145 368.402 240 368.402C266.436 368.402 290.408 358.85 309.566 343.514C327.062 366.329 353.729 381.686 384 384.033V318.726ZM240 304.329C213.533 304.329 192 282.771 192 256.274S213.533 208.219 240 208.219S288 229.777 288 256.274S266.467 304.329 240 304.329Z" })
    ]
  }
));
AtDuotone.displayName = "AtDuotone";
var At_default = AtDuotone;
