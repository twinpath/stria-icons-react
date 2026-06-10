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
var CupTogo_exports = {};
__export(CupTogo_exports, {
  default: () => CupTogo_default
});
module.exports = __toCommonJS(CupTogo_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const CupTogoRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 448 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M424 80H414.211C413.887 79.096 413.91 78.146 413.469 77.266L381.469 13.266C377.406 5.141 369.094 0 360 0H88C78.906 0 70.594 5.141 66.531 13.266L34.531 77.266C34.09 78.146 34.113 79.096 33.789 80H24C10.746 80 0 90.744 0 104C0 117.254 10.746 128 24 128H424C437.254 128 448 117.254 448 104C448 90.744 437.254 80 424 80ZM86.838 80L102.844 48H345.156L361.162 80H86.838ZM387.75 160.297C374.562 158.297 362.375 167.156 360.281 180.25L353.377 224H94.623L87.719 180.25C85.656 167.156 73.344 158.281 60.25 160.297C47.156 162.359 38.219 174.656 40.281 187.75L88.281 491.75C90.125 503.406 100.188 512 112 512H336C347.812 512 357.875 503.406 359.719 491.75L407.719 187.75C409.781 174.656 400.844 162.359 387.75 160.297ZM315.5 464H132.5L119.875 384H328.125L315.5 464Z" })
  }
));
CupTogoRegular.displayName = "CupTogoRegular";
var CupTogo_default = CupTogoRegular;
