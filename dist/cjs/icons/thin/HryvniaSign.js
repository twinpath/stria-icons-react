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
var HryvniaSign_exports = {};
__export(HryvniaSign_exports, {
  default: () => HryvniaSign_default
});
module.exports = __toCommonJS(HryvniaSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const HryvniaSignThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 384 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M384 296C384 300.422 380.422 304 376 304H121.666L107.781 311.672C80.359 326.812 64 352.969 64 381.625C64 427.047 105.578 464 156.672 464H206.047C241.703 464 276.578 451.062 301.734 428.484C305.016 425.516 310.063 425.766 313.031 429.094C315.984 432.375 315.703 437.438 312.422 440.391C283.953 465.938 246.188 480 206.047 480H156.672C96.75 480 48 435.875 48 381.625C48 351.256 63.916 322.463 90.102 304H8C3.578 304 0 300.422 0 296S3.578 288 8 288H117.537L262.334 208H8C3.578 208 0 204.422 0 200S3.578 192 8 192H287.758C307.85 176.498 320 154.541 320 130.375C320 84.953 278.422 48 227.328 48H177.953C142.297 48 107.422 60.938 82.266 83.516C78.953 86.438 73.906 86.188 70.969 82.906C68.016 79.625 68.297 74.562 71.578 71.609C100.047 46.062 137.812 32 177.953 32H227.328C287.25 32 336 76.125 336 130.375C336 153.018 327.041 174.719 311.707 192H376C380.422 192 384 195.578 384 200S380.422 208 376 208H293.898C290.715 210.244 287.447 212.408 283.969 214.328L150.627 288H376C380.422 288 384 291.578 384 296Z" })
  }
));
HryvniaSignThin.displayName = "HryvniaSignThin";
var HryvniaSign_default = HryvniaSignThin;
