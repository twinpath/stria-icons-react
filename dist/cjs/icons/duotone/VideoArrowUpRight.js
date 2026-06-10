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
var VideoArrowUpRight_exports = {};
__export(VideoArrowUpRight_exports, {
  default: () => VideoArrowUpRight_default
});
module.exports = __toCommonJS(VideoArrowUpRight_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const VideoArrowUpRightDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 64H48C21.49 64 0 85.49 0 112V400C0 426.51 21.49 448 48 448H336C362.51 448 384 426.51 384 400V112C384 85.49 362.51 64 336 64ZM304 280C304 293.25 293.25 304 280 304S256 293.25 256 280V225.938L120.969 360.969C116.281 365.656 110.156 368 104 368S91.719 365.656 87.031 360.969C77.656 351.594 77.656 336.406 87.031 327.031L222.062 192H168C154.75 192 144 181.25 144 168S154.75 144 168 144H280C293.25 144 304 154.75 304 168V280Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M280 144.035H168C154.75 144.035 144 154.785 144 168.037C144 181.287 154.75 192.039 168 192.039H222.063L87.031 327.078C77.656 336.453 77.656 351.643 87.031 361.018C91.719 365.705 97.844 368.049 104 368.049S116.281 365.705 120.969 361.018L256 225.979V280.043C256 293.295 266.75 304.045 280 304.045S304 293.295 304 280.043V168.037C304 154.785 293.25 144.035 280 144.035ZM525.594 101.736L416 177.334V334.75L525.594 410.254C546.813 424.85 576 409.957 576 384.457V127.535C576 102.127 546.906 87.125 525.594 101.736Z" })
    ]
  }
));
VideoArrowUpRightDuotone.displayName = "VideoArrowUpRightDuotone";
var VideoArrowUpRight_default = VideoArrowUpRightDuotone;
