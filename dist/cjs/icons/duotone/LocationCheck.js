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
var LocationCheck_exports = {};
__export(LocationCheck_exports, {
  default: () => LocationCheck_default
});
module.exports = __toCommonJS(LocationCheck_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const LocationCheckDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
    children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M192 0C85.969 0 0 85.969 0 192.001C0 269.408 26.969 291.033 172.281 501.676C181.813 515.441 202.188 515.441 211.719 501.676C357.031 291.033 384 269.408 384 192.001C384 85.969 298.031 0 192 0ZM293.922 166.857L176.783 283.283C170.457 289.571 160.205 289.571 153.879 283.283L90.078 219.865C83.752 213.584 83.752 203.388 90.078 197.099L101.52 185.724C107.848 179.435 118.107 179.435 124.434 185.724L165.328 226.375L259.566 132.712C265.895 126.425 276.143 126.425 282.469 132.712L293.922 144.091C300.25 150.38 300.25 160.573 293.922 166.857Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M293.588 166.857L176.45 283.283C170.124 289.571 159.872 289.571 153.545 283.283L89.745 219.865C83.418 213.584 83.418 203.388 89.745 197.099L101.186 185.724C107.514 179.435 117.774 179.435 124.1 185.724L164.995 226.375L259.233 132.712C265.561 126.425 275.809 126.425 282.135 132.712L293.588 144.091C299.917 150.38 299.917 160.573 293.588 166.857Z" })
    ]
  }
));
LocationCheckDuotone.displayName = "LocationCheckDuotone";
var LocationCheck_default = LocationCheckDuotone;
