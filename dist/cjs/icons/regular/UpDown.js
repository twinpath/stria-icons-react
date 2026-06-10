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
var UpDown_exports = {};
__export(UpDown_exports, {
  default: () => UpDown_default
});
module.exports = __toCommonJS(UpDown_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const UpDownRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 256 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M254.001 366.406C250.188 357.656 241.548 352 232.001 352H151.999V160H231.999C241.546 160 250.186 154.344 253.999 145.594C257.811 136.844 256.077 126.656 249.593 119.672L145.593 7.672C141.046 2.781 134.522 0.336 127.999 0.336S114.952 2.781 110.405 7.672L6.405 119.672C-0.079 126.656 -1.814 136.844 1.999 145.594C5.811 154.344 14.452 160 23.999 160H103.999V352H24.001C14.454 352 5.813 357.656 2.001 366.406S-0.077 385.344 6.407 392.328L110.407 504.328C114.954 509.219 121.477 511.664 128.001 511.664S141.048 509.219 145.595 504.328L249.595 392.328C256.079 385.344 257.813 375.156 254.001 366.406Z" })
  }
));
UpDownRegular.displayName = "UpDownRegular";
var UpDown_default = UpDownRegular;
