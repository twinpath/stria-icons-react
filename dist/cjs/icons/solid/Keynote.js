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
var Keynote_exports = {};
__export(Keynote_exports, {
  default: () => Keynote_default
});
module.exports = __toCommonJS(Keynote_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const KeynoteSolid = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M336 448H288V384H224V448H176C149.49 448 128 469.49 128 496V496C128 504.837 135.163 512 144 512H368C376.837 512 384 504.837 384 496V496C384 469.49 362.51 448 336 448ZM508.625 281.25L456.875 177.75C451.375 166.875 440.375 160 428.25 160H144C144 122.375 170.25 91 206.625 82.5C215.25 90.75 227 96 240 96H304C330.5 96 352 74.5 352 48S330.5 0 304 0H240C217.625 0 199 15.375 193.75 36C137.75 49.75 96 99.875 96 160H83.75C71.625 160 60.625 166.875 55.125 177.75L3.375 281.25C1.125 285.625 0 290.625 0 295.5V320C0 337.625 14.375 352 32 352H480C497.625 352 512 337.625 512 320V295.5C512 290.625 510.875 285.75 508.625 281.25Z" })
  }
));
KeynoteSolid.displayName = "KeynoteSolid";
var Keynote_default = KeynoteSolid;
