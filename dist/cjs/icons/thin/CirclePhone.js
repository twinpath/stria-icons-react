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
var CirclePhone_exports = {};
__export(CirclePhone_exports, {
  default: () => CirclePhone_default
});
module.exports = __toCommonJS(CirclePhone_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CirclePhoneThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M256 16C123.451 16 16 123.451 16 256S123.451 496 256 496S496 388.549 496 256S388.549 16 256 16ZM256 480C132.486 480 32 379.514 32 256S132.486 32 256 32S480 132.486 480 256S379.514 480 256 480ZM377.703 296.266L323.484 273.031C313.891 268.891 302.438 271.625 295.875 279.797L277.953 301.688C249.422 286.297 225.734 262.609 210.359 234.109L232.25 216.172C240.344 209.547 243.141 198.234 239.047 188.594L215.75 134.266C211.156 123.766 199.797 118.125 188.688 120.609L138.328 132.234C127.531 134.688 120 144.156 120 155.25C120 285.797 226.203 392 356.75 392C367.828 392 377.297 384.469 379.781 373.688L391.406 323.297C393.969 312.172 388.219 300.812 377.703 296.266ZM364.188 370.094C363.391 373.578 360.328 376 356.75 376C235.031 376 136 276.969 136 155.25C136 151.672 138.422 148.625 141.906 147.828L192.297 136.203C192.859 136.062 193.438 136 194.016 136C197.016 136 199.828 137.781 201.062 140.625L224.328 194.875C225.641 197.984 224.734 201.641 222.109 203.781L190.312 229.844L193.094 235.547C210.797 271.609 240.422 301.219 276.516 318.953L282.219 321.75L308.297 289.875C310.391 287.266 314.047 286.344 317.156 287.734L371.375 310.969C374.781 312.437 376.641 316.109 375.813 319.703L364.188 370.094Z" })
  }
));
CirclePhoneThin.displayName = "CirclePhoneThin";
var CirclePhone_default = CirclePhoneThin;
