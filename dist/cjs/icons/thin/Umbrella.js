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
var Umbrella_exports = {};
__export(Umbrella_exports, {
  default: () => Umbrella_default
});
module.exports = __toCommonJS(Umbrella_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UmbrellaThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 576 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M287.998 288.062C283.592 288.062 279.998 291.656 279.998 296.062V452C279.998 476.25 260.248 496 235.998 496S191.998 476.25 191.998 452V424C191.998 419.594 188.404 416 183.998 416S175.998 419.594 175.998 424V452C175.998 485.094 202.904 512 235.998 512S295.998 485.094 295.998 452V296.062C295.998 291.656 292.404 288.062 287.998 288.062ZM575.701 280.863C545.09 134.9 419.324 51.729 295.863 48.324C295.869 48.199 295.998 48.127 295.998 48V8C295.998 3.594 292.404 0 287.998 0S279.998 3.594 279.998 8V48C279.998 48.113 280.115 48.18 280.119 48.293C185.705 51.301 37.027 109.266 0.295 280.863C-1.316 288.188 3.887 296.09 10.754 296.09C13.352 296.09 16.186 294.959 18.982 292.24C41.363 268.566 64.434 255.564 87.504 255.564C118.041 255.564 148.586 278.326 177.586 329.248C180.178 333.885 183.789 336.049 187.367 336.049C191.123 336.049 194.84 333.664 197.305 329.248C217.494 293.865 242.184 256.047 287.998 256.047C346.502 256.047 376.191 324.871 378.691 329.248C381.156 333.664 384.875 336.049 388.629 336.049C392.207 336.049 395.818 333.885 398.41 329.248C427.408 278.354 458.057 255.789 488.566 255.785C511.721 255.783 534.791 268.775 557.014 292.24C559.848 294.988 562.703 296.131 565.309 296.131C572.182 296.131 577.313 288.186 575.701 280.863ZM488.566 239.785C452.197 239.789 418.734 264.633 388.832 313.961C363.361 266.225 327.754 240.047 287.998 240.047C234.156 240.047 205.281 283.562 187.404 314.352C157.518 264.717 123.936 239.564 87.504 239.564C64.555 239.564 41.654 249.672 19.469 269.428C62.24 107.412 212.455 64 287.998 64C393.187 64 519.645 128.42 556.604 269.557C534.328 249.787 511.498 239.785 488.566 239.785Z" })
  }
));
UmbrellaThin.displayName = "UmbrellaThin";
var Umbrella_default = UmbrellaThin;
