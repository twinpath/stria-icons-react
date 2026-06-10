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
var Guitar_exports = {};
__export(Guitar_exports, {
  default: () => Guitar_default
});
module.exports = __toCommonJS(Guitar_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const GuitarDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M348.857 267.643C345.482 253.021 338.482 239.654 329.74 227.531L295.48 261.793C289.232 268.043 279.101 268.043 272.853 261.793L250.232 239.17C243.984 232.922 243.984 222.791 250.23 216.543L284.496 182.275L284.484 182.264C272.359 173.514 258.988 166.51 244.363 163.137C210.988 155.389 177.365 162.262 154.492 185.139C145.244 194.514 138.242 206.016 134.244 218.641C128.244 237.143 111.117 251.27 92.119 253.02C68.498 255.395 46.373 264.52 29.5 281.521C-16.121 327.023 -7.871 409.029 47.623 464.537C102.996 519.914 184.99 528.041 230.488 482.535C247.486 465.66 256.736 443.66 258.984 419.783C260.736 401.029 274.859 383.654 293.484 377.652C305.982 373.777 317.482 366.777 326.857 357.402C349.73 334.525 356.605 301.023 348.857 267.643ZM207.99 352.025C181.488 352.029 159.992 330.525 159.99 304.023C159.992 277.52 181.492 256.02 207.99 256.02C234.488 256.018 255.988 277.52 255.984 304.023C255.986 330.523 234.486 352.029 207.99 352.025Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M381.557 56.159L428.194 9.39C440.666 -3.118 460.92 -3.132 473.409 9.358L503.093 39.044C515.585 51.536 515.572 71.794 503.064 84.27L456.306 130.911C452.551 134.657 447.976 137.477 442.943 139.149L406.446 151.275L295.935 261.795C289.687 268.043 279.556 268.043 273.308 261.795L250.686 239.171C244.438 232.923 244.438 222.793 250.686 216.544L361.196 106.023L373.323 69.52C374.994 64.488 377.814 59.914 381.557 56.159Z" })
    ]
  }
));
GuitarDuotone.displayName = "GuitarDuotone";
var Guitar_default = GuitarDuotone;
