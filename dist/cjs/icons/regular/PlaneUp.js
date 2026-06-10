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
var PlaneUp_exports = {};
__export(PlaneUp_exports, {
  default: () => PlaneUp_default
});
module.exports = __toCommonJS(PlaneUp_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PlaneUpRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M176 112.001V153.422L15.574 253.815C6.613 258.959 0 270.379 0 281.283V346.785C0 356.929 4.646 366.247 12.752 372.349C20.846 378.444 31.074 380.335 40.811 377.536L176 334.945V359.995L124.807 398.384C116.781 404.417 112 413.989 112 423.997V480.004C112 489.926 116.486 499.117 124.307 505.218C132.131 511.322 142.139 513.439 151.766 511.025L255.998 480.67L359.65 510.867C369.861 513.439 379.869 511.322 387.693 505.218C395.514 499.117 400 489.926 400 480.004V423.997C400 413.989 395.219 404.417 387.209 398.395L336 359.995V334.945L470.785 377.419C480.914 380.337 491.146 378.444 499.246 372.345C507.352 366.241 512 356.925 512 346.785V281.283C512 269.832 505.818 259.19 495.867 253.512L336 153.424V112.001C336 73.544 304.846 0 256 0S176 73.544 176 112.001ZM288 112.001V180.003L464 290.147V324.955L288 269.493V383.997L352 431.989V458.643L256 430.674L160 458.662V431.989L224 383.997V269.495L48 324.961V290.147L224 180.007V112.001C224 85.763 245.754 49.394 255.908 47.996C266.246 49.394 288 85.763 288 112.001Z" })
  }
));
PlaneUpRegular.displayName = "PlaneUpRegular";
var PlaneUp_default = PlaneUpRegular;
