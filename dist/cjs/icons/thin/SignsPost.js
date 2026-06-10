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
var SignsPost_exports = {};
__export(SignsPost_exports, {
  default: () => SignsPost_default
});
module.exports = __toCommonJS(SignsPost_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SignsPostThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M441.438 160C449.937 160 458.062 156.625 464.062 150.625L507.312 107.375C513.562 101 513.562 91 507.312 84.75L464.062 41.375C458.062 35.375 449.937 32 441.438 32H264V8C264 3.578 260.422 0 256 0S248 3.578 248 8V32H55.938C42.688 32 31.938 42.75 31.938 56V136C31.938 149.25 42.688 160 55.938 160H248V224H70.562C62.062 224 53.938 227.375 47.938 233.375L4.688 276.75C-1.563 283 -1.563 293.125 4.688 299.375L47.938 342.625C53.938 348.625 62.062 352 70.562 352H248V504C248 508.422 251.578 512 256 512S264 508.422 264 504V352H455.937C469.187 352 479.937 341.25 479.937 328V248C479.937 234.75 469.187 224 455.937 224H264V160H441.438ZM455.937 240C460.35 240 463.937 243.59 463.937 248V328C463.937 332.41 460.35 336 455.937 336H70.562C66.293 336 62.275 334.336 59.252 331.312L16.018 288.047L59.252 244.687C62.275 241.664 66.293 240 70.562 240H455.937ZM55.938 144C51.527 144 47.938 140.41 47.938 136V56C47.938 51.59 51.527 48 55.938 48H441.438C445.709 48 449.727 49.664 452.732 52.672L496 96.062L452.75 139.312C449.727 142.336 445.709 144 441.438 144H55.938Z" })
  }
));
SignsPostThin.displayName = "SignsPostThin";
var SignsPost_default = SignsPostThin;
