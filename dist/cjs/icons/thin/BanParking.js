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
var BanParking_exports = {};
__export(BanParking_exports, {
  default: () => BanParking_default
});
module.exports = __toCommonJS(BanParking_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const BanParkingThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256C32 206.002 48.666 159.936 76.461 122.623L425.59 401.918C384.48 449.627 323.771 480 256 480ZM192 194.551V144H288C332.109 144 368 179.891 368 224C368 256.719 348.027 284.451 319.816 296.803L192 194.551ZM333.611 307.838C363.455 291.559 384 260.324 384 224C384 171.062 340.938 128 288 128H184C179.578 128 176 131.578 176 136V181.752L86.41 110.082C127.52 62.373 188.229 32 256 32C379.514 32 480 132.486 480 256C480 305.998 463.334 352.064 435.539 389.377L333.611 307.838ZM184 384C188.422 384 192 380.422 192 376V320H236.799L216.672 304H192V284.389L176 271.672V376C176 380.422 179.578 384 184 384Z" })
  }
));
BanParkingThin.displayName = "BanParkingThin";
var BanParking_default = BanParkingThin;
