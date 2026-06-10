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
var EuroSign_exports = {};
__export(EuroSign_exports, {
  default: () => EuroSign_default
});
module.exports = __toCommonJS(EuroSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const EuroSignDuotone = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M312 208C312 190.312 297.672 176 280 176H152.242C139.441 195.066 132.111 216.994 129.563 240H280C297.672 240 312 225.688 312 208ZM24 304C24 321.688 38.328 336 56 336H62.871C55.268 316.096 50.51 295.1 48.85 273.441C34.729 276.768 24 288.852 24 304ZM280 272H129.563C132.111 295.006 139.438 316.934 152.234 336H280C297.672 336 312 321.688 312 304S297.672 272 280 272ZM24 208C24 223.148 34.729 235.23 48.85 238.557C50.51 216.9 55.268 195.904 62.873 176H56C38.328 176 24 190.312 24 208Z", className: "stria-secondary", style: { opacity: 0.4 } }),
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.047 426.969C355.828 448.531 342.219 469.906 320.656 474.687C304.328 478.281 287.906 480.062 271.625 480.062C212.906 480.062 156.219 457 113.594 414.375C71.297 372.094 48 315.844 48 256S71.297 139.906 113.609 97.625C168.031 43.156 245.391 20.781 320.656 37.312C342.219 42.094 355.828 63.469 351.047 85.031C346.281 106.594 325.047 120.062 303.344 115.437C254.937 104.656 205.187 119.156 170.187 154.187C142.969 181.375 128 217.531 128 256S142.969 330.625 170.172 357.812C205.156 392.812 254.891 407.312 303.344 396.562C324.844 391.844 346.281 405.406 351.047 426.969Z" })
    ]
  }
));
EuroSignDuotone.displayName = "EuroSignDuotone";
var EuroSign_default = EuroSignDuotone;
