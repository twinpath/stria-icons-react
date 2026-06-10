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
var AirConditioner_exports = {};
__export(AirConditioner_exports, {
  default: () => AirConditioner_default
});
module.exports = __toCommonJS(AirConditioner_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AirConditionerThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M512 0.001H64C28.654 0.001 0 28.655 0 64.001V160.001C0 195.347 28.654 224.001 64 224.001H512C547.346 224.001 576 195.347 576 160.001V64.001C576 28.655 547.346 0.001 512 0.001ZM560 160.001C560 186.51 538.51 208.001 512 208.001H64C37.49 208.001 16 186.51 16 160.001V64.001C16 37.491 37.49 16.001 64 16.001H512C538.51 16.001 560 37.491 560 64.001V160.001ZM504 128.001H72C67.578 128.001 64 131.579 64 136.001S67.578 144.001 72 144.001H504C508.422 144.001 512 140.423 512 136.001S508.422 128.001 504 128.001ZM248 256.001C243.578 256.001 240 259.579 240 264.001V424.001C240 463.704 207.703 496.001 168 496.001S96 463.704 96 424.001V416.001C96 380.704 124.703 352.001 160 352.001C164.422 352.001 168 348.423 168 344.001S164.422 336.001 160 336.001C115.891 336.001 80 371.891 80 416.001V424.001C80 472.532 119.469 512.001 168 512.001S256 472.532 256 424.001V264.001C256 259.579 252.422 256.001 248 256.001ZM416 304.001C411.578 304.001 408 307.579 408 312.001S411.578 320.001 416 320.001C451.297 320.001 480 348.704 480 384.001V392.001C480 431.704 447.703 464.001 408 464.001S336 431.704 336 392.001V264.001C336 259.579 332.422 256.001 328 256.001S320 259.579 320 264.001V392.001C320 440.532 359.469 480.001 408 480.001S496 440.532 496 392.001V384.001C496 339.891 460.109 304.001 416 304.001Z" })
  }
));
AirConditionerThin.displayName = "AirConditionerThin";
var AirConditioner_default = AirConditionerThin;
