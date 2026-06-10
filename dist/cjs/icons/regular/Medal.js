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
var Medal_exports = {};
__export(Medal_exports, {
  default: () => Medal_default
});
module.exports = __toCommonJS(Medal_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const MedalRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M342.115 289.625L289.74 282L266.24 234.5C264.24 230.25 260.115 228.125 255.99 228.125S247.865 230.25 245.74 234.5L222.24 282L169.866 289.625C160.491 291 156.616 302.625 163.491 309.25L201.365 346.25L192.49 398.5C191.115 405.875 197.115 411.875 203.74 411.875C205.49 411.875 207.365 411.5 209.115 410.5L255.99 385.875L302.865 410.5C304.615 411.5 306.49 411.875 308.24 411.875C314.865 411.875 320.865 405.875 319.49 398.375L310.615 346.25L348.49 309.25C355.365 302.625 351.615 291 342.115 289.625ZM256 144C154.379 144 72.001 226.379 72.001 328S154.379 512 256 512S439.999 429.621 439.999 328S357.621 144 256 144ZM256 464C181.01 464 120 402.992 120 328S181.01 192 256 192S392 253.008 392 328S330.99 464 256 464ZM135.852 148.512L68.844 48H138.063L182.19 125.219C197.68 119.578 213.924 115.547 230.838 113.586L172.844 12.094C168.563 4.625 160.625 0 152 0H24.001C15.157 0 7.032 4.875 2.845 12.688C-1.343 20.469 -0.874 29.938 4.032 37.312L99.075 179.875C110.155 168.141 122.401 157.531 135.852 148.512ZM509.155 12.688C504.968 4.875 496.843 0 487.999 0H360C351.375 0 343.437 4.625 339.156 12.094L281.162 113.586C298.076 115.547 314.32 119.578 329.81 125.219L373.937 48H443.156L376.148 148.512C389.599 157.531 401.845 168.141 412.925 179.875L507.968 37.312C512.874 29.938 513.343 20.469 509.155 12.688Z" })
  }
));
MedalRegular.displayName = "MedalRegular";
var Medal_default = MedalRegular;
