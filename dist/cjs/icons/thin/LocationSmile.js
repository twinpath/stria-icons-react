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
var LocationSmile_exports = {};
__export(LocationSmile_exports, {
  default: () => LocationSmile_default
});
module.exports = __toCommonJS(LocationSmile_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationSmileThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C86.375 0 0 86.367 0 191.988C0 268.734 25.625 291.23 172.75 502.344C177.562 508.781 184.781 512 192 512S206.438 508.781 211.25 502.344C358.375 291.23 384 268.734 384 191.988C384 86.367 297.625 0 192 0ZM198.436 492.762C196.33 495.578 193.5 496 192 496S187.67 495.578 185.877 493.195C163.381 460.914 143.723 433.039 126.561 408.703C32.881 275.871 16 251.934 16 191.988C16 94.949 94.953 16 192 16S368 94.949 368 191.988C368 251.934 351.121 275.871 257.441 408.703C240.277 433.039 220.619 460.914 198.436 492.762ZM128 176C136.838 176 144 168.836 144 160S136.838 144 128 144C119.164 144 112 151.164 112 160S119.164 176 128 176ZM256 176C264.838 176 272 168.836 272 160S264.838 144 256 144C247.164 144 240 151.164 240 160S247.164 176 256 176ZM281.094 251.969C262.062 284.547 228.766 304 192 304S121.938 284.547 102.906 251.969C100.672 248.141 95.734 246.828 91.969 249.094C88.156 251.312 86.859 256.219 89.094 260.031C111.016 297.578 149.484 320 192 320S272.984 297.578 294.906 260.031C297.141 256.219 295.844 251.313 292.031 249.094C288.203 246.828 283.328 248.141 281.094 251.969Z" })
  }
));
LocationSmileThin.displayName = "LocationSmileThin";
var LocationSmile_default = LocationSmileThin;
