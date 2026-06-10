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
const UmbrellaLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M288 288C279.156 288 272 295.156 272 304V448C272 465.656 257.656 480 240 480S208 465.656 208 448V432C208 423.156 200.844 416 192 416S176 423.156 176 432V448C176 483.281 204.719 512 240 512S304 483.281 304 448V304C304 295.156 296.844 288 288 288ZM575.701 280.848C545.764 138.115 424.801 55.652 304 48.904V16C304 7.156 296.844 0 288 0S272 7.156 272 16V48.863C177.402 54.791 36.008 114.035 0.295 280.848C-1.316 288.172 3.887 296.072 10.754 296.072C13.352 296.072 16.186 294.941 18.982 292.223C41.363 268.553 64.434 255.553 87.504 255.553C118.041 255.553 148.586 278.311 177.586 329.225C180.178 333.861 183.789 336.023 187.367 336.023C191.123 336.023 194.84 333.641 197.305 329.225C217.494 293.848 242.184 256.035 287.998 256.035C346.502 256.035 376.191 324.848 378.691 329.225C381.156 333.641 384.875 336.023 388.629 336.023C392.207 336.023 395.818 333.861 398.41 329.225C427.408 278.338 458.057 255.777 488.566 255.773H488.572C511.725 255.773 534.793 268.764 557.014 292.223C559.848 294.971 562.703 296.113 565.309 296.113C572.182 296.113 577.312 288.17 575.701 280.848ZM488.562 223.773C452.184 223.779 418.961 244.031 389.436 284.193C362.32 245.146 327.102 224.035 287.998 224.035C238.25 224.035 207.154 255.592 187.047 284.795C157.414 244.121 124.029 223.553 87.504 223.553C74.803 223.553 62.219 226.09 49.869 231.072C100.715 117.77 214.424 82.426 281.139 80.301C282.248 80.266 293.75 80.303 294.982 80.336C380.082 82.682 480.33 131.014 526.027 231.217C513.703 226.264 501.197 223.773 488.562 223.773Z" })
  }
));
UmbrellaLight.displayName = "UmbrellaLight";
var Umbrella_default = UmbrellaLight;
