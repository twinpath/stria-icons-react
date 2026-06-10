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
var Popcorn_exports = {};
__export(Popcorn_exports, {
  default: () => Popcorn_default
});
module.exports = __toCommonJS(Popcorn_exports);
var import_jsx_runtime = require("react/jsx-runtime");
var import_react = __toESM(require("react"), 1);
const PopcornRegular = (0, import_react.forwardRef)(({ size = 24, color = "currentColor", className, ...props }, ref) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", { d: "M427.028 192.012H20.009C9.6 192.012 1.962 201.791 4.485 211.891L73.417 487.756C76.977 502.002 89.731 512 104.417 512C158.962 511.998 288.315 511.994 342.745 511.99C357.401 511.988 370.052 502.012 373.604 487.793L442.552 211.891C445.075 201.793 437.436 192.012 427.028 192.012ZM116.956 464L60.987 240.012H98.249L140.245 463.998L116.956 464ZM207.518 463.996H172.79L130.794 240.012H207.518V463.996ZM239.518 463.994V240.012H316.243L274.247 463.992L239.518 463.994ZM330.077 463.99H306.792L348.788 240.012H386.048L330.077 463.99ZM411.141 138.852C404.141 126.977 391.766 119.225 378.016 118.1C384.516 106.35 384.391 92.223 377.766 80.598C368.641 64.598 349.766 56.971 332.141 60.471C331.891 43.846 320.641 28.469 303.141 22.969C289.891 18.719 275.266 21.094 264.016 29.469C264.016 28.719 263.766 28.094 263.391 27.469C256.266 6.344 232.266 -4.781 210.016 1.969C197.016 5.969 186.766 16.219 182.641 29.219C171.516 21.094 157.016 18.844 143.891 23.094C126.391 28.469 115.266 43.846 114.891 60.471C97.266 56.971 78.391 64.598 69.266 80.598C62.516 92.098 62.391 106.475 69.016 118.1C55.516 119.35 42.641 126.727 35.891 138.852C32.016 145.602 31.141 152.852 31.641 159.979H415.391C415.891 152.852 415.016 145.602 411.141 138.852Z" })
  }
));
PopcornRegular.displayName = "PopcornRegular";
var Popcorn_default = PopcornRegular;
