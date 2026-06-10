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
var Smog_exports = {};
__export(Smog_exports, {
  default: () => Smog_default
});
module.exports = __toCommonJS(Smog_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const SmogThin = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
  "svg",
  {
    ref,
    xmlns: "http://www.w3.org/2000/svg",
    width: size,
    height: size,
    viewBox: "0 0 640 512",
    fill: color,
    className,
    ...props,
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M148.406 304H297.594C321.625 324.656 351.625 336 382.406 336C413.531 336 442.781 324.938 467.188 304H522.812C587.438 304 640 250.156 640 184S587.438 64 522.812 64C507.469 64 492.312 67.25 477.625 73.688C450.781 28.031 403 0 351.188 0C313.156 0 277.469 14.625 249.812 41.344C222.156 14.625 186.438 0 148.406 0C66.562 0 0 68.188 0 152S66.562 304 148.406 304ZM148.406 16C184.688 16 218.625 31 243.969 58.188C246.969 61.438 252.656 61.438 255.656 58.188C281 31 314.906 16 351.188 16C399.531 16 444 43.531 467.188 87.844C469.25 91.75 474 93.219 477.938 91.25C492.469 83.781 507.594 80 522.812 80C578.594 80 624 126.656 624 184S578.594 288 522.812 288H464.188C462.219 288 460.312 288.719 458.844 290.031C436.969 309.625 410.531 320 382.406 320C354.562 320 327.438 309.375 305.969 290.062C304.5 288.719 302.594 288 300.625 288H148.406C75.406 288 16 227 16 152S75.406 16 148.406 16ZM568 496H216C211.594 496 208 499.594 208 504S211.594 512 216 512H568C572.406 512 576 508.406 576 504S572.406 496 568 496ZM632 400H72C67.594 400 64 403.594 64 408S67.594 416 72 416H632C636.406 416 640 412.406 640 408S636.406 400 632 400ZM152 496H8C3.594 496 0 499.594 0 504S3.594 512 8 512H152C156.406 512 160 508.406 160 504S156.406 496 152 496Z" })
  }
));
SmogThin.displayName = "SmogThin";
var Smog_default = SmogThin;
