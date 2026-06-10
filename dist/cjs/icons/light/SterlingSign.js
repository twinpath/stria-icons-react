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
var SterlingSign_exports = {};
__export(SterlingSign_exports, {
  default: () => SterlingSign_default
});
module.exports = __toCommonJS(SterlingSign_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SterlingSignLight = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 320 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M320 464C320 472.844 312.844 480 304 480H16C10.469 480 5.312 477.125 2.375 472.406C-0.531 467.688 -0.781 461.797 1.688 456.844C27.916 404.414 42.693 346.527 46.398 288H16C7.156 288 0 280.844 0 272S7.156 256 16 256H48V160.297C48 89.547 105.562 32 176.281 32C199.938 32 223.156 38.422 243.406 50.594L296.219 82.281C303.812 86.828 306.281 96.656 301.719 104.234C297.156 111.859 287.312 114.25 279.781 109.719L226.969 78.031C211.656 68.859 194.125 64 176.281 64C123.188 64 80 107.203 80 160.297V256H240C248.844 256 256 263.156 256 272S248.844 288 240 288H78.582C75.336 342.975 62.969 397.469 41.094 448H304C312.844 448 320 455.156 320 464Z" })
  }
));
SterlingSignLight.displayName = "SterlingSignLight";
var SterlingSign_default = SterlingSignLight;
