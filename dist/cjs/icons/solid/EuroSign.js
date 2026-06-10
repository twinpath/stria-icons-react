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
const EuroSignSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M351.047 426.969C355.828 448.531 342.219 469.906 320.656 474.687C304.328 478.281 287.906 480.062 271.625 480.062C212.906 480.062 156.219 457 113.594 414.375C90.957 391.746 73.965 365.039 62.871 336H56C38.328 336 24 321.688 24 304C24 288.852 34.729 276.768 48.85 273.441C48.406 267.656 48 261.863 48 256S48.406 244.342 48.85 238.557C34.729 235.23 24 223.148 24 208C24 190.312 38.328 176 56 176H62.873C73.969 146.961 90.965 120.254 113.609 97.625C168.031 43.156 245.391 20.719 320.656 37.312C342.219 42.094 355.828 63.469 351.047 85.031C346.281 106.594 325.047 120.062 303.344 115.437C254.937 104.625 205.187 119.187 170.187 154.187C163.432 160.936 157.447 168.248 152.242 176H280C297.672 176 312 190.312 312 208S297.672 240 280 240H129.562C128.973 245.324 128 250.566 128 256S128.973 266.676 129.562 272H280C297.672 272 312 286.312 312 304S297.672 336 280 336H152.234C157.438 343.752 163.42 351.064 170.172 357.812C205.156 392.812 254.891 407.344 303.344 396.562C324.844 391.906 346.281 405.406 351.047 426.969Z" })
  }
));
EuroSignSolid.displayName = "EuroSignSolid";
var EuroSign_default = EuroSignSolid;
