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
var ArrowUp91_exports = {};
__export(ArrowUp91_exports, {
  default: () => ArrowUp91_default
});
module.exports = __toCommonJS(ArrowUp91_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ArrowUp91Duotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M216.013 181.773C207.341 181.773 198.716 178.273 192.404 171.391L160 135.992V438.023C160 455.727 145.671 470.055 128 470.055S96 455.727 96 438.023V135.992L63.595 171.391C51.642 184.398 31.392 185.305 18.377 173.359C5.347 161.406 4.472 141.141 16.408 128.094L104.406 32C116.531 18.742 139.468 18.742 151.593 32L239.591 128.094C251.527 141.141 250.652 161.406 237.623 173.359C231.482 178.992 223.732 181.773 216.013 181.773Z" })
    ]
  }
));
ArrowUp91Duotone.displayName = "ArrowUp91Duotone";
var ArrowUp91_default = ArrowUp91Duotone;
