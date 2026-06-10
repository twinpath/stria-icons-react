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
var AnglesLeft_exports = {};
__export(AnglesLeft_exports, {
  default: () => AnglesLeft_default
});
module.exports = __toCommonJS(AnglesLeft_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const AnglesLeftDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M405.014 380.5L287.086 256L405.014 131.5C420.23 115.5 419.543 90.094 403.482 74.969C387.453 59.781 362.143 60.437 346.955 76.5L202.967 228.5C195.656 236.219 192 246.094 192 256S195.656 275.781 202.967 283.5L346.955 435.5C362.143 451.562 387.453 452.219 403.482 437.031C419.574 421.812 420.262 396.469 405.014 380.5Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M95.086 256L213.014 131.5C228.23 115.5 227.543 90.094 211.482 74.969C195.453 59.781 170.143 60.437 154.955 76.5L10.969 228.5C3.656 236.219 0 246.094 0 256S3.656 275.781 10.969 283.5L154.955 435.5C170.143 451.562 195.453 452.219 211.482 437.031C227.574 421.813 228.262 396.469 213.014 380.5L95.086 256Z" })
    ]
  }
));
AnglesLeftDuotone.displayName = "AnglesLeftDuotone";
var AnglesLeft_default = AnglesLeftDuotone;
