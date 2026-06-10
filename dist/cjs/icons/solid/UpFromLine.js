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
var UpFromLine_exports = {};
__export(UpFromLine_exports, {
  default: () => UpFromLine_default
});
module.exports = __toCommonJS(UpFromLine_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpFromLineSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M352 416H32C14.327 416 0 430.327 0 448V448C0 465.673 14.327 480 32 480H352C369.673 480 384 465.673 384 448V448C384 430.327 369.673 416 352 416ZM56 223.817H128V351.908C128 369.595 142.328 383.931 160 383.931H224C241.674 383.931 256 369.595 256 351.908V223.817H328C337.578 223.817 346.25 218.11 350.047 209.306C353.828 200.503 352.031 190.277 345.453 183.303L209.453 39.2C200.391 29.6 183.609 29.6 174.547 39.2L38.547 183.303C31.969 190.277 30.172 200.503 33.953 209.306C37.75 218.11 46.422 223.817 56 223.817Z" })
  }
));
UpFromLineSolid.displayName = "UpFromLineSolid";
var UpFromLine_default = UpFromLineSolid;
