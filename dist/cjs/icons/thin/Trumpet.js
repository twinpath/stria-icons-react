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
var Trumpet_exports = {};
__export(Trumpet_exports, {
  default: () => Trumpet_default
});
module.exports = __toCommonJS(Trumpet_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const TrumpetThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M8 160C3.594 160 0 163.578 0 168V296C0 300.422 3.594 304 8 304S16 300.422 16 296V168C16 163.578 12.406 160 8 160ZM608 64C597.773 64 588.078 68.939 582.059 77.215C526.275 149.832 482.994 172.711 468.773 180.229C453.809 188.055 436.168 192 416.25 192H376V160C376 155.578 372.406 152 368 152S360 155.578 360 160V192H280V160C280 155.578 276.406 152 272 152S264 155.578 264 160V192H184V160C184 155.578 180.406 152 176 152S168 155.578 168 160V192H56C51.582 192 48 195.582 48 200S51.582 208 56 208H416.25C450.5 208 470.75 197.25 476.25 194.375C497.562 183.107 540.857 157.113 595 86.625C598 82.5 602.875 80 608 80C613.25 80 624 84 624 96V368C624 373 620.125 384 608 384C602.625 384 597.625 381.375 594.75 376.875C587.746 369.871 543.736 305.777 476.25 269.625C470.625 266.625 450.5 256 416 256H56C51.582 256 48 259.582 48 264S51.582 272 56 272H96.438C77.195 286.33 64.451 308.904 64.012 334.629C63.25 379.381 101.969 416 146.729 416H397.49C440.006 416 476.996 383.883 479.818 341.459C481.437 317.105 472.127 294.916 456.34 279.244C460.479 280.732 464.984 281.75 468.721 283.742C522.508 312.557 561.459 361.184 576.121 379.49C578.699 382.705 580.727 385.184 582.148 386.797C588.051 395.094 597.602 400 608 400C627.766 400 640 383.389 640 368V96C640 76.234 623.391 64 608 64ZM168 400H144C108.711 400 80 371.289 80 336C80 300.709 108.711 272 144 272H168V400ZM264 400H184V272H264V400ZM360 400H280V272H360V400ZM464 336C464 371.289 435.289 400 400 400H376V272H400C435.289 272 464 300.709 464 336Z" })
  }
));
TrumpetThin.displayName = "TrumpetThin";
var Trumpet_default = TrumpetThin;
