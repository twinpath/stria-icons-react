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
var Screencast_exports = {};
__export(Screencast_exports, {
  default: () => Screencast_default
});
module.exports = __toCommonJS(Screencast_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const ScreencastLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M15.982 320.223C7.148 320.223 0 327.367 0 336.199S7.148 352.18 15.982 352.18C77.666 352.18 127.861 402.359 127.861 464.023C127.861 472.852 135.01 480 143.844 480S159.826 472.852 159.826 464.023C159.826 384.727 95.303 320.223 15.982 320.223ZM32.59 415.465C14.936 415.465 0.625 429.773 0.625 447.422C0.625 465.066 14.936 479.375 32.59 479.375S64.555 465.066 64.555 447.422C64.555 429.773 50.244 415.465 32.59 415.465ZM16.607 223.734C7.773 223.734 0.625 230.879 0.625 239.711C0.625 248.539 7.773 255.688 16.607 255.688C131.17 255.688 224.381 348.867 224.381 463.398C224.381 472.227 231.529 479.375 240.363 479.375C249.199 479.375 256.348 472.227 256.348 463.398C256.348 331.238 148.807 223.734 16.607 223.734ZM509.072 32H67.551C30.654 32 0.625 62.457 0.625 99.906V159.82C0.625 168.652 7.773 175.797 16.607 175.797S32.59 168.652 32.59 159.82V99.906C32.59 80.086 48.26 63.953 67.551 63.953H509.072C528.363 63.953 544.035 80.086 544.035 99.906V411.469C544.035 431.289 528.363 447.422 509.072 447.422H320.277C311.443 447.422 304.295 454.566 304.295 463.398C304.295 472.227 311.443 479.375 320.277 479.375H509.072C545.971 479.375 576 448.918 576 411.469V99.906C576 62.457 545.971 32 509.072 32Z" })
  }
));
ScreencastLight.displayName = "ScreencastLight";
var Screencast_default = ScreencastLight;
