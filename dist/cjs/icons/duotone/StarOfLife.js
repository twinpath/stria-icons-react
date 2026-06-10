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
var StarOfLife_exports = {};
__export(StarOfLife_exports, {
  default: () => StarOfLife_default
});
module.exports = __toCommonJS(StarOfLife_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const StarOfLifeDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M208.182 172.922L79.064 98.23C67.576 91.586 52.874 95.518 46.24 107.01L22.217 148.623C15.6 160.088 19.516 174.742 30.973 181.381L159.749 256L208.182 227.93V172.922ZM208.174 339.092V488C208.174 501.254 218.924 512 232.186 512H280.205C293.467 512 304.216 501.254 304.216 488V339.078L256.205 311.305L208.174 339.092ZM490.181 148.609L466.16 106.994C459.526 95.502 444.822 91.57 433.334 98.217L304.226 172.908V227.939L352.651 256L481.427 181.365C492.884 174.727 496.8 160.072 490.181 148.609Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M490.181 363.377L466.159 404.991C459.526 416.483 444.822 420.415 433.334 413.769L256.204 311.304L79.066 413.783C67.578 420.43 52.874 416.498 46.24 405.006L22.218 363.391C15.6 351.928 19.516 337.274 30.971 330.635L208.183 227.93V24C208.183 10.745 218.933 0 232.194 0H280.214C293.475 0 304.225 10.745 304.225 24V227.94L481.426 330.619C492.882 337.258 496.799 351.913 490.181 363.377Z" })
    ]
  }
));
StarOfLifeDuotone.displayName = "StarOfLifeDuotone";
var StarOfLife_default = StarOfLifeDuotone;
