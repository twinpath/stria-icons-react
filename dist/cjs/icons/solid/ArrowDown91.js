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
var ArrowDown91_exports = {};
__export(ArrowDown91_exports, {
  default: () => ArrowDown91_default
});
module.exports = __toCommonJS(ArrowDown91_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowDown91Solid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216.013 320.281C207.341 320.281 198.716 323.781 192.404 330.664L160 366.062V64.031C160 46.328 145.671 32 128 32S96 46.328 96 64.031V366.063L63.595 330.664C51.642 317.656 31.392 316.75 18.377 328.695C5.347 340.648 4.472 360.914 16.408 373.961L104.406 470.055C116.531 483.313 139.468 483.313 151.593 470.055L239.591 373.961C251.527 360.914 250.652 340.648 237.623 328.695C231.482 323.062 223.732 320.281 216.013 320.281ZM357.711 201.066L350.029 209.07C339.31 220.227 339.685 237.945 350.841 248.633C356.248 253.852 363.248 256.445 370.216 256.445C377.56 256.445 384.935 253.57 390.404 247.82C460.015 175.289 480 162.43 480 120C480 71.398 440.599 32 391.998 32S303.998 71.398 303.998 120C303.998 156.438 326.144 187.699 357.711 201.066ZM391.998 96C405.232 96 416 106.766 416 120S405.232 144 391.998 144S367.998 133.234 367.998 120S378.763 96 391.998 96ZM415.998 416.445V320.43C415.998 309.242 410.154 298.898 400.623 293.086C391.091 287.305 379.216 286.898 369.279 292.023L337.279 308.617C321.591 316.742 315.466 336.055 323.591 351.746C329.279 362.75 340.435 369.031 351.998 369.031V416.445C334.31 416.445 319.998 430.758 319.998 448.445S334.31 480.445 351.998 480.445H415.998C433.685 480.445 447.998 466.133 447.998 448.445S433.685 416.445 415.998 416.445Z" })
  }
));
ArrowDown91Solid.displayName = "ArrowDown91Solid";
var ArrowDown91_default = ArrowDown91Solid;
