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
var Hands_exports = {};
__export(Hands_exports, {
  default: () => Hands_default
});
module.exports = __toCommonJS(Hands_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HandsDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M202.453 99.736C186.941 101.543 177.66 116.729 182.121 130.848L197.478 179.457C203.464 177.309 209.8 175.975 216.462 175.975C221.97 175.975 227.451 176.785 232.958 178.445L249.068 183.42L228.164 117.248C224.665 106.18 213.982 98.393 202.453 99.736ZM487.527 144.545C474.253 144.643 463.576 155.455 463.664 168.701L461.581 218.746L401.605 28.896C398.109 17.828 387.423 10.041 375.894 11.385C360.382 13.191 351.103 28.377 355.562 42.496L394.121 164.551C395.453 168.764 393.117 173.258 388.902 174.588C384.689 175.92 380.195 173.584 378.865 169.371L330.937 17.662C327.441 6.596 316.755 -1.193 305.228 0.15C289.716 1.957 280.435 17.143 284.896 31.262L328.263 169.055C329.593 173.268 327.257 177.762 323.044 179.092C318.831 180.424 314.337 178.088 313.005 173.875L279.55 67.455C276.054 56.389 265.369 48.6 253.839 49.943C238.328 51.75 229.048 66.936 233.507 81.055L267.662 189.16L341.363 211.916C405.4 233.275 448.425 292.756 448.425 359.928V387.838C486.699 366.67 511.701 326.6 512.425 281.141V168.41C512.249 155.094 500.751 144.498 487.527 144.545Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M330.812 242.312L223.093 209.062C210.343 205.219 196.999 212.281 193.062 224.906C189.156 237.594 196.249 251.031 208.906 254.937L255.999 272H56.902C45.294 272 34.65 279.844 32.458 291.24C29.509 306.576 41.193 320 55.999 320H183.999C188.417 320 191.999 323.582 191.999 328S188.417 336 183.999 336H24.902C13.294 336 2.65 343.844 0.458 355.24C-2.491 370.576 9.193 384 23.999 384H183.999C188.417 384 191.999 387.582 191.999 392S188.417 400 183.999 400H56.902C45.294 400 34.65 407.844 32.458 419.24C29.509 434.576 41.193 448 55.999 448H183.999C188.417 448 191.999 451.582 191.999 456S188.417 464 183.999 464H88.902C77.294 464 66.65 471.844 64.458 483.24C61.509 498.576 73.193 512 87.999 512H295.999C362.275 512 415.999 458.273 415.999 392V359.969C415.999 306.594 381.968 259.375 330.812 242.312Z" })
    ]
  }
));
HandsDuotone.displayName = "HandsDuotone";
var Hands_default = HandsDuotone;
