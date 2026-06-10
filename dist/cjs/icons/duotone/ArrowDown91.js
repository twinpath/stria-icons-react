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
const ArrowDown91Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M357.713 201.066L350.031 209.07C339.312 220.227 339.687 237.945 350.844 248.633C356.25 253.852 363.25 256.445 370.219 256.445C377.562 256.445 384.937 253.57 390.406 247.82C460.018 175.289 480.002 162.43 480.002 120C480.002 71.398 440.602 32 392 32S304 71.398 304 120C304 156.438 326.146 187.699 357.713 201.066ZM392 96C405.234 96 416.002 106.766 416.002 120S405.234 144 392 144S368 133.234 368 120S378.766 96 392 96ZM416 416.445V320.43C416 309.242 410.156 298.898 400.625 293.086C391.094 287.305 379.219 286.898 369.281 292.023L337.281 308.617C321.594 316.742 315.469 336.055 323.594 351.746C329.281 362.75 340.438 369.031 352 369.031V416.445C334.312 416.445 320 430.758 320 448.445S334.312 480.445 352 480.445H416C433.688 480.445 448 466.133 448 448.445S433.688 416.445 416 416.445Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M237.623 328.695C250.652 340.648 251.527 360.914 239.591 373.961L151.593 470.055C139.468 483.312 116.531 483.312 104.406 470.055L16.408 373.961C4.472 360.914 5.347 340.648 18.377 328.695C31.392 316.75 51.642 317.656 63.595 330.664L96 366.062V64.031C96 46.328 110.328 32 128 32S160 46.328 160 64.031V366.063L192.404 330.664C198.716 323.781 207.341 320.281 216.013 320.281C223.732 320.281 231.482 323.062 237.623 328.695Z" })
    ]
  }
));
ArrowDown91Duotone.displayName = "ArrowDown91Duotone";
var ArrowDown91_default = ArrowDown91Duotone;
