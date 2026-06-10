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
var Motorcycle_exports = {};
__export(Motorcycle_exports, {
  default: () => Motorcycle_default
});
module.exports = __toCommonJS(Motorcycle_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MotorcycleLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M128 224C57.309 224 0 281.307 0 352C0 422.691 57.309 480 128 480C198.693 480 256 422.691 256 352C256 281.307 198.693 224 128 224ZM128 376C135.049 376 141.234 372.84 145.625 368H222.383C214.711 413.305 175.457 448 128 448C75.066 448 32 404.934 32 352C32 299.064 75.066 256 128 256C175.457 256 214.711 290.693 222.383 336H145.625C141.234 331.162 135.049 328 128 328C114.746 328 104 338.744 104 352C104 365.254 114.746 376 128 376ZM512 224C496.17 224 481.18 227.25 467.186 232.504L412.184 128H470.453C493.359 128 512 109.359 512 86.453V73.547C512 50.641 493.359 32 470.453 32C452.359 32 434.609 38.234 420.469 49.531L385.576 77.443L366.156 40.547C363.391 35.297 357.938 32 352 32H272C263.156 32 256 39.156 256 48S263.156 64 272 64H342.344L360.133 97.799L238.363 195.209C207.098 173.137 169.096 160 128 160H48C39.156 160 32 167.156 32 176S39.156 192 48 192H128C216.219 192 288 263.781 288 352C288 360.844 295.156 368 304 368H336C344.844 368 352 360.844 352 352C352 298.139 379.377 248.385 423.855 218.873L438.777 247.227C405.729 270.371 384 308.59 384 352C384 422.691 441.309 480 512 480C582.693 480 640 422.691 640 352C640 281.307 582.693 224 512 224ZM440.469 74.531C448.953 67.734 459.594 64 470.453 64C475.719 64 480 68.281 480 73.547V86.453C480 91.719 475.719 96 470.453 96H413.625L440.469 74.531ZM320.672 336H319.344C315.475 289.326 294.701 247.471 263.352 216.219L375.312 126.641L408.893 190.445C358.414 222.725 325.645 276.498 320.672 336ZM512 448C459.066 448 416 404.934 416 352C416 320.969 431.041 293.619 453.953 276.059L497.844 359.453C500.703 364.891 506.266 368 512.016 368C514.531 368 517.078 367.406 519.453 366.156C527.266 362.047 530.281 352.375 526.156 344.547L482.283 261.187C491.697 258.094 501.564 256 512 256C564.936 256 608 299.064 608 352C608 404.934 564.936 448 512 448Z" })
  }
));
MotorcycleLight.displayName = "MotorcycleLight";
var Motorcycle_default = MotorcycleLight;
