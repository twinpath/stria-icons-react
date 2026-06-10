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
var Campground_exports = {};
__export(Campground_exports, {
  default: () => Campground_default
});
module.exports = __toCommonJS(Campground_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CampgroundLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M548.031 396.375L309.313 125.094L396.016 26.562C401.844 19.938 401.203 9.812 394.562 4C387.969 -1.844 377.859 -1.219 371.984 5.438L288 100.875L204.016 5.438C198.141 -1.219 188.031 -1.844 181.438 4C174.797 9.812 174.156 19.938 179.984 26.562L266.688 125.094L27.969 396.375C20.25 405.156 16 416.406 16 428.062V464C16 490.469 37.531 512 64 512H512C538.469 512 560 490.469 560 464V428.062C560 416.406 555.75 405.156 548.031 396.375ZM175.992 480L288 330.656L400.008 480H175.992ZM528 464C528 472.812 520.828 480 512 480H439.992L300.797 294.406C294.766 286.344 281.234 286.344 275.203 294.406L136.008 480H64C55.172 480 48 472.812 48 464V428.062C48 424.187 49.422 420.438 52 417.5L288 149.312L524 417.5C526.578 420.438 528 424.188 528 428.062V464Z" })
  }
));
CampgroundLight.displayName = "CampgroundLight";
var Campground_default = CampgroundLight;
